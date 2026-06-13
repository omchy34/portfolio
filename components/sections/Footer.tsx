"use client";

import { useState } from "react";

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const socials = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.734-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  const contactItems = [
    {
      label: "EMAIL",
      value: "omchy34@gmail.com",
      onCopy: () => copy("omchy34@gmail.com", "email"),
      copied: copiedEmail,
    },
    {
      label: "PHONE",
      value: "+91 6201374052",
      onCopy: () => copy("+916201374052", "phone"),
      copied: copiedPhone,
    },
    {
      label: "ADDRESS",
      value: "",
      onCopy: null,
      copied: false,
    },
  ];

  return (
    <footer id="footer">
      <style>{`
        #footer {
          background: #0d0a09;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 56px 0 0;
          font-family: 'Inter', sans-serif;
        }

        .ft-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px 64px;
          align-items: start;
        }
        @media(max-width: 600px) {
          .ft-inner { grid-template-columns: 1fr; gap: 40px; }
        }

        /* Left col */
        .ft-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }
        .ft-bio {
          font-size: 0.875rem;
          color: #666;
          line-height: 1.65;
          margin: 0 0 28px;
        }

        /* Social icons */
        .ft-socials {
          display: flex;
          gap: 10px;
        }
        .ft-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .ft-social-btn:hover {
          border-color: rgba(255,255,255,0.22);
          color: #ddd;
          background: rgba(255,255,255,0.08);
        }

        /* Right col */
        .ft-contact-list {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .ft-contact-item {}
        .ft-contact-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 5px;
        }
        .ft-contact-value {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #ccc;
        }
        .ft-copy-btn {
          background: none;
          border: none;
          padding: 3px;
          cursor: pointer;
          color: #444;
          display: flex;
          align-items: center;
          transition: color 0.2s;
          flex-shrink: 0;
        }
        .ft-copy-btn:hover { color: #aaa; }
        .ft-copy-btn.copied { color: #4ade80; }

        /* Bottom bar */
        .ft-bottom {
          margin-top: 48px;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 16px 32px;
          text-align: center;
        }
        .ft-copy-text {
          font-size: 0.72rem;
          color: #3a3a3a;
          letter-spacing: 0.02em;
        }
      `}</style>

      <div className="ft-inner">
        {/* Left: name + bio + socials */}
        <div>
          <h2 className="ft-name">Om Choudhary</h2>
          <p className="ft-bio">
            Full-Stack Software Engineer &amp; Creative UI Programmer.<br />
            Developing high-performance, beautiful digital systems.
          </p>
          <div className="ft-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ft-social-btn"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: contact info */}
        <div className="ft-contact-list">
          {contactItems.map((item) => (
            <div key={item.label} className="ft-contact-item">
              <p className="ft-contact-label">{item.label}</p>
              <div className="ft-contact-value">
                <span>{item.value}</span>
                {item.onCopy && (
                  <button
                    className={`ft-copy-btn ${item.copied ? "copied" : ""}`}
                    onClick={item.onCopy}
                    aria-label={`Copy ${item.label.toLowerCase()}`}
                    title="Copy"
                  >
                    {item.copied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="ft-bottom">
        <p className="ft-copy-text">
          Copyright © 2026 Om Choudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
}