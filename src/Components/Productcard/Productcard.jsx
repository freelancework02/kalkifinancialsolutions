// ProductCardKalkiModernV2.jsx
import React, { useEffect, useRef, useState } from "react";

/*
  ProductCardKalkiModernV2
  - Fixed SVG rendering (inline, unique ids)
  - New layout: hero band + tabbed filters + responsive grid
  - Kalki brand colors applied (extracted palette)
  - Image fallback & keyboard access
  - Local asset path kept for reference: /mnt/data/logonew.png
*/

/* Brand tokens (extracted from your Kalki logo) */
const BRAND = {
  primary: "#327BBE",
  primaryDark: "#1F5FA3",
  slate: "#879096",
  slateDark: "#596268",
  charcoal: "#383937",
  black: "#1E1F1E",
  white: "#ffffff",
  accentGradient: "linear-gradient(90deg,#327BBE 0%,#1F5FA3 100%)",
};

/* Local logo path kept as an asset reference (developer-provided) */
const LOGO_PATH = "/mnt/data/logonew.png";

/* Product data (unchanged content) */
const products = [
  {
    title: "Fixed & Indexed Annuities",
    category: "Income",
    description:
      "A contract with an insurer that can guarantee principal and interest while offering potential lifelong income withdrawals.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img4.jpg",
  },
  {
    title: "Indexed Universal Life",
    category: "Protection",
    description:
      "Death benefit protection plus portfolio diversification with the potential for tax-advantaged growth.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img3.jpg",
  },
  {
    title: "Term Life",
    category: "Protection",
    description:
      "Straightforward coverage for the years you need it most—protect temporary responsibilities with confidence.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img2.jpg",
  },
  {
    title: "Traditional IRA / Roth IRA",
    category: "Retirement",
    description:
      "Tax-deferred growth with Traditional IRAs or tax-free qualified withdrawals with Roth IRAs—plan an efficient retirement.",
    image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2148793763.jpg",
  },
  {
    title: "Whole Life Insurance",
    category: "Protection",
    description:
      "Lifetime coverage with guaranteed benefits and cash value that can grow over time.",
    image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2163.jpg",
  },
  {
    title: "Will & Trust",
    category: "Estate",
    description:
      "Establish your Will & Trust plus four other core estate documents to protect wishes and heirs.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img1.jpg",
  },
];

/* Simple inline finance SVG (self-contained, no external IDs) */
function FinanceSVG({ size = 48, color = "white" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
    >
      {/* Base line */}
      <rect x="8" y="38" width="32" height="4" fill={color} />

      {/* Trend line rising chart */}
      <path
        d="M12 30 L22 20 L29 27 L42 14"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* End node (dot) */}
      <circle cx="42" cy="14" r="3" fill={color} />
    </svg>
  );
}


/* image fallback svg (data url) */
const FALLBACK_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='520' viewBox='0 0 800 520'>
    <defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='${BRAND.primary}'/><stop offset='1' stop-color='${BRAND.primaryDark}'/></linearGradient></defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='20' fill='${BRAND.white}' opacity='0.95'>Image unavailable</text>
  </svg>`
)}`;

/* Helper: rgba */
function hexToRgba(hex, alpha = 1) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* Open Calendly helper */
function openCalendly(url = "https://calendly.com/kalkifinancialsolutions/30min") {
  if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
  } else if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

/* Main component */
export default function ProductCardKalkiModernV2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [imgErrorFlags] = useState(() => ({})); // map of fallback flags
  const cardRefs = useRef([]);

  useEffect(() => {
    // scroll active card into view (smooth)
    const el = cardRefs.current[activeIndex];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }, [activeIndex]);

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const visible = products.filter((p) => filter === "All" || p.category === filter);

  function handleImgError(e, idx) {
    if (!imgErrorFlags[idx]) {
      imgErrorFlags[idx] = true;
      e.target.src = FALLBACK_SVG;
    }
  }

  /* layout styles (kept in JS for copy-paste ease) */
  const styles = {
    section: {
      padding: "64px 18px",
      background: `linear-gradient(180deg, ${hexToRgba(BRAND.primary, 0.03)} 0%, #fff 40%)`,
      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: BRAND.black,
    },
    container: { maxWidth: 1200, margin: "0 auto" },
    hero: {
      display: "flex",
      gap: 20,
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 18,
      flexWrap: "wrap",
    },
    heroLeft: { display: "flex", gap: 14, alignItems: "center" },
    heroTitle: { fontSize: 28, fontWeight: 800, lineHeight: 1.06, margin: 0 },
    heroSub: { color: BRAND.slateDark, marginTop: 6, maxWidth: 720 },
    tabRow: { display: "flex", gap: 8, flexWrap: "wrap", margin: "18px 0 26px" },
    tabBtn: (active) => ({
      padding: "8px 14px",
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      background: active ? hexToRgba(BRAND.primary, 0.12) : "transparent",
      color: active ? BRAND.primary : BRAND.slateDark,
      boxShadow: active ? `0 8px 20px ${hexToRgba(BRAND.primary, 0.08)}` : "none",
    }),
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 },
    card: (active) => ({
      borderRadius: 14,
      overflow: "hidden",
      background: "#fff",
      border: `1px solid ${hexToRgba(BRAND.primary, 0.06)}`,
      boxShadow: active ? `0 30px 60px ${hexToRgba(BRAND.primary, 0.10)}` : "0 8px 26px rgba(12,18,30,0.06)",
      transform: active ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
      transition: "transform .36s cubic-bezier(.2,.9,.2,1), box-shadow .36s",
      display: "flex",
      flexDirection: "column",
      minHeight: 360,
    }),
    imgWrap: { position: "relative", height: 200, overflow: "hidden", flex: "0 0 200px" },
    img: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
    badge: {
      position: "absolute",
      left: 12,
      top: 12,
      padding: "6px 10px",
      borderRadius: 999,
      color: BRAND.white,
      fontWeight: 800,
      background: BRAND.primary,
      boxShadow: "0 8px 20px rgba(50,123,190,0.12)",
    },
    content: { padding: 16, display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 },
    metaRow: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12, gap: 12 },
    ctaPrimary: {
      padding: "10px 14px",
      borderRadius: 10,
      background: BRAND.accentGradient,
      color: BRAND.white,
      fontWeight: 800,
      border: "none",
      cursor: "pointer",
      boxShadow: `0 10px 30px ${hexToRgba(BRAND.primary, 0.12)}`,
    },
    ctaGhost: { padding: "8px 12px", borderRadius: 10, background: "transparent", border: "none", color: BRAND.primary, fontWeight: 700, cursor: "pointer" },
    footerCtaWrap: { marginTop: 28, display: "flex", justifyContent: "center" },
    footerCta: { borderRadius: 14, padding: "14px 18px", display: "flex", gap: 16, alignItems: "center", background: "white", border: `1px solid ${hexToRgba(BRAND.primary, 0.06)}`, boxShadow: "0 10px 30px rgba(12,18,30,0.04)" },
  };

  return (
    <section style={styles.section} aria-labelledby="products-heading" className="mt-16">
      <div style={styles.container}>
        {/* Hero */}
        <div style={styles.hero}>
          <div style={styles.heroLeft}>
            <div style={{ width: 64, height: 64, borderRadius: 12, display: "grid", placeItems: "center", background: hexToRgba(BRAND.primary, 0.06) }}>
              <FinanceSVG size={56} color="#327BBE" />
            </div>

            <div>
              <h2 id="products-heading" style={styles.heroTitle}>Products & Solutions</h2>
              <div style={styles.heroSub}>Guaranteed options, tax-efficient wrappers, and tailored estate solutions — pick a product and book a short call.</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button onClick={() => openCalendly()} style={styles.ctaPrimary} aria-label="Book review">Book a quick review</button>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} style={{ ...styles.ctaGhost, border: `1px solid ${hexToRgba(BRAND.primary, 0.08)}`, padding: "10px 12px" }}>Contact us</a>
          </div>
        </div>

        {/* Tabs */}
        <div style={styles.tabRow}>
          {categories.map((c) => {
            const isActive = c === filter;
            return (
              <button key={c} onClick={() => { setFilter(c); setActiveIndex(0); }} style={styles.tabBtn(isActive)} aria-pressed={isActive}>
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {visible.map((p, i) => {
            // compute global index for aria/refs
            const globalIndex = products.indexOf(p);
            const isActive = globalIndex === activeIndex;
            return (
              <article
                key={`${p.title}-${globalIndex}`}
                ref={(el) => (cardRefs.current[globalIndex] = el)}
                tabIndex={0}
                aria-labelledby={`product-${globalIndex}-title`}
                onFocus={() => setActiveIndex(globalIndex)}
                style={styles.card(isActive)}
              >
                <div style={styles.imgWrap}>
                  <img src={p.image} alt={p.title} style={styles.img} onError={(e) => handleImgError(e, globalIndex)} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0))" }} />
                  <div style={styles.badge}>Product</div>
                </div>

                <div style={styles.content}>
                  <div>
                    <h3 id={`product-${globalIndex}-title`} style={{ margin: 0, fontSize: 18, fontWeight: 800, color: BRAND.black }}>{p.title}</h3>
                    <p style={{ marginTop: 10, color: BRAND.slateDark, lineHeight: 1.6 }}>{p.description}</p>
                  </div>

                  <div style={styles.metaRow}>
                    <div style={{ color: BRAND.slateDark, fontSize: 13 }}>15 min • Quick review</div>

                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={() => { setActiveIndex(globalIndex); setTimeout(() => openCalendly(), 220); }}
                        style={styles.ctaPrimary}
                        aria-label={`Book ${p.title}`}
                      >
                        Book
                      </button>

                      <button onClick={() => { setActiveIndex(globalIndex); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} style={styles.ctaGhost}>Learn</button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div style={styles.footerCtaWrap}>
          <div style={styles.footerCta}>
            <div style={{ width: 52, height: 52, borderRadius: 12, display: "grid", placeItems: "center", background: hexToRgba(BRAND.primary, 0.06) }}>
              <FinanceSVG size={36} color="#327BBE" />
              
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 900, color: BRAND.black }}>Ready to explore your options?</div>
              <div style={{ marginTop: 6, color: BRAND.slateDark }}>A short focused conversation unlocks clarity — pick a time and we'll prepare a short agenda.</div>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => openCalendly()} style={{ ...styles.ctaPrimary, padding: "10px 16px" }}>Book 15-min call</button>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ ...styles.ctaGhost, padding: "10px 14px", border: `1px solid ${hexToRgba(BRAND.primary, 0.08)}` }}>Contact us</button>
            </div>
          </div>
        </div>

        {/* small footnote showing local asset path (developer instruction) */}
       
      </div>
    </section>
  );
}
