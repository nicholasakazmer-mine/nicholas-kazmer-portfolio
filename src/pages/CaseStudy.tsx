import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { getProject, projects } from "@/data/projects"

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return <Navigate to="/work" replace />
  }

  // Get next/prev for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  // Pull out specific sections for the infographic layout
  const context = project.sections.find((s) => s.heading === "Context")
  const problem = project.sections.find((s) => s.heading === "Problem")
  const discovery = project.sections.find((s) => s.heading === "Discovery")
  const decisions = project.sections.find((s) => s.heading === "Design Decisions")
  const solution = project.sections.find((s) => s.heading === "Solution")
  const reflection = project.sections.find((s) => s.heading === "Reflection")

  // Parse design decisions into individual cards
  const decisionCards = decisions
    ? decisions.content.split("\n\n").reduce<{ title: string; body: string }[]>(
        (acc, para) => {
          // Detect paragraphs that start with a bold-style title pattern
          const match = para.match(/^(.+?)\.\s+(.+)$/s)
          if (match && match[1].length < 60) {
            acc.push({ title: match[1], body: match[2] })
          } else if (acc.length > 0) {
            // Continuation paragraph -- append to last card
            acc[acc.length - 1].body += "\n\n" + para
          } else {
            acc.push({ title: "", body: para })
          }
          return acc
        },
        []
      )
    : []

  return (
    <div>
      {/* Hero */}
      <div className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:px-10 lg:pb-20 lg:pt-16">
          <Link
            to="/work"
            className="mb-10 inline-flex items-center gap-1 text-sm font-medium text-gray-400 no-underline hover:text-gray-900"
          >
            <ArrowLeft size={14} />
            All work
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <span className="mb-3 block text-sm font-medium text-gray-400">
                {project.client} &middot; {project.dates}
              </span>
              <h1 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
                {project.title}
              </h1>
              <p className="text-sm font-medium text-gray-500">{project.role}</p>
            </div>

            {/* Key metrics card */}
            <div className="grid grid-cols-2 gap-4">
              {project.impact.slice(0, 4).map((item, i) => {
                // Try to extract a number/stat from the impact line
                const numMatch = item.match(
                  /(\d[\d,.]*[%xMK+]*|\$[\d,.]+[MK]*|~?\d+[%x])/
                )
                if (numMatch) {
                  const stat = numMatch[1]
                  const label = item
                    .replace(stat, "")
                    .replace(/^[\s\-:,]+|[\s\-:,]+$/g, "")
                    .trim()
                  return (
                    <div key={i} className="rounded-lg bg-white p-4 border border-gray-200">
                      <div className="font-display text-2xl font-bold text-gray-900">
                        {stat}
                      </div>
                      <div className="mt-1 text-xs leading-snug text-gray-500">
                        {label}
                      </div>
                    </div>
                  )
                }
                return null
              }).filter(Boolean)}
            </div>
          </div>
        </div>
      </div>

      {/* Context + Problem -- split layout */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {context && (
            <div>
              <h2 className="mb-4 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
                Context
              </h2>
              <div className="space-y-4">
                {context.content.split("\n\n").map((para, j) => (
                  <p key={j} className="leading-relaxed text-gray-600">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}
          {problem && (
            <div>
              <h2 className="mb-4 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
                Problem
              </h2>
              <div className="space-y-4">
                {problem.content.split("\n\n").map((para, j) => (
                  <p key={j} className="leading-relaxed text-gray-600">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Discovery -- full width with left accent */}
      {discovery && (
        <div className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
            <h2 className="mb-6 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Discovery
            </h2>
            <div className="max-w-3xl border-l-[3px] border-accent pl-6">
              {discovery.content.split("\n\n").map((para, j) => (
                <p key={j} className="mb-4 leading-relaxed text-gray-600">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Design Decisions -- card grid */}
      {decisionCards.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
          <h2 className="mb-8 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Design Decisions
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {decisionCards.map((card, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                {card.title && (
                  <h3 className="mb-3 font-display text-base font-bold text-gray-900">
                    {card.title}
                  </h3>
                )}
                <p className="text-sm leading-relaxed text-gray-500">
                  {card.body.split("\n\n")[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Solution -- long-form with emphasis on structure */}
      {solution && (
        <div className="bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
            <h2 className="mb-6 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Solution
            </h2>
            <div className="max-w-3xl space-y-4">
              {solution.content.split("\n\n").map((para, j) => (
                <p key={j} className="leading-relaxed text-gray-600">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Impact -- stat grid */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
        <h2 className="mb-8 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          Impact
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.impact.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg bg-surface p-5"
            >
              <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span className="text-sm leading-relaxed text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reflection -- pull quote style */}
      {reflection && (
        <div className="bg-gray-900">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:py-20">
            <h2 className="mb-6 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
              Reflection
            </h2>
            <div className="max-w-3xl space-y-4">
              {reflection.content.split("\n\n").map((para, j) => (
                <p key={j} className="text-lg leading-relaxed text-gray-300">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Prev/Next navigation */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10">
          {prevProject ? (
            <Link
              to={`/work/${prevProject.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 no-underline hover:text-gray-900"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
              {prevProject.title}
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              to={`/work/${nextProject.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 no-underline hover:text-gray-900"
            >
              {nextProject.title}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
