import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Atmospheric low-poly night forest behind the hero.
 *
 * Scene graph
 *   Scene (fog -> page background, so the canvas melts into the page)
 *   ├─ HemisphereLight   cool sky / warm ground fill
 *   ├─ DirectionalLight  "moon" key light from behind the ridge
 *   ├─ Terrain           displaced plane, flat-shaded (one draw call)
 *   ├─ Trees             InstancedMesh, trunk + 2 canopy tiers (3 draw calls)
 *   ├─ Fireflies         Points with additive glow, drift toward the lantern
 *   └─ Lantern           amber PointLight that follows the cursor's hit on the terrain
 *
 * Interaction is read from window pointer events, so the canvas itself keeps
 * pointer-events: none and never blocks text selection or the hero's links.
 */

const BG = 0x09090b
const AMBER = 0xf59e0b

// Small deterministic value noise, so the terrain is the same on every load.
function makeNoise(seed = 7) {
  const hash = (x, y) => {
    const s = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453
    return s - Math.floor(s)
  }
  const smooth = (t) => t * t * (3 - 2 * t)
  const noise = (x, y) => {
    const xi = Math.floor(x)
    const yi = Math.floor(y)
    const xf = smooth(x - xi)
    const yf = smooth(y - yi)
    const a = hash(xi, yi)
    const b = hash(xi + 1, yi)
    const c = hash(xi, yi + 1)
    const d = hash(xi + 1, yi + 1)
    return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf
  }
  // Three octaves of fractal noise
  return (x, y) => noise(x, y) * 0.6 + noise(x * 2.1, y * 2.1) * 0.28 + noise(x * 4.3, y * 4.3) * 0.12
}

function seededRandom(seed = 42) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export default function ThreeHeroCanvas({ className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const isSmall = window.matchMedia('(max-width: 767px)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSmall,
        alpha: true,
        powerPreference: 'low-power',
      })
    } catch {
      // No WebGL: leave the static poster backdrop in place.
      return undefined
    }

    renderer.setPixelRatio(isSmall ? 1 : Math.min(window.devicePixelRatio, 1.75))
    // Opaque page-coloured clear: once faded in, the scene fully replaces the CSS grid fallback
    renderer.setClearColor(BG, 1)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    const canvas = renderer.domElement
    canvas.setAttribute('aria-hidden', 'true')
    canvas.style.display = 'block'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    container.appendChild(canvas)

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(BG, 0.03)

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 120)
    const cameraBase = new THREE.Vector3(0, 3.2, 14)
    camera.position.copy(cameraBase)

    // Lights
    scene.add(new THREE.HemisphereLight(0x7b8fb8, 0x2a1a08, 0.9))
    const moon = new THREE.DirectionalLight(0xc8d4ff, 1.8)
    moon.position.set(-8, 14, -18)
    scene.add(moon)
    const rim = new THREE.DirectionalLight(AMBER, 0.35)
    rim.position.set(10, 4, 6)
    scene.add(rim)

    // Moon: an unlit disc with a soft halo, low over the ridge
    const moonGroup = new THREE.Group()
    const moonGeo = new THREE.CircleGeometry(1.5, 40)
    const moonMat = new THREE.MeshBasicMaterial({ color: 0xe9eefc, fog: false })
    moonGroup.add(new THREE.Mesh(moonGeo, moonMat))
    moonGroup.position.set(24, 10.5, -40)
    scene.add(moonGroup)

    // Terrain
    const noise = makeNoise()
    const heightAt = (x, z) => {
      // A shallow valley down the middle keeps the area behind the text calm.
      const valley = Math.min(1, Math.abs(x) / 9)
      return (noise(x * 0.12 + 10, z * 0.12 + 10) - 0.4) * 5.5 * (0.35 + valley)
    }
    const segs = isSmall ? 48 : 90
    const terrainGeo = new THREE.PlaneGeometry(80, 70, segs, segs)
    terrainGeo.rotateX(-Math.PI / 2)
    const pos = terrainGeo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, heightAt(pos.getX(i), pos.getZ(i)))
    }
    terrainGeo.computeVertexNormals()
    const terrainMat = new THREE.MeshStandardMaterial({ color: 0x262c22, roughness: 1, flatShading: true })
    const terrain = new THREE.Mesh(terrainGeo, terrainMat)
    terrain.position.z = -18
    scene.add(terrain)

    // Trees: one InstancedMesh per part
    const rand = seededRandom()
    const treeCount = isSmall ? 140 : 320
    const trunkGeo = new THREE.CylinderGeometry(0.06, 0.1, 0.8, 5)
    trunkGeo.translate(0, 0.4, 0)
    const lowerGeo = new THREE.ConeGeometry(0.75, 1.6, 6)
    lowerGeo.translate(0, 1.4, 0)
    const upperGeo = new THREE.ConeGeometry(0.5, 1.3, 6)
    upperGeo.translate(0, 2.2, 0)
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x2b2118, roughness: 1, flatShading: true })
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x1d3326, roughness: 0.95, flatShading: true })
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treeCount)
    const lowers = new THREE.InstancedMesh(lowerGeo, leafMat, treeCount)
    const uppers = new THREE.InstancedMesh(upperGeo, leafMat, treeCount)
    const m = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const s = new THREE.Vector3()
    const p = new THREE.Vector3()
    const up = new THREE.Vector3(0, 1, 0)
    const treeData = []
    let placed = 0
    for (let tries = 0; placed < treeCount && tries < treeCount * 6; tries++) {
      const x = (rand() - 0.5) * 70
      // Mid-ground to horizon only: nothing close enough to read as a black silhouette
      const z = -46 + rand() * 44
      // Keep a clearing in the foreground centre
      if (Math.abs(x) < 3.5 && z > -10) continue
      const scale = 0.7 + rand() * 1.1
      p.set(x, heightAt(x, z + 18), z)
      q.setFromAxisAngle(up, rand() * Math.PI * 2)
      s.set(scale, scale * (0.85 + rand() * 0.4), scale)
      m.compose(p, q, s)
      trunks.setMatrixAt(placed, m)
      lowers.setMatrixAt(placed, m)
      uppers.setMatrixAt(placed, m)
      treeData.push({ p: p.clone(), q: q.clone(), s: s.clone(), phase: rand() * Math.PI * 2 })
      placed++
    }
    for (const mesh of [trunks, lowers, uppers]) {
      mesh.count = placed
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
      scene.add(mesh)
    }

    // Lantern: amber light that follows the cursor across the terrain
    const lantern = new THREE.PointLight(AMBER, isSmall ? 18 : 26, 9, 1.6)
    lantern.position.set(0, 1.2, 4)
    scene.add(lantern)
    const lanternTarget = lantern.position.clone()

    // Fireflies: round, soft sprites from a tiny generated texture
    const glowCanvas = document.createElement('canvas')
    glowCanvas.width = glowCanvas.height = 32
    const g = glowCanvas.getContext('2d')
    const grad = g.createRadialGradient(16, 16, 0, 16, 16, 16)
    grad.addColorStop(0, 'rgba(255,214,140,1)')
    grad.addColorStop(0.35, 'rgba(245,158,11,0.55)')
    grad.addColorStop(1, 'rgba(245,158,11,0)')
    g.fillStyle = grad
    g.fillRect(0, 0, 32, 32)
    const glowTex = new THREE.CanvasTexture(glowCanvas)
    glowTex.colorSpace = THREE.SRGBColorSpace

    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: glowTex, color: 0xffffff, transparent: true, opacity: 0.3, depthWrite: false, fog: false, blending: THREE.AdditiveBlending })
    )
    halo.scale.setScalar(16)
    // Sit behind the disc so the two never z-fight
    halo.position.z = -1
    moonGroup.add(halo)

    const flyCount = isSmall ? 40 : 90
    const flyGeo = new THREE.BufferGeometry()
    const flyPos = new Float32Array(flyCount * 3)
    const flies = []
    for (let i = 0; i < flyCount; i++) {
      const fx = (rand() - 0.5) * 22
      const fz = -2 - rand() * 18
      const fy = heightAt(fx, fz + 18) + 0.4 + rand() * 2.2
      flies.push({ home: new THREE.Vector3(fx, fy, fz), phase: rand() * 100, speed: 0.3 + rand() * 0.6 })
      flyPos.set([fx, fy, fz], i * 3)
    }
    flyGeo.setAttribute('position', new THREE.BufferAttribute(flyPos, 3))
    const flyMat = new THREE.PointsMaterial({
      size: isSmall ? 0.32 : 0.26,
      map: glowTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    const fireflies = new THREE.Points(flyGeo, flyMat)
    scene.add(fireflies)

    // Pointer: read from window so the canvas never intercepts events
    const pointer = new THREE.Vector2(0, 0)
    const smoothPointer = new THREE.Vector2(0, 0)
    const raycaster = new THREE.Raycaster()
    let pointerActive = false
    const onPointerMove = (e) => {
      const r = container.getBoundingClientRect()
      if (e.clientY < r.top || e.clientY > r.bottom) return
      pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
      pointerActive = true
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    // Sizing follows the container, not the window
    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      // Pull back a little on tall, narrow screens so the ridge stays in frame
      camera.fov = camera.aspect < 1 ? 55 : 42
      // Portrait screens put the name where the moon would sit, so it stays off there
      moonGroup.visible = camera.aspect >= 1
      camera.updateProjectionMatrix()
      if (reduceMotion || !running) renderer.render(scene, camera)
    }
    const ro = new ResizeObserver(resize)

    // Animation loop, paused when the hero is off screen or the tab is hidden
    const clock = new THREE.Clock()
    let running = false
    let visible = true
    let rafId = 0
    const lookTarget = new THREE.Vector3(0, 1.4, -6)
    const hit = new THREE.Vector3()
    // Scratch objects reused every frame (no per-frame allocations)
    const windAxis = new THREE.Vector3(0, 0, 1)
    const leanQ = new THREE.Quaternion()

    const update = (t, dt) => {
      // Camera: slow idle sway plus a gentle parallax toward the cursor
      smoothPointer.lerp(pointer, 1 - Math.exp(-dt * 3))
      camera.position.set(
        cameraBase.x + smoothPointer.x * 1.6 + Math.sin(t * 0.15) * 0.4,
        cameraBase.y + smoothPointer.y * 0.6 + Math.sin(t * 0.22) * 0.12,
        cameraBase.z
      )
      camera.lookAt(lookTarget)
      moonGroup.lookAt(camera.position)

      // Lantern follows where the cursor ray meets the terrain
      if (pointerActive) {
        raycaster.setFromCamera(smoothPointer, camera)
        const hits = raycaster.intersectObject(terrain, false)
        if (hits.length) {
          hit.copy(hits[0].point)
          lanternTarget.set(hit.x, hit.y + 1.1, hit.z)
        }
      }
      lantern.position.lerp(lanternTarget, 1 - Math.exp(-dt * 4))
      lantern.intensity = (isSmall ? 18 : 26) * (0.92 + Math.sin(t * 7.3) * 0.04 + Math.sin(t * 3.1) * 0.04)

      // Fireflies wander around home and are drawn toward the lantern
      const arr = flyGeo.attributes.position.array
      for (let i = 0; i < flyCount; i++) {
        const f = flies[i]
        const k = t * f.speed + f.phase
        let x = f.home.x + Math.sin(k) * 0.9
        let y = f.home.y + Math.sin(k * 1.7) * 0.35
        let z = f.home.z + Math.cos(k * 0.8) * 0.9
        const dx = lantern.position.x - x
        const dz = lantern.position.z - z
        const d2 = dx * dx + dz * dz
        if (d2 < 30) {
          const pull = (1 - d2 / 30) * 0.45
          x += dx * pull
          z += dz * pull
          y += (lantern.position.y - y) * pull * 0.5
        }
        arr[i * 3] = x
        arr[i * 3 + 1] = y
        arr[i * 3 + 2] = z
      }
      flyGeo.attributes.position.needsUpdate = true
      flyMat.opacity = 0.75 + Math.sin(t * 2) * 0.2

      // Wind: sway canopies on desktop only (cheap, but skipped on phones)
      if (!isSmall) {
        for (let i = 0; i < placed; i++) {
          const tree = treeData[i]
          const lean = Math.sin(t * 0.9 + tree.phase + tree.p.x * 0.2) * 0.035
          leanQ.setFromAxisAngle(windAxis, lean)
          q.copy(tree.q).multiply(leanQ)
          m.compose(tree.p, q, tree.s)
          lowers.setMatrixAt(i, m)
          uppers.setMatrixAt(i, m)
        }
        lowers.instanceMatrix.needsUpdate = true
        uppers.instanceMatrix.needsUpdate = true
      }
    }

    const frame = () => {
      rafId = requestAnimationFrame(frame)
      const dt = Math.min(clock.getDelta(), 0.05)
      update(clock.elapsedTime, dt)
      renderer.render(scene, camera)
    }

    const start = () => {
      if (running || reduceMotion || !visible || document.hidden) return
      running = true
      clock.getDelta()
      rafId = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(rafId)
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })
    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)

    ro.observe(container)
    io.observe(container)
    resize()
    if (reduceMotion) {
      // One still, cinematic frame
      update(4, 1)
      renderer.render(scene, camera)
    } else {
      start()
    }
    // Fade in once the first frame exists, so there's no flash of empty canvas
    requestAnimationFrame(() => container.setAttribute('data-ready', 'true'))

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) [].concat(obj.material).forEach((mat) => mat.dispose())
      })
      glowTex.dispose()
      renderer.dispose()
      renderer.forceContextLoss()
      canvas.remove()
      container.removeAttribute('data-ready')
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none opacity-0 transition-opacity duration-1000 ease-out data-[ready=true]:opacity-100 ${className}`}
    />
  )
}
