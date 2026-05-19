const PROJECTS = [
  {
    id: 1,
    title: "NexaShop",
    description: "E-commerce platform dengan sistem rekomendasi AI real-time, payment gateway terintegrasi, dan dashboard analytics untuk merchant.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://placehold.co/600x400/FFE600/0A0A0A?text=NexaShop",
  },
  {
    id: 2,
    title: "TaskFlow",
    description: "Project management tool terinspirasi Notion x Linear. Real-time collaboration, kanban, dan time tracking dalam satu platform.",
    tech: ["React", "Supabase", "TypeScript", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://placehold.co/600x400/0066FF/F5F0E8?text=TaskFlow",
  },
  {
    id: 3,
    title: "ClimateLens",
    description: "Dashboard visualisasi data iklim interaktif menggunakan data publik BMKG. Mendukung heatmap dan forecast 7 hari.",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://placehold.co/600x400/00FF88/0A0A0A?text=ClimateLens",
  },
  {
    id: 4,
    title: "AuthVault",
    description: "Open-source authentication microservice dengan OAuth2, MFA, session management, dan audit log.",
    tech: ["Node.js", "JWT", "Redis", "Docker"],
    github: "https://github.com",
    demo: null,
    image: "https://placehold.co/600x400/FF2D2D/F5F0E8?text=AuthVault",
  },
  {
    id: 5,
    title: "Pictura AI",
    description: "Generator konten visual berbasis prompt menggunakan Stable Diffusion API. Termasuk prompt builder dan gallery.",
    tech: ["React", "Python", "AWS S3", "Celery"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://placehold.co/600x400/FFE600/0A0A0A?text=Pictura+AI",
  },
  {
    id: 6,
    title: "DeployKit",
    description: "CLI tool untuk auto-deploy aplikasi ke VPS dengan zero-downtime. Support Docker dan nginx config generator.",
    tech: ["Go", "Shell", "Docker", "nginx"],
    github: "https://github.com",
    demo: null,
    image: "https://placehold.co/600x400/0066FF/F5F0E8?text=DeployKit",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-16 uppercase">Projects</h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-yellow-300 text-black border-[5px] border-white shadow-[10px_10px_0px_white] overflow-hidden brutal-hover"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover border-b-[5px] border-black"
              />

              <div className="p-6">
                <h3 className="text-3xl font-black uppercase mb-4">
                  {project.title}
                </h3>

                <p className="font-medium mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 border-[3px] border-black bg-white text-xs font-black uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-black text-white py-3 border-[4px] border-black font-black uppercase"
                  >
                    GitHub
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-red-500 text-white py-3 border-[4px] border-black font-black uppercase"
                    >
                      Demo
                    </a>
                  ) : (
                    <span className="flex-1 text-center bg-gray-700 text-gray-400 py-3 border-[4px] border-black font-black uppercase cursor-not-allowed">
                      N/A
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}