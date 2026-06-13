"use client";

import { useState, useRef } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Replace with your actual form submission logic / EmailJS / Resend etc.
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.5rem 8rem",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* ── Dot-grid background ── */
        #contact::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,80,20,0.13) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Radial vignette to fade grid edges ── */
        #contact::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #0a0a0a 100%);
          pointer-events: none;
          z-index: 0;
        }

        .ct-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 680px;
        }

        /* ── Header text ── */
        .ct-eyebrow {
          display: block;
          text-align: center;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #E8622A;
          margin-bottom: 12px;
        }
        .ct-h2 {
          text-align: center;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.03em;
          margin: 0 0 16px;
        }
        .ct-sub {
          text-align: center;
          font-size: 0.95rem;
          color: #777;
          line-height: 1.65;
          max-width: 480px;
          margin: 0 auto 48px;
        }

        /* ── Terminal window ── */
        .ct-terminal {
          background: #111;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          overflow: hidden;
        }

        /* Title bar */
        .ct-titlebar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 16px;
          background: #161616;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .ct-dots {
          display: flex;
          gap: 6px;
        }
        .ct-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .ct-title {
          font-size: 0.7rem;
          font-weight: 600;
          color: #555;
          letter-spacing: 0.06em;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }
        .ct-status {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #4ade80;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }
        .ct-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          animation: ct-pulse 2s ease-in-out infinite;
        }
        @keyframes ct-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        /* Form area */
        .ct-form {
          padding: 28px 28px 32px;
        }
        .ct-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        @media(max-width: 520px) { .ct-row { grid-template-columns: 1fr; } }

        .ct-field { display: flex; flex-direction: column; gap: 7px; }
        .ct-field-full { margin-bottom: 20px; display: flex; flex-direction: column; gap: 7px; }

        .ct-label {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #555;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }

        .ct-input, .ct-textarea {
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 7px;
          color: #ddd;
          font-size: 0.875rem;
          font-family: 'Inter', sans-serif;
          padding: 12px 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          box-sizing: border-box;
          resize: none;
        }
        .ct-input::placeholder, .ct-textarea::placeholder { color: #3a3a3a; }
        .ct-input:focus, .ct-textarea:focus {
          border-color: rgba(232, 98, 42, 0.5);
          box-shadow: 0 0 0 3px rgba(232, 98, 42, 0.08);
        }
        .ct-textarea { height: 140px; }

        /* Submit button */
        .ct-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #E8622A, #c94e1e);
          border: none;
          border-radius: 8px;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: opacity 0.2s, transform 0.15s;
          margin-top: 4px;
        }
        .ct-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .ct-btn:active { transform: translateY(0); opacity: 1; }
        .ct-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        .ct-btn svg { flex-shrink: 0; }

        /* Success / error message */
        .ct-feedback {
          margin-top: 14px;
          text-align: center;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }
        .ct-feedback.success { color: #4ade80; }
        .ct-feedback.error { color: #f87171; }
      `}</style>

      <div className="ct-inner">
        {/* Page header */}
        <span className="ct-eyebrow">Communication Portal</span>
        <h2 className="ct-h2">Get In Touch</h2>
        <p className="ct-sub">
          Have a project in mind, a role to fill, or simply want to talk shop?
          Establish a secure link below.
        </p>

        {/* Terminal window */}
        <div className="ct-terminal">
          {/* Title bar */}
          <div className="ct-titlebar">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div className="ct-dots">
                <div className="ct-dot" style={{ background: "#FF5F57" }} />
                <div className="ct-dot" style={{ background: "#FEBC2E" }} />
                <div className="ct-dot" style={{ background: "#28C840" }} />
              </div>
              <span className="ct-title">&gt;_ SECURE_TRANSMISSION_PROTOCOL.exe</span>
            </div>
            <div className="ct-status">
              <div className="ct-status-dot" />
              ONLINE
            </div>
          </div>

          {/* Form */}
          <form className="ct-form" onSubmit={handleSubmit}>
            <div className="ct-row">
              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-name">SENDER_NAME</label>
                <input
                  id="ct-name"
                  className="ct-input"
                  name="name"
                  type="text"
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-email">SENDER_EMAIL</label>
                <input
                  id="ct-email"
                  className="ct-input"
                  name="email"
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="ct-field-full">
              <label className="ct-label" htmlFor="ct-message">TRANSMISSION_BODY</label>
              <textarea
                id="ct-message"
                className="ct-textarea"
                name="message"
                placeholder="Type your message details here...."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="ct-btn"
              type="submit"
              disabled={status === "sending"}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              {status === "sending" ? "TRANSMITTING..." : "SEND TRANSMISSION"}
            </button>

            {status === "sent" && (
              <p className="ct-feedback success">✓ TRANSMISSION SUCCESSFUL — I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="ct-feedback error">✗ TRANSMISSION FAILED — please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}