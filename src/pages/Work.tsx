import { PageContainer } from "@/components/layout/PageContainer"
import { CaseStudyCard } from "@/components/work/CaseStudyCard"
import { projects } from "@/data/projects"

export default function Work() {
  return (
    <PageContainer wide>
      <div className="mb-16">
        <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Work
        </h1>
        <p className="max-w-xl text-lg text-gray-500">
          Case studies from 12 years of designing analytics products, data
          applications, and enterprise experiences.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <CaseStudyCard key={project.slug} project={project} />
        ))}
      </div>
    </PageContainer>
  )
}
