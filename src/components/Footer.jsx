const links = [
  { label: 'GitHub', href: 'https://github.com/MustafaNaqvi', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mustafa-naqvi', external: true },
  { label: 'Email', href: 'mailto:mustafa-naqvi@outlook.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Mustafa Naqvi</p>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
