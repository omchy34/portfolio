"use client";
import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let glowX = -9999;
    let glowY = -9999;
    let targetX = -9999;
    let targetY = -9999;
    let mouseActive = false;

    // ── Tuned to match Image 2 exactly ───────────────────────────────────────
    const GRID      = 80;    // large grid cells — matches reference spacing
    const DOT_R     = 1.2;   // tiny dot at rest
    const DOT_R_MAX = 2.8;   // dot size at glow centre
    const GLOW_R    = 260;   // spotlight radius
    const INNER_R   = 90;    // hot core radius
    const LERP      = 0.07;

    // Resting state — barely visible
    const REST_A = 0.13;     // very low alpha
    const REST_R = 160, REST_G = 50, REST_B = 10;

    // Grid line — extremely faint
    const LINE_A = 0.06;
    const LINE_R = 180, LINE_G = 55, LINE_B = 12;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!mouseActive) { glowX = targetX; glowY = targetY; }
      mouseActive = true;
    };
    const onMouseLeave = () => { mouseActive = false; };
    const onTouchMove  = (e: TouchEvent) => {
      targetX = e.touches[0].clientX;
      targetY = e.touches[0].clientY;
      mouseActive = true;
    };
    const onTouchEnd = () => { mouseActive = false; };

    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove",  onTouchMove as EventListener, { passive: true });
    window.addEventListener("touchend",   onTouchEnd);

    const draw = () => {
      // ── Solid black background ─────────────────────────────────────────────
      ctx.fillStyle = "#080808";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ── Lerp ───────────────────────────────────────────────────────────────
      if (mouseActive) {
        glowX += (targetX - glowX) * LERP;
        glowY += (targetY - glowY) * LERP;
      }

      const cols = Math.ceil(canvas.width  / GRID) + 2;
      const rows = Math.ceil(canvas.height / GRID) + 2;

      // Helper: distance-based glow factor (0→1), 0 outside radius
      const glowFactor = (x: number, y: number, radius: number): number => {
        if (!mouseActive) return 0;
        const d = Math.sqrt((x - glowX) ** 2 + (y - glowY) ** 2);
        if (d >= radius) return 0;
        return 1 - (d / radius) ** 2; // quadratic ease-out
      };

      // ── Faint grid lines ──────────────────────────────────────────────────
      ctx.lineWidth = 0.5;
      for (let col = 0; col <= cols; col++) {
        const x   = col * GRID;
        // Per-line glow: brighten the line based on proximity to cursor
        const lf  = glowFactor(x, glowY, GLOW_R * 1.1);
        const la  = LINE_A + lf * 0.10;
        ctx.strokeStyle = `rgba(${LINE_R},${LINE_G},${LINE_B},${la})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let row = 0; row <= rows; row++) {
        const y   = row * GRID;
        const lf  = glowFactor(glowX, y, GLOW_R * 1.1);
        const la  = LINE_A + lf * 0.10;
        ctx.strokeStyle = `rgba(${LINE_R},${LINE_G},${LINE_B},${la})`;
        ctx.beginPath();
        ctx.moveTo(0,            y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // ── Soft ambient bloom under dots ─────────────────────────────────────
      if (mouseActive) {
        const bloom = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, GLOW_R);
        bloom.addColorStop(0,    "rgba(180, 65, 8, 0.09)");
        bloom.addColorStop(0.4,  "rgba(150, 50, 5, 0.04)");
        bloom.addColorStop(1,    "rgba(0,   0,  0, 0)");
        ctx.fillStyle = bloom;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // ── Dots at grid intersections only ───────────────────────────────────
      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          const x = col * GRID;
          const y = row * GRID;

          let a  = REST_A;
          let r  = DOT_R;
          let dr = REST_R, dg = REST_G, db = REST_B;

          if (mouseActive) {
            const dx   = x - glowX;
            const dy   = y - glowY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < GLOW_R) {
              if (dist < INNER_R) {
                // Hot core — bright warm orange
                const ie = 1 - (dist / INNER_R) ** 2;
                a  = REST_A + ie * (0.85 - REST_A);
                r  = DOT_R  + ie * (DOT_R_MAX - DOT_R);
                dr = 255;
                dg = Math.round(130 + ie * 80);  // 130→210
                db = Math.round(10  + ie * 5);
              } else {
                // Outer ring — amber fade
                const oe = 1 - ((dist - INNER_R) / (GLOW_R - INNER_R)) ** 1.8;
                a  = REST_A + oe * 0.28;
                r  = DOT_R  + oe * 0.5;
                dr = 255;
                dg = Math.round(60 + oe * 80);   // 60→140
                db = 8;
              }
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dr},${dg},${db},${a})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize",     resize);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove",  onTouchMove as EventListener);
      window.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100vw",
        height:        "100vh",
        zIndex:        0,
        pointerEvents: "none",
      }}
    />
  );
}