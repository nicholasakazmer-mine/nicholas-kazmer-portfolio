import { CaseStudyTabs } from '@/components/CaseStudyTabs'

interface Props {
  navigateTo: (page: string) => void
}

export default function CaseStudy2({ navigateTo }: Props) {
  const tabs = [
    {
      id: 'discovery',
      label: 'Research & Discovery',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Design starts before the first sprint. Research covers three layers (industry trends, company strategy, and role-specific workflows) so I arrive with hypothesis use cases instead of blank whiteboards. The discovery framework centers on four questions: who needs to act, what problem are they solving, what action will they take, and what outcome does that drive. I interview the people who request the most ad-hoc reports (not their managers) and cross-reference with usage data to find where the experience actually breaks down.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">5-15</span><span className="cs-inline-label">stakeholders per project</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">4</span><span className="cs-inline-label">discovery questions</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">5</span><span className="cs-inline-label">industry verticals</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'methodology',
      label: 'Design Approach',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Every engagement starts with "what decision does this person need to make?" Not "what data do they want to see?" Dashboards get restructured around business questions, not data models. Prototypes go to stakeholders before code gets written. The methodology maps six workflow categories across every account: discovery, monitoring, investigation, forecasting, decision support, and automated response. A semantic layer provides the single source of truth that enables self-service and AI integration.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">6</span><span className="cs-inline-label">workflow categories</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">40-70%</span><span className="cs-inline-label">ad-hoc reduction</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">140</span><span className="cs-inline-label">analyst hours saved/mo</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'ip',
      label: 'Products Shipped',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Client delivery produced three shipped products that now scale across the portfolio. A GenAI shelf analytics tool where sales reps build recovery deals in real-time from AI insights. Not a dashboard, a revenue tool. A composable executive intelligence platform with a dual-layer design system (product shell + analytical content). An AI inventory recovery tool where the workflow lives inside the data experience. Each started as a client project and became a reusable product.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">3</span><span className="cs-inline-label">products shipped</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">60-70%</span><span className="cs-inline-label">pattern reuse across verticals</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'genai',
      label: 'AI Integration',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Designed the experience layer for AI-powered analytics migration. The key information architecture decision: rationalize 75% of legacy content before migration, then route what remains through three pathways: automate via GenAI (75%), replace with natural language querying (15%), and manual migration for only the most stable content (10%). The design challenge was making AI/BI natural language querying feel trustworthy to enterprise users who were used to exact-match dashboards. This approach became a reusable product across the portfolio.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">75%</span><span className="cs-inline-label">content rationalized</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">$4.2M</span><span className="cs-inline-label">Xcel Energy win</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">3x</span><span className="cs-inline-label">faster documentation</span></div>
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
            <div className="case-study-meta">Lovelytics · 2022 -- Present</div>
            <h1 className="case-study-title">Enterprise Analytics at Scale</h1>
            <div className="case-study-role">Analytics Director</div>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-number">40-70%</div><div className="stat-label">Self-service Adoption Increase</div></div>
            <div className="stat-card"><div className="stat-number">30+</div><div className="stat-label">Enterprise Products Designed</div></div>
            <div className="stat-card"><div className="stat-number">5</div><div className="stat-label">Industry Verticals</div></div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--g400)', lineHeight: 1.7, margin: 0 }}>
            The pattern repeats across industries: dashboards organized around data models instead of decisions. Users open a dashboard, can't find what they need in 30 seconds, and send a Slack to the analytics team instead. I design the full product lifecycle (<strong style={{ color: 'var(--g600)' }}>research, information architecture, prototyping, paired build, and post-launch iteration</strong>) across finance, supply chain, marketing, operations, sales, and executive stakeholders. The core insight: <strong style={{ color: 'var(--g600)' }}>ask "what decision does this person need to make?" instead of "what data do they want to see?"</strong>
          </p>
          <div className="cs-portfolio-map">
            <div className="cs-portfolio-heading">Portfolio Scale</div>
            <div className="cs-portfolio-rows">
              <div className="cs-portfolio-row">
                <div className="cs-portfolio-vertical">CPG</div>
                <div className="cs-portfolio-bar" style={{ width: '100%' }}></div>
                <div className="cs-portfolio-accounts">5 accounts</div>
              </div>
              <div className="cs-portfolio-row">
                <div className="cs-portfolio-vertical">Energy</div>
                <div className="cs-portfolio-bar" style={{ width: '72%' }}></div>
                <div className="cs-portfolio-accounts">5 accounts</div>
              </div>
              <div className="cs-portfolio-row">
                <div className="cs-portfolio-vertical">Manufacturing</div>
                <div className="cs-portfolio-bar" style={{ width: '56%' }}></div>
                <div className="cs-portfolio-accounts">6 accounts</div>
              </div>
              <div className="cs-portfolio-row">
                <div className="cs-portfolio-vertical">Healthcare</div>
                <div className="cs-portfolio-bar" style={{ width: '44%' }}></div>
                <div className="cs-portfolio-accounts">4 accounts</div>
              </div>
              <div className="cs-portfolio-row">
                <div className="cs-portfolio-vertical">Hospitality</div>
                <div className="cs-portfolio-bar" style={{ width: '32%' }}></div>
                <div className="cs-portfolio-accounts">3 accounts</div>
              </div>
            </div>
            <div className="cs-portfolio-teams">
              <span className="cs-portfolio-pill">Finance</span>
              <span className="cs-portfolio-pill">Supply Chain</span>
              <span className="cs-portfolio-pill">Marketing</span>
              <span className="cs-portfolio-pill">Operations</span>
              <span className="cs-portfolio-pill">Sales</span>
              <span className="cs-portfolio-pill">Executive Leadership</span>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyTabs tabs={tabs} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 48px' }}>
        <p className="reflection-text" style={{ textAlign: 'left', margin: 0, maxWidth: '60%' }}>
          The 40-70% self-service adoption is a behavior change, not a deliverable. The data was the same. The experience changed: information architecture, navigation, defaults, how the product anticipated what someone needed.
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('case-study-1') }} className="case-study-back" style={{ marginBottom: 0 }}>
            <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>➔</span> Building the Practice
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('case-study-3') }} className="case-study-back" style={{ marginBottom: 0 }}>
            Depth at Fortune 500 ➔
          </a>
        </div>
      </div>
    </>
  )
}
