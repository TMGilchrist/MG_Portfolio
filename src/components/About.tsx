import './About.css'

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML & CSS',
  'Responsive design',
  'Git',
]

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-copy">
        <p className="eyebrow">A bit about me</p>
        <h2 className="section-heading">Curious by nature, thoughtful by design.</h2>
        <p>
          I’m Thomas, a developer who enjoys turning ideas into approachable,
          well-crafted experiences. I care about the details—from how a page
          feels to use to how clearly the code behind it reads.
        </p>
      </div>
      <div className="skills">
        <p className="eyebrow">Things I work with</p>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
