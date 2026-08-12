import Image from 'next/image';

const tools = [
  ['Python', '/skills/python.svg', 'python'], ['JavaScript', '/skills/javascript.svg', 'javascript'],
  ['React', '/skills/react.svg', 'react'], ['TypeScript', '/skills/typescript.svg', 'typescript'],
  ['Power BI', '/skills/powerbi.svg', 'powerbi'], ['PostgreSQL', '/skills/postgresql.svg', 'postgresql'],
  ['MySQL', '/skills/mysql.svg', 'mysql'], ['Figma', '/skills/figma.svg', 'figma'],
  ['Next.js', '/skills/nextdotjs.svg', 'nextjs'], ['Tailwind', '/skills/tailwindcss.svg', 'tailwind'],
  ['HTML', '/skills/html5.svg', 'html'], ['CSS', '/skills/css.svg', 'css'],
];

export function ToolCloud({ compact = false }) {
  return (
    <div className={`tool-cloud ${compact ? 'tool-cloud-compact' : ''}`} aria-label="Technical tools">
      {tools.map(([name, logo, kind], index) => (
        <div className={`tool-pill tool-${kind}`} style={{ '--tool-index': index }} key={name}>
          <Image src={logo} alt="" width={26} height={26} /><span>{name}</span>
        </div>
      ))}
    </div>
  );
}
