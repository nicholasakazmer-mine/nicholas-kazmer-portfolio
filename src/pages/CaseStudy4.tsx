import { CaseStudyTabs } from '@/components/CaseStudyTabs'

interface Props {
  navigateTo: (page: string) => void
}

export default function CaseStudy4({ navigateTo }: Props) {
  const tabs = [
    {
      id: 'discovery',
      label: 'Discovery',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Read hundreds of support tickets and categorized them by root cause instead of surface symptom. Ran user interviews with both power users and casual users to validate the patterns. The finding: power users navigated by muscle memory, but casual users (the ones generating most tickets) couldn't form a mental model across four disconnected tools. A/B tested a simplified navigation prototype against the existing information architecture with a representative user cohort. The data was conclusive: users weren't confused by analytics, they were confused by information architecture. That hypothesis drove every design decision that followed.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">100s</span><span className="cs-inline-label">tickets categorized</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">A/B</span><span className="cs-inline-label">tested with user cohort</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">1</span><span className="cs-inline-label">testable hypothesis</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'decisions',
      label: 'Design Decisions',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Restructured the entire information architecture around three core decisions that institutional investors actually make: compare properties, evaluate performance, and generate reports. Instead of organizing by data source or product module, every screen maps to one of these decision pathways. Unified visual patterns across all four tools so the same interaction means the same thing everywhere. Shipped incrementally with measurable hypotheses each quarter.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">3</span><span className="cs-inline-label">decision pathways</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">1</span><span className="cs-inline-label">unified pattern library</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'execution',
      label: 'Phased Execution',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Shipped over four quarters, each with a specific hypothesis, a measurable target, and a validation checkpoint before advancing. Q1: navigation restructure around three decision pathways, with the hypothesis that simplified information architecture would reduce "can't find" tickets. Q2: visual unification across all four tools with consistent interaction patterns, with the hypothesis that consistent affordances would reduce learning time. Q3: workflow optimization targeting 30-50% fewer clicks per task. Q4: reporting overhaul giving stakeholders export-ready outputs without manual assembly. Every quarter shipped, measured, and informed the next.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">4</span><span className="cs-inline-label">quarterly releases</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">30-50%</span><span className="cs-inline-label">fewer clicks</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'validation',
      label: 'Validation',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Customer interviews validated the redesign at each phase, not just "do you like it" conversations, but task-based usability testing where users completed core workflows while I measured time-to-completion and error rates. Support ticket volume dropped 75% over the full rollout. The biggest learning: starting with a specific, testable hypothesis ("users are confused by navigation, not data") made every design decision defensible, every result measurable, and every stakeholder conversation grounded in evidence instead of opinion.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">75%</span><span className="cs-inline-label">ticket reduction</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">4</span><span className="cs-inline-label">validated releases</span></div>
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
            <div className="case-study-meta">RefineRE · 2021 -- 2022</div>
            <h1 className="case-study-title">Product Platform Redesign</h1>
            <div className="case-study-role">Director of Product</div>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-number">75%</div><div className="stat-label">Fewer Support Tickets</div></div>
            <div className="stat-card"><div className="stat-number">4→1</div><div className="stat-label">Products Unified</div></div>
            <div className="stat-card"><div className="stat-number">30-50%</div><div className="stat-label">Fewer Clicks per Task</div></div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--g400)', lineHeight: 1.7, margin: 0 }}>
            As Director of Product, I owned the full redesign of a CRE analytics platform: four separate tools that had never been unified. Support tickets were high and climbing. The internal assumption was that <strong style={{ color: 'var(--g600)' }}>users didn't understand the data</strong>, but the data was sound. I read hundreds of support tickets, ran user interviews, and A/B tested navigation with a subset of users. The pattern was clear: <strong style={{ color: 'var(--g600)' }}>users weren't confused by numbers, they were confused by where things were.</strong> This is a traditional product design story: research, hypothesis, test, ship, measure.
          </p>
          <div className="cs-decision-flow">
            <div className="cs-decision-heading">How Users Actually Decide</div>
            <div className="cs-decision-steps">
              <div className="cs-decision-step">
                <div className="cs-decision-icon">1</div>
                <div className="cs-decision-name">Compare</div>
                <div className="cs-decision-desc">Which properties?</div>
              </div>
              <div className="cs-decision-step">
                <div className="cs-decision-icon">2</div>
                <div className="cs-decision-name">Evaluate</div>
                <div className="cs-decision-desc">How is it performing?</div>
              </div>
              <div className="cs-decision-step">
                <div className="cs-decision-icon">3</div>
                <div className="cs-decision-name">Report</div>
                <div className="cs-decision-desc">Share findings</div>
              </div>
            </div>
            <div className="cs-decision-label">4 disconnected tools → 1 unified experience</div>
          </div>
        </div>
      </section>

      <CaseStudyTabs tabs={tabs} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 48px' }}>
        <p className="reflection-text" style={{ textAlign: 'left', margin: 0, maxWidth: '60%' }}>
          The power of a specific hypothesis. "Users confused by navigation, not data" was testable, and it made every design decision defensible.
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('case-study-3') }} className="case-study-back" style={{ marginBottom: 0 }}>
            <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>➔</span> Depth at Fortune 500
          </a>
        </div>
      </div>
    </>
  )
}
