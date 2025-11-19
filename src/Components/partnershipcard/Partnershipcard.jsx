// PartnerProgramEnhanced.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Handshake,
  Notebook,
  BookOpenText,
  ChartNoAxesCombined,
  X,
  ChevronRight,
  Phone,
} from "lucide-react";

/*
  PartnerProgramEnhanced
  - Modernized version of your Partner Program UI
  - Uses Kalki palette, local logo at /mnt/data/logonew.png (fallback SVG)
  - Single-file, inline styles for portability
*/

const LOGO_URL = "/mnt/data/logonew.png"; // developer-provided asset path

const BRAND = {
  primary: "#327BBE",
  primaryDark: "#1F5FA3",
  slate: "#879096",
  slateDark: "#596268",
  charcoal: "#383937",
  black: "#1E1F1E",
  white: "#ffffff",
  glass: "rgba(255,255,255,0.6)",
};

const cardData = [
  {
    title: "Responsibilities",
    description: [
      "Embrace the system, follow it, and align with your leaders.",
      "Allow your leaders to guide you while you earn and learn simultaneously.",
      "Invite anyone and everyone to sessions and workshops.",
      "Schedule follow-up sessions with your leader to enhance growth.",
    ],
    Icon: Handshake,
  },
  {
    title: "Educate People On Securing Their Future",
    description: [
      "“An investment in knowledge pays the best interest.” We help families secure future needs while enjoying life fully.",
    ],
    Icon: Notebook,
  },
  {
    title: "Required Skills",
    description: ["Energetic self-starter", "Coachable", "18+ with valid SSN"],
    Icon: BookOpenText,
  },
  {
    title: "What Will You Gain",
    description: [
      "Craft tailored plans across:",
      "Retirement planning",
      "Tax savings",
      "401(k) rollover",
      "College savings",
      "Asset protection",
      "Risk management",
      "Estate planning",
    ],
    Icon: ChartNoAxesCombined,
  },
];

function rgba(hex, a = 1) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/* Lightweight inline finance SVG (fallback) */
function FinanceSVG({ size = 44, color = BRAND.primary }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="6" y="10" width="52" height="44" rx="8" fill={color} opacity="0.98" />
      <g transform="translate(10, 14)" fill="#fff" opacity="0.98">
        <rect x="0" y="20" width="6" height="18" rx="1" />
        <rect x="10" y="12" width="6" height="26" rx="1" />
        <rect x="20" y="4" width="6" height="34" rx="1" />
        <rect x="30" y="26" width="6" height="12" rx="1" />
      </g>
    </svg>
  );
}

function openCalendly(url = "https://calendly.com/futurewesecure-info/30min") {
  if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
  } else if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export default function PartnerProgramEnhanced() {
  const [selected, setSelected] = useState(null);
  const [logoLoaded, setLogoLoaded] = useState(true);
  const firstCardRef = useRef(null);

  useEffect(() => {
    // focus first card for keyboard users
    firstCardRef.current?.focus?.();
    function onEsc(e) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const styles = {
    section: {
      background:
        `radial-gradient(600px 200px at 8% 0%, ${rgba(BRAND.primary, 0.04)}, transparent), ` +
        "linear-gradient(180deg, #fff 0%, #fbfcff 45%)",
      padding: "64px 18px",
      fontFamily:
        "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: BRAND.black,
    },
    container: { maxWidth: 1180, margin: "0 auto" },
    hero: {
      display: "grid",
      gridTemplateColumns: "1fr 360px",
      gap: 24,
      alignItems: "center",
      marginBottom: 28,
    },
    brandBox: {
      display: "flex",
      gap: 18,
      alignItems: "center",
    },
    logoWrap: {
      width: 84,
      height: 84,
      borderRadius: 16,
      display: "grid",
      placeItems: "center",
      background: rgba(BRAND.primary, 0.06),
      boxShadow: `0 12px 36px ${rgba(BRAND.primary, 0.06)}`,
      flexShrink: 0,
    },
    heroTitle: { margin: 0, fontSize: 32, lineHeight: 1.03, fontWeight: 900 },
    heroSub: { marginTop: 8, color: BRAND.slateDark, maxWidth: 720 },
    quickCTA: { display: "flex", gap: 10, alignItems: "center", justifyContent: "flex-end" },
    ctaPrimary: {
      background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
      color: BRAND.white,
      padding: "10px 16px",
      borderRadius: 12,
      border: "none",
      fontWeight: 800,
      cursor: "pointer",
      boxShadow: `0 12px 36px ${rgba(BRAND.primary, 0.12)}`,
    },
    ctaGhost: {
      padding: "9px 12px",
      borderRadius: 12,
      border: `1px solid ${rgba(BRAND.primary, 0.10)}`,
      background: "white",
      color: BRAND.primary,
      fontWeight: 700,
      cursor: "pointer",
    },
    leftPanel: {
      background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))",
      borderRadius: 14,
      padding: 18,
      border: `1px solid ${rgba(BRAND.primary, 0.06)}`,
      boxShadow: "0 12px 36px rgba(12,18,30,0.05)",
    },
    statRow: { display: "flex", gap: 12, marginTop: 14 },
    statCard: { display: "flex", gap: 10, alignItems: "center", padding: 12, borderRadius: 12, background: "white", border: `1px solid ${rgba(BRAND.primary, 0.06)}` },
    gridWrap: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: 18,
    },
    card: {
      borderRadius: 14,
      padding: 18,
      background: "linear-gradient(145deg,#ffffff,#fafbff)",
      border: `1px solid ${rgba(BRAND.primary, 0.06)}`,
      boxShadow: "0 8px 30px rgba(12,18,30,0.06)",
      cursor: "pointer",
      transition: "transform 260ms cubic-bezier(.2,.9,.2,1), box-shadow 260ms",
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
    },
    iconBox: {
      width: 60,
      height: 60,
      borderRadius: 14,
      display: "grid",
      placeItems: "center",
      background: `linear-gradient(180deg, ${BRAND.primary}, ${BRAND.primaryDark})`,
      color: BRAND.white,
      flexShrink: 0,
      boxShadow: `0 10px 30px ${rgba(BRAND.primary, 0.12)}`,
    },
    cardTitle: { margin: 0, fontSize: 17, fontWeight: 800, color: BRAND.black },
    cardList: { marginTop: 10, paddingLeft: 18, color: BRAND.slateDark },
    modalOverlay: { position: "fixed", inset: 0, background: "rgba(3,6,12,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 60 },
    modal: { width: "min(920px, 96%)", borderRadius: 12, padding: 20, background: "white", boxShadow: "0 30px 80px rgba(12,18,30,0.24)" },
  };

  return (
    <section style={styles.section} aria-labelledby="partner-heading" className="mt-16">
      <div style={styles.container}>
        {/* HERO */}
        <div style={styles.hero}>
          <div>
            <div style={styles.brandBox}>
              <div style={styles.logoWrap}>
                {logoLoaded ? (
                  <img
                    src={LOGO_URL}
                    alt="KALKI logo"
                    style={{ width: 52, height: 52, objectFit: "contain" }}
                    onError={() => setLogoLoaded(false)}
                  />
                ) : (
                  <FinanceSVG size={44} />
                )}
              </div>

              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: BRAND.slateDark }}>KALKI FINANCIAL SOLUTIONS</div>
                <h1 id="partner-heading" style={styles.heroTitle}>
                  Partner <span style={{ color: BRAND.primary }}>Program</span>
                </h1>
                <div style={styles.heroSub}>Build a meaningful career helping families master personal finance — training, mentorship, and real earning potential.</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 18, alignItems: "center" }}>
              <button style={styles.ctaPrimary} onClick={() => openCalendly()}>
                Schedule Discovery Call
              </button>

              <button style={styles.ctaGhost} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Learn More
              </button>
            </div>

            <div style={{ marginTop: 18 }}>
              <div style={styles.leftPanel}>
                <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>Why join?</div>
                <div style={{ color: BRAND.slateDark, lineHeight: 1.6 }}>
                  We train, mentor and grow leaders. You’ll get structured onboarding, peer support, and real earning potential while you learn.
                </div>

                <div style={styles.statRow}>
                  <div style={styles.statCard}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, display: "grid", placeItems: "center", background: rgba(BRAND.primary, 0.08) }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 2v20" stroke={BRAND.primary} strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 900 }}>1.2K+</div>
                      <div style={{ color: BRAND.slateDark }}>Families helped</div>
                    </div>
                  </div>

                  <div style={styles.statCard}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, display: "grid", placeItems: "center", background: rgba(BRAND.primary, 0.08) }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M3 12h18" stroke={BRAND.primary} strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 900 }}>15+</div>
                      <div style={{ color: BRAND.slateDark }}>Years experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick contact card */}
          <aside style={{ alignSelf: "start" }}>
            <div style={{ borderRadius: 14, padding: 16, background: "white", border: `1px solid ${rgba(BRAND.primary, 0.06)}`, boxShadow: "0 10px 30px rgba(12,18,30,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, display: "grid", placeItems: "center", background: rgba(BRAND.primary, 0.06) }}>
                  <Phone size={22} color={BRAND.primary} />
                </div>
                <div>
                  <div style={{ fontWeight: 800 }}>Talk to us</div>
                  <div style={{ color: BRAND.slateDark, fontSize: 14 }}>773-726-0391</div>
                </div>
              </div>

              <div style={{ marginTop: 12 }}>
                <button style={{ width: "100%", ...styles.ctaPrimary }} onClick={() => openCalendly()}>
                  Quick Call
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* CARDS GRID */}
        <div style={{ marginTop: 8 }}>
          <div style={styles.gridWrap}>
            {cardData.map((card, idx) => (
              <article
                key={card.title}
                ref={idx === 0 ? firstCardRef : null}
                tabIndex={0}
                role="button"
                aria-pressed={selected === card}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(card);
                  }
                }}
                onClick={() => setSelected(card)}
                style={{
                  ...styles.card,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.01)";
                  e.currentTarget.style.boxShadow = `0 28px 60px ${rgba(BRAND.primary, 0.12)}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(12,18,30,0.06)";
                }}
              >
                <div style={styles.iconBox}>
                  <card.Icon size={22} color="white" />
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={styles.cardTitle}>{card.title}</h3>

                  <ul style={styles.cardList}>
                    {card.description.slice(0, 2).map((d, i) => (
                      <li key={i} style={{ marginBottom: 8, display: "flex", gap: 10 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 999, background: rgba(BRAND.primary, 1), marginTop: 6 }} />
                        <div style={{ flex: 1, color: BRAND.slateDark }}>{d}</div>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, borderTop: `1px solid ${rgba(BRAND.primary, 0.06)}`, paddingTop: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: BRAND.primary, fontWeight: 800 }}>
                      View Details <ChevronRight size={16} />
                    </div>
                    <div style={{ color: BRAND.slateDark, fontSize: 13 }}>{card.description.length} points</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 980, borderRadius: 12, padding: 18, background: "white", border: `1px solid ${rgba(BRAND.primary, 0.06)}`, boxShadow: "0 12px 36px rgba(12,18,30,0.06)", display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, display: "grid", placeItems: "center", background: rgba(BRAND.primary, 0.06) }}>
              <FinanceSVG size={36} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 900 }}>Ready to Join Our Team?</div>
              <div style={{ color: BRAND.slateDark, marginTop: 6 }}>Start your journey toward a rewarding career in financial services with comprehensive training and mentorship.</div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => openCalendly()} style={{ padding: "10px 14px", borderRadius: 10, background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryDark})`, color: "white", border: "none", fontWeight: 800 }}>
                Schedule Discovery Call
              </button>

              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ padding: "10px 14px", borderRadius: 10, border: `1px solid ${rgba(BRAND.primary, 0.08)}`, background: "transparent", color: BRAND.primary, fontWeight: 800 }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* MODAL */}
        {selected && (
          <div style={styles.modalOverlay} onClick={() => setSelected(null)}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 12, display: "grid", placeItems: "center", background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryDark})`, color: "white" }}>
                    <selected.Icon size={22} />
                  </div>

                  <div>
                    <div style={{ fontSize: 18, fontWeight: 900 }}>{selected.title}</div>
                    <div style={{ color: BRAND.slateDark }}>{selected.description.length} items</div>
                  </div>
                </div>

                <button onClick={() => setSelected(null)} style={{ background: "transparent", border: "none", padding: 6, cursor: "pointer" }} aria-label="Close">
                  <X size={20} />
                </button>
              </div>

              <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
                {selected.description.map((d, i) => (
                  <div key={i} style={{ padding: 12, borderRadius: 10, border: `1px solid ${rgba(BRAND.primary, 0.06)}`, background: "#fff" }}>
                    <p style={{ margin: 0, color: BRAND.slateDark }}>{d}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 18, display: "flex", gap: 12 }}>
                <button onClick={() => openCalendly()} style={{ flex: 1, padding: "12px 14px", borderRadius: 10, background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.primaryDark})`, color: "white", fontWeight: 800 }}>
                  Book Call
                </button>

                <button onClick={() => setSelected(null)} style={{ flex: 1, padding: "12px 14px", borderRadius: 10, border: `1px solid ${rgba(BRAND.primary, 0.08)}`, background: "transparent", color: BRAND.primary, fontWeight: 800 }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
