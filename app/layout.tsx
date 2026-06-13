import type { Metadata } from "next";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";



export const metadata: Metadata = {
  title: "Om Choudhary",
  description: "Full Stack Developer & AI Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Fixed particle canvas — renders behind everything, never scrolls */}
        <ParticleBackground />

        {/* All page content sits above the canvas */}
        <div style={{ position: "relative", zIndex: 2 }}>
          {children}
        </div>
      </body>
    </html>
  );
}