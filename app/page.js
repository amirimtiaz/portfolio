import Link from 'next/link';
import Image from 'next/image';
import amirHeadshot from './images/amir.png';
import { HeroScene } from '../components/hero-scene';
import WorkPage from './work/page';
import ExperiencePage from './experience/page';
import AboutPage from './about/page';

export default function HomePage() {
  return (
    <>
      <section className="hero reveal">
        <HeroScene />
        <div className="hero-content">
          <div className="hero-intro">
            <div className="hero-photo">
              <Image src={amirHeadshot} alt="Amir Imtiaz" priority sizes="120px" />
            </div>
            <div className="hero-identity">
              <p>Hello, I&apos;m <strong>Amir.</strong></p>
              <div className="hero-socials">
                <a href="https://www.linkedin.com/in/amir-imtiaz-flm/" target="_blank" rel="noreferrer" aria-label="Amir Imtiaz on LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 7.1H1.6V22h3.6V7.1ZM3.4 1A2.1 2.1 0 1 0 3.4 5.2 2.1 2.1 0 0 0 3.4 1ZM22.4 13.4c0-4.5-2.4-6.6-5.6-6.6-2.6 0-3.7 1.4-4.4 2.4V7.1H8.8V22h3.6v-7.4c0-2 .4-3.9 2.8-3.9 2.4 0 2.4 2.2 2.4 4V22h3.6l1.2-8.6Z" /></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/amirimtiaz" target="_blank" rel="noreferrer" aria-label="Amir Imtiaz on GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" /></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <p className="hero-overline">AI-native technical builder · Product thinker · Systems problem solver</p>
          <h1>
            I build intelligent products
            <br />
            powered by <em>data &amp; AI.</em>
          </h1>
          <div className="hero-philosophy">
            <p className="eyebrow">How I think</p>
            <p>
              Technology is leverage. <span>The real work is understanding the person, the system, and the problem well enough to know where to apply it.</span>
            </p>
          </div>
          <div className="hero-actions">
            <p>
              I turn ambiguous problems into useful, scalable experiences—starting with people, not technology.
            </p>
            <Link className="round-button" href="#work" aria-label="Explore selected work">
              <span>Explore my work</span><b>↓</b>
            </Link>
          </div>
          <div className="traits" aria-label="Core traits">
            <span>Versatile builder</span><span>Intellectually curious</span><span>Analytical powerhouse</span>
          </div>
        </div>
      </section>

      <section className="page-links reveal" aria-label="Portfolio sections">
        <div className="section-heading">
          <p className="eyebrow">Explore</p>
          <h2>Scroll through the story.</h2>
        </div>
        <div className="link-grid">
          <Link href="#work" className="page-card">
            <span>01</span>
            <h3>Work</h3>
            <p>Selected product, fintech, and data initiatives.</p>
          </Link>
          <Link href="#experience" className="page-card">
            <span>02</span>
            <h3>Experience</h3>
            <p>Roles and learning moments across strategy and operations.</p>
          </Link>
          <Link href="#about" className="page-card">
            <span>03</span>
            <h3>About</h3>
            <p>How I think, what I value, and the toolkit I bring.</p>
          </Link>
        </div>
      </section>

      <div id="work" className="scroll-section">
        <WorkPage />
      </div>
      <div id="experience" className="scroll-section">
        <ExperiencePage />
      </div>
      <div id="about" className="scroll-section">
        <AboutPage showIntro={false} />
      </div>
    </>
  );
}
