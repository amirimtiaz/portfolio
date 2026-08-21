'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const roles = [
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
    images: ['/experience/capital-one-team.png', '/experience/capital-one-presenting.jpg'],
    outcome: '1st place',
    outcomeLabel: 'Capital One Launchpad',
  },
  {
    date: 'JUNE 2026 · 1 WEEK EVENT',
    company: 'IMC Trading',
    title: 'U.S. Chess Academy Qualifier & Finalist',
    team: 'U.S. Chess Academy',
    location: 'Chicago, Illinois',
    logo: '/logos/imc-trading.svg',
    logoAlt: 'IMC Trading logo',
    skills: [
      { icon: '♞', name: 'Strategic Thinking' },
      { icon: '◫', name: 'Probability' },
      { icon: '↗', name: 'Decision Making' },
      { icon: '⌁', name: 'Risk Analysis' },
    ],
    outcome: 'Finalist',
    outcomeLabel: 'IMC U.S. Chess Academy',
    chess: true,
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
    date: 'MAY 2025 — MAY 2026',
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

function ChessBoard() {
  const boardRef = useRef(null);
  const [knight, setKnight] = useState({ x: 18, y: 18 });
  const [captured, setCaptured] = useState([]);
  const targets = [{ id: 'pawn', piece: '♟', x: 64, y: 26 }, { id: 'rook', piece: '♜', x: 36, y: 66 }, { id: 'bishop', piece: '♝', x: 78, y: 70 }];
  const move = (event) => {
    if (!boardRef.current) return;
    const bounds = boardRef.current.getBoundingClientRect();
    const x = Math.max(3, Math.min(86, ((event.clientX - bounds.left) / bounds.width) * 100 - 7));
    const y = Math.max(3, Math.min(72, ((event.clientY - bounds.top) / bounds.height) * 100 - 10));
    setKnight({ x, y });
    setCaptured((current) => [...new Set([...current, ...targets.filter((target) => Math.hypot(target.x - x, target.y - y) < 14).map((target) => target.id)])]);
  };
  return <div ref={boardRef} className="chess-stage" aria-label="Interactive chessboard: drag the knight to capture pieces">
    <div className="chess-board">{Array.from({ length: 16 }, (_, square) => <i key={square} />)}</div>
    {targets.filter((target) => !captured.includes(target.id)).map((target) => <span className="capture-piece" style={{ left: `${target.x}%`, top: `${target.y}%` }} key={target.id}>{target.piece}</span>)}
    <button style={{ left: `${knight.x}%`, top: `${knight.y}%` }} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); move(event); }} onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) move(event); }} onPointerUp={(event) => event.currentTarget.releasePointerCapture(event.pointerId)} aria-label="Drag knight">♞</button>
    <em>{captured.length ? `${captured.length} captured` : 'Drag knight to capture'}</em>
  </div>;
}

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
        <h2>Where I&apos;ve made<br />an impact.</h2>
      </div>
      <div className="timeline">
        <div className="timeline-track" aria-hidden="true"><i /></div>
        {roles.map((role, index) => (
          <article className="role reveal" key={role.company} style={{ '--role-index': index }}>
            <div className="role-side">
              <time>{role.date}</time>
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
              {role.images && <div className={`role-gallery role-gallery-${role.images.length}`}>
                {role.images.map((image, imageIndex) => <Image src={image} alt={`${role.company} experience ${imageIndex + 1}`} width={320} height={380} key={image} />)}
              </div>}
              {role.chess && <ChessBoard />}
            </div>
            <div className={`timeline-logo ${role.company === 'Capital One' ? 'capital-one-mark' : ''} ${role.company === 'IMC Trading' ? 'imc-mark' : ''}`}>
              <Image src={role.logo} alt={role.logoAlt} width={96} height={96} />
            </div>
            <div className="role-card">
              <p className="role-location">{role.location}</p>
              <h3>{role.title}</h3>
              <p className="role-company">{role.company} · {role.team}</p>
              {role.outcome && <div className="role-outcome"><strong>{role.outcome}</strong><span>{role.outcomeLabel}</span></div>}
            </div>
          </article>
        ))}
      </div>
      <section className="recommendations reveal" aria-labelledby="recommendations-title">
        <div><p className="eyebrow">Recommendations</p><h2 id="recommendations-title">Words from people<br/>I&apos;ve worked with.</h2><p>Full recommendation letters from leaders who saw my work, ownership, and impact firsthand.</p></div>
        <div className="recommendation-grid">
          <a href="/experience/recommendation-cvs.png" target="_blank" rel="noreferrer"><Image src="/experience/recommendation-cvs.png" alt="Recommendation letter from CVS Pharmacy" width={1102} height={1428}/><span><b>CVS Pharmacy</b><small>Chioma Simon-Ebughu, PharmD</small><em>Read full letter ↗</em></span></a>
        </div>
      </section>
    </section>
  );
}
