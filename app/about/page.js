import Image from 'next/image';
import amirHeadshot from '../images/amir.png';
import { ToolCloud } from '../../components/tool-cloud';

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
        <div className="toolkit-heading"><p className="eyebrow">The toolkit</p><h2>Tools are only useful<br />when they move the work.</h2><p>A practical stack spanning discovery, decisions, design, data, and delivery.</p></div>
        <div className="cap-grid">
          <div className="cap-card cap-product">
            <span>01 / PRODUCT</span>
            <h3>Product</h3>
            <p>From an unclear problem to a testable roadmap.</p>
            <div className="mini-roadmap"><i>Discover</i><b>Define</b><i>Prototype</i><i>Measure</i></div>
            <div className="cap-tools"><span><Image src="/skills/figma.svg" alt="" width={22} height={22}/>Figma</span><span>◇ Wireframes</span><span>↗ Strategy</span></div>
          </div>
          <div className="cap-card cap-data">
            <span>02 / DATA</span>
            <h3>Data</h3>
            <p>Evidence into a narrative people can act on.</p>
            <div className="mini-bars">{[44,72,58,91,78].map((height, index) => <i style={{height: `${height}%`}} key={index}/>)}</div>
            <div className="cap-tools"><span><Image src="/skills/powerbi.svg" alt="" width={22} height={22}/>Power BI</span><span><Image src="/skills/postgresql.svg" alt="" width={22} height={22}/>SQL</span><span><Image src="/skills/python.svg" alt="" width={22} height={22}/>Python</span></div>
          </div>
          <div className="cap-card cap-technology">
            <span>03 / TECHNOLOGY</span>
            <h3>Technology</h3>
            <p>Fast prototypes backed by intelligent systems.</p>
            <div className="ai-orbit"><Image src="/skills/openai.svg" alt="OpenAI" width={38} height={38}/><i>LLM</i><i>API</i><i>RAG</i></div>
            <div className="cap-tools"><span><Image src="/skills/openai.svg" alt="" width={22} height={22}/>OpenAI</span><span><Image src="/skills/cloud.svg" alt="" width={22} height={22}/>Cloud</span><span>⌘ Prompt engineering</span></div>
          </div>
          <div className="cap-card cap-leadership">
            <span>04 / LEADERSHIP</span>
            <h3>Leadership</h3>
            <p>Alignment, clarity, and momentum across a team.</p>
            <div className="people-map"><i>A</i><i>D</i><b>AMIR</b><i>E</i><i>S</i></div>
            <div className="cap-tools"><span>◎ Facilitation</span><span>✦ Storytelling</span><span>✓ Execution</span></div>
          </div>
        </div>
        <ToolCloud />
      </section>

      <section id="contact" className="closing reveal page-section scroll-section">
        <div className="contact-heading">
          <div className="contact-emblem" aria-hidden="true">✦<i>↗</i></div>
          <p className="eyebrow">What&apos;s next?</p>
          <h2>Let&apos;s build something<br /><em>that matters.</em></h2>
          <p>I&apos;m interested in product, program, strategy, and data opportunities where curiosity and technical leverage create real-world impact.</p>
          <div className="contact-details">
            <a href="mailto:amirimtiazflm@gmail.com"><span>✉</span><div><small>Email</small><b>amirimtiazflm@gmail.com</b></div></a>
            <a href="tel:+14694730015"><span>☎</span><div><small>Phone</small><b>+1 469-473-0015</b></div></a>
          </div>
        </div>
        <form className="contact-form" action="mailto:amirimtiazflm@gmail.com" method="post" encType="text/plain">
          <div className="contact-fields">
            <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
            <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
          </div>
          <label>Reason for reaching out
            <select name="reason" defaultValue="">
              <option value="" disabled>Select a topic</option>
              <option>Job opportunity</option><option>Project collaboration</option><option>Networking</option><option>Something else</option>
            </select>
          </label>
          <label>Message<textarea name="message" placeholder="Tell me what you're thinking..." rows={5} required /></label>
          <button type="submit">Send message <span>↗</span></button>
          <a href="mailto:amirimtiazflm@gmail.com">or email me directly</a>
        </form>
      </section>
    </>
  );
}
