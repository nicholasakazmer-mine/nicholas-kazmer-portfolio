export interface CaseStudySection {
  heading: string
  content: string
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  dates: string
  role: string
  summary: string
  sections: CaseStudySection[]
  impact: string[]
  tags: string[]
  featured?: boolean
}

export const projects: CaseStudy[] = [
  {
    slug: "analytics-experience-design-practice",
    title: "Building a Design Practice from Scratch",
    client: "Lovelytics",
    dates: "2024 -- Present",
    role: "Experience Design Lead",
    featured: true,
    summary:
      "Took a data visualization service line and rebuilt it around design-led delivery with a prototype-first methodology.",
    sections: [
      {
        heading: "Context",
        content: `Lovelytics is a Databricks consulting partner. When I joined in 2022, the "Data Visualization" service line was exactly what the name suggests: we built dashboards. A client sends requirements, an analyst builds it in Looker or Sigma, the client reviews, we iterate until sign-off. No prototyping. No user research. No design system. Quality depended on who was staffed.

By 2024 I was running the practice. Then we merged with another consultancy, and suddenly I was integrating people from three different organizations into one team while keeping delivery running and clients happy. The visualization practice had been deprioritized before the merger. Culture had declined, investment had stalled, and the consultants didn't have a clear line of sight to their future. I had a choice: stabilize what existed or rebuild the whole thing.`,
      },
      {
        heading: "Problem",
        content: `Four things were broken:

The team didn't have a home. Post-merger, visualization consultants from the acquired firm entered without a clear role. The company had shifted its focus to Databricks and data engineering. These people were talented but didn't know where they fit.

Clients saw the work too late. The first time a stakeholder saw their analytics product was after it was mostly built. Changes at that point were expensive and exhausting for the team.

Every engagement started from zero. No reusable components, no shared patterns, no design system. Each project reinvented basic layout decisions and interaction patterns.

We had nothing to point to in sales. In pre-sales, we were competing on Databricks certifications and hourly rates. No design methodology, no portfolio of design outcomes, nothing that said "we think about this differently."`,
      },
      {
        heading: "Discovery",
        content: `I didn't run a formal discovery on our own practice. I just paid attention. After leading 30+ enterprise engagements, the failure pattern was consistent: stakeholders who saw early prototypes gave better feedback and approved faster, projects with user research produced analytics that actually got used, and prototypes before development meant fewer change requests during build.

The evidence was there. I just needed to formalize it.`,
      },
      {
        heading: "Design Decisions",
        content: `Prototype-first delivery. I built a four-stage methodology: Explore, Prototype, Pair, Validate. The difference from typical consulting is that the client sees a working prototype before any production code gets written. Not a Figma mock. A functional prototype that looks and behaves like the real thing.

AI-augmented design workflow. I built a system where Claude Code agents generate wireframes from design documents, run automated UI/UX reviews, and produce working prototypes. This isn't about replacing designers. It's about spending human attention on the decisions that matter. The agent handles layout computation, accessibility checks, and consistency validation. I focus on information architecture, interaction design, and whether the product actually helps someone make a decision.

A real design system. I built and maintain a component library (React, Tailwind CSS, shadcn/ui) that ships across every engagement. Shared components, shared patterns, shared quality bar. New projects start with the system, not a blank canvas.`,
      },
      {
        heading: "Solution",
        content: `The practice runs on the Explore / Prototype / Pair / Validate lifecycle:

Explore: Divergent research. Stakeholder interviews, user observation, competitive analysis. The goal is to understand what decision the user needs to make, not what chart they want to see.

Prototype: Build a working interactive prototype using the design system and AI agents. The client interacts with something real. Feedback goes from abstract ("make it more intuitive") to concrete ("this filter doesn't work for my workflow").

Pair: Embedded design alongside engineering during the production build. I'm not handing off a spec. I'm pairing through implementation, catching issues in real time, adjusting as technical constraints surface.

Validate: Ship, instrument for adoption, iterate based on what users actually do.

The AI workflow handles the initial build pass for prototypes. Agents read the design document, generate a wireframe, compile it to production-ready JSX, and run automated reviews against our UI/UX standards. I review the output, make the design decisions the agent can't, and iterate.

I also designed a custom analytics application with embedded AI chat for Estee Lauder called "Beauty Reimagined," which solved the client's frustration with enterprise BI presentation limits. It's now being productized as ExecLytics. Other client work fed back into reusable product IP: SkuLytics (GenAI-powered shelf analytics) and the SLOB Deal Builder (a real-time inventory recovery tool where sales reps build deals inside the data experience).

On the team side, I brought the acquired consultants in, gave them direction, found them consistent work, and integrated them into our delivery standards. They moved from uncertainty to 85-93% utilization. The senior consultants who'd been with me before the merger were energized by the new talent. Several hit 98-108% utilization. I built a team where consultants now own major workstreams, drive internal IP, and mentor others.

The practice went from 79.4% utilization in April (merger month) to 96.4% by July, finishing the year at 96.2%.`,
      },
      {
        heading: "Reflection",
        content: `The hardest part wasn't the system. It was the team. The merger could have gone badly. People were uncertain, the practice had been deprioritized, and the acquired consultants didn't know where they fit. I learned that culture is a design problem too. You have to understand what people need (clarity, purpose, growth), build something that works (consistent management, stretch assignments, visible investment), and iterate (regular 1:1s, real-time feedback, adjusting as people develop).

The methodology, the design system, the AI workflow? Easier wins. Introducing a prototype phase felt like adding time to delivery, but it actually reduced total time because we caught problems before they were expensive to fix. The AI workflow pushed this further. What used to take a week of layout work now takes a day, and most of that day is spent on the design decisions that actually matter.`,
      },
    ],
    impact: [
      "Built a design practice from scratch within a consulting org, through a merger",
      "Unified consultants from three backgrounds into one team",
      "Team utilization: 79.4% at merger to 96.2% year-end; multiple promotions every cycle",
      "Prototype-first methodology adopted as the standard delivery model",
      "Design system ships across every client project",
      "AI workflow generates wireframes, runs reviews, and produces prototypes",
      "Client work feeding into productized IP: SkuLytics, ExecLytics, SLOB Deal Builder",
      "Practice now competes on design outcomes, not hourly rates",
    ],
    tags: [
      "Design Systems",
      "AI/LLM Integration",
      "React",
      "Figma",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    slug: "enterprise-analytics-experiences",
    title: "Enterprise Analytics at Scale",
    client: "Lovelytics",
    dates: "2022 -- Present",
    role: "Analytics Director",
    featured: true,
    summary:
      "Self-service redesigns across 30+ enterprise accounts cut ad-hoc reporting by 40-70%.",
    sections: [
      {
        heading: "Context",
        content: `Lovelytics works with enterprise clients across CPG, energy, technology, manufacturing, and hospitality. These are organizations where the analytics team is drowning in ad-hoc requests. A VP needs a one-off report. A director wants the data sliced differently. An ops manager needs a number for a meeting in two hours. The analytics team becomes a service desk instead of a strategic function.

I own the design lifecycle for these engagements, and increasingly, the client relationships. I'm in the room during discovery. I lead user research, design information architecture, build prototypes in code, pair with engineering during build, and I'm still involved when we measure adoption post-launch. I also shape proposals through pre-sales technical discovery, translating data strategies into business value before the deal closes.

My largest account, Estee Lauder Companies (ELC), is the clearest example of how design-led delivery builds trust that turns into revenue.`,
      },
      {
        heading: "Problem",
        content: `The pattern repeats across industries: business teams don't trust self-service tools, so they ask analysts to pull numbers manually. This creates a cycle. The analytics team spends all their time on ad-hoc requests, so they don't have time to build better self-service tools, so business teams keep asking for manual pulls.

The problem isn't the data or the tools. It's the experience. Dashboards exist, but they're organized around the data model, not around the decisions people need to make. Users open a dashboard, can't find what they need in 30 seconds, and send a Slack message to the analytics team instead.`,
      },
      {
        heading: "Discovery",
        content: `Every engagement starts with the same question: what decision does this person need to make, and what's stopping them from making it with what they have?

I interview the people who request the most ad-hoc reports. Not their managers. The actual requestors. The conversations follow a pattern: they know what they need, they know it's somewhere in the dashboards, but the navigation doesn't match their mental model. They're not confused by the data. They're confused by the experience.

I also look at usage data. Which dashboards get opened? Which filters get used? Where do people drop off? The usage patterns sometimes tell a different story than the interviews. People say they want X, but the data shows they actually use Y.`,
      },
      {
        heading: "Design Decisions",
        content: `Organize around decisions, not data. Instead of mirroring the data model (sales by region, sales by product, sales by time), I restructure the IA around decisions: "Am I on track this quarter?" "Where should I focus next week?" "What changed since yesterday?" Each view answers a question, not displays a dataset.

Wireframe in code, not Figma. I build functional prototypes that stakeholders interact with before development starts. This eliminates the translation layer between a static mockup and a working product. When someone says "this doesn't work for my workflow," they're reacting to something real.

Pre-sales as design discovery. I shape proposals by leading technical discovery before the deal closes. The design starts during sales, not after. By kickoff, I already understand the user's workflow, the data landscape, and where the current experience fails.`,
      },
      {
        heading: "Solution",
        content: `The engagement model follows the Explore / Prototype / Pair / Validate lifecycle, adapted for enterprise scale:

In the explore phase, I interview 5-15 stakeholders and map their decision workflows. I identify the 3-5 decisions that drive most of the value and design around those.

The prototype phase produces a working interactive prototype in 1-2 weeks. Stakeholders react to something real. We validate or kill directions early, before any production investment.

During the paired build, I work with the engineering team. Reviewing implementations against the prototype, adjusting layouts as real data reveals edge cases, maintaining design intent through delivery.

Post-launch, I track adoption: daily active users, filter usage, time-on-page, and ad-hoc request volume. If the ad-hoc requests don't drop, the design didn't work.

The Estee Lauder story: I started with tactical wins. A $179K shelf health analytics build, quarterly support extensions in the $95-112K range. Each delivery was an opportunity to build trust through design quality. When ELC's enterprise BI tools hit their presentation limits, I designed "Beauty Reimagined," a custom analytics application with advanced UI/UX and embedded AI chat that gave executives the polish and interactivity they expected. That trust turned into the $3.4M FY26 contract renewal, which cleared my entire annual revenue target on one account.

I built a self-sustaining team on the account. Developed consultants who could operate independently, earn client trust, and expand their own workstreams. Then gave them the room to do it. As the team grew, I restructured delivery to bring up junior talent and integrate nearshore resources, improving margin without disrupting the client.

I also created a GenAI migration strategy for a $4M+ energy sector engagement. The approach combined content rationalization (roughly 75% content reduction) with smart routing: automate via GenAI (75%), replace with AI/BI (15%), migrate manually (10%). It reduced modernization timelines by about 75% and became a repeatable playbook.`,
      },
      {
        heading: "Reflection",
        content: `The 40-70% reduction in ad-hoc reporting is the number I care about most, because it's a behavior change, not just a deliverable. The dashboards existed before I redesigned them. The data was the same. What changed was the experience: information architecture, navigation, defaults, how the product anticipated what someone needed. That's what design does in analytics. It closes the gap between "the data is available" and "people actually use the data."

The Estee Lauder relationship taught me how design compounds. Every tactical delivery was a trust deposit. When we'd earned enough trust, the client let us build something ambitious (Beauty Reimagined). That work earned the multi-year renewal. And the team I built on the account meant it was sustainable. I wasn't a bottleneck. I was a multiplier.`,
      },
    ],
    impact: [
      "Self-service redesigns across 30+ accounts cut ad-hoc reporting by 40-70%",
      "Non-technical teams moved from requesting dashboards to using them",
      "$13.7M in deal influence, $3.8M managed revenue (1.5x target)",
      "Estee Lauder: tactical wins built into a $3.4M annual contract",
      "Built a self-sustaining client team with multiple promotions every cycle",
      "GenAI migration strategy reduced modernization timelines by ~75%",
      "Pre-sales design discovery now standard practice",
      "Client work fed into productized IP: SkuLytics, ExecLytics, SLOB Deal Builder",
    ],
    tags: [
      "User Research",
      "Information Architecture",
      "Prototyping",
      "Pre-sales Discovery",
    ],
  },
  {
    slug: "product-platform-redesign",
    title: "Redesigning a Real Estate Analytics Platform",
    client: "RefineRE",
    dates: "2021 -- 2022",
    role: "Director of Product",
    featured: true,
    summary:
      "Owned product design for a CRE analytics platform. A/B tests on core workflows reduced support tickets by 75%.",
    sections: [
      {
        heading: "Context",
        content: `RefineRE built a commercial real estate analytics platform used by institutional investors to evaluate portfolios worth hundreds of millions of dollars. Pension funds, REITs, and investment managers who need to compare properties, evaluate market conditions, and generate reports for their stakeholders.

I came in as Director of Product. At a startup this size, that meant I owned design, product strategy, and front-end development. The product had grown organically over time. Four separate data tools, each solving a specific problem, never unified into a coherent experience.`,
      },
      {
        heading: "Problem",
        content: `Support tickets were high and climbing. Users were calling in frustrated. The assumption internally was that they didn't understand the data. Commercial real estate analytics is complex, and the thinking was that users needed more training or better documentation.

I wasn't convinced. The data was sound. The calculations were correct. But something about the experience was failing.`,
      },
      {
        heading: "Discovery",
        content: `I started with the support tickets. Not the summaries. The actual tickets. I read hundreds of them and categorized the complaints. The pattern was clear: users weren't confused by the numbers. They were confused by where things were. "I can't find the comparison view." "Where did the report builder go?" "I was looking at this last week and now I can't find it."

Navigation was the problem, not data.

I set up a hypothesis: if we simplified the navigation without changing any underlying data or calculations, support tickets would drop. I ran A/B tests on the core workflows and tested simplified navigation against the existing structure.

I also interviewed power users and casual users. Power users had memorized the navigation and were fine. Casual users, the ones generating the most tickets, described the product as "overwhelming" and said they never knew where to start.`,
      },
      {
        heading: "Design Decisions",
        content: `Restructure IA around three decisions. I mapped user workflows and found that every interaction boiled down to one of three things: compare (how does this property stack up?), evaluate (should we buy, hold, or sell?), or report (how do I communicate this to stakeholders?). I restructured the entire IA around those actions.

Unify four products into one. The four standalone tools had been built separately and it showed. Different navigation patterns, different visual languages, different interaction models. I unified them into a single experience with consistent patterns. A user who learned to compare properties could apply the same mental model to evaluating markets or generating reports.

Ship incrementally, measure continuously. No big-bang redesign. I shipped changes quarterly. Each quarter had a thesis (e.g., "simplifying the comparison workflow will reduce support tickets for that feature by X%"), we shipped, and we measured.`,
      },
      {
        heading: "Solution",
        content: `The redesign was phased over four quarters:

Q1: Navigation restructure. Replaced the tool-centric navigation (Tool A, Tool B, Tool C, Tool D) with a decision-centric structure (Compare, Evaluate, Report). This was the riskiest change because it moved every user's cheese, but the A/B test data supported it.

Q2: Visual unification. Brought all four product surfaces to a consistent component library. Same cards, same tables, same filter patterns. Less cognitive load when switching between workflows.

Q3: Workflow optimization. Simplified the most common paths based on usage data. Reduced clicks-to-completion for the top 5 workflows by 30-50%.

Q4: Reporting overhaul. Rebuilt the report builder based on customer interviews. Users wanted to go from "looking at data" to "presenting data to stakeholders" in one flow, not three.

I built the product roadmap from research findings and shipped quarterly.`,
      },
      {
        heading: "Reflection",
        content: `The biggest lesson from RefineRE was the power of a specific hypothesis. "Users aren't confused by the data, they're confused by the navigation" is testable. We tested it, it was right, and the 75% ticket reduction proved it. If I'd gone with the internal assumption ("users need more training"), we would have built onboarding flows and documentation that wouldn't have moved the needle. The problem wasn't understanding. It was findability.

This is where I learned to trust A/B testing in enterprise products. There's a bias in B2B that says "our users are too sophisticated for A/B tests" or "our sample sizes are too small." RefineRE had enough users to run meaningful tests, and the results were clear.`,
      },
    ],
    impact: [
      "75% reduction in support tickets through A/B-tested navigation restructuring",
      "Unified four standalone data products into one experience",
      "IA restructured around three core user decisions (compare, evaluate, report)",
      "Quarterly shipping cadence, each release tied to a measurable hypothesis",
      "Customer interviews validated the redesign matched users' mental models",
    ],
    tags: ["A/B Testing", "User Research", "Information Architecture", "Product Strategy"],
  },
  {
    slug: "analytics-practice-design-patterns",
    title: "Building an Analytics Practice from Zero",
    client: "Accenture",
    dates: "2016 -- 2022",
    role: "Analytics Engineering Manager",
    summary:
      "Built a Looker practice from nothing -- recruited the team, created reusable delivery assets, and landed a Google partnership.",
    sections: [
      {
        heading: "Context",
        content: `I spent six years at Accenture, the last four embedded with WarnerMedia and other media and entertainment companies. When I started, there was no Looker practice at Accenture. No team, no delivery assets, no client relationships. I built it.

Looker was still niche in the enterprise space. Most large organizations were on Tableau, Business Objects, or early Power BI. Looker was code-first (LookML), sat on top of a semantic layer, and required a different kind of implementation than dragging and dropping charts. That difference was the opportunity.`,
      },
      {
        heading: "Problem",
        content: `Two problems at different scales:

Building the practice. Accenture didn't have a Looker capability. No templates, no trained consultants, no reference architecture, no client logos. Everything from scratch: recruit the team, create reusable delivery assets, build credibility, and land the first clients.

The WarnerMedia engagement. WarnerMedia and the broader media clients had analytics teams overwhelmed by the volume of content decisions. Hundreds of titles, dozens of platforms, audience segments fragmenting across streaming and linear. The analytics existed but lived in spreadsheets, one-off queries, and tribal knowledge. The people who needed the data (content strategists, programming executives, ad sales teams) weren't analysts. They needed fast decisions about what content to invest in, where to promote it, and how to price advertising.`,
      },
      {
        heading: "Discovery",
        content: `Practice building: I mapped the Looker ecosystem. Who was deploying it, what industries, what use cases. Media and entertainment was underserved. Existing BI firms offered generic Tableau or Power BI implementations. Nobody was building Looker-native delivery models for media companies.

Client work: At WarnerMedia, I spent time with the people who consumed analytics, not just the ones who built them. Content strategists described their workflow: pull data from three systems, copy it into a spreadsheet, build a summary for their VP, present it in a meeting. Hours of work, repeated weekly. They didn't need a "dashboard." They needed the answer to show up in a format they could act on immediately.`,
      },
      {
        heading: "Design Decisions",
        content: `Reusable delivery assets. I created a library of LookML patterns, dashboard templates, and design patterns that could be adapted across clients. New projects started with tested patterns instead of a blank model. This cut delivery time and improved consistency.

Design for the non-analyst. Every analytics product I designed at WarnerMedia started with the question: "Who is this for, and what decision are they making?" If the answer was "a content strategist deciding which titles to promote this week," the experience needed to put that answer front and center. Not buried in a pivot table.

Google partnership for credibility. I pursued a formal partnership with Google Cloud (Looker's parent company). The partnership gave us co-marketing, training access, and credibility. When a prospect asked "who does Looker implementations?", Google pointed at us.`,
      },
      {
        heading: "Solution",
        content: `Over six years, I built a practice from zero to a recognized Looker capability within Accenture:

Year 1: Recruited the initial team, built the reusable asset library, established the Google partnership, and landed 4 clients.

Years 2-4 (WarnerMedia): Embedded with the client, designing self-service analytics for content strategy, audience measurement, and ad sales. Six major media brands, each with different data stacks and user populations, all unified under a consistent design approach. The common thread: making data usable for people who aren't analysts. Removing the spreadsheet-copy-paste-present workflow and replacing it with something they could use directly.

Years 5-6: Expanded the practice, trained new consultants on the methodology, and established design patterns other teams could reuse. The practice became self-sustaining.`,
      },
      {
        heading: "Reflection",
        content: `Six years of this work is where I learned that analytics adoption is a design problem. The data was always there. The tools were capable. What determined whether anyone used the analytics was the experience layer. How the information was organized, whether it matched the user's mental model, whether they could get to an answer without switching to a spreadsheet.

This is also where I realized practice building and product design use the same muscle. Reusable delivery assets are a product for internal users. The Google partnership was go-to-market. Recruiting and training the team was organizational design. Different scale, same thinking: understand what people need, build something that works, iterate.`,
      },
    ],
    impact: [
      "Built a Looker practice from zero: team, assets, methodology, client relationships",
      "Google partnership generated 4 clients in year one",
      "Self-service analytics for 6 major media brands including WarnerMedia",
      "Reusable delivery assets and design patterns adopted across the practice",
      "Reduced content strategy teams' weekly reporting from hours to minutes",
    ],
    tags: ["Looker", "Snowflake", "Practice Building", "Media & Entertainment"],
  },
]

export function getProject(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): CaseStudy[] {
  return projects.filter((p) => p.featured)
}
