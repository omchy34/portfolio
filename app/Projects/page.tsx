"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "FashionFusion",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "A complete e-commerce solution with product listings, cart management, user authentication, order tracking, and an admin dashboard for inventory control.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/project0.png",
    github: "https://github.com/omchy34/E-commerce",
    live: "https://e-commerce-nfwv.onrender.com/",
    badge: "FULL-STACK",
    badgeColor: "#3b82f6",
    featured: true,
  },
  {
    id: 2,
    title: "Deeksha Classes",
    subtitle: "Tuition & Education Management Platform",
    description:
      "A full-stack tuition website for student enrollment, batch scheduling, attendance tracking, fee management, and study material distribution — built for real classroom use.",
    tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "Prisma"],
    image: "/project1.png",
    github: "https://github.com/omchy34/Deeksha-classes.git",
    live: "https://deeksha-classes.vercel.app/",
    badge: "EDUCATION",
    badgeColor: "#22c55e",
    featured: true,
  },
  {
    id: 3,
    title: "Dekuli Mandir",
    subtitle: "Temple Management & Event Portal",
    description:
      "A dedicated web platform for temple administration — event scheduling, donation tracking with receipts, visitor management, and a public-facing portal for devotees.",
    tech: ["React.js", "Express", "MySQL", "Node.js", "TailwindCSS"],
    image: "/project2.png",
    github: "https://github.com/omchy34/Dekuli-mandir.git",
    live: "https://dekulimandir.com/",
    badge: "WEB APP",
    badgeColor: "#f97316",
    featured: true,
  },
];

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

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      style={{ minHeight: "100vh", padding: "6rem 1.5rem 8rem", fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        .pj-fade { opacity:0; transform:translateY(22px); transition:opacity 0.65s ease, transform 0.65s ease; }
        .pj-fade.pj-in { opacity:1; transform:translateY(0); }

        .pj-eyebrow {
          display:inline-flex; align-items:center; gap:10px;
          font-size:0.68rem; font-weight:700; letter-spacing:0.20em;
          text-transform:uppercase; color:#FF9900; margin-bottom:12px;
        }
        .pj-eyebrow::before {
          content:''; display:block; width:24px; height:1.5px;
          background:#FF9900; flex-shrink:0;
        }
        .pj-h2 {
          font-size:clamp(2.2rem,5vw,3.4rem); font-weight:800;
          color:#fff; letter-spacing:-0.035em; line-height:0.95; margin:0;
        }
        .pj-h2-sub { font-size:0.82rem; color:#444; font-weight:500; margin-top:10px; }

        .pj-grid-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .pj-card-featured-main { grid-column: 1 / -1; }

        @media(max-width:640px) {
          .pj-grid-top { grid-template-columns: 1fr; }
          .pj-card-featured-main { grid-column: 1; }
        }

        .pj-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.55s ease,
            transform 0.55s ease,
            border-color 0.22s ease,
            box-shadow 0.22s ease;
        }
        .pj-card.pj-in { opacity:1; transform:translateY(0); }
        .pj-card:hover {
          border-color: rgba(255,153,0,0.30);
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
          transform: translateY(-4px) !important;
        }

        .pj-img-wrap {
          position: relative; width: 100%;
          overflow: hidden; background: #0f0f0f;
          flex-shrink: 0;
        }
        .pj-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top;
          display: block;
          transition: transform 0.55s ease;
        }
        .pj-card:hover .pj-img-wrap img { transform: scale(1.03); }
        .pj-img-wrap::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(8,8,8,0.80) 100%);
          pointer-events: none;
        }

        .pj-badge {
          position: absolute; top: 42px; right: 14px; z-index: 2;
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em;
          padding: 5px 12px; border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .pj-browser-bar {
          position: absolute; top: 0; left: 0; right: 0; z-index: 2;
          height: 28px;
          background: rgba(15,15,15,0.90);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center;
          padding: 0 12px; gap: 6px;
        }
        .pj-browser-dot { width: 8px; height: 8px; border-radius: 50%; }

        .pj-body {
          padding: 18px 20px 20px;
          flex: 1; display: flex; flex-direction: column;
        }
        .pj-title {
          font-size: 1.05rem; font-weight: 700;
          color: #fff; letter-spacing: -0.02em; margin: 0 0 3px;
        }
        .pj-title-sm { font-size: 0.95rem; }
        .pj-subtitle { font-size: 0.76rem; font-weight: 600; margin: 0 0 12px; }
        .pj-desc { font-size: 0.82rem; color: #666; line-height: 1.72; flex: 1; margin: 0 0 16px; }
        .pj-desc-sm {
          display: -webkit-box; -webkit-line-clamp: 3;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        .pj-tags { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:18px; }
        .pj-tag {
          font-size: 0.63rem; font-weight: 600; letter-spacing: 0.05em;
          text-transform: uppercase; padding: 3px 8px; border-radius: 4px;
          color: #555; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
        }

        .pj-actions { display:flex; gap:9px; margin-top:auto; }
        .pj-btn-live {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.76rem; font-weight: 600;
          padding: 9px 0; border-radius: 8px;
          border: none; cursor: pointer; text-decoration: none;
          flex: 1; justify-content: center;
          transition: opacity 0.2s, transform 0.15s;
        }
        .pj-btn-live:hover { opacity: 0.88; transform: scale(1.02); }
        .pj-btn-src {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.76rem; font-weight: 600;
          padding: 9px 0; border-radius: 8px;
          color: #777; background: transparent;
          border: 1px solid rgba(255,255,255,0.09);
          cursor: pointer; text-decoration: none;
          flex: 1; justify-content: center;
          transition: border-color 0.2s, color 0.2s;
        }
        .pj-btn-src:hover { border-color: #FF9900; color: #FF9900; }
      `}</style>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Header */}
        <div ref={ref} className={`pj-fade ${inView ? "pj-in" : ""}`} style={{ marginBottom: "48px" }}>
          <p className="pj-eyebrow">What I've Built</p>
          <h2 className="pj-h2">Projects</h2>
          <p className="pj-h2-sub">3 live products · real clients · production deployments</p>
        </div>

        <div className="pj-grid-top">

          {/* ── Card 1: Full-width featured — TALL image ── */}
          <div className={`pj-card-featured-main pj-card ${inView ? "pj-in" : ""}`} style={{ transitionDelay: "100ms" }}>
            <div className="pj-img-wrap" style={{ height: "420px" }}>
              <div className="pj-browser-bar">
                <div className="pj-browser-dot" style={{ background: "#ff5f57" }} />
                <div className="pj-browser-dot" style={{ background: "#febc2e" }} />
                <div className="pj-browser-dot" style={{ background: "#28c840" }} />
                <span style={{ fontSize: "0.6rem", color: "#555", marginLeft: "8px", fontFamily: "monospace" }}>
                  e-commerce-nfwv.onrender.com
                </span>
              </div>
              <img
                src={projects[0].image}
                alt={projects[0].title}
                style={{ paddingTop: "28px", height: "calc(100%)", objectPosition: "top center" }}
              />
              <span className="pj-badge" style={{ background: projects[0].badgeColor + "22", color: projects[0].badgeColor, border: `1px solid ${projects[0].badgeColor}44` }}>
                {projects[0].badge}
              </span>
            </div>
            <div className="pj-body">
              <h3 className="pj-title">{projects[0].title}</h3>
              <p className="pj-subtitle" style={{ color: projects[0].badgeColor }}>{projects[0].subtitle}</p>
              <p className="pj-desc">{projects[0].description}</p>
              <div className="pj-tags">
                {projects[0].tech.map((t) => <span key={t} className="pj-tag">{t}</span>)}
              </div>
              <div className="pj-actions">
                <a href={projects[0].live!} target="_blank" rel="noopener noreferrer" className="pj-btn-live" style={{ background: projects[0].badgeColor, color: "#fff" }}>
                  <ExternalIcon /> Live Preview
                </a>
                <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="pj-btn-src">
                  <GithubIcon /> Source
                </a>
              </div>
            </div>
          </div>

          {/* ── Cards 2 & 3: side by side ── */}
          {projects.slice(1).map((p, i) => (
            <div key={p.id} className={`pj-card ${inView ? "pj-in" : ""}`} style={{ transitionDelay: `${220 + i * 120}ms` }}>
              <div className="pj-img-wrap" style={{ height: "200px" }}>
                <div className="pj-browser-bar">
                  <div className="pj-browser-dot" style={{ background: "#ff5f57" }} />
                  <div className="pj-browser-dot" style={{ background: "#febc2e" }} />
                  <div className="pj-browser-dot" style={{ background: "#28c840" }} />
                  <span style={{ fontSize: "0.58rem", color: "#555", marginLeft: "8px", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "160px" }}>
                    {p.live?.replace("https://", "")}
                  </span>
                </div>
                <img src={p.image} alt={p.title} style={{ paddingTop: "28px", objectPosition: "top center" }} />
                <span className="pj-badge" style={{ background: p.badgeColor + "22", color: p.badgeColor, border: `1px solid ${p.badgeColor}44` }}>
                  {p.badge}
                </span>
              </div>
              <div className="pj-body">
                <h3 className="pj-title pj-title-sm">{p.title}</h3>
                <p className="pj-subtitle" style={{ color: p.badgeColor }}>{p.subtitle}</p>
                <p className="pj-desc pj-desc-sm">{p.description}</p>
                <div className="pj-tags">
                  {p.tech.map((t) => <span key={t} className="pj-tag">{t}</span>)}
                </div>
                <div className="pj-actions">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="pj-btn-live" style={{ background: p.badgeColor, color: "#fff" }}>
                      <ExternalIcon /> Live Preview
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="pj-btn-src">
                    <GithubIcon /> Source
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}