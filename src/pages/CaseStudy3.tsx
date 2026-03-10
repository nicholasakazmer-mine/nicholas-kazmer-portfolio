import { CaseStudyTabs } from '@/components/CaseStudyTabs'

interface Props {
  navigateTo: (page: string) => void
}

export default function CaseStudy3({ navigateTo }: Props) {
  const tabs = [
    {
      id: 'complexity',
      label: 'Stakeholder Complexity',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Five stakeholder groups, each with different decision cadences and data needs. Marketing needs campaign attribution across 20+ brands. Merchandising needs shelf health and inventory risk at the SKU level. CRM needs customer lifecycle analytics. Operations needs supply chain visibility. Executives need a unified view that rolls up across all of it. I built a framework for reconciling these competing needs: map each group's core decisions, identify shared data foundations, then design purpose-built surfaces that diverge where mental models diverge but converge on shared interaction patterns and design language.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">5</span><span className="cs-inline-label">stakeholder groups</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">20+</span><span className="cs-inline-label">prestige brands</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">3</span><span className="cs-inline-label">decision cadences</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'surfaces',
      label: 'Product Design',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Each product was designed as a purpose-built application, not a dashboard. The GenAI shelf analytics tool lets sales reps build recovery deals in real-time from AI-generated insights instead of waiting for analyst reports. The executive intelligence platform is composable: a design system separates app shell (navigation, branding, transitions) from analytical content (charts, KPIs, tables). The division lets product design be bold and distinctive while analytical content stays functional and accessible.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">6</span><span className="cs-inline-label">products shipped</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">2</span><span className="cs-inline-label">GenAI-powered</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">3</span><span className="cs-inline-label">productized as IP</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'system',
      label: 'Design System',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>Built a design system that enforces a clear division of responsibility: the app shell (navigation, layout, branding, transitions) follows product design principles: bold, distinctive, memorable. The analytical content within (charts, KPIs, data tables) follows data visualization standards: functional, accessible, scannable. This dual-layer approach lets each surface have its own identity while maintaining consistency where it matters: data accuracy, accessibility compliance, and interaction patterns.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">2</span><span className="cs-inline-label">design layers</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">WCAG AA</span><span className="cs-inline-label">compliance</span></div>
          </div>
        </>
      ),
    },
    {
      id: 'growth',
      label: 'Design-Led Growth',
      content: (
        <>
          <p style={{ fontSize: '13px', color: 'var(--g500)', lineHeight: 1.7, marginBottom: '16px' }}>What started as a single analytics engagement grew into the firm's largest account through design-led expansion. I managed a team of designers shipping across parallel workstreams, coordinating design reviews, maintaining system consistency, and ensuring each product met the quality bar. Tactical design wins built trust: a well-designed prototype closed the next phase before the current one shipped. Three products originally built for this account (the GenAI shelf analytics tool, executive intelligence platform, and AI inventory recovery tool) are now productized as reusable platform IP across the CPG vertical.</p>
          <div className="cs-inline-metrics">
            <div className="cs-inline-metric"><span className="cs-inline-num">$3.4M</span><span className="cs-inline-label">earned through design</span></div>
            <div className="cs-inline-metric"><span className="cs-inline-num">3</span><span className="cs-inline-label">products became platform IP</span></div>
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
            <div className="case-study-meta">Lovelytics · Estee Lauder Companies · 2023 -- Present</div>
            <h1 className="case-study-title">Fortune 500 Product Ecosystem</h1>
            <div className="case-study-role">Lead Designer</div>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-number">6</div><div className="stat-label">Products Shipped</div></div>
            <div className="stat-card"><div className="stat-number">20+</div><div className="stat-label">Brand Contexts Designed For</div></div>
            <div className="stat-card"><div className="stat-number">3</div><div className="stat-label">Products Became Platform IP</div></div>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--g400)', lineHeight: 1.7, margin: 0 }}>
            Lead designer on a $14.3B Fortune 500 digital transformation, the largest account in the firm. I led a team of designers across 6 products spanning marketing, merchandising, CRM, operations, and executive intelligence for 20+ prestige brands. The challenge: <strong style={{ color: 'var(--g600)' }}>five stakeholder groups with fundamentally different decision patterns</strong> all need to trust the same platform. I designed the product ecosystem end-to-end, from <strong style={{ color: 'var(--g600)' }}>custom app shells and dual-layer design systems</strong> through analytical content, while managing a cross-functional design team shipping in parallel.
          </p>
          <div className="cs-product-ecosystem">
            <div className="cs-product-heading">Products Designed</div>
            <div className="cs-product-grid">
              <div className="cs-product-card">
                <div className="cs-product-name">GenAI Shelf Analytics</div>
                <div className="cs-product-desc">Sales reps build recovery deals in real-time</div>
              </div>
              <div className="cs-product-card">
                <div className="cs-product-name">Executive Intelligence Platform</div>
                <div className="cs-product-desc">Executives self-serve without analyst support</div>
              </div>
              <div className="cs-product-card">
                <div className="cs-product-name">AI Inventory Recovery Tool</div>
                <div className="cs-product-desc">Revenue recovered through AI-powered insights</div>
              </div>
              <div className="cs-product-card">
                <div className="cs-product-name">Cross-Brand Analytics Hub</div>
                <div className="cs-product-desc">Unified analytics across 20+ brand contexts</div>
              </div>
              <div className="cs-product-card">
                <div className="cs-product-name">Campaign Performance Dashboard</div>
                <div className="cs-product-desc">Marketers track performance independently</div>
              </div>
              <div className="cs-product-card">
                <div className="cs-product-name">Supply Chain Monitor</div>
                <div className="cs-product-desc">Ops teams spot issues before escalation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudyTabs tabs={tabs} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px 48px' }}>
        <p className="reflection-text" style={{ textAlign: 'left', margin: 0, maxWidth: '60%' }}>
          Tactical design wins built trust. Trust earned expansion. Expansion created the space to build real products, and three of them became platform IP.
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('case-study-2') }} className="case-study-back" style={{ marginBottom: 0 }}>
            <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>➔</span> Breadth at Scale
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('case-study-4') }} className="case-study-back" style={{ marginBottom: 0 }}>
            Classic Product Design ➔
          </a>
        </div>
      </div>
    </>
  )
}
