interface AboutProps {
  navigateTo: (page: string) => void
}

export default function About({ navigateTo }: AboutProps) {
  return (
    <>
      <div className="about-top">
        <div>
          <div className="about-name-row">
            <h1 className="about-name">Nick Kazmer</h1>
            <div className="about-role-label">Product Designer</div>
          </div>
          <div className="about-positioning-text">
            12 years shipping data products people actually use. I've designed analytics products across <strong>30+ enterprise teams</strong> and 5 industry verticals -- from self-service analytics to AI-powered applications. The products I've designed increased self-service adoption by <strong>40-70%</strong>, moving non-technical teams from requesting reports to making decisions themselves. I build with AI agents, prototype in code, and measure whether behavior actually changes. Ready for an end-to-end product design role where design owns outcomes, not deliverables.
          </div>
        </div>
      </div>

      <div className="about-section" style={{ paddingTop: '40px' }}>
        <div className="about-section-label">How I Work</div>
        <div className="how-grid">
          <div className="how-item">
            <div className="how-label">Process</div>
            <div className="how-title">I design for decisions, not dashboards</div>
            <div className="how-body">Every project starts with: who acts, what they decide, and what happens next. I work backward from the business outcome to the pixel.</div>
          </div>
          <div className="how-item">
            <div className="how-label">Collaboration</div>
            <div className="how-title">I sit between design and engineering</div>
            <div className="how-body">I pair directly with data engineers and stakeholders through discovery, prototyping, build, and launch. No handoff walls.</div>
          </div>
          <div className="how-item">
            <div className="how-label">AI-native</div>
            <div className="how-title">I build with AI agents, not just AI features</div>
            <div className="how-body">Custom agent workflows, knowledge base orchestration, and automation pipelines that multiply design output 2.3x.</div>
          </div>
          <div className="how-item">
            <div className="how-label">Shipping</div>
            <div className="how-title">I prototype in code and ship product</div>
            <div className="how-body">Working prototypes in React, not slide decks. I write production front-end, build design systems, and stay through launch metrics.</div>
          </div>
        </div>
      </div>

      <div className="about-section" style={{ paddingTop: '40px' }}>
        <div className="about-section-label">Experience</div>
        <div className="role-cards">
          <div className="role-card" onClick={() => navigateTo('case-study-1')} role="link" tabIndex={0}>
            <div className="role-card-left">
              <div className="role-card-header">
                <div className="role-card-title">Analytics Experience Design Practice</div>
                <div className="role-card-dates">2024 – Present</div>
              </div>
              <div className="role-card-org">Lovelytics · Experience Design Lead</div>
              <div className="role-card-body">Built a prototype-first design practice, AI agent workflow, and component library that ships across every engagement. AI amplifies design judgment -- I spend time on information architecture and interaction design instead of layout computation.</div>
            </div>
            <div className="role-card-right">
              <div className="role-card-kpis">
                <span className="role-metric"><span className="role-metric-num">2.3x</span><span className="role-metric-label">faster prototype-to-approval</span></span>
                <span className="role-metric"><span className="role-metric-num">40-60%</span><span className="role-metric-label">less rework from design-first</span></span>
                <span className="role-metric"><span className="role-metric-num">6</span><span className="role-metric-label">product surface types</span></span>
              </div>
              <div className="role-card-link">View case study ▶</div>
            </div>
          </div>

          <div className="role-card" onClick={() => navigateTo('case-study-2')} role="link" tabIndex={0}>
            <div className="role-card-left">
              <div className="role-card-header">
                <div className="role-card-title">Enterprise Analytics Experiences</div>
                <div className="role-card-dates">2022 – Present</div>
              </div>
              <div className="role-card-org">Lovelytics · Analytics Director</div>
              <div className="role-card-body">Designed analytics products across 30+ enterprise teams and 5 industry verticals. The pattern: redesign information architecture around what users need to decide, prototype in code, measure whether behavior actually changes.</div>
            </div>
            <div className="role-card-right">
              <div className="role-card-kpis">
                <span className="role-metric"><span className="role-metric-num">40-70%</span><span className="role-metric-label">self-service adoption increase</span></span>
                <span className="role-metric"><span className="role-metric-num">30+</span><span className="role-metric-label">enterprise products designed</span></span>
                <span className="role-metric"><span className="role-metric-num">5</span><span className="role-metric-label">industry verticals</span></span>
              </div>
              <div className="role-card-link">View case study ▶</div>
            </div>
          </div>

          <div className="role-card" onClick={() => navigateTo('case-study-3')} role="link" tabIndex={0}>
            <div className="role-card-left">
              <div className="role-card-header">
                <div className="role-card-title">Fortune 500 Product Ecosystem</div>
                <div className="role-card-dates">2023 – Present</div>
              </div>
              <div className="role-card-org">Lovelytics · Estee Lauder Companies</div>
              <div className="role-card-body">Led a design team shipping 6 products for a $14.3B Fortune 500 -- from GenAI shelf analytics to executive intelligence. Managed cross-functional design across 5 stakeholder groups with fundamentally different decision patterns.</div>
            </div>
            <div className="role-card-right">
              <div className="role-card-kpis">
                <span className="role-metric"><span className="role-metric-num">6</span><span className="role-metric-label">products shipped</span></span>
                <span className="role-metric"><span className="role-metric-num">20+</span><span className="role-metric-label">brand contexts designed for</span></span>
                <span className="role-metric"><span className="role-metric-num">3</span><span className="role-metric-label">products became platform IP</span></span>
              </div>
              <div className="role-card-link">View case study ▶</div>
            </div>
          </div>

          <div className="role-card" onClick={() => navigateTo('case-study-4')} role="link" tabIndex={0}>
            <div className="role-card-left">
              <div className="role-card-header">
                <div className="role-card-title">Product Platform Redesign</div>
                <div className="role-card-dates">2021 – 2022</div>
              </div>
              <div className="role-card-org">RefineRE · Director of Product</div>
              <div className="role-card-body">Full product redesign: user research, hypothesis formation, A/B testing, information architecture restructuring, and hypothesis-driven quarterly releases. The traditional product design arc from research through shipped, measured outcomes.</div>
            </div>
            <div className="role-card-right">
              <div className="role-card-kpis">
                <span className="role-metric"><span className="role-metric-num">75%</span><span className="role-metric-label">fewer support tickets</span></span>
                <span className="role-metric"><span className="role-metric-num">4→1</span><span className="role-metric-label">products unified</span></span>
                <span className="role-metric"><span className="role-metric-num">30-50%</span><span className="role-metric-label">fewer clicks per task</span></span>
              </div>
              <div className="role-card-link">View case study ▶</div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section" style={{ paddingTop: '40px', paddingBottom: '48px' }}>
        <div className="about-section-label">Skills</div>
        <div className="skills-compact">
          <div>
            <div className="skill-group-title">Design &amp; Research</div>
            <div className="skill-tags-wrap">
              <span className="skill-tag">Product Design</span>
              <span className="skill-tag">UX</span>
              <span className="skill-tag">Information Architecture</span>
              <span className="skill-tag">Design Systems</span>
              <span className="skill-tag">Prototyping</span>
              <span className="skill-tag">Data Viz</span>
              <span className="skill-tag">User Research</span>
              <span className="skill-tag">A/B Testing</span>
            </div>
          </div>
          <div>
            <div className="skill-group-title">Tools &amp; AI</div>
            <div className="skill-tags-wrap">
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Tailwind</span>
              <span className="skill-tag">Claude Code</span>
              <span className="skill-tag">Databricks</span>
              <span className="skill-tag">Looker</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Agent Prototyping</span>
            </div>
          </div>
          <div>
            <div className="skill-group-title">Product &amp; Strategy</div>
            <div className="skill-tags-wrap">
              <span className="skill-tag">Product Thinking</span>
              <span className="skill-tag">Cross-Functional</span>
              <span className="skill-tag">Success Metrics</span>
              <span className="skill-tag">GenAI Strategy</span>
              <span className="skill-tag">Research &amp; Discovery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-footer-line">
        <span>Minneapolis, MN</span>
        <span>(815) 861-8361</span>
        <span><a href="mailto:nicholas.a.kazmer@gmail.com">nicholas.a.kazmer@gmail.com</a></span>
        <span><a href="https://linkedin.com/in/nkazmer" target="_blank" rel="noreferrer">linkedin.com/in/nkazmer</a></span>
        <span>Marquette University, B.S. Information Systems</span>
      </div>
    </>
  )
}
