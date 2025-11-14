// src/components/HeroSection.jsx
import React, { useEffect } from "react";
import {
  Mail,
  Phone,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Calendar,
} from "lucide-react";
import img from "../../assets/Herosection.png";

/* Calendly loader (idempotent) */
function useCalendlyLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.Calendly) return;
    const existing = document.getElementById("calendly-script");
    if (existing) return;
    const s = document.createElement("script");
    s.id = "calendly-script";
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

/**
 * HeroSection (updated to match Kalki logo colors)
 *
 * - Replaced orange accent with the logo blue palette
 *   - accentFrom: #1976D2 (primary blue)
 *   - accentTo:   #0F56A4 (darker blue)
 * - Focus rings, icon accents, CTAs and subtle tints use the blue system.
 * - Kept dark, dramatic visual style but with blue highlights to match branding.
 */
const HeroSection = ({ topOffset = 88 }) => {
  useCalendlyLoader();

  const openCalendly = (e) => {
    e?.preventDefault();
    try {
      if (window.Calendly?.initPopupWidget) {
        window.Calendly.initPopupWidget({
          url: "https://calendly.com/futurewesecure-info/30min",
        });
      } else {
        window.open(
          "https://calendly.com/futurewesecure-info/30min",
          "_blank",
          "noopener,noreferrer"
        );
      }
    } catch {
      window.open(
        "https://calendly.com/futurewesecure-info/30min",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const benefits = [
    "Personalized retirement & income plans",
    "Asset protection & legacy strategies",
    "Evidence-based investing discipline",
    "Plain-English education & reviews",
  ];

  const stats = [
    { k: "99%", v: "Client Satisfaction" },
    { k: "26+ yrs", v: "Combined Expertise" },
    { k: "1,200+", v: "Plans Reviewed" },
  ];

  // Logo color system (blue)
  const accentFrom = "#1976D2"; // primary blue
  const accentTo = "#0F56A4"; // darker blue for gradient
  const brandDark = "#002B55";
  const mutedGray = "#333333";

  return (
    <section
      aria-label="Hero — Future we Secure"
      className="relative overflow-visible"
      style={{ paddingTop: `${topOffset}px` }}
    >
      {/* Background: keep dramatic dark backdrop but tint with subtle navy glow */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            `radial-gradient(800px 260px at 12% 6%, rgba(25,118,210,0.10), transparent 30%), ` +
            `linear-gradient(180deg, #03050a 0%, #071127 30%, #0b0f16 60%)`,
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          {/* LEFT: copy */}
          <div className="space-y-6">
            <div
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid rgba(25,118,210,0.08)`,
                backdropFilter: "blur(6px)",
              }}
              aria-label="Trust-first financial guidance"
            >
              <ShieldCheck className="w-4 h-4" style={{ color: accentFrom }} aria-hidden="true" />
              <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.92)" }}>
                Fiduciary-minded guidance
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Build a{" "}
              <span
                className="inline-block"
                style={{
                  background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Stronger Financial Future
              </span>{" "}
              — Starting Now.
            </h1>

            <p className="text-lg md:text-xl" style={{ color: "rgba(255,255,255,0.82)", maxWidth: "44rem" }}>
              Clear plans. Smart protection. Disciplined growth. We combine education
              and strategy to help you reach—and keep—your goals with clarity and
              confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-3 justify-center text-lg font-semibold py-3 px-6 rounded-xl shadow-xl focus:outline-none focus-visible:ring-4 transform transition-transform duration-150 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
                  color: "#ffffff",
                  boxShadow: "0 14px 40px -12px rgba(15,86,164,0.18)",
                }}
                aria-label="Book a free 30 minute consultation"
              >
                <Calendar className="w-5 h-5" style={{ color: "#ffffff" }} aria-hidden="true" />
                <span className="text-white">Book a Consultation</span>
              </button>

              <a
                href="/service"
                className="inline-flex items-center gap-3 justify-center text-lg font-semibold py-3 px-6 rounded-xl border border-white/10 bg-white/4 backdrop-blur text-white hover:bg-white/8 transition"
                aria-label="Explore our services"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                Explore Services
                <ArrowRight className="w-4 h-4" style={{ color: "rgba(255,255,255,0.9)" }} aria-hidden="true" />
              </a>
            </div>

            {/* Benefits */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {benefits.map((t) => (
                <li key={t} className="flex items-center gap-3" style={{ color: "rgba(255,255,255,0.95)" }}>
                  <CheckCircle2
                    className="w-5 h-5"
                    style={{ color: accentFrom }}
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium">{t}</span>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: accentFrom }} aria-hidden="true" />
                <a
                  href="mailto:Info@futurewesecure.com"
                  className="font-medium"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  Info@futurewesecure.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: accentFrom }} aria-hidden="true" />
                <a href="tel:+1516-917-0756" style={{ color: "rgba(255,255,255,0.92)", fontWeight: 600 }}>
                  516-917-0756
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="pt-6 grid grid-cols-3 gap-3 max-w-xl">
              {stats.map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl px-4 py-3 text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid rgba(25,118,210,0.06)`,
                  }}
                  aria-label={`${s.v}: ${s.k}`}
                >
                  <div className="text-xl md:text-2xl font-extrabold" style={{ color: "#ffffff" }}>{s.k}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.68)" }}>{s.v}</div>
                </div>
              ))}
            </div>

            <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.56)", maxWidth: "44rem" }}>
              Educational content. Not an offer to buy or sell securities. Decisions
              should consider your unique situation and objectives.
            </p>
          </div>

          {/* RIGHT: visual/art */}
          <div className="relative flex justify-center md:justify-end">
            <figure className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  border: "1px solid rgba(255,255,255,0.04)",
                  boxShadow: "0 24px 60px -24px rgba(0,0,0,0.65)",
                }}
              >
                <picture>
                  <img
                    src={img}
                    alt="Financial advisors reviewing growth charts and plans at a desk"
                    className="w-full h-[320px] md:h-[420px] lg:h-[480px] object-cover object-center bg-white"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>

                {/* subtle top gradient (blue-tinted) */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating stat pill */}
              <figcaption className="absolute -bottom-6 left-3 sm:left-0">
                <div
                  className="rounded-2xl px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.96)",
                    color: "#0b1724",
                    boxShadow: "0 18px 40px -18px rgba(0,0,0,0.45)",
                    border: "1px solid rgba(255,255,255,0.9)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" style={{ color: accentFrom }} aria-hidden="true" />
                    <div className="text-sm font-semibold tracking-wide">On-track Projection</div>
                  </div>
                  <div className="mt-1 text-2xl font-extrabold">+12.4%</div>
                  <div className="text-xs text-slate-600">12-mo rolling</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.18))",
        }}
      />
    </section>
  );
};

export default HeroSection;
