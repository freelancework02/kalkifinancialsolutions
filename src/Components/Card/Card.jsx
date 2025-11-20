/**
 ProfessionalServicesBlueVariants.jsx

 Two upgraded layouts using the Kalki blue color system (logo-matching).
 - ProfessionalServicesBlueA: Bold split-hero with immersive image panel and stacked cards.
 - ProfessionalServicesBlueB: Centered, elegant grid with staggered rhythm and badge.
 
 Text, copy and image URLs are unchanged. Logo used from local path:
   /mnt/data/logonew.png

 Usage:
   import { ProfessionalServicesBlueA, ProfessionalServicesBlueB } from './ProfessionalServicesBlueVariants.jsx';
*/

import React from "react";

/* Logo file (local path provided in conversation) */
import LogoPath from "../../assets/Logo/logonew.png"

/* Keep original images + text unchanged */
const services = [
  {
    title: "Expertise",
    description:
      "Over ten years of experience. Clear insights, strategic roadmaps, and ongoing reviews that keep your goals on track.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img1.jpg",
  },
  {
    title: "Discretion",
    description:
      "Your privacy matters. We handle sensitive information with full confidentiality and secure data processes.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img2.jpg",
  },
  {
    title: "Dependability",
    description:
      "Consistent support, transparent updates, and a results-driven approach to your long-term well-being.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img3.jpg",
  },
  {
    title: "Consulting",
    description:
      "Cut through complexity. Focused strategy sessions that help you clarify goals and close financial gaps.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img4.jpg",
  },
  {
    title: "Sales",
    description:
      "Curated financial solutions that prioritize suitability, cost-efficiency, and long-term value.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img5.jpg",
  },
  {
    title: "Partnership",
    description:
      "If our philosophy aligns, we grow together—built on trust, shared standards, and mutual integrity.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img6.jpg",
  },
];

/* Kalki blue theme tokens (tuned to uploaded logo) */
const BLUE = {
  accentStart: "#2bb0ff", // lighter electric blue
  accentEnd: "#0b63d6",   // deep logo blue
  deep: "#042233",        // deep navy
  text: "#07293a",
  subtle: "rgba(11,99,214,0.08)",
  glow: "rgba(11,99,214,0.14)",
};

/* Calendly/open helper */
function openCalendly() {
  if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url: "https://calendly.com/kalkifinancialsolutions/30min" });
  } else {
    window.open("https://calendly.com/kalkifinancialsolutions/30min", "_blank", "noopener,noreferrer");
  }
}

/* ---------------- Variant A
   Layout: Strong split hero (left content, right stacked imagery) with bold CTA and glass cards below.
*/
export function ProfessionalServicesBlueA() {
  const t = BLUE;

  return (
    <section
      aria-labelledby="services-heading-A"
      className="py-16 px-4 md:px-8 lg:px-12"
      style={{
        background: `radial-gradient(900px 260px at 8% 8%, ${t.glow}, transparent), linear-gradient(180deg,#f7fbff 0%, #ffffff 40%)`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div
            className="px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-3"
            style={{ background: "white", border: `1px solid ${t.subtle}`, boxShadow: "0 8px 24px rgba(4,34,51,0.04)" }}
          >
            <span style={{ display: "inline-block", width: 28, height: 28, borderRadius: 999, background: `linear-gradient(90deg, ${t.accentStart}, ${t.accentEnd})`, boxShadow: "0 8px 26px rgba(11,99,214,0.12)" }} />
            <span style={{ color: t.deep, letterSpacing: 0.6 }}>WHAT CAN YOU EXPECT FROM US</span>
          </div>
        </div>

        {/* Split hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 56, height: 56, borderRadius: 12, background: `#fff`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 14px 40px rgba(11,99,214,0.12)" }}>
                <img src={LogoPath} alt="logo" style={{ width: 40, height: 40, objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: t.text }}>Kalki Financial Solutions</div>
                <div style={{ color: "#3b6a72", fontSize: 13 }}>Protection — Investment — Retirement Planning</div>
              </div>
            </div>

            <h2 id="services-heading-A" style={{ fontSize: "2.25rem", lineHeight: 1.06, marginBottom: 12, color: t.deep, fontWeight: 800 }}>
              Our Skills & Offers
            </h2>

            <p style={{ color: "#2b5560", maxWidth: 680, marginBottom: 20 }}>
              Expertise you can trust — delivered with clarity, transparency, and long-term vision.
            </p>

            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <button
                onClick={(e) => { e.preventDefault(); openCalendly(); }}
                style={{
                  background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})`,
                  color: "white",
                  padding: "12px 20px",
                  borderRadius: 12,
                  fontWeight: 800,
                  boxShadow: "0 16px 48px rgba(11,99,214,0.12)",
                  border: "none",
                }}
              >
                Book a Review
              </button>

              <a href="#contact" onClick={(e) => e.preventDefault()} style={{ color: t.deep, padding: "10px 16px", borderRadius: 10, border: `1px solid ${t.subtle}`, background: "white", textDecoration: "none", fontWeight: 700 }}>
                Contact Us
              </a>
            </div>

            <div style={{ display: "flex", gap: 20, marginTop: 22 }}>
              <div>
                <strong style={{ color: t.deep }}>Trusted Process</strong>
                <div style={{ color: "#4a777f" }}>Clear, repeatable steps</div>
              </div>
              <div>
                <strong style={{ color: t.deep }}>Tailored Plans</strong>
                <div style={{ color: "#4a777f" }}>Built for your life</div>
              </div>
            </div>
          </div>

          {/* Right: stacked imagery and accent shapes */}
          <aside className="lg:col-span-6">
            <div style={{ display: "grid", gap: 16 }}>
              {/* Large hero image with overlay */}
              <div style={{ position: "relative", height: 340, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 70px rgba(4,34,51,0.08)", border: `1px solid rgba(4,34,51,0.04)` }}>
                <img src={services[0].image} alt={services[0].title} style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.02)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,34,51,0.28), rgba(4,34,51,0.04))" }} />
                <div style={{ position: "absolute", left: 20, bottom: 20, color: "white", maxWidth: "62%" }}>
                  <div style={{ fontWeight: 800, fontSize: 20 }}>{services[0].title}</div>
                  <div style={{ marginTop: 6, fontSize: 14 }}> {services[0].description} </div>
                  <div style={{ marginTop: 12 }}>
                    <button onClick={(e) => { e.preventDefault(); openCalendly(); }} style={{ background: "white", color: t.deep, padding: "8px 14px", borderRadius: 10, fontWeight: 700, border: "none" }}>Start Now</button>
                  </div>
                </div>

                <div aria-hidden style={{ position: "absolute", right: -44, top: -44, width: 200, height: 200, borderRadius: 200, background: `radial-gradient(circle at 30% 30%, ${t.accentStart}, ${t.accentEnd}55)`, filter: "blur(28px)", opacity: 0.55 }} />
              </div>

              {/* Two medium cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[services[1], services[2]].map((s) => (
                  <div key={s.title} style={{ position: "relative", borderRadius: 14, overflow: "hidden", minHeight: 150, boxShadow: "0 12px 28px rgba(4,34,51,0.04)", border: `1px solid rgba(4,34,51,0.04)` }}>
                    <img src={s.image} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,34,51,0.12), rgba(255,255,255,0.02))" }} />
                    <div style={{ position: "absolute", left: 12, bottom: 12, color: "white", maxWidth: "78%" }}>
                      <div style={{ fontWeight: 800 }}>{s.title}</div>
                      <div style={{ fontSize: 13 }}>{s.description.length > 80 ? s.description.slice(0, 80) + "..." : s.description}</div>
                    </div>
                    <div aria-hidden style={{ position: "absolute", left: -28, bottom: -28, width: 120, height: 120, borderRadius: 120, background: `radial-gradient(circle, ${t.accentStart}, ${t.accentEnd}55)`, filter: "blur(18px)", opacity: 0.45 }} />
                  </div>
                ))}
              </div>

              {/* Three compact tiles row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {services.slice(3, 6).map((s) => (
                  <div key={s.title} style={{ borderRadius: 12, overflow: "hidden", minHeight: 120, boxShadow: "0 10px 26px rgba(4,34,51,0.04)", border: `1px solid rgba(4,34,51,0.04)` }}>
                    <img src={s.image} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ padding: 12, background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.6))" }}>
                      <div style={{ fontWeight: 800, color: t.deep }}>{s.title}</div>
                      <div style={{ fontSize: 13, color: "#2b5560" }}>{s.description.length > 70 ? s.description.slice(0, 70) + "..." : s.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* CTA strip */}
        <div style={{ marginTop: 28, borderRadius: 16, padding: 18, background: `linear-gradient(90deg, ${t.accentStart}10, ${t.accentEnd}06)`, display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 8px 28px rgba(4,34,51,0.03)", border: `1px solid rgba(4,34,51,0.03)` }}>
          <div>
            <div style={{ fontWeight: 800, color: t.deep }}>Want a quick, no-pressure review?</div>
            <div style={{ color: "#2b5560" }}>Schedule a brief call — we’ll listen, assess, and suggest next steps.</div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={(e) => { e.preventDefault(); openCalendly(); }} style={{ background: `linear-gradient(90deg, ${t.accentStart}, ${t.accentEnd})`, color: "white", padding: "12px 18px", borderRadius: 12, fontWeight: 800, border: "none", boxShadow: "0 12px 34px rgba(11,99,214,0.12)" }}>
              Book a Review
            </button>

            <a href="#contact" onClick={(e) => e.preventDefault()} style={{ padding: "10px 16px", borderRadius: 10, border: `1px solid ${t.subtle}`, background: "white", color: t.deep, fontWeight: 700, textDecoration: "none" }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Variant B
   Layout: Centered badge and header, then alternating feature blocks for rhythm.
   Visual: calm, refined, with accent rings and subtle hover micro-interactions.
*/
export function ProfessionalServicesBlueB() {
  const t = BLUE;

  return (
    <section
      aria-labelledby="services-heading-B"
      className="py-16 px-4 md:px-6 lg:px-12"
      style={{ background: `radial-gradient(700px 240px at 50% 4%, ${t.glow}, transparent), linear-gradient(180deg,#f8fbff 0%, #ffffff 50%)` }}
    >
      <div className="max-w-6xl mx-auto">
        {/* centered badge + heading */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ display: "inline-block", marginBottom: 14 }}>
            <div style={{ width: 120, height: 120, borderRadius: 20, background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 50px rgba(11,99,214,0.12)" }}>
              <img src={LogoPath} alt="logo" style={{ width: 56, height: 56, objectFit: "contain" }} />
            </div>
          </div>

          <h2 id="services-heading-B" style={{ fontSize: "2rem", fontWeight: 800, color: t.deep }}>Our Skills & Offers</h2>
          <p style={{ color: "#2b5560", maxWidth: 720, margin: "10px auto 0" }}>Expertise you can trust — delivered with clarity, transparency, and long-term vision.</p>
        </div>

        {/* alternating features */}
        <div style={{ display: "grid", gap: 18 }}>
          {services.map((s, i) => {
            const leftImage = i % 2 === 0;
            return (
              <div
                key={s.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: leftImage ? "1fr 2fr" : "2fr 1fr",
                  gap: 18,
                  alignItems: "center",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: `1px solid rgba(4,34,51,0.04)`,
                  boxShadow: "0 12px 30px rgba(4,34,51,0.04)",
                  background: "white",
                }}
              >
                <div style={{ position: "relative", minHeight: 160 }}>
                  <img src={s.image} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,34,51,0.08), rgba(4,34,51,0.02))" }} />
                  <div aria-hidden style={{ position: "absolute", right: -36, top: 12, width: 140, height: 140, borderRadius: 140, background: `radial-gradient(circle at 30% 30%, ${t.accentStart}, ${t.accentEnd}33)`, filter: "blur(18px)", opacity: 0.45 }} />
                </div>

                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: t.deep }}>{s.title}</h3>
                  <p style={{ color: "#234a4a", marginTop: 8 }}>{s.description}</p>

                  <div style={{ marginTop: 14, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                    <button onClick={(e) => { e.preventDefault(); openCalendly(); }} style={{ background: `linear-gradient(90deg, ${t.accentStart}, ${t.accentEnd})`, color: "white", padding: "10px 14px", borderRadius: 10, fontWeight: 800, border: "none", boxShadow: "0 10px 30px rgba(11,99,214,0.08)" }}>
                      Get Started
                    </button>

                    <a href="#learn" onClick={(e) => e.preventDefault()} style={{ color: "#235353", fontWeight: 700, textDecoration: "none" }}>
                      Learn more →
                    </a>

                    <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                      <span style={{ fontSize: 12, padding: "6px 10px", borderRadius: 999, background: "#f1fbff", color: t.accentEnd, fontWeight: 700 }}>Clarity</span>
                      <span style={{ fontSize: 12, padding: "6px 10px", borderRadius: 999, background: "#f1fbff", color: t.accentEnd, fontWeight: 700 }}>Consistency</span>
                    </div>
                  </div>

                  <div style={{ marginTop: 12, height: 4, width: 0, borderRadius: 999, background: `linear-gradient(90deg, ${t.accentStart}, ${t.accentEnd})`, transition: "width .35s ease" }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* final CTA */}
        <div style={{ marginTop: 28, borderRadius: 14, padding: 18, background: "white", border: `1px solid rgba(4,34,51,0.04)`, boxShadow: "0 10px 30px rgba(4,34,51,0.04)", display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: 800, color: BLUE.deep }}>Want a quick, no-pressure review?</div>
            <div style={{ color: "#234a4a" }}>Schedule a brief call — we’ll listen, assess, and suggest next steps.</div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={(e) => { e.preventDefault(); openCalendly(); }} style={{ background: `linear-gradient(90deg, ${t.accentStart}, ${t.accentEnd})`, color: "white", padding: "10px 16px", borderRadius: 10, fontWeight: 800, border: "none", boxShadow: "0 12px 36px rgba(11,99,214,0.10)" }}>
              Book a Review
            </button>

            <a href="#contact" onClick={(e) => e.preventDefault()} style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${t.subtle}`, color: t.deep, textDecoration: "none", background: "white", fontWeight: 700 }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* default export convenience */
export default ProfessionalServicesBlueA;
