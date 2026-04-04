import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <Hero />
      <main>
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
