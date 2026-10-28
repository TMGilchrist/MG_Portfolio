import './Header.css'

export function Header() {
  return (
    <header className="site-header" id="top">
      <a className="site-name" href="#top">
        Thomas Gilchrist<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a className="header-contact" href="#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}
