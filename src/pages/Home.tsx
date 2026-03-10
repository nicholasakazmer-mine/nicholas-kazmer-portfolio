import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PageContainer } from "@/components/layout/PageContainer"
import { CaseStudyCard } from "@/components/work/CaseStudyCard"
import { getFeaturedProjects } from "@/data/projects"

export default function Home() {
  const featured = getFeaturedProjects()

  return (
    <>
      {/* Hero -- Ramp-style: big type, generous whitespace */}
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:px-10 lg:pt-32 lg:pb-28">
        <h1 className="mb-6 font-display text-5xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          I design how
          <br />
          people interact
          <br />
          with data.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-gray-500">
          12 years designing self-service analytics, custom applications with
          embedded AI, and data products for enterprise teams.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-dark hover:text-white"
          >
            View my work
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-gray-500 no-underline transition-colors hover:text-gray-900"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {/* Featured Work -- bento-style grid */}
      <div className="bg-surface">
        <PageContainer wide>
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-400">
              Selected Work
            </h2>
            <Link
              to="/work"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 no-underline hover:text-gray-900"
            >
              All projects
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <CaseStudyCard key={project.slug} project={project} />
            ))}
          </div>
        </PageContainer>
      </div>

      {/* CTA */}
      <PageContainer className="text-center">
        <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Let's work together.
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-gray-500">
          I'm looking for an end-to-end product design role where
          design owns outcomes, not deliverables.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-dark hover:text-white"
        >
          Get in touch
          <ArrowRight size={16} />
        </Link>
      </PageContainer>
    </>
  )
}
