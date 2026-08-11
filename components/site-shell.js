'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Amir Imtiaz, home">
        AI<span>·</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/about">About</Link>
      </nav>
      <a className="contact-link" href="mailto:amir.imtiaz.business@gmail.com">
        Let&apos;s talk <span>↗</span>
      </a>
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
        <a href="https://www.linkedin.com/in/amir-imtiaz" target="_blank" rel="noreferrer">
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

    const handlePointerMove = (event) => {
      const orbit = document.querySelector('.hero-orbit');
      if (!orbit || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      orbit.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, [pathname]);

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <SiteHeader />
      <main id="top" className="page-shell">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
