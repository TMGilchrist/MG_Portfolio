import './Projects.css'

type Project = {
  name: string
  description: string
  website: string
  videoId: string
}

const commercialProjects: Project[] = [
  {
    name: 'Amplify',
    description: 'Restructed our previous bespoke application into a modular, reusable Unreal Engine 5 framework for real-time architectural visualisation. Written from the ground up in C++ and Blueprints, replacing the old OSC protocol with WebSockets via an external WebSocket server for communication between Unreal and the remote controller web-app. Content and settings are configured in a client-accessible Supabase CMS, while the controller layout and options are dynamically generated based on data from Unreal.',
    website: 'https://amplify.wearesomewhere.net/',
    videoId: 'dA2apnXPrbI',
  },
  {
    name: 'Bankside Timber Square',
    description: 'A real-time, interactive visualisation app utilising OSC protocol to control an Unreal Engine 5 app with an ipad remote controller. Content dynamically populated from an Airtable CMS. Unreal app written in C++ and Blueprints, while the Controller is written in C# in Unity.',
    website: '',
    videoId: 'ik3Kbty43_0 ',
  },
  {
    name: 'Cosentyx Explorer',
    description: 'A tool to help explain new healthcare options to doctors and patients. Written in C# in Unity for ipads, the app can run as a normal app, or in AR mode where the user scans a physical QR code and can view the experience in Augmented Reality.',
    website: '',
    videoId: 'rhBIzgB0ceE',
  },
      {
    name: 'JumpIn',
    description: 'An AR application for raising awareness about medical treatments.',
    website: '',
    videoId: 'P4IIZ3vDmGk',
  },
  {
    name: 'PSO',
    description: 'A small Augmented Reality app to help raise awarness about psoriasis and the treatments available. Written in C# for Unity.',
    website: '',
    videoId: 'WozIHbgeMB4',
  },
  {
    name: 'Miza',
    description: 'A rewritten version of our previous site-map projects to allow better flexibility and customisation and simplify the process of replicating the project for new clients..',
    website: '',
    videoId: 'L1WwVedc6HY',
  },
  {
    name: 'Jax',
    description: 'A more advanced 3D site-map written in JavaScript using WebGL. Utilises a CMS backend to allow clients to directly edit content.',
    website: 'https://map.jaxdistrict.com/',
    videoId: 'GdEvvpNYD7Y',
  },
    {
    name: 'Euston',
    description: 'A 3D site-map for public consultation written in JavaScript using WebGL.',
    website: 'https://staging.uniform.net/Euston_dev/',
    videoId: 'FYgOJGgRDTk',
  }
]

const personalProjects: Project[] = [
  {
    name: 'Knights of Trash',
    description: 'A team project using Unreal Engine, C++, and Blueprints. A top-down bullet hell game where you play as racoons fighitng in trash-filled alleyways.',
    website: 'https://lazy-mage.itch.io/knights-of-trash',
    videoId: 'CAP0E-1nuuA',
  },
  {
    name: 'Ink\'d',
    description: 'A team project built in Unity C# where you control a bouncy octopus that must escape from a lab. The focus of this project was creating a fun, chaotic physics-based movement system, where you use your tentacles to fling yourself through levels, avoiding obstacles.',
    website: 'https://mangogilchrist.itch.io/inkd',
    videoId: 'QvP1csnF03s',
  },
    {
    name: 'Carpool',
    description: 'A small team project where we made a Unity C# game for Global Game Jam 2021. You play as an underwater taxi avoiding dangerous sharks while collecting gems.',
    website: '',
    videoId: 'e_Xnt1Qe25k',
  }
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-details">
        <div>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
        {project.website && (
          <a href={project.website} target="_blank" rel="noreferrer">
            Visit website <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      <div className="project-media">
        {project.videoId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(project.videoId)}`}
            title={`${project.name} project video`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="video-placeholder">
            <span className="play-icon" aria-hidden="true">
              ▶
            </span>
            <span>Add a project video</span>
          </div>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      {/* <p className="eyebrow">Selected work</p> */}
      <h2 className="section-heading">Projects</h2>
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
