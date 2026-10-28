import { About } from './components/About'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Projects />
      </main>
      <footer className="site-footer">
        <p>Designed and built by Thomas Gilchrist.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
