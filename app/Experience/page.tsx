"use client";

import { useEffect, useRef, useState } from "react";

const experience = [
  {
    id: 1,
    role: "Freelance Full Stack Developer",
    company: "Binary Grow",
    duration: "Dec 2025 – Present",
    type: "Freelance",
    current: true,
    stack: ["Next.js", "Node.js", "WebSockets", "MongoDB", "React"],
    points: [
      "Independently delivered 5+ end-to-end client projects across healthcare, education, and temple domains.",
      "Built a real-time patient token queue system — live check-in, queue tracking, and front-desk dashboard using WebSockets.",
      "Developed event scheduling, donation tracking, and visitor management platforms for temple clients.",
      "Built student enrollment, attendance, fee tracking, and study material management systems for education clients.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Byteminders",
    duration: "Jul 2024 – Dec 2025",
    type: "Full-time",
    current: false,
    stack: ["React", "Node.js", "Express", "MySQL", "REST API"],
    points: [
      "Engineered and shipped multiple full-stack web products for diverse clients across industries.",
      "Owned features end-to-end — from database schema and API design to responsive frontend delivery.",
      "Maintained and scaled existing client applications, resolving performance and reliability issues.",
      "Worked directly with stakeholders to scope, plan, and deliver projects on tight timelines.",
    ],
  },
  {
    id: 3,
    role: "Assistant Developer",
    company: "Slytherin EduTech",
    duration: "Feb 2023 – Jun 2023",
    type: "Part-time",
    current: false,
    stack: ["JavaScript", "React", "CSS3", "HTML5"],
    points: [
      "Rebuilt and enhanced the company website with improved UI, performance, and responsiveness.",
      "Contributed to internal web tools and user-facing application features using modern JS frameworks.",
    ],
  },
];

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Experience() {
  const { ref, inView } = useInView();
  const [activeId, setActiveId] = useState(1);
  const [panelVisible, setPanelVisible] = useState(true);

  const active = experience.find(e => e.id === activeId)!;

  const switchTab = (id: number) => {
    if (id === activeId) return;
    setPanelVisible(false);
    setTimeout(() => {
      setActiveId(id);
      setPanelVisible(true);
    }, 180);
  };

  return (
    <section id="experience" style={{ minHeight: "100vh", padding: "6rem 1.5rem 8rem", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        /* ── Header ── */
        .xp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #FF9900;
          margin-bottom: 12px;
        }
        .xp-eyebrow::before {
          content: '';
          display: block;
          width: 24px; height: 1.5px;
          background: #FF9900;
          flex-shrink: 0;
        }
        .xp-h2 {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.035em;
          line-height: 0.95;
          margin: 0 0 4px;
        }
        .xp-h2-sub {
          font-size: 0.82rem;
          color: #444;
          font-weight: 500;
          margin-top: 10px;
          letter-spacing: 0.01em;
        }

        /* ── Layout ── */
        .xp-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 0;
          align-items: start;
          position: relative;
        }
        @media (max-width: 640px) {
          .xp-layout { grid-template-columns: 1fr; }
          .xp-sidebar { flex-direction: row !important; overflow-x: auto; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 2px; }
          .xp-tab { min-width: 140px; border-right: none !important; }
          .xp-tab.xp-active { border-right: none !important; border-bottom: 2px solid #FF9900 !important; }
        }

        /* ── Sidebar tabs ── */
        .xp-sidebar {
          display: flex;
          flex-direction: column;
          border-right: 1px solid rgba(255,255,255,0.07);
          padding-right: 0;
          position: sticky;
          top: 100px;
        }
        .xp-tab {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 14px 20px 14px 16px;
          background: transparent;
          border: none;
          border-right: 2px solid transparent;
          cursor: pointer;
          text-align: left;
          transition: background 0.18s ease, border-color 0.18s ease;
          border-radius: 0;
        }
        .xp-tab:hover { background: rgba(255,153,0,0.04); }
        .xp-tab.xp-active {
          background: rgba(255,153,0,0.06);
          border-right-color: #FF9900;
        }
        .xp-tab-role {
          font-size: 0.78rem;
          font-weight: 600;
          color: #555;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 160px;
          transition: color 0.18s;
        }
        .xp-tab.xp-active .xp-tab-role { color: #FF9900; }
        .xp-tab-co {
          font-size: 0.68rem;
          color: #383838;
          font-weight: 500;
          transition: color 0.18s;
        }
        .xp-tab.xp-active .xp-tab-co { color: #666; }
        .xp-tab-dot {
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #FF9900;
          border: 2px solid #080808;
          opacity: 0;
          transition: opacity 0.18s;
        }
        .xp-tab.xp-active .xp-tab-dot { opacity: 1; }

        /* ── Panel ── */
        .xp-panel {
          padding: 0 0 0 36px;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .xp-panel.xp-hidden { opacity: 0; transform: translateY(6px); }
        .xp-panel.xp-show   { opacity: 1; transform: translateY(0); }

        .xp-role { font-size: clamp(1.1rem, 2.5vw, 1.45rem); font-weight: 700; color: #fff; letter-spacing: -0.025em; margin-bottom: 3px; }
        .xp-company { font-size: 0.9rem; font-weight: 600; color: #FF9900; margin-bottom: 16px; }

        .xp-badges { display: flex; flex-wrap: wrap; align-items: center; gap: 7px; margin-bottom: 20px; }
        .xp-badge {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 0.70rem; font-weight: 600;
          padding: 4px 10px; border-radius: 5px;
          letter-spacing: 0.03em;
        }
        .xp-badge-time  { color: #666; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); }
        .xp-badge-free  { color: #FF9900; background: rgba(255,153,0,0.09); border: 1px solid rgba(255,153,0,0.20); }
        .xp-badge-full  { color: #4ade80; background: rgba(74,222,128,0.07); border: 1px solid rgba(74,222,128,0.16); }
        .xp-badge-part  { color: #60a5fa; background: rgba(96,165,250,0.07); border: 1px solid rgba(96,165,250,0.16); }
        .xp-badge-now   {
          color: #FF9900; background: rgba(255,153,0,0.10); border: 1px solid rgba(255,153,0,0.25);
          animation: xp-now-pulse 2.4s ease-in-out infinite;
        }
        @keyframes xp-now-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,153,0,0); }
          50%      { box-shadow: 0 0 0 4px rgba(255,153,0,0.10); }
        }

        /* Stack */
        .xp-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 22px; }
        .xp-tech {
          font-size: 0.66rem; font-weight: 600; letter-spacing: 0.05em;
          padding: 3px 9px; border-radius: 4px;
          color: #666; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          text-transform: uppercase;
        }

        /* Divider */
        .xp-divider { width: 100%; height: 1px; background: rgba(255,255,255,0.05); margin: 20px 0 22px; }

        /* Points */
        .xp-points { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 13px; }
        .xp-point  { display: flex; gap: 13px; font-size: 0.86rem; color: #777; line-height: 1.72; }
        .xp-bullet {
          flex-shrink: 0; margin-top: 8px;
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(255,153,0,0.5);
        }
        .xp-point:first-child .xp-bullet { background: #FF9900; box-shadow: 0 0 5px rgba(255,153,0,0.5); }
        .xp-point span { color: #888; }
        .xp-point:first-child span { color: #aaa; }

        /* Fade-in animation for section entry */
        .xp-fade { opacity: 0; transform: translateY(22px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .xp-fade.xp-in { opacity: 1; transform: translateY(0); }
      `}</style>

      <div style={{ maxWidth: "860px", margin: "0 auto" }} ref={ref}>

        {/* Header */}
        <div className={`xp-fade ${inView ? "xp-in" : ""}`} style={{ marginBottom: "48px" }}>
          <p className="xp-eyebrow">Work History</p>
          <h2 className="xp-h2">Experience</h2>
          <p className="xp-h2-sub">{experience.length} roles · {new Set(experience.map(e => e.company)).size} companies</p>
        </div>

        {/* Body */}
        <div className={`xp-layout xp-fade ${inView ? "xp-in" : ""}`} style={{ transitionDelay: "120ms" }}>

          {/* Sidebar */}
          <div className="xp-sidebar">
            {experience.map((exp) => (
              <button
                key={exp.id}
                className={`xp-tab ${activeId === exp.id ? "xp-active" : ""}`}
                onClick={() => switchTab(exp.id)}
              >
                <span className="xp-tab-role">
                  {exp.role
                    .replace("Freelance Full Stack Developer", "Freelance FS Dev")
                    .replace("Full Stack Developer", "Full Stack Dev")
                    .replace("Assistant Developer", "Assistant Dev")}
                </span>
                <span className="xp-tab-co">{exp.company}</span>
                <span className="xp-tab-dot" />
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className={`xp-panel ${panelVisible ? "xp-show" : "xp-hidden"}`}>

            <div className="xp-role">{active.role}</div>
            <div className="xp-company">{active.company}</div>

            {/* Badges */}
            <div className="xp-badges">
              <span className="xp-badge xp-badge-time">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {active.duration}
              </span>
              <span className={`xp-badge ${
                active.type === "Freelance" ? "xp-badge-free" :
                active.type === "Full-time" ? "xp-badge-full" : "xp-badge-part"
              }`}>
                {active.type}
              </span>
              {active.current && (
                <span className="xp-badge xp-badge-now">
                  <span style={{ display:"inline-block", width:5, height:5, borderRadius:"50%", background:"#FF9900", flexShrink:0 }} />
                  Active
                </span>
              )}
            </div>

            {/* Stack */}
            <div className="xp-stack">
              {active.stack.map((t) => (
                <span key={t} className="xp-tech">{t}</span>
              ))}
            </div>

            <div className="xp-divider" />

            {/* Bullets */}
            <ul className="xp-points">
              {active.points.map((pt, i) => (
                <li key={i} className="xp-point">
                  <span className="xp-bullet" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}