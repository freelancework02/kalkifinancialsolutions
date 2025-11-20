import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ShieldCheck,
  Calendar,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import heroImg from "../../assets/Herosection.png";

/* Idempotent Calendly loader */
function useCalendlyLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window && window.Calendly) return;
    if (document.getElementById("calendly-script")) return;
    const s = document.createElement("script");
    s.id = "calendly-script";
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

const COLORS = {
  navy: "#081426",
  accentFrom: "#0ea5e9", // sky-500
  accentTo: "#3b82f6", // blue-500
  white: "#ffffff",
  text: "#071124",
  card: "rgba(255,255,255,0.06)",
  glow: "rgba(59,130,246,0.12)",
};

const openCalendlyPopup = (url = "https://calendly.com/kalkifinancialsolutions/30min") => {
  try {
    if (window && window.Calendly && window.Calendly.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  } catch (e) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

export default function HeroAttractive({ topOffset = 72 }) {
  useCalendlyLoader();

  const items = [
    "Tailored retirement & income plans",
    "Insurance & legacy protection",
    "Evidence-based investing discipline",
  ];

  return (
    <section
      aria-label="Hero — Attractive"
      className="bg-white relative overflow-hidden"
      // style={{ paddingTop: `${topOffset}px`, backgroundColor: COLORS.navy }}
    >
      {/* subtle background shapes */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(600px 240px at 10% 10%, ${COLORS.glow}, transparent 28%), linear-gradient(180deg, ${COLORS.navy} 0%, rgba(2,6,23,0.9) 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-20 lg:py-28">
          {/* LEFT: copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 w-max rounded-full px-3 py-1.5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span className="text-sm font-semibold text-white">Fiduciary-first guidance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
              Secure your
              <br />
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${COLORS.accentFrom}, ${COLORS.accentTo})`,
                  textShadow: '0 10px 40px rgba(10, 132, 255, 0.08)'
                }}
              >
                stronger financial future
              </span>
              <span className="block mt-2 text-lg font-medium text-black">— clear plans, fewer surprises.</span>
            </h1>

            <p className="text-lg text-black max-w-2xl">
              We build plans that protect what matters and help your money work smarter. No jargon — just practical steps you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openCalendlyPopup()}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold shadow-2xl"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.accentFrom}, ${COLORS.accentTo})`,
                  color: COLORS.white,
                  boxShadow: '0 20px 50px -20px rgba(59,130,246,0.4)'
                }}
              >
                <Calendar className="w-5 h-5" />
                Book a free 30m consult
              </motion.button>

              <a
                href="/service"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 text-black bg-white/4 backdrop-blur"
              >
                Explore services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 max-w-md">
              {items.map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/95">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/6">
                    <CheckCircle2 className="w-4 h-4 text-black"  />
                  </span>
                  <span className="font-medium text-black">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-300" />
                <a href="mailto:kalkifinancialsolutions@gmail.com" className="text-black font-medium">kalkifinancialsolutions@gmail.com</a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-300" />
                <a href="tel:+17737260391" className="text-black font-medium">773-726-0391</a>
              </div>
            </div>

            {/* small stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xs">
              <div className="rounded-xl p-3 text-center bg-white/4 border border-white/6">
                <div className="text-lg font-extrabold text-black">99%</div>
                <div className="text-xs text-black">Client satisfaction</div>
              </div>

              <div className="rounded-xl p-3 text-center bg-white/4 border border-white/6">
                <div className="text-lg font-extrabold text-black">26+ yrs</div>
                <div className="text-xs text-black">Combined expertise</div>
              </div>

              <div className="rounded-xl p-3 text-center bg-white/4 border border-white/6">
                <div className="text-lg font-extrabold text-black">1,200+</div>
                <div className="text-xs text-black">Plans reviewed</div>
              </div>
            </div>
          </div>

          {/* RIGHT: visual card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 30px 80px -30px rgba(2,6,23,0.7)',
                border: '1px solid rgba(255,255,255,0.04)'
              }}
            >
              <img
                src={heroImg}
                alt="Advisors reviewing plans"
                className="w-full h-[420px] object-cover object-center bg-white"
                loading="eager"
              />

              {/* inner tint */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(2,6,23,0.12), rgba(2,6,23,0.36))' }} />

              {/* floating micro-card */}
              <div className="absolute -bottom-8 left-6">
                <div className="bg-white rounded-2xl p-4 w-64 shadow-lg border" style={{ color: COLORS.text }}>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-sky-500" />
                    <div className="font-semibold">On-track projection</div>
                  </div>

                  <div className="mt-1 font-extrabold text-2xl">+12.4%</div>
                  <div className="text-xs text-gray-500">12-mo rolling</div>
                </div>
              </div>

              {/* top-left badge */}
              <div className="absolute top-6 left-6 rounded-full bg-white/6 px-3 py-1.5 backdrop-blur border border-white/6">
                <div className="flex items-center gap-2 text-white">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="#60A5FA"/></svg>
                  <span className="text-xs font-medium">Trusted advisor</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.24))' }} />
    </section>
  );
}
