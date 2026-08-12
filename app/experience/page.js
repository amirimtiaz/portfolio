'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const roles = [
  {
    date: 'MAY — AUG 2026',
    company: 'North Texas Tollway Authority',
    title: 'Supply Chain Data Analyst Intern',
    team: 'Procurement & Logistics',
    location: 'Plano, Texas',
    logo: '/logos/ntta-orange.png',
    logoAlt: 'NTTA orange T logo',
    skills: [
      { logo: '/skills/powerbi.svg', name: 'Power BI' },
      { logos: ['/skills/postgresql.svg', '/skills/mysql.svg'], name: 'SQL (Postgres, MySQL)' },
      { icon: '▥', name: 'Data Storytelling' },
      { icon: '↗', name: 'Process Design' },
      { icon: '⌁', name: 'Analytics' },
    ],
  },
  {
    date: 'JULY 2026 · 1 WEEK FELLOWSHIP',
    company: 'Capital One',
    title: 'Launchpad Leadership Program Fellow',
    team: 'Technology & Business Track',
    location: 'McLean, Virginia',
    logo: '/logos/capital-one-navy.png',
    logoAlt: 'Capital One logo on a navy background',
    skills: [
      { icon: '◇', name: 'Product Management & Development' },
      { icon: '$', name: 'FinTech (Financial Technology)' },
      { icon: '↗', name: 'Strategy' },
      { logo: '/skills/openai.svg', name: 'Applied AI' },
      { logo: '/skills/cloud.svg', name: 'Cloud Systems' },
    ],
  },
  {
    date: 'AUGUST 2025 — PRESENT',
    company: '180 Degrees Consulting',
    title: 'Strategy Consultant - Project Team Lead',
    team: 'Social Impact Consulting',
    location: 'Dallas, Texas',
    logo: '/logos/180dc.png',
    logoAlt: '180 Degrees Consulting logo',
    skills: [
      { icon: '◫', name: 'Roadmapping' },
      { icon: '↔', name: 'Stakeholder alignment' },
      { icon: '◌', name: 'User research' },
    ],
  },
  {
    date: '2025 — 2026',
    company: 'CVS Health',
    title: 'Pharmacy Technician',
    team: 'Patient & Pharmacy Operations',
    location: 'Dallas, Texas',
    logo: '/logos/cvs-health.png',
    logoAlt: 'CVS Health logo',
    skills: [
      { icon: '♡', name: 'Patient service' },
      { icon: '✓', name: 'Quality control' },
      { icon: '⧖', name: 'High-tempo operations' },
    ],
  },
];

export default function ExperiencePage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!section || reduceMotion) return undefined;

    let frame;
    const update = () => {
      const bounds = section.getBoundingClientRect();
      const travel = bounds.height + window.innerHeight;
      const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / travel));
      section.style.setProperty('--experience-progress', progress);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="experience page-section experience-timeline">
      <div className="section-heading reveal">
        <p className="eyebrow">Experience</p>
        <h2>Learning by<br />building.</h2>
      </div>
      <div className="timeline">
        <div className="timeline-track" aria-hidden="true"><i /></div>
        {roles.map((role, index) => (
          <article className="role reveal" key={role.company} style={{ '--role-index': index }}>
            <time>{role.date}</time>
            <div className={`timeline-logo ${role.company === 'Capital One' ? 'capital-one-mark' : ''}`}>
              <Image src={role.logo} alt={role.logoAlt} width={96} height={96} />
            </div>
            <div className="role-card">
              <p className="role-location">{role.location}</p>
              <h3>{role.title}</h3>
              <p className="role-company">{role.company} · {role.team}</p>
              <div className="learned-label">Skills</div>
              <div className="learned-skills">
                {role.skills.map((skill) => (
                  <div className="skill-sticker" key={skill.name}>
                    <span className={skill.logo || skill.logos ? 'technical-mark' : ''} aria-hidden="true">
                      {skill.logo && <Image src={skill.logo} alt="" width={20} height={20} />}
                      {skill.logos?.map((logo) => <Image src={logo} alt="" width={17} height={17} key={logo} />)}
                      {!skill.logo && !skill.logos && skill.icon}
                    </span>
                    <b>{skill.name}</b>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
