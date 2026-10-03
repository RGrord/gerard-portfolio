const projects = [
  {
    title: "HOAConnect",
    description:
      "A homeowners association system designed to improve fee management and budget transparency.",
    tools: "Figma · UI/UX Design · Prototyping",
    image: "/projects/HOAConnect.png",
    links: [
      {
        label: "View Figma Design",
        url: "https://www.figma.com/design/7p0v6SCZ4WukemqAxjfq8D/HOAConnect",
      },
    ],
  },
  {
    title: "EARIST LMS",
    description:
      "A learning management system concept designed for students and instructors.",
    tools: "Figma · UI/UX Design · Prototyping",
    image: "/projects/Earist.png",
    links: [
      {
        label: "View Figma File",
        url: "https://www.figma.com/design/fwKQCPKlIthtnqTyLEsvcf/EARIST-LMS-PROTOTYPE",
      },
      {
        label: "View Prototype",
        url: "https://www.figma.com/proto/fwKQCPKlIthtnqTyLEsvcf/EARIST-LMS-PROTOTYPE",
      },
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Navigation */}
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5">
          <a href="#" className="font-semibold">
            Gerard Copon
          </a>

          <nav className="flex gap-5 text-sm text-muted">
            <a href="#about" className="hover:text-ink">
              About
            </a>

            <a href="#projects" className="hover:text-ink">
              Projects
            </a>

            <a href="#contact" className="hover:text-ink">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-content">
            <p className="mb-3 text-sm font-medium text-accent">
              UI/UX DESIGNER · FULL-STACK DEVELOPER
            </p>

            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Hi, I'm Gerard.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              I design and build clean, responsive, and user-friendly digital
              experiences.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href="#projects"
                className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper hover:opacity-80"
              >
                View Projects
              </a>

              <a
                href="https://github.com/RGrord"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-5 py-2.5 text-sm hover:border-ink"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-line px-6 py-16"
        >
          <div className="mx-auto max-w-content">
            <h2 className="text-2xl font-semibold">About</h2>

            <p className="mt-5 max-w-2xl leading-7 text-muted">
              I'm a BSIT graduate with hands-on experience in web development
              and UI/UX design. I work with React, JavaScript, C#, .NET, SQL,
              Tailwind CSS, and Figma.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-t border-line px-6 py-16"
        >
          <div className="mx-auto max-w-content">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>

            <div className="mt-10 space-y-16">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="grid gap-7 sm:grid-cols-2 sm:items-center"
                >
                  {/* Project Image */}
                  <div className="overflow-hidden rounded-xl border border-line bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-video w-full object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted">
                      {project.description}
                    </p>

                    <p className="mt-3 text-sm text-muted">
                      {project.tools}
                    </p>

                    {/* LINKS */}
                    <div className="mt-6 flex flex-wrap gap-4">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-line px-4 py-2 text-sm font-medium hover:border-ink hover:bg-white"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-line px-6 py-16"
        >
          <div className="mx-auto max-w-content">
            <h2 className="text-2xl font-semibold">
              Let's work together.
            </h2>

            <p className="mt-4 text-muted">
              I'm open to opportunities in UI/UX, web development, and
              automation.
            </p>

            <div className="mt-6 flex gap-5 text-sm font-medium">
              <a
                href="https://github.com/RGrord"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-6">
        <div className="mx-auto max-w-content text-sm text-muted">
          © {new Date().getFullYear()} Gerard Copon
        </div>
      </footer>
    </div>
  );
}

export default App;