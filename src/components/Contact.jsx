import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mpqoygde', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }

    setSending(false)
  }

  return (
    <section id="contact" className="py-24 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left side - info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in touch
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-12">
              If you have a game project that needs a developer who can own the full stack, including Unity, backend, and infrastructure, drop me a line.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <a
                href="mailto:mustafa-naqvi@outlook.com"
                className="flex items-center gap-4 p-5 bg-zinc-900 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-xl group-hover:scale-110 transition-transform">
                  @
                </div>
                <div>
                  <div className="text-zinc-500 text-sm font-medium mb-0.5">Email</div>
                  <div className="text-white font-medium">mustafa-naqvi@outlook.com</div>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com/in/mustafa-naqvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-zinc-900 border border-white/5 rounded-2xl hover:border-[#0A66C2]/50 text-zinc-400 hover:text-[#0A66C2] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="font-semibold">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/MustafaNaqvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-zinc-900 border border-white/5 rounded-2xl hover:border-white/30 text-zinc-400 hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-semibold">GitHub</span>
                </a>
              </div>

              <div className="flex items-center gap-4 p-5 bg-zinc-900 border border-white/5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="text-zinc-500 text-sm font-medium mb-0.5">Location</div>
                  <div className="text-white font-medium">Islamabad, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] pointer-events-none" />
            
            <h3 className="text-xl font-bold text-white mb-8 relative z-10">
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#09090B] border border-white/10 rounded-xl text-white outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#09090B] border border-white/10 rounded-xl text-white outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#09090B] border border-white/10 rounded-xl text-white outline-none focus:border-amber-500 transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-2 w-full py-4 bg-amber-500 hover:bg-amber-600 text-[#09090B] font-bold rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending...' : 'Send message'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm font-medium text-center">
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium text-center">
                  Something went wrong. Try emailing me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}