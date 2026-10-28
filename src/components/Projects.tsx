import './Projects.css'

type Project = {
  name: string
  description: string
  website: string
  video: string
}

const commercialProjects: Project[] = [
  {
    name: 'Commercial project title',
    description:
      'Add a short introduction to a client or commercial project here, including the challenge and your contribution.',
    website: 'https://example.com',
    video: '',
  },
]

const personalProjects: Project[] = [
  {
    name: 'Personal project title',
    description:
      'Share what you made, why you made it, and the tools or ideas that brought it to life.',
    website: 'https://example.com',
    video: '',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        {project.video ? (
          <video controls preload="metadata">
            <source src={project.video} type="video/mp4" />
            Your browser does not support embedded videos.
          </video>
        ) : (
          <div className="video-placeholder">
            <span className="play-icon" aria-hidden="true">
              ▶
            </span>
            <span>Add a project video</span>
          </div>
        )}
      </div>
      <div className="project-details">
        <div>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
        <a href={project.website} target="_blank" rel="noreferrer">
          Visit website <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <p className="eyebrow">Selected work</p>
      <h2 className="section-heading">A few things I’ve worked on.</h2>
      <div className="project-group">
        <h3>Commercial</h3>
        <div className="project-grid">
          {commercialProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
      <div className="project-group">
        <h3>Personal</h3>
        <div className="project-grid">
          {personalProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
