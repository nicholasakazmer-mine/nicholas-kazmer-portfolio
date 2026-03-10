import { Link } from "react-router-dom"
import { ArrowRight, Mail, Linkedin, MapPin, Phone } from "lucide-react"
import { PageContainer } from "@/components/layout/PageContainer"

const timeline = [
  {
    dates: "2024 -- Present",
    company: "Lovelytics",
    role: "Analytics Director, Experience Design Lead",
    description:
      "Run the design system, delivery methodology, and product strategy for the analytics consulting practice. Built an AI workflow where agents generate wireframes, run UI/UX reviews, and produce working prototypes before engineering starts.",
  },
  {
    dates: "2022 -- 2024",
    company: "Lovelytics",
    role: "Analytics Director",
    description:
      "Self-service product redesigns across 30+ enterprise accounts cut ad-hoc reporting by 40-70%. Own full design lifecycle from research through post-launch iteration. $13.7M influenced, $3.8M managed revenue.",
  },
  {
    dates: "2021 -- 2022",
    company: "RefineRE",
    role: "Director of Product",
    description:
      "Owned product design and development for a commercial real estate analytics platform. A/B tests on core workflows reduced support tickets by 75%. Unified four standalone products into one coherent experience.",
  },
  {
    dates: "2016 -- 2021",
    company: "Accenture",
    role: "Analytics Engineering Manager",
    description:
      "Built a Looker practice from scratch. Recruited the team, created reusable delivery assets and design patterns, landed a Google partnership with 4 new clients in year one. Self-service analytics for 6 major media brands.",
  },
]

const skills = {
  Design: [
    "Product Design",
    "UX",
    "Interaction Design",
    "Visual Design",
    "Information Architecture",
    "Design Systems",
    "Prototyping",
    "Data Visualization",
  ],
  Research: [
    "User Research",
    "Usability Testing",
    "A/B Testing",
    "Customer Interviews",
    "Design Sprints",
  ],
  Tools: [
    "Figma",
    "Claude Code",
    "Cursor",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
    "Databricks",
    "Looker",
    "Sigma",
    "SQL",
    "Python",
  ],
  AI: [
    "AI/LLM Integration",
    "Prompt Engineering",
    "Rapid Prototyping with AI Agents",
  ],
}

const principles = [
  {
    title: "Prototype in code, not slides.",
    body: "I use AI agents to build working prototypes early so I can focus on the parts that need a human eye.",
  },
  {
    title: "Design systems, not one-offs.",
    body: "Components and patterns that compound across projects and ship consistently.",
  },
  {
    title: "Start with the user's decision.",
    body: "Every project starts with understanding what action someone needs to take.",
  },
  {
    title: "Stay through launch.",
    body: "Pair with engineering during build, test with real users, keep iterating.",
  },
]

const contact = [
  { icon: MapPin, value: "Minneapolis, MN" },
  { icon: Phone, value: "(815) 861-8361" },
  { icon: Mail, value: "nicholas.a.kazmer@gmail.com", href: "mailto:nicholas.a.kazmer@gmail.com" },
  { icon: Linkedin, value: "linkedin.com/in/nkazmer", href: "https://linkedin.com/in/nkazmer" },
]

export default function About() {
  return (
    <>
      {/* Hero section */}
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:px-10 lg:pt-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-start">
          <div>
            <h1 className="mb-2 font-display text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Nick Kazmer
            </h1>
            <p className="mb-8 text-sm font-medium text-gray-400">
              Product Designer
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              12 years designing how people interact with data -- from self-service
              analytics to custom applications with embedded AI. I've led
              cross-functional design across 30+ enterprise accounts where I owned
              the full lifecycle from research through post-launch iteration. The
              self-service products I've designed have cut ad-hoc reporting by
              40-70% and moved non-technical teams from asking for dashboards to
              actually using them.
            </p>
          </div>

          {/* Contact card */}
          <div className="rounded-xl border border-gray-200 bg-surface p-6">
            <div className="space-y-4">
              {contact.map((item) => {
                const Icon = item.icon
                const content = (
                  <span className="inline-flex items-center gap-3 text-sm">
                    <Icon size={15} className="text-gray-400 shrink-0" />
                    <span className="text-gray-600">{item.value}</span>
                  </span>
                )
                return item.href ? (
                  <a key={item.value} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block text-gray-600 no-underline hover:text-gray-900">
                    {content}
                  </a>
                ) : (
                  <div key={item.value}>{content}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* How I Work -- card grid */}
      <div className="bg-surface">
        <PageContainer wide>
          <h2 className="mb-8 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            How I Work
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6">
                <span className="mb-3 block font-display text-3xl font-bold text-gray-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-sm font-bold text-gray-900">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>

      {/* Experience timeline */}
      <PageContainer wide>
        <h2 className="mb-8 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
          Experience
        </h2>
        <div className="space-y-0">
          {timeline.map((entry, i) => (
            <div
              key={i}
              className="grid gap-2 border-t border-gray-200 py-8 md:grid-cols-[180px_1fr]"
            >
              <span className="text-sm font-medium text-gray-400">
                {entry.dates}
              </span>
              <div>
                <div className="mb-1 flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-base font-bold text-gray-900">
                    {entry.company}
                  </h3>
                  <span className="text-sm text-gray-400">{entry.role}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>

      {/* Skills */}
      <div className="bg-surface">
        <PageContainer wide>
          <h2 className="mb-8 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Skills
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([label, items]) => (
              <div key={label}>
                <h3 className="mb-4 text-sm font-bold text-gray-900">
                  {label}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-gray-500 border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>

      {/* Education + CTA */}
      <PageContainer wide>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Education
            </h2>
            <p className="font-display text-base font-bold text-gray-900">
              Marquette University
            </p>
            <p className="text-sm text-gray-500">B.S. Information Systems</p>
          </div>
          <div className="flex items-center">
            <div className="rounded-xl bg-surface p-8 w-full text-center">
              <p className="mb-5 text-gray-500">
                Want to see the work behind these numbers?
              </p>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-dark hover:text-white"
              >
                View case studies
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  )
}
