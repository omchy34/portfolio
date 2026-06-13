"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend Development",
    accentColor: "#61DAFB",
    skills: [
      { name: "React.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "WordPress",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    ],
  },
  {
    id: "backend",
    label: "Backend Architecture",
    accentColor: "#68A063",
    skills: [
      { name: "Node.js",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "FastAPI",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Python",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    id: "databases",
    label: "Databases & Storage",
    accentColor: "#47A248",
    skills: [
      { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Firebase",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Prisma",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    accentColor: "#FF9900",
    skills: [
      { name: "Docker",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Vercel",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "Linux",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Postman",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Figma",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
];

function CategoryIcon({ id, color }: { id: string; color: string }) {
  switch (id) {
    case "frontend":
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l-3 3 3 3M15 9l3 3-3 3"/></svg>;
    case "backend":
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
    case "databases":
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
    case "devops":
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
    default:
      return null;
  }
}

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Skills() {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" style={{ minHeight: "100vh", padding: "6rem 1.5rem 8rem", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        .sk-fade { opacity:0; transform:translateY(22px); transition:opacity 0.65s ease, transform 0.65s ease; }
        .sk-fade.sk-in { opacity:1; transform:translateY(0); }

        .sk-eyebrow {
          display:inline-flex; align-items:center; gap:10px;
          font-size:0.68rem; font-weight:700; letter-spacing:0.20em;
          text-transform:uppercase; color:#FF9900; margin-bottom:12px;
        }
        .sk-eyebrow::before {
          content:''; display:block; width:24px; height:1.5px;
          background:#FF9900; flex-shrink:0;
        }
        .sk-h2 {
          font-size:clamp(2.2rem,5vw,3.4rem); font-weight:800;
          color:#fff; letter-spacing:-0.035em; line-height:0.95; margin:0;
        }

        .sk-cat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media(max-width:640px) { .sk-cat-grid { grid-template-columns: 1fr; } }

        .sk-cat-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 22px 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease, border-color 0.2s ease;
        }
        .sk-cat-card.sk-in { opacity:1; transform:translateY(0); }
        .sk-cat-card:hover { border-color: rgba(255,255,255,0.13); }

        .sk-cat-header {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 18px;
        }
        .sk-cat-label {
          font-size: 0.82rem; font-weight: 700; color: #ccc;
          letter-spacing: -0.01em;
        }

        .sk-icon-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        @media(max-width:480px) { .sk-icon-grid { grid-template-columns: repeat(3,1fr); } }

        .sk-tile {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 8px; padding: 14px 8px;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          cursor: default;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
          min-height: 80px;
        }
        .sk-tile:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-2px);
        }
        .sk-tile.sk-tile-active {
          border-color: rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.06);
        }

        .sk-tile img {
          width: 32px;
          height: 32px;
          object-fit: contain;
          opacity: 0.55;
          filter: grayscale(20%);
          transition: opacity 0.2s ease, filter 0.2s ease;
        }
        .sk-tile:hover img,
        .sk-tile.sk-tile-active img {
          opacity: 1;
          filter: none;
        }

        .sk-tile-name {
          font-size: 0.62rem; font-weight: 600;
          color: #666; text-align: center;
          letter-spacing: 0.01em; line-height: 1.2;
          transition: color 0.2s;
        }
        .sk-tile:hover .sk-tile-name,
        .sk-tile.sk-tile-active .sk-tile-name { color: #aaa; }
      `}</style>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <div ref={ref} className={`sk-fade ${inView ? "sk-in" : ""}`} style={{ marginBottom: "48px" }}>
          <p className="sk-eyebrow">Technical Stack</p>
          <h2 className="sk-h2">Skills</h2>
        </div>

        {/* 2×2 grid */}
        <div className="sk-cat-grid">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.id}
              className={`sk-cat-card ${inView ? "sk-in" : ""}`}
              style={{ transitionDelay: `${100 + ci * 80}ms` }}
            >
              <div className="sk-cat-header">
                <CategoryIcon id={cat.id} color={cat.accentColor} />
                <span className="sk-cat-label">{cat.label}</span>
              </div>

              <div className="sk-icon-grid">
                {cat.skills.map((skill) => {
                  const key = `${cat.id}-${skill.name}`;
                  const isActive = hovered === key;
                  return (
                    <div
                      key={skill.name}
                      className={`sk-tile ${isActive ? "sk-tile-active" : ""}`}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <img src={skill.icon} alt={skill.name} loading="lazy" />
                      <span className="sk-tile-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}