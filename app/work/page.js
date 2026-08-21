import Image from 'next/image';
import { ToolCloud } from '../../components/tool-cloud';

const badges = {
  meridian: [['/skills/openai.svg', 'OpenAI'], ['/skills/cloud.svg', 'Cloud'], ['/skills/figma.svg', 'Figma'], ['/skills/python.svg', 'Python']],
  borderless: [['/skills/openai.svg', 'LLMs'], ['/skills/cloud.svg', 'Cloud'], ['/skills/figma.svg', 'Product'], ['/skills/react.svg', 'Prototype']],
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


    </section>
  );
}
