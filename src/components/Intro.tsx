import portrait from '../assets/profile-placeholder.svg'
import './Intro.css'

export function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro-portrait">
        <img src={portrait} alt="Illustrated portrait placeholder for Thomas Gilchrist" />
        <span className="portrait-caption">A little about me</span>
      </div>
      <div className="intro-content">
        <p className="eyebrow">Hello, I’m Thomas</p>
        <h1 id="intro-title">
          I build thoughtful
          <br />
          <span>digital experiences.</span>
        </h1>
        <p className="intro-summary">
          Developer focused on making the web feel clear, useful, and a little
          more human.
        </p>
        <div className="contact-card" id="contact">
          <p className="contact-label">Say hello</p>
          <a href="mailto:your.email@example.com">your.email@example.com</a>
          <div className="contact-links">
            <a href="https://github.com/your-username">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/your-profile/">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
