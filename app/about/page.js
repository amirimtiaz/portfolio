import Image from 'next/image';
import amirHeadshot from '../images/amir.png';

export default function AboutPage({ showIntro = true }) {
  return (
    <>
      {showIntro && <section className="about-intro reveal page-section">
        <div className="about-intro-copy">
          <p className="eyebrow">About me</p>
          <h1>
            Builder. Strategist.
            <br />
            <em>Always curious.</em>
          </h1>
        </div>
        <div className="about-portrait">
          <Image
            src={amirHeadshot}
            alt="Headshot of Amir Imtiaz"
            priority
            sizes="(max-width: 720px) 100vw, 42vw"
          />
          <span aria-hidden="true">AMIR IMTIAZ · DALLAS, TX</span>
        </div>
      </section>}

      {showIntro && <section className="manifesto reveal page-section">
        <p className="eyebrow">How I think</p>
        <p className="statement">
          Technology is leverage. <span>The real work is understanding the person, the system, and the problem well enough to know where to apply it.</span>
        </p>
        <div className="traits" aria-label="Core traits">
          <span>Versatile builder</span>
          <span>Intellectually curious</span>
          <span>Analytical powerhouse</span>
        </div>
      </section>}

      <section className="capabilities reveal page-section">
        <p className="eyebrow">The toolkit</p>
        <div className="cap-grid">
          <div>
            <span>01</span>
            <h3>Product</h3>
            <p>Strategy, discovery, roadmapping, requirements, experimentation</p>
          </div>
          <div>
            <span>02</span>
            <h3>Data</h3>
            <p>SQL, Python, R, Excel, Power BI, Tableau, statistical analysis</p>
          </div>
          <div>
            <span>03</span>
            <h3>Technology</h3>
            <p>AI/LLMs, cloud architecture, APIs, data pipelines, prototyping</p>
          </div>
          <div>
            <span>04</span>
            <h3>Leadership</h3>
            <p>Cross-functional alignment, storytelling, ambiguity, execution</p>
          </div>
        </div>
      </section>

      <section id="contact" className="closing reveal page-section scroll-section">
        <p className="eyebrow">What&apos;s next?</p>
        <h2>
          Let&apos;s build something
          <br />
          <em>that matters.</em>
        </h2>
        <div>
          <p>
            I&apos;m interested in product, program, strategy, and data opportunities where curiosity and technical leverage create real-world impact.
          </p>
          <a href="mailto:amir.imtiaz.business@gmail.com">
            Start a conversation <span>↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
