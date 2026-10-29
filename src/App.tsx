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
        <div className="site-footer-content">
          <p>Mango Gilchrist</p>
        </div>
      </footer>
    </>
  )
}

export default App
