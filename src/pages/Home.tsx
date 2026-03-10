interface HomeProps {
  navigateTo: (page: string) => void
}

export default function Home({ navigateTo }: HomeProps) {
  return (
    <div className="home-layout">
      <div className="home-top">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-headline">I design data<br />products people<br />actually use.</h1>
            <p className="hero-subtitle">12 years shipping analytics products across 30+ enterprise teams. I design around decisions, prototype in code, and measure whether people actually changed how they work.</p>
            <div className="cta-group">
              <button className="cta-primary" onClick={() => navigateTo('about')}>About me ▸</button>
            </div>
          </div>
        </section>
      </div>

      <div className="work-row">
        <div className="work-column-header">Experience</div>
        <div className="cards-grid">
          <div className="card" onClick={() => navigateTo('case-study-1')}>
            <div className="card-meta">Lovelytics · 2024 – Present</div>
            <h3 className="card-title">AI-Augmented Design Practice</h3>
            <p className="card-summary">AI agent workflow, component library, and prototype-first methodology that ships across every engagement.</p>
            <div className="card-tags">
              <span className="tag">AI Workflows</span>
              <span className="tag">Design Systems</span>
              <span className="tag">Strategy</span>
            </div>
          </div>
          <div className="card" onClick={() => navigateTo('case-study-2')}>
            <div className="card-meta">Lovelytics · 2022 – Present</div>
            <h3 className="card-title">Enterprise Analytics at Scale</h3>
            <p className="card-summary">30+ enterprise products across 5 industries. Users went from requesting reports to making decisions themselves.</p>
            <div className="card-tags">
              <span className="tag">User Research</span>
              <span className="tag">Information Architecture</span>
              <span className="tag">Prototyping</span>
            </div>
          </div>
          <div className="card" onClick={() => navigateTo('case-study-3')}>
            <div className="card-meta">Lovelytics · ELC · 2023 – Present</div>
            <h3 className="card-title">Fortune 500 Product Ecosystem</h3>
            <p className="card-summary">6 products for a Fortune 500 digital transformation. Managed the design team across parallel workstreams.</p>
            <div className="card-tags">
              <span className="tag">Product Design</span>
              <span className="tag">Team Leadership</span>
              <span className="tag">GenAI</span>
            </div>
          </div>
          <div className="card" onClick={() => navigateTo('case-study-4')}>
            <div className="card-meta">RefineRE · 2021 – 2022</div>
            <h3 className="card-title">Product Platform Redesign</h3>
            <p className="card-summary">Unified four CRE analytics products into one. A/B-tested IA restructure cut support tickets 75%.</p>
            <div className="card-tags">
              <span className="tag">A/B Testing</span>
              <span className="tag">User Research</span>
              <span className="tag">Information Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
