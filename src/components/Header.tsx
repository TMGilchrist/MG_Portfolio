import './Header.css'

export function Header() {
  return (
    <header className="site-header" id="top">
      <span className="site-name">
        Thomas Gilchrist
      </span>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  )
}
