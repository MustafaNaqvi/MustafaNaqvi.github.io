import { useState } from 'react'

/**
 * Click-to-play YouTube embed. Shows the video thumbnail and a "Play" control;
 * no YouTube JavaScript loads until the visitor presses play.
 */
export default function YouTubeFacade({ id, title, badges = [], label = 'Play trailer' }) {
  const [playing, setPlaying] = useState(false)
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`)

  // Not every video has a maxres thumbnail; YouTube serves a 120x90 placeholder instead.
  const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
  const handleLoad = (e) => {
    if (e.currentTarget.naturalWidth <= 120) setThumb(fallback)
  }
  const handleError = () => setThumb(fallback)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-950 ring-1 ring-white/10">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={`${title} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${label}: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-offset-[-3px]"
        >
          <img
            src={thumb}
            onLoad={handleLoad}
            onError={handleError}
            alt=""
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/30" />

          {badges.length > 0 && (
            <span className="absolute left-3 top-3 flex flex-wrap gap-1.5 sm:left-4 sm:top-4">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-md bg-black/60 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-100 ring-1 ring-white/15 backdrop-blur-sm"
                >
                  {b}
                </span>
              ))}
            </span>
          )}

          {/* Play control sits in a bottom corner so it stays clear of logo art baked into thumbnails */}
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-2.5 rounded-full bg-black/55 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur-md transition duration-300 ease-out group-hover:bg-black/70 sm:bottom-4 sm:right-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-zinc-950 transition-transform duration-300 ease-out group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M7 4.5v15a1 1 0 0 0 1.52.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5Z" />
              </svg>
            </span>
            {label}
          </span>
        </button>
      )}
    </div>
  )
}
