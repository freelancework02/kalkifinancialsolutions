import React, { useState } from "react";
import sweta from "../../assets/swetapatel.jpeg";
import { motion } from "framer-motion";

// Colors kept from your original design
const bluePrimary = "#327BBE";
const blueLight = "#dbeafe";
const blueDark = "#1e3a8a";
const black = "#0f0f0f";
const white = "#ffffff";

// Version A: minimal changes to your existing layout — adds founder image and small UI polish
export function AboutUsClassic() {
  return (
    <section
      className="relative min-h-screen"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8faff 50%, #ffffff 100%)",
      }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border mb-6"
            style={{
              borderColor: "rgba(30, 64, 175, 0.15)",
              boxShadow: "0 8px 32px rgba(30, 64, 175, 0.08)",
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: bluePrimary }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: bluePrimary }}>
              ABOUT KALKI FINANCIAL
            </span>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: bluePrimary }} />
          </div>

          <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-2" style={{ color: black }}>
            ABOUT <span style={{ color: bluePrimary }}>US</span>
          </h1>
        </div>

        <div
          className="rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border-2 p-8 md:p-12 lg:p-14"
          style={{
            borderColor: "rgba(30, 64, 175, 0.08)",
            boxShadow: "0 20px 60px -12px rgba(30, 64, 175, 0.18)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: text */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold" style={{ color: black }}>
                  Our Mission
                </h2>
                <p className="mt-4 text-black/75 leading-relaxed text-lg">
                  Personal finances are something that every individual should know and understand. But sadly, there is
                  very little formal education on the topic and many of us fumble about the topic copying what everyone
                  else is doing. But this may not always be in our best interest.
                </p>
                <p className="mt-3 text-black/75 leading-relaxed text-lg">
                  Kalki financial solutions was conceived to primarily take an educational approach towards personal
                  finances, to first teach people the basics of personal finances and then help them take actions to meet
                  their financial goals.
                </p>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  {[
                    "Education First",
                    "Personalized Planning",
                    "Ongoing Support",
                  ].map((b, i) => (
                    <span
                      key={i}
                      className="text-sm font-semibold px-4 py-2.5 rounded-xl border bg-white/80 backdrop-blur-sm"
                      style={{ borderColor: "rgba(30, 64, 175, 0.15)", color: bluePrimary }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: founder card with image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden border shadow-sm" style={{ borderColor: "rgba(30,64,175,0.06)" }}>
                <div className="relative">
                  {/* founder image */}
                  <img src={sweta} alt="Sweta Patel" className="w-full h-56 object-cover" />
                </div>
                <div className="p-6 bg-gradient-to-b from-white/90 to-white">
                  <h3 className="text-2xl font-bold" style={{ color: black }}>Sweta Patel</h3>
                  <p className="text-sm text-black/60">(License Number – NPN21177220)</p>
                  <p className="mt-3 text-xs uppercase tracking-wide font-semibold" style={{ color: bluePrimary }}>
                    Kalki Financial Solutions
                  </p>
                  <p className="mt-2 text-sm text-black/70">Protection • Investment • Retirement Planning</p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) { window.Calendly.initPopupWidget({ url: "https://calendly.com/kalkifinancialsolutions/30min" }); } else { window.open("https://calendly.com/kalkifinancialsolutions/30min", "_blank", "noopener,noreferrer"); } }}

                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold shadow"
                      style={{ background: bluePrimary, color: white }}
                    >
                      Book Clarity Call
                    </a>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) { window.Calendly.initPopupWidget({ url: "https://calendly.com/kalkifinancialsolutions/30min" }); } else { window.open("https://calendly.com/kalkifinancialsolutions/30min", "_blank", "noopener,noreferrer"); } }}

                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold border"
                      style={{ borderColor: bluePrimary, color: bluePrimary }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Version B: a modern, attractive re-design — split hero, stronger visual hierarchy, subtle motion, feature strip
export function AboutUsModern() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#f7fbff] to-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Bold hero + stats */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-10 shadow-2xl border"
              style={{ borderColor: "rgba(50,123,190,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full" style={{ background: bluePrimary }} />
                <p className="text-sm font-semibold uppercase" style={{ color: bluePrimary }}>
                  About Kalki Financial
                </p>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: black }}>
                Smart, simple personal finance guidance
              </h2>

              <p className="mt-6 text-lg text-black/70">
                We teach the basics, then help you act — a practical, no-nonsense approach to protection, investment and
                retirement planning tailored to your life.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs text-black/60">Years experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs text-black/60">Households helped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-xs text-black/60">Positive feedback</div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#book"
                  className="px-5 py-3 rounded-lg font-semibold shadow"
                  style={{ background: bluePrimary, color: white }}
                >
                  Book a free call
                </a>
                <a
                  href="#tools"
                  className="px-5 py-3 rounded-lg font-semibold border"
                  style={{ borderColor: bluePrimary, color: bluePrimary }}
                >
                  Explore tools
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: floating founder card with angled image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-6 top-8 transform rotate-3 opacity-80 pointer-events-none" aria-hidden>
                <div className="w-48 h-48 rounded-2xl" style={{ background: `linear-gradient(135deg, ${blueLight}, ${white})` }} />
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-xl border" style={{ borderColor: "rgba(30,64,175,0.06)" }}>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                    <img src={sweta} alt="Sweta Patel" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-sm uppercase font-bold" style={{ color: bluePrimary }}>Founder</div>
                    <div className="text-xl font-extrabold" style={{ color: black }}>Sweta Patel</div>
                    <div className="text-xs text-black/60">License NPN21177220</div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-black/70">
                  <p>
                    Ready to make your money work smarter? Book a free 15‑minute clarity call — we’ll map the simplest next
                    step for your goals.
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-3">
                    <a href="#book" className="px-4 py-2 rounded-md font-semibold" style={{ background: bluePrimary, color: white }}>Book</a>
                    <a href="#contact" className="px-4 py-2 rounded-md font-semibold border" style={{ borderColor: bluePrimary, color: bluePrimary }}>Contact</a>
                  </div>
                  <div className="text-xs text-black/50">Protection • Investment • Retirement</div>
                </div>
              </div>

              {/* small feature bar below the card */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { title: "Education", desc: "Workshops & guides" },
                  { title: "Plans", desc: "Tailored to you" },
                  { title: "Support", desc: "Ongoing check-ins" },
                ].map((f, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 text-center border" style={{ borderColor: "rgba(30,64,175,0.04)" }}>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-xs text-black/60">{f.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// A small wrapper that exposes both versions and lets you toggle in the UI
export default function AboutUsVariants() {
  const [variant, setVariant] = useState("classic");
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-end gap-3">
        <button
          onClick={() => setVariant("classic")}
          className={`px-3 py-1 rounded-full font-semibold border ${variant==="classic"?"shadow":""}`}
          style={{ borderColor: bluePrimary, color: variant==="classic"?white:bluePrimary, background: variant==="classic"?bluePrimary:undefined }}
        >
          Classic
        </button>
        <button
          onClick={() => setVariant("modern")}
          className={`text-black px-3 py-1 rounded-full font-semibold border ${variant==="modern"?"shadow":""}`}
          style={{ borderColor: bluePrimary, color: variant==="modern"?white:bluePrimary, background: variant==="modern"?bluePrimary:undefined }}
        >
          Modern
        </button>
      </div>

      {variant === "classic" ? <AboutUsClassic /> : <AboutUsModern />}
    </div>
  );
}
