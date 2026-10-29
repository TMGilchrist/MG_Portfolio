import './About.css'

const skills = [
  'C++',
  'C#',
  'TypeScript',
  'JavaScript',
  'Python',
  'Unreal Engine',
  'Unity',
  'React',
  'WebGL'
]

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-copy">
        {/* <p className="eyebrow">About Me</p> */}
        <h2 className="section-heading">About</h2>
        <p>
          I'm a software engineer with a background in games development, mainly in Unreal Engine 5 and Unity, and over four years experience working with Unreal and WebGL in commerical architectural projects.
        </p>
      </div>
      <div className="skills">
        <p className="eyebrow">Key Skills</p>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
