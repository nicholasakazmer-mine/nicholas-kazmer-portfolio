import { CaseStudyTabs } from '@/components/CaseStudyTabs'

interface Props {
  navigateTo: (page: string) => void
}

export default function CaseStudy1({ navigateTo }: Props) {
  const tabs = [
    {
      id: 'methodology',
      label: 'Methodology',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '20px' }}>Built a four-stage lifecycle that every engagement runs through. Design investment up front (2-4 weeks) typically saves 4-8 weeks of rework during build. Each stage has a quality gate that must pass before moving forward.</p>
          <div className="cs-phases">
            <div className="cs-phase">
              <div className="cs-phase-bar"></div>
              <div className="cs-phase-num">Phase 1</div>
              <div className="cs-phase-name">Discover</div>
              <div className="cs-phase-desc">Stakeholder interviews, use case mapping, story statements, scope agreement</div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-bar"></div>
              <div className="cs-phase-num">Phase 2</div>
              <div className="cs-phase-name">Prototype</div>
              <div className="cs-phase-desc">Wireframes, data storytelling review, UI/UX review, stakeholder sign-off (max 2 rounds)</div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-bar"></div>
              <div className="cs-phase-num">Phase 3</div>
              <div className="cs-phase-name">Pair</div>
              <div className="cs-phase-desc">Design walkthrough, artifact handoff, component mapping, daily standups with dev</div>
            </div>
            <div className="cs-phase">
              <div className="cs-phase-bar"></div>
              <div className="cs-phase-num">Phase 4</div>
              <div className="cs-phase-name">Validate</div>
              <div className="cs-phase-desc">Design review checkpoints, visual QA, implementation fidelity, final sign-off</div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'ai',
      label: 'AI-Augmented Design',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Built custom AI agent workflows where Claude Code generates wireframes from design documents, runs automated UI/UX reviews against our standards, and produces annotated prototypes. The agents handle layout computation, accessibility checks, and consistency validation. I focus on information architecture, interaction design, and whether the product actually helps someone make a decision. The result: 2.3x faster prototype delivery, with human judgment on every design decision that matters.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">2.3x</span><span className="cs-inline-label">output multiplier</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">129</span><span className="cs-inline-label">design assets in 4 weeks</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">290</span><span className="cs-inline-label">SME hours saved/year</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'system',
      label: 'Design System',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Built a component library (React, Tailwind, shadcn/ui) with code-ready design tokens that ships across every engagement. Covers color, typography (Jost + DM Sans), spacing (8pt grid), shadows, and responsive breakpoints. Component specs for KPI cards, chart containers, tables, and navigation patterns. Each new account inherits the system: App 1 is full effort, Apps 2-3 run at 80%, App 4+ at 65%.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">6</span><span className="cs-inline-label">surface types covered</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">65%</span><span className="cs-inline-label">effort by App 4+</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'scale',
      label: 'Strategy & Evolution',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Evolved the practice from dashboard delivery to product design. Repositioned the service around analytics experience design, framing every engagement around decisions and outcomes rather than charts and data models. Productized into three engagement models: Design Sprints (single product, 2-3 weeks), Multi-Product Programs (3-5 products, one quarter), and Embedded Design Leads (ongoing). Built a team curriculum covering UI/UX, data storytelling, and AI-augmented design workflows.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">3</span><span className="cs-inline-label">productized models</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">4</span><span className="cs-inline-label">curriculum modules</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">6</span><span className="cs-inline-label">max concurrent accounts</span></div>
          </div>
        </>
      ),
    },
  ]

  return (
    <>
      <section className="case-study-hero">
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('about') }} className="case-study-back">
          <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>➔</span> About
        </a>
        <div className="cs1-hero-grid">
          <div className="case-study-title-group">
            <div className="case-study-meta">Lovelytics · 2024 -- Present</div>
            <h1 className="case-study-title">AI-Augmented Design Practice</h1>
            <div className="case-study-role">Experience Design Lead</div>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-number">2.3x</div><div className="stat-label">Faster Prototype-to-Approval</div></div>
            <div className="stat-card"><div className="stat-number">40-60%</div><div className="stat-label">Less Rework from Design-First</div></div>
            <div className="stat-card"><div className="stat-number">6</div><div className="stat-label">Product Surface Types</div></div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--g400)', lineHeight: 1.7, margin: 0 }}>
            Design was an afterthought. Stakeholders saw their product for the first time after it was mostly built. Every project reinvented basic patterns. I built a <strong style={{ color: 'var(--g600)' }}>prototype-first methodology</strong>, an <strong style={{ color: 'var(--g600)' }}>AI agent workflow</strong> where Claude Code generates wireframes from design documents and runs automated reviews, and a <strong style={{ color: 'var(--g600)' }}>shared design system</strong> that compounds across every project. The result: I spend my time on information architecture and interaction design instead of layout computation.
          </p>
          <div className="cs-transform-compact">
            <div className="cs-transform-col">
              <div className="cs-transform-heading">Before</div>
              <div className="cs-transform-item">Dashboard-only delivery</div>
              <div className="cs-transform-item">Engineers gather requirements in kickoff</div>
              <div className="cs-transform-item">Stakeholder feedback after code</div>
              <div className="cs-transform-item">Each account starts from zero</div>
              <div className="cs-transform-item">30-50% engineering rework</div>
            </div>
            <div className="cs-transform-arrow">➔</div>
            <div className="cs-transform-col">
              <div className="cs-transform-heading">After</div>
              <div className="cs-transform-item">6 surfaces: apps, AI tools, embedded, ops, design systems</div>
              <div className="cs-transform-item">Validated design document before build</div>
              <div className="cs-transform-item">Feedback on wireframes (iteration is cheap)</div>
              <div className="cs-transform-item">Design system compounds across engagements</div>
              <div className="cs-transform-item">40-60% less rework from design-first</div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyTabs tabs={tabs} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 48px' }}>
        <p className="reflection-text" style={{ textAlign: 'left', margin: 0, maxWidth: '60%' }}>
          The prototype phase felt like adding time. It actually removed it. We caught problems before they were expensive to fix. AI pushed this further. What took a week of layout work now takes a day, and that day is spent on the decisions that actually matter.
        </p>
        <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('case-study-2') }} className="case-study-back" style={{ marginBottom: 0 }}>
          Breadth at Scale ➔
        </a>
      </div>
    </>
  )
}
