// ValuePropKalki.jsx
// Upgraded Value Proposition / Services section — Kalki-branded, premium layout
// - Uses the exact Kalki palette extracted from your logo
// - Includes the uploaded logo at /mnt/data/logonew.png
// - Retains all original copy and images, reorganized into a cleaner, more attractive layout
// - Drop this file into your React project and import where needed

import React from "react";

/* Brand palette (extracted from your Kalki logo) */
const BRAND = {
  primary: "#327BBE",      // main logo blue
  primaryDark: "#1F5FA3",  // deeper blue
  slate: "#879096",        // soft gray-blue
  slateDark: "#596268",
  charcoal: "#383937",
  black: "#1E1F1E",
  white: "#ffffff",
  accentGradient: "linear-gradient(135deg,#327BBE 0%,#1F5FA3 100%)",
};

/* Local logo path (use the uploaded file) */
const LOGO = "/mnt/data/logonew.png";

/* Services (original copy and images preserved) */
const services = [
  {
    title: "Planning for the Future",
    description: (
      <>
        <p className="text-gray-700 leading-relaxed">
          We've helped clients prepare for the unknown while staying aligned with their financial goals. Ask us about:
        </p>
        <ul className="list-disc list-outside mt-3 text-gray-600 pl-5 space-y-1">
          <li>Financial planning</li>
          <li>Tax optimization</li>
          <li>Education funding</li>
          <li>Estate planning</li>
        </ul>
        <p className="mt-3 text-gray-700 leading-relaxed">
          As an independent firm, we source across providers to tailor solutions that fit your exact needs.
        </p>
      </>
    ),
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img7.jpg",
  },
  {
    title: "Comprehensive End-to-End Approach",
    description:
      "We start with a deep needs analysis, clarify goals, and review your full portfolio. Then we tailor strategies to your risk tolerance and market realities—expect unbiased recommendations built around you.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img8.jpg",
  },
  {
    title: "Committed to Service",
    description:
      "Great strategies begin with great relationships. Our mission is to exceed expectations—on day one and year ten. Let's map short- and long-term moves that bring your goals within reach.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img9.jpg",
  },
];

/* Small utility: open Calendly (safe fallback to new tab) */
function openCalendly(url = "https://calendly.com/kalkifinancialsolutions/30min") {
  if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

/* Arrow icon used in CTAs */
function ArrowUpRight({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Main component */
export default function ValuePropKalki() {
  return (
    <section
      aria-labelledby="valueprop-heading"
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, rgba(50,123,190,0.03) 30%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero / Header */}
        <header className="mb-12 md:mb-16 text-center">
          {/* <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: BRAND.accentGradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 12px 36px rgba(50,123,190,0.12)",
              }}
            >
              <img src={LOGO} alt="Kalki logo" style={{ width: 34, height: 34, objectFit: "contain" }} />
            </div>

            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: BRAND.slateDark, letterSpacing: 1.2 }}>
                KALKI FINANCIAL SOLUTIONS
              </div>
              <div style={{ fontSize: 14, color: BRAND.slate, marginTop: 2 }}>Protection • Investment • Retirement</div>
            </div>
          </div> */}

          <h1 id="valueprop-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: BRAND.black }}>
            <span style={{ display: "block" }}>Our Value Proposition</span>
            <span style={{ display: "block", color: BRAND.primary, marginTop: 6 }}>Clear guidance. Disciplined strategy. A better future.</span>
          </h1>

          <p className="mt-4 max-w-3xl mx-auto text-lg" style={{ color: BRAND.slateDark }}>
            We combine deep analysis with practical steps. Below are the core ways we create value for clients.
          </p>
        </header>

        {/* Two-column featured area + services list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: featured panel (large visual + CTA) */}
          <aside className="lg:col-span-1">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${BRAND.primary}11`,
                boxShadow: "0 18px 50px rgba(20,40,60,0.06)",
                background: "linear-gradient(180deg,#ffffff,#fbfdff)",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-56 object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,20,42,0.18), transparent 45%)" }} />
                <div style={{ position: "absolute", left: 18, bottom: 18, color: "white" }}>
                  <div style={{ fontSize: 18, fontWeight: 800 }}>{services[0].title}</div>
                  <div style={{ fontSize: 13, marginTop: 6, maxWidth: 220 }}>{truncateText(stripHtml(services[0].description), 110)}</div>
                </div>
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    right: -36,
                    top: -36,
                    width: 160,
                    height: 160,
                    borderRadius: 160,
                    background: `radial-gradient(circle at 30% 30%, ${BRAND.primary}22, transparent 40%)`,
                    filter: "blur(22px)",
                    opacity: 0.95,
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Our flagship planning service: deep needs analysis, scenario modeling, and a clear road map you can follow.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => openCalendly()}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-4 py-3 rounded-lg font-semibold text-white"
                    style={{ background: BRAND.accentGradient, boxShadow: "0 12px 36px rgba(50,123,190,0.12)" }}
                  >
                    Book a Strategy Call
                    <ArrowIconInline />
                  </button>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg font-semibold"
                    style={{ border: `1px solid ${BRAND.primary}22`, color: BRAND.primary, background: "white" }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* trust badges */}
            <div className="mt-6 grid grid-cols-1 gap-4">
              <TrustBadge number="1.2K+" label="Families helped" />
              <TrustBadge number="15+" label="Years experience" />
            </div>
          </aside>

          {/* Right: services (stacked, alternating layout) */}
          <div className="lg:col-span-2 space-y-6">
            {services.map((s, idx) => (
              <article
                key={s.title}
                className="group rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
                style={{
                  border: `1px solid ${BRAND.primary}11`,
                  background: "linear-gradient(180deg,#ffffff,#fbfdff)",
                  boxShadow: "0 10px 30px rgba(20,40,60,0.04)",
                }}
              >
                {/* Image column */}
                <div
                  className={`md:col-span-5 relative overflow-hidden`}
                  style={{
                    minHeight: 200,
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ display: "block", height: "100%", width: "100%" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,20,42,0.14), rgba(255,255,255,0.0))" }} />
                  <div style={{ position: "absolute", left: 12, top: 12 }}>
                    <span
                      className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                      style={{ background: BRAND.primary }}
                    >
                      {idx === 0 ? "Flagship" : "Featured"}
                    </span>
                  </div>
                </div>

                {/* Content column */}
                <div className="md:col-span-7 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: BRAND.black }}>
                      {s.title}
                    </h3>

                    <div className="text-gray-700 mb-4" style={{ lineHeight: 1.7 }}>
                      {s.description}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {["Clarity", "Tailored", "Ongoing"].map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            border: `1px solid ${BRAND.primary}22`,
                            color: BRAND.primary,
                            background: `${hexToRgba(BRAND.primary, 0.06)}`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openCalendly()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white"
                        style={{ background: BRAND.primary, boxShadow: "0 8px 28px rgba(50,123,190,0.12)" }}
                      >
                        Talk to Advisor
                      </button>

                      <button
                        onClick={() => {
                          const el = document.querySelector("#contact");
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="text-sm font-semibold"
                        style={{ color: BRAND.primary }}
                      >
                        Learn More <ArrowUpRight size={14} />
                      </button>
                    </div>

                    {/* <div className="text-sm text-gray-500">Service #{idx + 1}</div> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-4 px-6 py-4 rounded-full shadow-lg"
            style={{ background: "white", border: `1px solid ${BRAND.primary}11` }}
          >
            {/* <img src={LOGO} alt="kalki logo" style={{ width: 36, height: 36, objectFit: "contain" }} /> */}
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 800, color: BRAND.black }}>Ready to Start Your Journey?</div>
              <div style={{ color: BRAND.slateDark, fontSize: 14 }}>Schedule a no-pressure conversation with an advisor.</div>
            </div>

            <div style={{ marginLeft: 18 }}>
              <button
                onClick={() => openCalendly()}
                className="px-5 py-3 rounded-lg font-semibold text-white"
                style={{ background: BRAND.accentGradient, boxShadow: "0 12px 36px rgba(50,123,190,0.12)" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small presentational helpers ---------- */

function TrustBadge({ number, label }) {
  return (
    <div
      className="rounded-lg p-4 flex items-start gap-4"
      style={{
        background: "linear-gradient(90deg, rgba(50,123,190,0.03), rgba(50,123,190,0.01))",
        border: `1px solid ${hexToRgba(BRAND.primary, 0.06)}`,
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          background: BRAND.accentGradient,
          display: "grid",
          placeItems: "center",
          color: BRAND.white,
          boxShadow: "0 10px 30px rgba(50,123,190,0.12)",
          fontWeight: 800,
        }}
      >
        {number}
      </div>
      <div>
        <div style={{ fontWeight: 700, color: BRAND.black }}>{label}</div>
        <div style={{ color: BRAND.slateDark, fontSize: 13 }}>Real clients. Real results.</div>
      </div>
    </div>
  );
}

function ArrowIconInline() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Basic helper utils */
function hexToRgba(hex, alpha = 1) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function stripHtml(content) {
  if (!content) return "";
  if (typeof content === "string") return content;
  // render JSX to string by simple approach: flatten children text
  if (Array.isArray(content.props?.children)) {
    return content.props.children.map((c) => (typeof c === "string" ? c : stripHtml(c))).join(" ");
  }
  if (typeof content.props?.children === "string") return content.props.children;
  return "";
}

function truncateText(text, max = 120) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max).trim() + "…" : text;
}
