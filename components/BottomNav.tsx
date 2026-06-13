// src/components/BottomNav.tsx
"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

const icons: Record<string, React.ReactNode> = {
  house: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  ),
  briefcase: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  code: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
  ),
  sparkles: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
      <path d="M19 3l.75 2.25L22 6l-2.25.75L19 9l-.75-2.25L16 6l2.25-.75z"/>
      <path d="M5 15l.75 2.25L8 18l-2.25.75L5 21l-.75-2.25L2 18l2.25-.75z"/>
    </svg>
  ),
  link: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
};

export default function BottomNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .bottom-nav {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          background: rgba(14, 14, 14, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 22px;
          padding: 5px;
          box-shadow:
            0 8px 40px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 153, 0, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          /* prevent wrapping on any screen */
          white-space: nowrap;
        }

        .bottom-nav-inner {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nav-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-radius: 16px;
          /* fixed icon-only size */
          width: 42px;
          height: 38px;
          padding: 0;
          font-size: 0.78rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition:
            background 0.22s ease,
            color 0.22s ease,
            width 0.3s cubic-bezier(0.34, 1.2, 0.64, 1),
            box-shadow 0.22s ease,
            transform 0.15s ease;
          white-space: nowrap;
          overflow: hidden;
          background: transparent;
          color: #555;
          font-family: inherit;
          flex-shrink: 0;
        }

        .nav-btn:hover:not(.nav-btn-active) {
          background: rgba(255, 255, 255, 0.06);
          color: #999;
          transform: translateY(-1px);
        }

        .nav-btn-active {
          /* width expands to fit icon + label + padding */
          width: var(--active-width, 110px);
          padding: 0 14px;
          background: #FF9900;
          color: #0a0a0a;
          box-shadow: 0 0 18px rgba(255, 153, 0, 0.45);
        }

        .nav-btn-active:hover {
          box-shadow: 0 0 26px rgba(255, 153, 0, 0.60);
          transform: translateY(-1px);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .nav-label {
          display: inline-block;
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          transition:
            max-width 0.3s cubic-bezier(0.34, 1.2, 0.64, 1),
            opacity 0.2s ease;
          font-size: 0.78rem;
          font-weight: 600;
        }

        .nav-btn-active .nav-label {
          max-width: 90px;
          opacity: 1;
        }

        /* thin separator dots */
        .nav-sep {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
          transition: opacity 0.2s ease;
        }

        /* hide separators adjacent to active item */
        .nav-sep-hidden {
          opacity: 0;
          width: 0;
        }

        @media (max-width: 480px) {
          .bottom-nav {
            bottom: 16px;
            padding: 4px;
          }
          .nav-btn {
            width: 38px;
            height: 36px;
          }
          .nav-btn-active {
            width: var(--active-width-sm, 100px);
            padding: 0 12px;
          }
        }
      `}</style>

      <nav className="bottom-nav" aria-label="Page navigation">
        <div className="bottom-nav-inner">
          {navItems.map(({ id, label, icon }, index) => {
            const isActive = active === id;
            const prevIsActive = index > 0 && active === navItems[index - 1]?.id;
            const nextIsActive = index < navItems.length - 1 && active === navItems[index + 1]?.id;

            return (
              <div key={id} style={{ display: "contents" }}>
                {/* Separator before each item except first */}
                {index > 0 && (
                  <span
                    className={`nav-sep${isActive || prevIsActive ? " nav-sep-hidden" : ""}`}
                    aria-hidden="true"
                  />
                )}

                <button
                  onClick={() => scrollTo(id)}
                  className={`nav-btn${isActive ? " nav-btn-active" : ""}`}
                  aria-label={label}
                  aria-current={isActive ? "page" : undefined}
                  title={!isActive ? label : undefined}
                >
                  <span className="nav-icon">{icons[icon]}</span>
                  <span className="nav-label">{label}</span>
                </button>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}