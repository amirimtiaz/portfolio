'use client';

import Link from 'next/link';
import { useEffect, useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function SiteHeader({ visible }) {
  return (
    <header className={`site-header ${visible ? 'site-header-visible' : ''}`}>
      <Link className="wordmark" href="/#top" aria-label="Amir Imtiaz, back to top">
        Amir Imtiaz<span>·</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#about">About</Link>
      </nav>
      <Link className="contact-link" href="/#contact">
        <i aria-hidden="true">✦</i> Let&apos;s talk <span>↘</span>
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-about">
          <h3>About</h3>
          <p>Building useful, intelligent products through technology, product judgment, and human-centered thinking.</p>
          <div className="footer-socials">
            <a href="https://github.com/amirimtiaz" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
            <a href="https://www.linkedin.com/in/amir-imtiaz-flm/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link href="/#top">Home</Link><Link href="/#about">About</Link><Link href="/#work">Work</Link><Link href="/#experience">Experience</Link><Link href="/#contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <a href="mailto:amirimtiazflm@gmail.com">Email: amirimtiazflm@gmail.com</a>
          <a href="tel:+14694730015">Phone: +1 469-473-0015</a>
          <p>Dallas, Texas, United States</p>
        </div>
      </div>
      <div className="footer-bottom"><small>© {new Date().getFullYear()} Amir Imtiaz. All rights reserved.</small><span>Designed &amp; built with intention.</span></div>
    </footer>
  );
}

export function SiteShell({ children }) {
  const pathname = usePathname();
  const [headerVisible, setHeaderVisible] = useState(false);

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';

    const resetRootScroll = () => {
      if (pathname === '/' && !window.location.hash) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      }
    };

    resetRootScroll();
    const frame = window.requestAnimationFrame(resetRootScroll);
    window.addEventListener('pageshow', resetRootScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pageshow', resetRootScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));

    let scrollFrame;
    const handleScroll = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        document.documentElement.style.setProperty('--scroll-progress', progress);
        setHeaderVisible(window.scrollY > Math.min(420, window.innerHeight * 0.48));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(scrollFrame);
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, [pathname]);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <SiteHeader visible={headerVisible} />
      <main id="top" className="page-shell">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
