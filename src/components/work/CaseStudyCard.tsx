import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import type { CaseStudy } from "@/data/projects"

interface CaseStudyCardProps {
  project: CaseStudy
}

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex flex-col rounded-xl bg-surface-elevated p-7 no-underline transition-all hover:shadow-md border border-gray-200 hover:border-gray-300"
    >
      <span className="mb-4 text-xs font-medium text-gray-400">
        {project.client} &middot; {project.dates}
      </span>
      <h3 className="mb-3 font-display text-xl font-bold leading-snug text-gray-900">
        {project.title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-500">
        {project.summary}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors group-hover:text-gray-900">
        Read case study
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
