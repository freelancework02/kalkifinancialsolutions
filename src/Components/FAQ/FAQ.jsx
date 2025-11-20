// FoundationalCommitments.KalkiBlue.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, Mail, CheckCircle, Shield, Target, Clock } from "lucide-react";

// Local assets (use the uploaded files from the conversation)
import LOGO from "../../assets/logo/logonew.png"
import FAQ_IMG from "../../assets/faqimg.jpg"

const commitmentsData = [
  {
    title: "Is it possible to engage a financial advisor if I don't have a substantial amount of disposable income?",
    content:
      "Yes — financial advice scales. We design simple, affordable plans that grow with you. You don't need a large portfolio to get clarity and better outcomes.",
  },
  {
    title: "Can you help make my investments more secure?",
    content:
      "We structure portfolios to balance risk and return, apply diversification, and set guardrails so your investments align with your horizon and comfort level.",
  },
  {
    title: "Could you please review my portfolio?",
    content:
      "Absolutely. Our Financial Needs Analysis reviews asset mix, fees, goals, and timelines — then we propose concrete optimizations, not vague suggestions.",
  },
  {
    title: "What kind of kids' education plans do you offer?",
    content:
      "We estimate future costs, show funding options (SIPs, recurring deposits, education-specific plans) and map a contribution schedule so the goal stays achievable.",
  },
  {
    title: "Do you provide assistance with life insurance?",
    content:
      "Yes. We fit insurance into the broader plan — matching cover, term, and riders to your family's needs so protection isn’t under- or over-sourced.",
  },
];

// Kalki-blue theme tokens
const THEME = {
  accentStart: "#2bb0ff",
  accentEnd: "#0b63d6",
  deep: "#042233",
  text: "#07293a",
  soft: "rgba(11,99,214,0.08)",
  glow: "rgba(11,99,214,0.12)",
};

export default function FoundationalCommitmentsKalkiBlue() {
  const [open, setOpen] = useState(0); // open first question by default
  const contentRefs = useRef({});

  // Set max-heights for smooth accordion transitions
  useEffect(() => {
    Object.keys(contentRefs.current).forEach((k) => {
      const el = contentRefs.current[k];
      if (!el) return;
      if (Number(k) === open) {
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.paddingTop = "18px";
        el.style.paddingBottom = "18px";
      } else {
        el.style.maxHeight = "0px";
        el.style.paddingTop = "0px";
        el.style.paddingBottom = "0px";
      }
    });
  }, [open]);

  return (
    <section id="faq" className="py-20 px-6 md:px-12" style={{ background: `linear-gradient(180deg,#fbfdff 0%, #ffffff 50%)` }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: `#fff`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 36px rgba(15, 15, 16, 0.1)" }}>
            <CheckCircle size={18} />            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: THEME.deep }}>Frequently Asked</div>
              <div style={{ fontSize: 13, color: "#3a6a76" }}>Questions people ask before they engage</div>
            </div>
          </div>

          <h2 style={{ fontSize: "2.6rem", margin: "8px 0 10px", fontWeight: 700, color: THEME.deep, lineHeight: 1.02 }}>
            Everything you want to know
          </h2>
          <p style={{ color: "#2f5f67", fontSize: 16, maxWidth: 720, margin: "0 auto" }}>
            Short, clear answers — so you can decide quickly whether our approach fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Accordion */}
          <div>
            <div style={{ display: "grid", gap: 12 }}>
              {commitmentsData.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} style={{ borderRadius: 12, overflow: "hidden", boxShadow: isOpen ? "0 18px 50px rgba(11,99,214,0.08)" : "0 8px 22px rgba(7,34,50,0.04)", border: `1px solid ${isOpen ? THEME.soft : "rgba(10,30,40,0.04)"}`, transition: "box-shadow .28s, transform .22s", transform: isOpen ? "translateY(-4px)" : "none" }}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between p-5"
                      style={{ background: isOpen ? "linear-gradient(90deg, rgba(11,99,214,0.03), rgba(11,99,214,0.01))" : "white", cursor: "pointer" }}
                    >
                      <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: 1 }}>
                        <div style={{
                          minWidth: 44,
                          minHeight: 44,
                          borderRadius: 10,
                          display: "grid",
                          placeItems: "center",
                          background: isOpen ? `linear-gradient(135deg, ${THEME.accentStart}, ${THEME.accentEnd})` : "#f1f8ff",
                          color: isOpen ? "white" : THEME.accentEnd,
                          boxShadow: isOpen ? "0 8px 30px rgba(11,99,214,0.12)" : "none",
                        }}>
                          <CheckCircle size={18} />
                        </div>

                        <div style={{ textAlign: "left" }}>
                          <div style={{ fontWeight: 700, color: THEME.text }}>{item.title}</div>
                          <div style={{ height: 6 }} />
                          <div style={{ color: "#5f7f85", fontSize: 13, maxWidth: "95%" }}>{/* short preview or empty */}</div>
                        </div>
                      </div>

                      <ChevronRight size={20} style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform .28s", color: isOpen ? THEME.accentEnd : "#98a6ad" }} />
                    </button>

                    <div
                      ref={(el) => (contentRefs.current[i] = el)}
                      style={{
                        overflow: "hidden",
                        maxHeight: 0,
                        transition: "max-height 420ms cubic-bezier(.2,.9,.2,1), padding 320ms",
                        background: "white",
                      }}
                    >
                      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <div style={{ height: 1, background: "#eef8ff", marginBottom: 12 }} />
                        <p style={{ color: "#4f6b6f", lineHeight: 1.6, marginBottom: 12 }}>{item.content}</p>
                        <div style={{ display: "flex", gap: 14, marginBottom: 8 }}>
                          {/* <span style={{ fontSize: 13, padding: "6px 10px", borderRadius: 999, background: "#f7fbff", color: THEME.accentEnd, fontWeight: 700 }}>Clarity</span>
                          <span style={{ fontSize: 13, padding: "6px 10px", borderRadius: 999, background: "#f7fbff", color: THEME.accentEnd, fontWeight: 700 }}>Actionable</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust indicators */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginTop: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 14, borderRadius: 12, background: "linear-gradient(90deg, rgba(11,99,214,0.03), rgba(11,99,214,0.01))", border: `1px solid ${THEME.soft}` }}>
                <Target size={28} style={{ color: THEME.accentEnd }} />
                <div>
                  <div style={{ fontWeight: 800, color: THEME.deep }}>1,200+</div>
                  <div style={{ color: "#4e7a7f", fontSize: 13 }}>Families</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 14, borderRadius: 12, background: "linear-gradient(90deg, rgba(11,99,214,0.03), rgba(11,99,214,0.01))", border: `1px solid ${THEME.soft}` }}>
                <Clock size={28} style={{ color: THEME.accentEnd }} />
                <div>
                  <div style={{ fontWeight: 800, color: THEME.deep }}>15+</div>
                  <div style={{ color: "#4e7a7f", fontSize: 13 }}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image + Contact block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 60px rgba(11,99,214,0.08)" }}>
              <img src={FAQ_IMG} alt="FAQ visual" style={{ width: "100%", height: 420, objectFit: "cover", transform: "scale(1.01)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,34,51,0.14), rgba(4,34,51,0.02))" }} />
              <div style={{ position: "absolute", left: 20, bottom: 20, color: "white", maxWidth: "74%" }}>
                <div style={{ fontWeight: 800, fontSize: 20 }}>Your Financial Security</div>
                <div style={{ marginTop: 6, color: "rgba(255,255,255,0.9)" }}>Protected with KALKI expertise</div>
              </div>

              <div aria-hidden style={{ position: "absolute", right: -40, top: -40, width: 220, height: 220, borderRadius: 999, background: `radial-gradient(circle at 30% 30%, ${THEME.accentStart}, ${THEME.accentEnd}20)`, filter: "blur(28px)", opacity: 0.7 }} />
            </div>

            {/* Contact card */}
            <div style={{ borderRadius: 16, overflow: "hidden", background: `linear-gradient(180deg, ${THEME.accentStart}, ${THEME.accentEnd})`, color: "white", padding: 20, boxShadow: "0 18px 48px rgba(11,99,214,0.12)" }}>
              <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: 14, background: "rgba(255,255,255,0.12)", display: "grid", placeItems: "center" }}>
                  <Mail size={32} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 20, fontWeight: 800 }}>Ready to secure your future?</div>
                  <div style={{ marginTop: 6, color: "rgba(255,255,255,0.9)" }}>Get personalized financial advice from our experts.</div>
                </div>
              </div>

              <div style={{ marginTop: 16, display: "flex", gap: 12, alignItems: "center" }}>
                <a
                  href="mailto:kalkifinancialsolutions@gmail.com"
                  style={{ background: "white", color: THEME.text, padding: "10px 16px", borderRadius: 12, fontWeight: 800, textDecoration: "none", boxShadow: "0 10px 30px rgba(11,99,214,0.08)" }}
                >
                  <Mail size={14} style={{ marginRight: 8 }} /> Contact Us Today
                </a>

                <button
                  onClick={(e) => { e.preventDefault(); if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) { window.Calendly.initPopupWidget({ url: "https://calendly.com/kalkifinancialsolutions/30min" }); } else { window.open("https://calendly.com/kalkifinancialsolutions/30min", "_blank", "noopener,noreferrer"); } }}
                  style={{ padding: "10px 14px", borderRadius: 12, fontWeight: 800, border: `2px solid rgba(255,255,255,0.14)`, background: "transparent", color: "white", cursor: "pointer" }}
                >
                  Book a quick review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
