import Image from 'next/image';
import { ToolCloud } from '../../components/tool-cloud';

const badges = {
  meridian: [['/skills/openai.svg', 'OpenAI'], ['/skills/cloud.svg', 'Cloud'], ['/skills/figma.svg', 'Figma'], ['/skills/python.svg', 'Python']],
  borderless: [['/skills/openai.svg', 'LLMs'], ['/skills/cloud.svg', 'Cloud'], ['/skills/figma.svg', 'Product'], ['/skills/react.svg', 'Prototype']],
  supply: [['/skills/powerbi.svg', 'Power BI'], ['/skills/postgresql.svg', 'SQL'], ['/skills/python.svg', 'Python'], ['/skills/cloud.svg', 'Data systems']],
};

function ProjectBadges({ items }) {
  return <div className="project-badges">{items.map(([src, name], index) => <span style={{ '--badge-index': index }} key={name}><Image src={src} alt="" width={24} height={24} /><b>{name}</b></span>)}</div>;
}

export default function WorkPage() {
  return (
    <section className="work page-section">
      <div className="section-heading reveal">
        <p className="eyebrow section-kicker">Selected work · 2026 <span>✦</span></p>
        <h2>
          Built to move
          <br />
          ideas forward. <i aria-hidden="true">↗</i>
        </h2>
      </div>
      <ToolCloud compact />

      <article className="project project-featured reveal">
        <div className="project-visual meridian-visual">
          <Image className="reference-dashboard meridian-reference" src="/work/meridian-dashboard.png" alt="Meridian application intelligence dashboard" width={1488} height={970} priority quality={100} />
          <div className="visual-tag">01 / PRODUCT + AI</div>
        </div>
        <div className="project-copy">
          <p className="project-number">01</p>
          <h3>Meridian</h3>
          <p className="project-subtitle">Navigate the hiring system.</p>
          <p>
            An AI-powered career intelligence platform that models the modern recruiting pipeline—from ATS parsing to recruiter review—to help candidates build resumes that actually reach people.
          </p>
          <div className="project-meta">
            <span>Product strategy</span>
            <span>AI / LLMs</span>
            <span>UX research</span>
            <span>Analytics</span>
          </div>
          <ProjectBadges items={badges.meridian} />
          <a href="https://github.com/amirimtiaz" target="_blank" rel="noreferrer">
            View project direction <b>↗</b>
          </a>
        </div>
      </article>

      <article className="project project-reverse reveal">
        <div className="project-visual borderless-visual">
          <div className="borderless-slides">
            <figure className="borderless-main"><Image src="/work/borderless-architecture.png" alt="Borderless cloud architecture and cybersecurity product flow" width={1574} height={886} /><figcaption>01 · SECURE PAYMENT FLOW</figcaption></figure>
            <figure><Image src="/work/borderless-transfer.png" alt="Borderless recipient and transfer confirmation experience" width={1582} height={890} /><figcaption>02 · GLOBAL TRANSFER</figcaption></figure>
            <figure><Image src="/work/borderless-ai-features.png" alt="Borderless AI chatbot, virtual wallet, and product features" width={1574} height={878} /><figcaption>03 · AI NAVIGATOR</figcaption></figure>
          </div>
          <div className="visual-tag">02 / FINTECH</div>
        </div>
        <div className="project-copy">
          <p className="project-number">02</p>
          <h3>Borderless</h3>
          <p className="project-subtitle">Global payments, made human.</p>
          <p>
            A cross-border payment concept built at Capital One Launchpad. The team designed a secure in-app remittance experience, an AI financial navigator, and a path to financial inclusion through remittance-based underwriting.
          </p>
          <div className="outcome">
            <strong>1st</strong>
            <span>
              place overall
              <br />
              Capital One HACU Launchpad
            </span>
          </div>
          <div className="project-meta">
            <span>Fintech</span>
            <span>Product</span>
            <span>Cloud architecture</span>
            <span>AI</span>
          </div>
          <ProjectBadges items={badges.borderless} />
        </div>
      </article>

      <article className="project reveal">
        <div className="project-visual supply-visual">
          <div className="supply-app" role="img" aria-label="Supply chain operations dashboard with inventory, cycle time, work stages, and material status">
            <aside><div className="supply-mark">SC</div><span>Overview</span><span className="active">Operations</span><span>Inventory</span><span>Vendors</span><small>NTTA · SIGN SHOP</small></aside>
            <section><header><div><small>OPERATIONS INTELLIGENCE</small><b>Supply chain control tower</b></div><span><i/> Live data</span></header>
              <div className="supply-kpis"><div><small>WIP INVENTORY</small><b>1,284</b><em>↓ 8.4%</em></div><div><small>ON-TIME FLOW</small><b>94.6%</b><em>↑ 3.1%</em></div><div><small>AVG. CYCLE TIME</small><b>4.2d</b><em>↓ 0.8d</em></div><div><small>AT-RISK ITEMS</small><b>23</b><em className="warn">Needs review</em></div></div>
              <div className="supply-grid"><div className="throughput"><header><b>Weekly throughput</b><small>COMPLETED UNITS</small></header><div className="chart-area"><i/><i/><i/><i/><i/><i/><i/></div><footer><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></footer></div>
                <div className="status-donut"><header><b>Material status</b><small>1,284 UNITS</small></header><div className="donut"><b>76%</b><small>READY</small></div><p><span>Ready <b>976</b></span><span>In progress <b>214</b></span><span>Blocked <b>94</b></span></p></div>
                <div className="stage-flow"><header><b>Work stages</b><small>CURRENT LOAD</small></header><p><span>Design <b>248</b></span><i style={{'--fill':'72%'}}/></p><p><span>Print <b>319</b></span><i style={{'--fill':'89%'}}/></p><p><span>Assembly <b>186</b></span><i style={{'--fill':'56%'}}/></p><p><span>QA / Dispatch <b>107</b></span><i style={{'--fill':'38%'}}/></p></div>
              </div>
            </section>
          </div>
          <div className="visual-tag">03 / DATA SYSTEMS</div>
        </div>
        <div className="project-copy">
          <p className="project-number">03</p>
          <h3>Supply Chain Intelligence</h3>
          <p className="project-subtitle">Turning inventory into decisions.</p>
          <p>
            Developed a work-in-process inventory framework for NTTA&apos;s Sign Shop transition, translating fragmented operational data into clearer tracking, decision support, and leadership visibility.
          </p>
          <div className="project-meta">
            <span>Data analysis</span>
            <span>Operations</span>
            <span>Process design</span>
            <span>Stakeholders</span>
          </div>
          <ProjectBadges items={badges.supply} />
        </div>
      </article>
    </section>
  );
}
