// ServiceCardKalki.jsx
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import LOGO_PATH from "../../assets/Logo/whitetextlogo.png"
import logo2 from "../../assets/Logo/logo_white_bg.png"

// Brand palette (extracted from your Kalki logo)
const BRAND = {
  primary: "#327BBE",
  primaryDark: "#1f5fa3",
  slate: "#879096",
  slateDark: "#596268",
  charcoal: "#383937",
  black: "#1E1F1E",
  white: "#ffffff",
  gradient: "linear-gradient(135deg, #327BBE 0%, #1E1F1E 100%)",
};

const services = [
  {
    title: "Retirement Planning",
    description:
      "Plan your retirement so your lifestyle is shaped by choice, not just assets at retirement.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img1.jpg",
  },
  {
    title: "Estate Planning",
    description:
      "Protect what you've built from probate, litigation, and unfavorable taxation.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img2.jpg",
  },
  {
    title: "Kids Education Planning",
    description:
      "Choose a smart, disciplined path to fund your children's education.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img3.jpg",
  },
  {
    title: "Lifetime Income Planning",
    description:
      "No pension? Create one—and secure predictable, lifetime income streams.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img4.jpg",
  },
  {
    title: "Life Insurance Planning",
    description:
      "Right-sized coverage with living benefits and quotes that fit your budget.",
    image:
      "https://s3.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/files/images/240314022303_Life%20Insurance%20at%20Various%20Life%20Stages.jpeg",
  },
  {
    title: "Investments Planning",
    description:
      "Grow capital the smart way. Know the difference between nominal and real returns.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img6.jpg",
  },
];

// Path to the uploaded Kalki logo (use the local path you uploaded)


export default function ServiceCardKalki() {
  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, rgba(50,123,190,0.03) 40%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
          <div
  className="rounded-2xl p-3 flex items-center justify-center shadow-sm"
  style={{
    background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
    boxShadow: "0 10px 30px rgba(50,123,190,0.12)",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="w-16 h-16"
    fill="white"
  >
    <path d="M8 38h32v4H8z" />
    <path
      d="M12 30l10-10 7 7 13-13"
      stroke="white"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="42" cy="14" r="3" fill="white" />
  </svg>
</div>


            <div>
              <div className="text-sm font-semibold" style={{ color: BRAND.charcoal }}>
                KALKI FINANCIAL SOLUTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: BRAND.black }}>
                Professional <span style={{ color: BRAND.primary }}>Services</span>
              </h2>
              <p className="mt-1 text-sm" style={{ color: BRAND.slateDark }}>
                Expert guidance and tailored solutions to help you secure a better financial future.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                  window.Calendly.initPopupWidget({ url: "https://calendly.com/kalkifinancialsolutions/30min" });
                } else {
                  window.open("https://calendly.com/kalkifinancialsolutions/30min", "_blank", "noopener,noreferrer");
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
              style={{
                background: BRAND.gradient,
                color: BRAND.white,
              }}
            >
              <FaCalendarAlt /> Book a review
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium border"
              style={{
                borderColor: `${BRAND.primary}33`,
                color: BRAND.primary,
                background: "white",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <article
              key={service.title + idx}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-400"
              style={{
                transform: "translateZ(0)",
                background: "linear-gradient(180deg, #ffffff, #fbfdff)",
                border: `1px solid ${BRAND.primary}11`,
              }}
            >
              {/* Image */}
              <div className="relative h-56 md:h-60 lg:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* soft dark overlay to keep text readable */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.02))" }} />

                {/* popular badge for 1st item */}
                {idx === 0 && (
                  <div style={{ position: "absolute", top: 12, left: 12 }}>
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-bold text-white drop-shadow-sm"
                      style={{
                        background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
                      }}
                    >
                      Popular
                    </span>
                  </div>
                )}

                {/* subtle accent ring */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    right: -36,
                    bottom: -36,
                    width: 160,
                    height: 160,
                    borderRadius: 160,
                    background: `radial-gradient(circle at 30% 30%, ${BRAND.primary}22, transparent 40%)`,
                    filter: "blur(14px)",
                    opacity: 0.9,
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="text-xl font-semibold mb-2" style={{ color: BRAND.black }}>
                  {service.title}
                </h3>

                <p className="text-base text-gray-700 mb-4" style={{ color: BRAND.slateDark }}>
                  {service.description}
                </p>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {["Clarity", "Tailored", "Ongoing"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          border: `1px solid ${BRAND.primary}22`,
                          color: BRAND.primary,
                          background: `${BRAND.primary}10`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {/* <button
                      onClick={() => {
                        if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                          window.Calendly.initPopupWidget({ url: "https://calendly.com/kalkifinancialsolutions/30min" });
                        } else {
                          window.open("https://calendly.com/kalkifinancialsolutions/30min", "_blank", "noopener,noreferrer");
                        }
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white transition-transform transform hover:-translate-y-0.5"
                      style={{
                        background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
                        boxShadow: "0 10px 28px rgba(50,123,190,0.12)",
                      }}
                    >
                      Book Review
                    </button> */}

                    {/* <button
                      onClick={() => {
                        // small smooth scroll to details / contact anchor
                        const el = document.querySelector("#contact");
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="text-sm font-medium text-[16px]"
                      style={{ color: BRAND.primary, background: "transparent" }}
                    >
                      Learn more <ArrowRight size={16} style={{ display: "inline-block", marginLeft: 6 }} />
                    </button> */}
                  </div>
                </div>
              </div>

              {/* Hover floating CTA (appears on card hover) */}
              <div
                className="absolute left-6 right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ pointerEvents: "none" }}
              >
                <div className="flex items-center justify-between bg-white/95 p-3 rounded-xl shadow-md" style={{ border: `1px solid ${BRAND.primary}11` }}>
                  <div>
                    <div className="text-xs text-gray-500">Interested in</div>
                    <div className="text-sm font-semibold" style={{ color: BRAND.black }}>{service.title}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                          window.Calendly.initPopupWidget({ url: "https://calendly.com/kalkifinancialsolutions/30min" });
                        } else {
                          window.open("https://calendly.com/kalkifinancialsolutions/30min", "_blank", "noopener,noreferrer");
                        }
                      }}
                      className="px-4 py-2 rounded-full font-semibold"
                      style={{ background: BRAND.primary, color: "white", pointerEvents: "auto" }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white shadow" style={{ border: `1px solid ${BRAND.primary}11` }}>
            <img src={logo2} alt="Kalki logo" className="w-14 h-14 object-contain" />
            <div className="text-sm font-semibold" style={{ color: BRAND.black }}>
              KALKI FINANCIAL SOLUTIONS — Tailored, transparent advice
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
