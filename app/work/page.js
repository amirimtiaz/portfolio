export default function WorkPage() {
  return (
    <section className="work page-section">
      <div className="section-heading reveal">
        <p className="eyebrow">Selected work · 2026</p>
        <h2>
          Built to move
          <br />
          ideas forward.
        </h2>
      </div>

      <article className="project project-featured reveal">
        <div className="project-visual meridian-visual">
          <div className="product-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <b>MERIDIAN / ANALYSIS</b>
            </div>
            <div className="score-panel">
              <small>RECRUITER READINESS</small>
              <strong>
                86<span>/100</span>
              </strong>
              <div className="score-line">
                <i />
              </div>
            </div>
            <div className="signal-grid">
              <span>
                Role alignment <b>High</b>
              </span>
              <span>
                Evidence density <b>Strong</b>
              </span>
              <span>
                ATS clarity <b>92%</b>
              </span>
            </div>
            <div className="scan-line" />
          </div>
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
          <a href="https://github.com/amirimtiaz" target="_blank" rel="noreferrer">
            View project direction <b>↗</b>
          </a>
        </div>
      </article>

      <article className="project project-reverse reveal">
        <div className="project-visual borderless-visual">
          <div className="phone">
            <div className="phone-top">
              <b>Capital One</b>
              <span>•••</span>
            </div>
            <small>YOU SEND</small>
            <strong>
              $500.00 <i>USD</i>
            </strong>
            <div className="exchange">1 USD = 17.90 MXN</div>
            <small>THEY RECEIVE</small>
            <strong>
              8,950.00 <i>MXN</i>
            </strong>
            <button>Send money →</button>
          </div>
          <div className="borderless-type">
            BORDER
            <br />
            LESS
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
            <strong>2nd</strong>
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
        </div>
      </article>

      <article className="project reveal">
        <div className="project-visual supply-visual">
          <div className="data-ring">
            <span>WIP</span>
            <strong>360°</strong>
          </div>
          <div className="metric metric-one">
            <small>INVENTORY VISIBILITY</small>
            <b>LIVE</b>
          </div>
          <div className="metric metric-two">
            <small>PROCESS</small>
            <b>PLAN → TRACK → ACT</b>
          </div>
          <div className="grid-lines" />
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
        </div>
      </article>
    </section>
  );
}
