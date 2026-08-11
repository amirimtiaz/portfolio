import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="hero reveal">
        <div className="hero-kicker">
          <span className="status-dot" /> Dallas, TX · Open to opportunities
        </div>
        <h1>
          I build intelligent
          <br />
          products powered by
          <br />
          <em>data &amp; AI.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            AI-native technical builder with a product mind. I turn ambiguous problems into useful,
            scalable experiences—starting with people, not technology.
          </p>
          <Link className="round-button" href="/work" aria-label="Explore selected work">
            <span>
              Explore
              <br />
              my work
            </span>
            <b>↓</b>
          </Link>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div />
          <div />
          <span>01</span>
        </div>
      </section>

      <section className="manifesto reveal">
        <p className="eyebrow">How I think</p>
        <p className="statement">
          Technology is leverage. <span>The real work is understanding the person, the system, and the problem well enough to know where to apply it.</span>
        </p>
        <div className="traits" aria-label="Core traits">
          <span>Versatile builder</span>
          <span>Intellectually curious</span>
          <span>Analytical powerhouse</span>
        </div>
      </section>

      <section className="page-links reveal">
        <div className="section-heading">
          <p className="eyebrow">Explore</p>
          <h2>Choose a lane.</h2>
        </div>
        <div className="link-grid">
          <Link href="/work" className="page-card">
            <span>01</span>
            <h3>Work</h3>
            <p>Selected product, fintech, and data initiatives.</p>
          </Link>
          <Link href="/experience" className="page-card">
            <span>02</span>
            <h3>Experience</h3>
            <p>Roles and learning moments across strategy and operations.</p>
          </Link>
          <Link href="/about" className="page-card">
            <span>03</span>
            <h3>About</h3>
            <p>How I think, what I value, and the toolkit I bring.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
