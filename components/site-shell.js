'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function SiteHeader({ visible }) {
  return (
    <header className={`site-header ${visible ? 'site-header-visible' : ''}`}>
      <Link className="wordmark" href="/" aria-label="Amir Imtiaz, home">
        AI<span>·</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#about">About</Link>
      </nav>
      <Link className="contact-link" href="/#contact">
        Let&apos;s talk <span>↗</span>
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="wordmark" href="/">
        AI<span>·</span>
      </Link>
      <p>Designed &amp; built with intention.</p>
      <div>
        <a href="https://www.linkedin.com/in/amir-imtiaz-flm/" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href="https://github.com/amirimtiaz" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
      <small>
        © <span>{new Date().getFullYear()}</span> Amir Imtiaz
      </small>
    </footer>
  );
}

export function SiteShell({ children }) {
  const pathname = usePathname();
  const [headerVisible, setHeaderVisible] = useState(false);

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
