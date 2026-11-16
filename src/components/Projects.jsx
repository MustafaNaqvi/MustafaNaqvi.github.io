import YouTubeFacade from './YouTubeFacade'
import LinkBadge from './LinkBadge'
import SpotlightCard from './SpotlightCard'
import { featured, otherGames } from '../data/projects'

const DOWNLOAD_RANK = { '100M+': 3, '10M+': 2, '1M+': 1 }
// Download tiers that earn a 2x1 vault cell
const WIDE_TIERS = new Set(['100M+', '10M+'])

// Highest-download titles first; titles without a published count keep their original order.
const vaultGames = otherGames
  .map((game, i) => ({ game, i }))
  .sort((a, b) => (DOWNLOAD_RANK[b.game.downloads] || 0) - (DOWNLOAD_RANK[a.game.downloads] || 0) || a.i - b.i)
  .map(({ game }) => game)

// Background texture for each cell: a fixed slice of the icon pool, so it never reshuffles.
const iconPool = otherGames.filter((g) => g.icon).map((g) => g.icon)
const patternFor = (index) => Array.from({ length: 12 }, (_, k) => iconPool[(index * 5 + k) % iconPool.length])

// Fallback game icon for titles without an image
function GameIcon({ name, className }) {
  return (
    <div
      className={`${className} flex flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-zinc-800 font-bold text-zinc-300`}
      aria-hidden="true"
    >
      {name.charAt(0).toUpperCase()}
    </div>
  )
}

function cellLabel(game) {
  return [game.name, game.type, game.downloads && `${game.downloads} downloads`, game.platform].filter(Boolean).join(', ')
}

function IconTexture({ index }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 grid grid-cols-4 gap-2 p-2 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.14]"
      style={{ transform: 'rotate(-5deg) scale(1.2)' }}
      aria-hidden="true"
    >
      {patternFor(index).map((iconUrl, i) => (
        <img key={i} src={iconUrl} alt="" width="64" height="64" loading="lazy" decoding="async" className="aspect-square w-full rounded-md object-cover grayscale" />
      ))}
    </div>
  )
}

// 1x1 cell: icon on top, title and meta at the bottom.
function BentoCell({ game, index }) {
  return (
    <a
      href={game.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={cellLabel(game)}
      className="group relative col-span-1 flex min-h-[168px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 p-5 transition-colors duration-300 hover:border-white/20"
    >
      <IconTexture index={index} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-zinc-900/20" />

      <div className="relative z-10">
        {game.icon ? (
          <img
            src={game.icon}
            alt=""
            width="48"
            height="48"
            loading="lazy"
            decoding="async"
            className="h-12 w-12 rounded-xl border border-white/10 object-cover shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out group-hover:scale-105"
          />
        ) : (
          <GameIcon name={game.name} className="h-12 w-12 text-lg" />
        )}
      </div>

      <div className="relative z-10 mt-6">
        <h3 className="mb-1 text-lg font-bold leading-tight text-white transition-colors group-hover:text-amber-400">{game.name}</h3>
        <p className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-400">
          <span className="uppercase tracking-wider">{game.type}</span>
          {[game.downloads, game.platform].filter(Boolean).map((m) => (
            <span key={m} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-zinc-600" aria-hidden="true" />
              <span className={m === game.downloads ? 'font-semibold text-zinc-200' : ''}>{m}</span>
            </span>
          ))}
        </p>
      </div>
    </a>
  )
}

// 2x1 cell for the 10M+ / 100M+ titles: icon, title and download count in one balanced row.
function WideCell({ game, index }) {
  return (
    <a
      href={game.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={cellLabel(game)}
      className="group relative col-span-2 flex min-h-[168px] items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-5 transition-colors duration-300 hover:border-amber-500/40 sm:gap-6 sm:p-6"
    >
      <IconTexture index={index} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-900/30 via-zinc-900/75 to-zinc-900" />

      {/* Icon with a soft glow taken from the icon itself */}
      <div className="relative z-10 flex-shrink-0">
        <img
          src={game.icon}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-125 rounded-2xl object-cover opacity-50 blur-xl saturate-150 transition-opacity duration-500 group-hover:opacity-70"
        />
        <span className="absolute -inset-3 rounded-full bg-amber-500/10 blur-2xl" aria-hidden="true" />
        <img
          src={game.icon}
          alt=""
          width="80"
          height="80"
          loading="lazy"
          decoding="async"
          className="relative h-16 w-16 rounded-2xl border border-white/15 object-cover shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out group-hover:scale-105 sm:h-20 sm:w-20"
        />
      </div>

      <div className="relative z-10 min-w-0 flex-1">
        <h3 className="mb-1 text-lg font-bold leading-tight text-white transition-colors group-hover:text-amber-400 sm:text-xl">
          {game.name}
        </h3>
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">{game.type}</p>
      </div>

      <div className="relative z-10 flex-shrink-0 text-right">
        <div className="text-2xl font-bold tabular-nums tracking-tight text-white sm:text-4xl">{game.downloads}</div>
        <div className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">downloads</div>
      </div>
    </a>
  )
}

// Fills the last grid cell and carries the archive's headline number.
function StatCell() {
  return (
    <div className="relative col-span-1 flex min-h-[168px] flex-col justify-end overflow-hidden rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.12] via-zinc-900 to-zinc-900 p-5">
      <div className="text-4xl font-bold tabular-nums tracking-tight text-amber-500">100M+</div>
      <div className="mt-1 text-sm font-medium text-zinc-300">Combined Downloads</div>
    </div>
  )
}

function FeaturedCard({ project, isLead, isWide }) {
  const badges = [project.highlight, project.downloads && `${project.downloads} downloads`].filter(Boolean)
  const linkOrder = ['steam', 'website', 'playstore', 'youtube', 'discord', 'reddit', 'twitter']
  const titleId = `project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    // Amber spotlight follows the pointer (or keyboard focus) across the card and lights its rim.
    // Absolutely positioned layers only, so no layout shift; it idles when the pointer is away.
    <SpotlightCard
      className={`rounded-2xl ${isWide ? 'md:col-span-2' : ''}`}
      spotlightColor="#f59e0b"
      intensity={0.12}
      borderGlow={0.7}
      spotlightSize={420}
      proximity={60}
      flare={false}
      style={{ '--spotlight-card-shadow': 'none' }}
    >
      <article
        id={isLead ? 'heirs-of-the-moon' : undefined}
        aria-labelledby={titleId}
        className={`flex h-full flex-col gap-6 p-5 sm:p-6 lg:p-8 ${
          isWide ? 'lg:flex-row lg:items-center lg:gap-10' : ''
        } ${isWide && !isLead ? 'lg:flex-row-reverse' : ''}`}
      >
        <div className={`w-full ${isWide ? 'lg:w-[55%] lg:flex-shrink-0' : ''}`}>
          <YouTubeFacade id={project.video} title={project.title} badges={badges} />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <h3 id={titleId} className="text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h3>
            {project.note && (
              <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-semibold text-zinc-300">{project.note}</span>
            )}
          </div>
          <p className="mb-4 mt-1.5 text-sm font-medium text-zinc-400">
            {project.year}
            <span className="mx-2 text-zinc-600" aria-hidden="true">/</span>
            {project.client}
          </p>

          <p className="mb-6 max-w-[65ch] leading-relaxed text-zinc-400">{project.desc}</p>

          <ul className={`mb-6 flex flex-wrap gap-2 ${isWide ? '' : 'mt-auto'}`} aria-label="Tech stack">
            {project.tech.map((t) => (
              <li key={t} className="rounded-md border border-white/5 bg-zinc-800/60 px-3 py-1 text-xs font-medium text-zinc-300">
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-2 border-t border-white/5 pt-5">
            {linkOrder.map(
              (kind) => project.links?.[kind] && <LinkBadge key={kind} kind={kind} href={project.links[kind]} context={project.title} />
            )}
          </div>
        </div>
      </article>
    </SpotlightCard>
  )
}

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-[#09090B] pb-24 pt-16 lg:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 id="work-title" className="section-title mb-4">Featured Work</h2>
          <p className="text-lg text-zinc-400">Client projects and studio work. I see them through to release.</p>
        </div>

        <div className="mb-28 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <FeaturedCard
              key={project.title}
              project={project}
              isLead={index === 0}
              // Lead spans the row; a trailing odd card also spans so it isn't left half-empty.
              isWide={index === 0 || (index === featured.length - 1 && index % 2 === 1)}
            />
          ))}
        </div>

        {/* Project Vault */}
        <div>
          <div className="mb-8">
            <h2 className="section-title mb-2">Project Vault</h2>
            <p className="text-zinc-400">The archive. {otherGames.length} titles that taught me everything.</p>
          </div>

          <div className="grid grid-flow-row-dense grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {vaultGames.map((game, index) =>
              WIDE_TIERS.has(game.downloads) ? (
                <WideCell key={game.name} game={game} index={index} />
              ) : (
                <BentoCell key={game.name} game={game} index={index} />
              )
            )}
            <StatCell />
          </div>
        </div>
      </div>
    </section>
  )
}
