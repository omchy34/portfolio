"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

const SKILLS = [
  "JavaScript", "TypeScript", "ReactJs", "Next.js", "Node.js",
  "Express", "Python", "FastAPI", "MySQL", "MongoDB",
  "Git", "GitHub", "Figma", "WordPress", "TailwindCSS",
  "REST API", "WebSockets", "Docker", "Prisma", "Redux",
];

function Marquee() {
  const items = [...SKILLS, ...SKILLS];

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 32s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 4%,
            black 10%,
            black 90%,
            transparent 96%
          );
          mask-image: linear-gradient(
            to right,
            transparent 4%,
            black 10%,
            black 90%,
            transparent 96%
          );
        }

        /* Default: nearly invisible — just a faint ghost */
        .marquee-pill {
          display: inline-flex;
          align-items: center;
          padding: 8px 20px;
          margin: 0 6px;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 600;
          white-space: nowrap;
          cursor: default;
          letter-spacing: 0.01em;

          /* Nearly invisible by default */
          color: transparent;
          background: transparent;
          border: 1px solid transparent;
          transition:
            color 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        /* Reveal only on hover of the individual pill */
        .marquee-pill:hover {
          color: #FF9900;
          background: rgba(255,153,0,0.08);
          border-color: rgba(255,153,0,0.35);
        }

        /* When the whole strip is hovered, show all pills dimly */
        .marquee-strip:hover .marquee-pill {
          color: #555;
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.08);
        }

        /* But the directly hovered pill stays bright */
        .marquee-strip:hover .marquee-pill:hover {
          color: #FF9900;
          background: rgba(255,153,0,0.08);
          border-color: rgba(255,153,0,0.35);
        }
      `}</style>

      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        paddingBottom: "28px",
      }}>
        <div
          className="marquee-strip marquee-mask"
          style={{ overflow: "hidden", width: "100%" }}
        >
          <div className="marquee-track">
            {items.map((skill, i) => (
              <span key={i} className="marquee-pill">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
      #home, #home * {
          user-select: none;
          -webkit-user-select: none;
      }
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@400;500;600&display=swap');

        @keyframes pulse-green {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(1.5); }
        }
        @keyframes orb-float {
          0%,100% { transform:translate(0,0) scale(1); }
          33%     { transform:translate(18px,-22px) scale(1.04); }
          66%     { transform:translate(-12px,14px) scale(0.97); }
        }
        @keyframes glow-pulse {
          0%,100% { opacity:0.5; }
          50%     { opacity:0.85; }
        }

        .hero-pulse { animation: pulse-green 2s ease-in-out infinite; }

        .hero-fade-in {
          opacity:0; transform:translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .hero-fade-in.visible { opacity:1; transform:translateY(0); }

        .hero-fade-down {
          opacity:0; transform:translateY(-14px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hero-fade-down.visible { opacity:1; transform:translateY(0); }

        .hero-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .hero-btn-primary {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 22px; border-radius:12px;
          font-size:0.875rem; font-weight:600;
          background:#FF9900; color:#000; text-decoration:none;
          box-shadow:0 0 24px rgba(255,153,0,0.35);
          transition:transform 0.2s ease, box-shadow 0.2s ease;
          border:none; cursor:pointer; white-space:nowrap;
        }
        .hero-btn-primary:hover { transform:scale(1.05); box-shadow:0 0 36px rgba(255,153,0,0.55); }

        .hero-btn-secondary {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 22px; border-radius:12px;
          font-size:0.875rem; font-weight:600;
          background:rgba(255,255,255,0.06); color:#fff; text-decoration:none;
          border:1px solid rgba(255,255,255,0.13);
          backdrop-filter:blur(8px);
          transition:transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          cursor:pointer; white-space:nowrap;
        }
        .hero-btn-secondary:hover { transform:scale(1.05); border-color:#FF9900; background:rgba(255,153,0,0.09); }

        .hero-btn-primary-sm {
          display:inline-flex; align-items:center; gap:6px;
          padding:8px 16px; border-radius:20px;
          font-size:0.78rem; font-weight:600;
          background:#FF9900; color:#000; text-decoration:none;
          box-shadow:0 0 16px rgba(255,153,0,0.35);
          transition:transform 0.2s ease, box-shadow 0.2s ease;
          border:none; cursor:pointer; white-space:nowrap;
        }
        .hero-btn-primary-sm:hover { transform:scale(1.04); }

        .hero-contact-link {
          display:flex; align-items:center; gap:6px;
          font-size:0.8rem; color:#888; text-decoration:none;
          transition:color 0.2s; white-space:nowrap;
        }
        .hero-contact-link:hover { color:#FF9900; }
        .hero-contact-span {
          display:flex; align-items:center; gap:6px;
          font-size:0.8rem; color:#888; white-space:nowrap;
        }

        .hero-desktop-content {
          position:relative; z-index:10;
          padding-left: clamp(2rem, 10vw, 180px);
          padding-right: 2rem;
          padding-top: 80px;
          padding-bottom: 160px;
          width: 54%;
          max-width: 640px;
          display:flex; flex-direction:column; justify-content:center;
        }

        .hero-contact-row {
          display:inline-flex; flex-direction:row;
          flex-wrap:nowrap; align-items:center;
          gap:16px; margin-bottom:28px; padding:10px 18px;
        }

        .hero-mobile-topbar {
          display:none; position:absolute;
          top:0; left:0; right:0; z-index:20;
          padding:16px 20px;
          justify-content:space-between; align-items:center;
        }

        .hero-open-badge {
          display:inline-flex; align-items:center; gap:7px;
          padding:7px 14px; border-radius:20px;
          font-size:0.78rem; font-weight:500; color:#22c55e;
          background:rgba(34,197,94,0.10);
          border:1px solid rgba(34,197,94,0.22);
          backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
        }

        .hero-mobile-bottom {
          display:none; position:absolute;
          bottom:0; left:0; right:0; z-index:10;
          padding:0 20px 130px;
          flex-direction:column; gap:0;
        }

        @media (max-width: 767px) {
          .hero-desktop-content { display:none !important; }
          .hero-mobile-topbar { display:flex; }
          .hero-mobile-bottom { display:flex; }
        }
        @media (min-width: 768px) {
          .hero-mobile-topbar { display:none !important; }
          .hero-mobile-bottom { display:none !important; }
        }
        @media (max-width: 1024px) and (min-width: 768px) {
          .hero-desktop-content { width:62%; padding-left: clamp(1.5rem, 6vw, 80px); }
        }
      `}</style>

      {/* Fixed orbs */}
      <div className="hero-orb" style={{ width: 580, height: 580, top: "-18%", left: "-10%", background: "radial-gradient(circle, rgba(255,153,0,0.14) 0%, transparent 70%)", animation: "orb-float 14s ease-in-out infinite", zIndex: 0 }} />
      <div className="hero-orb" style={{ width: 440, height: 440, bottom: "-12%", left: "28%", background: "radial-gradient(circle, rgba(255,100,0,0.10) 0%, transparent 70%)", animation: "orb-float 18s ease-in-out infinite reverse", zIndex: 0 }} />
      <div className="hero-orb" style={{ width: 360, height: 360, top: "8%", right: "8%", background: "radial-gradient(circle, rgba(200,80,0,0.09) 0%, transparent 70%)", animation: "orb-float 22s ease-in-out infinite", zIndex: 0 }} />
      <div className="hero-orb" style={{ width: 280, height: 280, bottom: "5%", right: "18%", background: "radial-gradient(circle, rgba(255,140,0,0.07) 0%, transparent 70%)", animation: "orb-float 26s ease-in-out infinite reverse", zIndex: 0 }} />
      <div className="hero-orb" style={{ width: 200, height: 200, top: "40%", left: "20%", background: "radial-gradient(circle, rgba(255,180,0,0.05) 0%, transparent 70%)", animation: "orb-float 20s ease-in-out infinite", zIndex: 0 }} />

      <div
        id="home"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          fontFamily: "'Inter', sans-serif",
          zIndex: 2,
        }}
      >
        {/* Photo layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "5%", right: "2%", width: "50%", height: "90%", background: "radial-gradient(ellipse at 50% 55%, rgba(255,153,0,0.20) 0%, rgba(255,120,0,0.08) 40%, transparent 68%)", animation: "glow-pulse 4s ease-in-out infinite", filter: "blur(22px)", zIndex: 1 }} />
          <div style={{ position: "absolute", top: "8%", right: "5%", width: "34%", height: "58%", background: "radial-gradient(ellipse at 65% 25%, rgba(255,180,60,0.11) 0%, transparent 60%)", filter: "blur(30px)", zIndex: 1 }} />
          <Image src={personalInfo.photo} alt="Om Choudhary" fill style={{ objectFit: "contain", objectPosition: "right center", zIndex: 2 }} priority />
          <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "linear-gradient(to right, #080808 0%, #080808 26%, rgba(8,8,8,0.90) 36%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.12) 66%, transparent 80%)" }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 4, background: "linear-gradient(to top, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.7) 18%, rgba(8,8,8,0.10) 50%, transparent 80%)" }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 4, background: "linear-gradient(to bottom, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.30) 12%, transparent 28%)" }} />
        </div>

        {/* MOBILE top bar */}
        <div className={`hero-mobile-topbar hero-fade-down ${visible ? "visible" : ""}`} style={{ transitionDelay: "0ms" }}>
          <div className="hero-open-badge">
            <span className="hero-pulse" style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
            Open to work
          </div>
          <a href="/resume.pdf" download className="hero-btn-primary-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        {/* MOBILE bottom */}
        <div className="hero-mobile-bottom">
          <div className={`hero-fade-in ${visible ? "visible" : ""}`} style={{ marginBottom: "6px", transitionDelay: "150ms" }}>
            <span style={{ color: "#FF9900", fontSize: "0.88rem", fontWeight: 600 }}>Full Stack Developer & AI Engineer</span>
          </div>
          <div className={`hero-fade-in ${visible ? "visible" : ""}`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.6rem, 12vw, 4rem)", fontWeight: 700, lineHeight: 0.92, letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "14px", transitionDelay: "250ms" }}>
            Om<br />Choudhary
          </div>
          <p className={`hero-fade-in ${visible ? "visible" : ""}`} style={{ color: "rgba(255,255,255,0.60)", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "18px", transitionDelay: "350ms" }}>
            {personalInfo.tagline}
          </p>
          <div className={`hero-fade-in hero-glass ${visible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "12px 16px", marginBottom: "16px", transitionDelay: "450ms" }}>
            <a href={`mailto:${personalInfo.email}`} className="hero-contact-link">
              <span style={{ color: "#FF9900", display: "flex" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></span>
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="hero-contact-link">
              <span style={{ color: "#FF9900", display: "flex" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span>
              {personalInfo.phone}
            </a>
            <span className="hero-contact-span">
              <span style={{ color: "#FF9900", display: "flex" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
              {personalInfo.location}
            </span>
          </div>
          <div className={`hero-fade-in ${visible ? "visible" : ""}`} style={{ transitionDelay: "550ms" }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-btn-secondary" style={{ width: "100%", justifyContent: "center" }}>GitHub</a>
          </div>
        </div>

        {/* DESKTOP content */}
        <div className="hero-desktop-content">
          <div className={`hero-fade-in hero-glass ${visible ? "visible" : ""}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "18px", padding: "6px 14px", transitionDelay: "0ms" }}>
            <span className="hero-pulse" style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
            <span style={{ color: "#22c55e", fontSize: "0.78rem", fontWeight: 500 }}>Open to work</span>
          </div>
          <div className={`hero-fade-in ${visible ? "visible" : ""}`} style={{ marginBottom: "10px", transitionDelay: "100ms" }}>
            <span style={{ color: "#FF9900", fontSize: "0.95rem", fontWeight: 600 }}>Full Stack Developer & AI Engineer</span>
          </div>
          <div className={`hero-fade-in ${visible ? "visible" : ""}`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(2.6rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 0.92, letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "18px", transitionDelay: "200ms" }}>
            Om<br />Choudhary
          </div>
          <p className={`hero-fade-in ${visible ? "visible" : ""}`} style={{ color: "#888", fontSize: "0.92rem", lineHeight: 1.65, maxWidth: "340px", marginBottom: "24px", transitionDelay: "300ms" }}>
            {personalInfo.tagline}
          </p>
          <div className={`hero-fade-in hero-glass hero-contact-row ${visible ? "visible" : ""}`} style={{ transitionDelay: "400ms" }}>
            <a href={`mailto:${personalInfo.email}`} className="hero-contact-link">
              <span style={{ color: "#FF9900", display: "flex" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></span>
              {personalInfo.email}
            </a>
            <span style={{ color: "#2a2a2a" }}>·</span>
            <a href={`tel:${personalInfo.phone}`} className="hero-contact-link">
              <span style={{ color: "#FF9900", display: "flex" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span>
              {personalInfo.phone}
            </a>
            <span style={{ color: "#2a2a2a" }}>·</span>
            <span className="hero-contact-span">
              <span style={{ color: "#FF9900", display: "flex" }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
              {personalInfo.location}
            </span>
          </div>
          <div className={`hero-fade-in ${visible ? "visible" : ""}`} style={{ display: "flex", gap: "12px", transitionDelay: "500ms" }}>
            <a href="/resume.pdf" download className="hero-btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">GitHub</a>
          </div>
        </div>

        {/* Marquee */}
        <Marquee />
      </div>
    </>
  );
}