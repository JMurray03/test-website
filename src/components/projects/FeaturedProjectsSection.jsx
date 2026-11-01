import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { palettes, paletteToStyle } from "../../theme/palettes.js"

const defaultProjects = [
  {
    title: "Common Ground",
    category: "Brand · E-commerce",
    summary:
      "A new identity and marketplace connecting independent growers with their communities.",
    image: "",
    metric: "+42%",
    metricLabel: "orders in the first quarter",
    href: "/projects/common-ground",
  },
  {
    title: "Northline Finance",
    category: "Product strategy · UX",
    summary: "A clearer way for small businesses to manage their finances.",
    image: "",
    href: "/projects/northline",
  },
  {
    title: "Field Notes",
    category: "Identity · Digital",
    summary: "A flexible identity for a publication about the outdoors.",
    image: "",
    href: "/projects/field-notes",
  },
]

function ProjectArtwork({ project, className = "" }) {
  const style = project.image
    ? {
        backgroundImage: `linear-gradient(135deg, rgb(0 0 0 / 10%), rgb(0 0 0 / 20%)), url("${project.image}")`,
      }
    : undefined

  return (
    <div
      aria-hidden="true"
      className={`relative isolate overflow-hidden bg-gradient-to-br from-primary/70 via-muted to-foreground/80 ${className}`}
      style={style}
    >
      {!project.image && (
        <>
          <span className="absolute -top-10 -right-8 size-48 rounded-full border-[18px] border-background/30" />
          <span className="absolute bottom-5 left-5 size-20 rounded-full bg-primary-foreground/30" />
          <span className="absolute right-8 bottom-0 h-28 w-16 rotate-12 rounded-t-full bg-foreground/30" />
        </>
      )}
    </div>
  )
}
export default function FeaturedProjectsSection({
  eyebrow = "Selected work",
  title = "Work with a point of view.",
  description = "A few projects that show what thoughtful strategy, design, and development can make possible.",
  projects = defaultProjects,
  layout = "spotlight",
  featuredIndex = 0,
  palette = palettes.default,
}) {
  const featuredProject = projects[featuredIndex] ?? projects[0]
  const supportingProjects = projects.filter(
    (_, index) => index !== featuredIndex
  )

  return (
    <section
      style={paletteToStyle(palette)}
      className="mx-auto max-w-7xl bg-background px-5 py-20 text-foreground sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="featured-projects-title"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
          <h2
            id="featured-projects-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {description}
          </p>
        </div>

        <Link
          to="/projects"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
        >
          View all projects
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>

      {layout === "editorial" ? (
        <div className="mt-10 divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <Link
              key={project.title}
              to={project.href ?? "/projects"}
              className="group grid gap-4 py-5 sm:grid-cols-[120px_1fr_auto] sm:items-center sm:gap-6"
            >
              <ProjectArtwork
                project={project}
                className="aspect-[16/9] rounded-lg sm:aspect-[4/3]"
              />

              <div>
                <p className="text-xs text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.summary}
                </p>
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary sm:block"
              />
            </Link>
          ))}
        </div>
      ) : (
        <>
          {featuredProject && (
            <article className="mt-10 grid overflow-hidden rounded-2xl border border-border bg-card text-card-foreground md:grid-cols-2">
              <ProjectArtwork
                project={featuredProject}
                className="min-h-64 md:min-h-[24rem]"
              />
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                    {featuredProject.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
                    {featuredProject.summary}
                  </p>
                </div>

                <div className="mt-8 flex items-end justify-between gap-4">
                  {featuredProject.metric && (
                    <p className="text-sm text-muted-foreground">
                      <span className="block text-3xl font-semibold tracking-tight text-foreground">
                        {featuredProject.metric}
                      </span>
                      {featuredProject.metricLabel}
                    </p>
                  )}

                  <Link
                    to={featuredProject.href ?? "/projects"}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
                  >
                    Read case study
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          )}
          {supportingProjects.length > 0 && (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {supportingProjects.map((project) => (
                <Link
                  key={project.title}
                  to={project.href ?? "/projects"}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-3 text-card-foreground"
                >
                  <ProjectArtwork
                    project={project}
                    className="aspect-square w-20 shrink-0 rounded-lg"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="text-ws block text-muted-foreground">
                      {project.category}
                    </span>

                    <span className="mt-1 block font-semibold group-hover:text-primary">
                      {project.title}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mr-2 size-4 shrink-0 text-muted-foreground group-hover:text-primary"
                  />
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}
