import portrait from '../assets/MG_Profile_Picture.webp'
import './Intro.css'

export function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro-portrait">
        <img src={portrait} alt="Portrait" />
      </div>
      <div className="intro-content">
        {/* <p className="eyebrow">Hello, I’m Thomas</p> */}
        <h1 id="intro-title">
          Mango
          <br />
          <span>Gilchrist</span>
        </h1>
        <p className="intro-summary">
          Unreal C++ Developer, with experience in games and architectural visualisation.
        </p>
        <div className="contact-card" id="contact">
          <p className="contact-label">Contact Me</p>
          <a href="mailto:telcontar@hotmail.co.uk">telcontar@hotmail.co.uk</a>
          <div className="contact-links">
            <a href="linkedin.com/in/mango-gilchrist-6629a41a4">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
