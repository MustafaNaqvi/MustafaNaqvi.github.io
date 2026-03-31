import { useEffect, useRef } from 'react'

// Game dev themed icons/symbols
const GAME_SYMBOLS = ['▶', '■', '◆', '●', '★', '♦', '⬡', '⊕', '⊗', '◉']
const CODE_SNIPPETS = [
  'void Start()',
  'Update()',
  'player.Move()',
  'Instantiate()',
  'OnCollision()',
  'SendMessage()',
  'async Task',
  'yield return',
  'transform.position',
  'GetComponent<>()',
  'Vector3.Lerp()',
  'Quaternion',
  'deltaTime',
  'FixedUpdate()',
  'Awake()',
  'Destroy(obj)',
  'Physics.Raycast',
  'Input.GetAxis',
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let elements = []
    let time = 0

    const colors = {
      gold: '#dcdcaa',
      blue: '#569cd6',
      teal: '#4ec9b0',
      green: '#6a9955',
      orange: '#ce9178',
      purple: '#c586c0',
    }

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
      initElements()
    }

    const initElements = () => {
      elements = []
      
      // Floating code snippets
      for (let i = 0; i < 15; i++) {
        elements.push({
          type: 'code',
          text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.15 + 0.05,
          color: Object.values(colors)[Math.floor(Math.random() * 6)],
          size: Math.random() * 4 + 10,
        })
      }

      // Floating game symbols
      for (let i = 0; i < 20; i++) {
        elements.push({
          type: 'symbol',
          text: GAME_SYMBOLS[Math.floor(Math.random() * GAME_SYMBOLS.length)],
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.2 + 0.1,
          color: Object.values(colors)[Math.floor(Math.random() * 6)],
          size: Math.random() * 16 + 12,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        })
      }

      // Pixel blocks (like game assets)
      for (let i = 0; i < 12; i++) {
        elements.push({
          type: 'pixel',
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 20 + 10,
          color: Object.values(colors)[Math.floor(Math.random() * 6)],
          opacity: Math.random() * 0.1 + 0.05,
        })
      }

      // Connection nodes (like Unity node graph)
      for (let i = 0; i < 25; i++) {
        elements.push({
          type: 'node',
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 4 + 2,
          color: Object.values(colors)[Math.floor(Math.random() * 6)],
        })
      }
    }

    const draw = () => {
      time += 0.01
      ctx.fillStyle = '#1e1e1e'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw subtle hex grid (like game dev grids)
      ctx.strokeStyle = 'rgba(69, 69, 69, 0.08)'
      ctx.lineWidth = 1
      const hexSize = 40
      for (let row = 0; row < canvas.height / hexSize + 2; row++) {
        for (let col = 0; col < canvas.width / hexSize + 2; col++) {
          const x = col * hexSize * 1.5
          const y = row * hexSize * 1.732 + (col % 2 ? hexSize * 0.866 : 0)
          drawHexagon(ctx, x, y, hexSize * 0.5)
        }
      }

      // Draw and update elements
      const nodes = elements.filter(e => e.type === 'node')
      
      elements.forEach((el) => {
        el.x += el.vx
        el.y += el.vy

        // Wrap around edges
        if (el.x < -50) el.x = canvas.width + 50
        if (el.x > canvas.width + 50) el.x = -50
        if (el.y < -50) el.y = canvas.height + 50
        if (el.y > canvas.height + 50) el.y = -50

        if (el.type === 'code') {
          ctx.font = `${el.size}px 'JetBrains Mono', Consolas, monospace`
          ctx.fillStyle = el.color
          ctx.globalAlpha = el.opacity
          ctx.fillText(el.text, el.x, el.y)
        } else if (el.type === 'symbol') {
          el.rotation += el.rotationSpeed
          ctx.save()
          ctx.translate(el.x, el.y)
          ctx.rotate(el.rotation)
          ctx.font = `${el.size}px Arial`
          ctx.fillStyle = el.color
          ctx.globalAlpha = el.opacity
          ctx.textAlign = 'center'
          ctx.fillText(el.text, 0, 0)
          ctx.restore()
        } else if (el.type === 'pixel') {
          ctx.fillStyle = el.color
          ctx.globalAlpha = el.opacity
          // Draw pixelated block
          const s = el.size / 4
          for (let px = 0; px < 4; px++) {
            for (let py = 0; py < 4; py++) {
              if (Math.random() > 0.3) {
                ctx.fillRect(el.x + px * s, el.y + py * s, s - 1, s - 1)
              }
            }
          }
        } else if (el.type === 'node') {
          ctx.beginPath()
          ctx.arc(el.x, el.y, el.size, 0, Math.PI * 2)
          ctx.fillStyle = el.color
          ctx.globalAlpha = 0.4
          ctx.fill()
          
          // Draw connections between nearby nodes
          nodes.forEach((other) => {
            if (other === el) return
            const dx = el.x - other.x
            const dy = el.y - other.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 150) {
              ctx.beginPath()
              ctx.moveTo(el.x, el.y)
              ctx.lineTo(other.x, other.y)
              ctx.strokeStyle = el.color
              ctx.globalAlpha = (1 - dist / 150) * 0.15
              ctx.lineWidth = 1
              ctx.stroke()
            }
          })
        }
        ctx.globalAlpha = 1
      })

      // Draw pulsing center glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, 300
      )
      const pulse = Math.sin(time) * 0.02 + 0.06
      gradient.addColorStop(0, `rgba(220, 220, 170, ${pulse})`)
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(draw)
    }

    const drawHexagon = (ctx, x, y, size) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(hx, hy)
        else ctx.lineTo(hx, hy)
      }
      ctx.closePath()
      ctx.stroke()
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background Canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      
      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 60% 40% at 50% 50%, rgba(220, 220, 170, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, var(--bg) 100%)
        `,
        zIndex: 1,
      }} />
      
      {/* Floating orbs */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(86, 156, 214, 0.15) 0%, transparent 70%)',
        top: '10%',
        left: '10%',
        filter: 'blur(60px)',
        zIndex: 1,
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220, 220, 170, 0.12) 0%, transparent 70%)',
        bottom: '20%',
        right: '15%',
        filter: 'blur(50px)',
        zIndex: 1,
        animation: 'float 10s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(106, 153, 85, 0.1) 0%, transparent 70%)',
        top: '60%',
        left: '20%',
        filter: 'blur(40px)',
        zIndex: 1,
        animation: 'float 12s ease-in-out infinite',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '120px 24px 80px' }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: 'var(--p)',
          borderRadius: '20px',
          marginBottom: '24px',
          border: '1px solid var(--b2)',
        }}>
          <span className="code-comment">// game_developer</span>
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 72px)',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '16px',
          letterSpacing: '-1px',
          lineHeight: 1.1,
        }}>
          Mustafa <span style={{ color: 'var(--gold)' }}>Naqvi</span>
        </h1>

        {/* Role */}
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: 'clamp(14px, 2vw, 18px)',
          color: 'var(--td)',
          marginBottom: '32px',
        }}>
          Game Developer · Backend Engineer · 6+ Years
        </p>

        {/* Description */}
        <p style={{
          maxWidth: '600px',
          margin: '0 auto 40px',
          fontSize: '17px',
          color: 'var(--td)',
          lineHeight: 1.7,
        }}>
          Building <span style={{ color: 'var(--green-bright)' }}>real-time multiplayer systems</span> and 
          scalable backends. <span style={{ color: 'var(--gold)' }}>100M+ combined downloads</span> shipped.
          From custom game servers to production APIs.
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}>
          {[
            { value: '6+', label: 'Years Experience' },
            { value: '100M+', label: 'Game Downloads' },
            { value: '<120ms', label: 'Server Latency' },
            { value: '40+', label: 'Concurrent Players' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '28px', fontWeight: 700, color: 'var(--gold)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--tm)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--tm)' }}>scroll</span>
        <div style={{
          width: '20px',
          height: '32px',
          border: '2px solid var(--b2)',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px',
        }}>
          <div className="animate-float" style={{
            width: '4px',
            height: '8px',
            background: 'var(--gold)',
            borderRadius: '2px',
          }} />
        </div>
      </div>
    </section>
  )
}
