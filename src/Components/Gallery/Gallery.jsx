// EventsGalleryVariantBEnhanced.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Users,
  MapPin,
} from "lucide-react";

/* --------------------- Firebase (unchanged) --------------------- */
const firebaseConfig = {
  apiKey: "AIzaSyBg2p1nPZQ39AU91CDzRWeYtQjBs5HHf-Y",
  authDomain: "ajazgraphic-da740.firebaseapp.com",
  projectId: "ajazgraphic-da740",
  storageBucket: "ajazgraphic-da740.appspot.com",
  messagingSenderId: "600209988666",
  appId: "1:600209988666:web:d806f6d7dfd10fa394a903",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* --------------------- Branding & assets --------------------- */
const LOGO_PATH = "/mnt/data/logonew.png"; // developer-provided local logo image

const COLORS = {
  primary: "#1e40af",
  primaryDark: "#1e3a8a",
  light: "#dbeafe",
  mutedText: "rgba(15,15,15,0.72)",
};

/* --------------------- Component --------------------- */
export default function EventsGalleryVariantB() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    index: 0,
    title: "",
    caption: "",
  });

  const [visibleIds, setVisibleIds] = useState(new Set());
  const observerRef = useRef(null);

  // fetch events
  useEffect(() => {
    let cancelled = false;
    const fetchEvents = async () => {
      try {
        const qs = await getDocs(collection(db, "properedgefinance"));
        const events = qs.docs.map((doc) => ({
          id: Number.isNaN(parseInt(doc.id, 10)) ? doc.id : parseInt(doc.id, 10),
          ...doc.data(),
        }));
        // stable sort by numeric id if available
        events.sort((a, b) => {
          const an = typeof a.id === "number";
          const bn = typeof b.id === "number";
          if (an && bn) return a.id - b.id;
          return String(a.id).localeCompare(String(b.id));
        });
        if (!cancelled) setEventsData(events);
      } catch (e) {
        console.error(e);
        if (!cancelled) setErr("Couldn't load the gallery. Please try again later.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchEvents();
    return () => {
      cancelled = true;
    };
  }, []);

  /* IntersectionObserver reveal */
  useEffect(() => {
    if (typeof window === "undefined") return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-event-id");
          if (!id) return;
          if (entry.isIntersecting) {
            setVisibleIds((s) => {
              if (s.has(id)) return s;
              const next = new Set(s);
              next.add(id);
              return next;
            });
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    return () => {
      observerRef.current?.disconnect?.();
    };
  }, []);

  const setCardRef = useCallback((el) => {
    if (!el || !observerRef.current) return;
    const id = el.getAttribute("data-event-id");
    if (!id) return;
    observerRef.current.observe(el);
  }, []);

  const openLightbox = useCallback((images, index = 0, title = "", caption = "") => {
    if (!Array.isArray(images) || images.length === 0) return;
    setLightbox({ open: true, images, index, title, caption });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((s) => ({ ...s, open: false }));
    document.body.style.overflow = "";
  }, []);

  const prevImage = useCallback(() => {
    setLightbox((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
  }, []);

  const nextImage = useCallback(() => {
    setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }));
  }, []);

  // keyboard navigation for lightbox
  useEffect(() => {
    const handler = (e) => {
      if (!lightbox.open) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox.open, closeLightbox, prevImage, nextImage]);

  // choose hero image for event
  function heroImageForEvent(e) {
    if (Array.isArray(e.images) && e.images.length) return e.images[0];
    if (e.thumbnail) return e.thumbnail;
    if (e.image) return e.image;
    return "";
  }

  /* small helpers */
  const fallbackImg = (e) => {
    e.target.onerror = null;
    e.target.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='${COLORS.light}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='${COLORS.primary}' font-family='Arial' font-size='28'>Image unavailable</text></svg>`
      );
  };

  return (
    <section style={{ padding: "64px 18px", background: "linear-gradient(180deg,#fff,#fbfdff)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "white", padding: "8px 14px", borderRadius: 999, boxShadow: "0 6px 20px rgba(16,24,40,0.04)", border: `1px solid ${COLORS.light}` }}>
            <img src={LOGO_PATH} alt="Kalki logo" style={{ width: 28, height: 28, objectFit: "contain" }} onError={(e) => (e.currentTarget.style.display = "none")} />
            <div style={{ fontSize: 13, fontWeight: 800, color: COLORS.primary }}>Events Gallery</div>
          </div>

          <h2 style={{ fontSize: 36, margin: "18px 0 6px", fontWeight: 900 }}>
            Gallery — <span className="text-[#327BBE]">Magazine View</span>
          </h2>

          <p style={{ color: COLORS.mutedText, maxWidth: 880, margin: "0 auto" }}>
            Carefully composed event pages with a large hero image and preview strip — fast to scan, pleasant to explore.
          </p>
        </header>

        {/* Loading skeleton */}
        {loading && (
          <div style={{ display: "grid", gap: 20 }}>
            {[1, 2, 3].map((n) => (
              <div key={n} style={{ borderRadius: 16, padding: 18, background: "linear-gradient(90deg,#f6f8ff,#ffffff)", display: "flex", gap: 16 }}>
                <div style={{ flex: "0 0 56%", height: 220, borderRadius: 12, background: "linear-gradient(90deg,#e9eefc,#f8fbff)", animation: "pulse 1.6s infinite" }} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ height: 18, width: "70%", background: "#eef5ff", borderRadius: 6, animation: "pulse 1.6s infinite" }} />
                  <div style={{ height: 12, width: "50%", background: "#f6f9ff", borderRadius: 6, animation: "pulse 1.6s infinite" }} />
                  <div style={{ flex: 1, background: "#fbfdff", borderRadius: 8 }} />
                </div>
              </div>
            ))}
            <style>{`@keyframes pulse{0%{opacity:1}50%{opacity:.45}100%{opacity:1}}`}</style>
          </div>
        )}

        {/* Error */}
        {!loading && err && <div style={{ textAlign: "center", color: COLORS.mutedText, padding: 40 }}>{err}</div>}

        {/* Events */}
        {!loading && !err && (
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {eventsData.length === 0 && <div style={{ color: COLORS.mutedText }}>No events found.</div>}

            {eventsData.map((ev) => {
              const images = Array.isArray(ev.images) ? ev.images : [];
              const hero = heroImageForEvent(ev);
              const visible = visibleIds.has(String(ev.id));
              return (
                <article
                  key={ev.id}
                  data-event-id={String(ev.id)}
                  ref={setCardRef}
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    border: `1px solid ${COLORS.light}`,
                    boxShadow: visible ? "0 16px 40px rgba(16,24,40,0.06)" : "none",
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    opacity: visible ? 1 : 0,
                    transition: "opacity .6s ease, transform .6s cubic-bezier(.2,.9,.2,1), box-shadow .3s ease",
                    background: "white",
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 18 }}>
                    {/* hero */}
                    <div>
                      <button
                        onClick={() => openLightbox(images, 0, ev.title || `Event ${ev.id}`, ev.description || "")}
                        style={{ display: "block", width: "100%", textAlign: "left", border: "none", background: "transparent", padding: 0, cursor: images.length ? "zoom-in" : "default" }}
                        aria-label={`Open gallery for ${ev.title || `Event ${ev.id}`}`}
                      >
                        <div style={{ position: "relative", width: "100%", height: 420, minHeight: 260, overflow: "hidden", background: "#f2f7ff" }}>
                          {hero ? (
                            <img
                              src={hero}
                              alt={ev.title || ""}
                              onError={fallbackImg}
                              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .9s ease" }}
                              loading="lazy"
                            />
                          ) : (
                            <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", color: COLORS.primary }}>
                              <Calendar size={64} />
                            </div>
                          )}

                          {/* overlay */}
                          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.06) 45%, transparent)" }} />

                          {/* info */}
                          <div style={{ position: "absolute", left: 22, bottom: 22, right: 22, color: "white" }}>
                            <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800, lineHeight: 1.05 }}>
                              {ev.title || `Event ${ev.id}`}
                            </h3>
                            <p style={{ marginTop: 8, maxWidth: "70%", color: "rgba(255,255,255,0.92)" }}>
                              {ev.subtitle || (ev.description ? String(ev.description).slice(0, 140) + "…" : "")}
                            </p>
                          </div>

                          {images.length > 0 && (
                            <div style={{ position: "absolute", top: 16, right: 16 }}>
                              <div style={{ padding: "8px 12px", background: "rgba(0,0,0,0.45)", color: "white", borderRadius: 999, fontWeight: 700, fontSize: 13 }}>
                                {images.length} photos
                              </div>
                            </div>
                          )}
                        </div>
                      </button>
                    </div>

                    {/* sidebar */}
                    <aside style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
                      <div style={{ background: "#f8fbff", padding: 12, borderRadius: 12, border: `1px solid ${COLORS.light}` }}>
                        <h4 style={{ margin: 0, fontWeight: 800 }}>Event Details</h4>
                        <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", color: COLORS.mutedText }}>
                            <Calendar size={16} style={{ color: COLORS.primary }} /> <span>{ev.date || "Date TBA"}</span>
                          </div>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", color: COLORS.mutedText }}>
                            <MapPin size={16} style={{ color: COLORS.primary }} /> <span>{ev.location || "Location TBA"}</span>
                          </div>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", color: COLORS.mutedText }}>
                            <Users size={16} style={{ color: COLORS.primary }} /> <span>{ev.attendees || "Multiple attendees"}</span>
                          </div>
                        </div>
                      </div>

                      {/* small preview strip */}
                      <div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}>
                          {images.slice(0, 4).map((src, i) => (
                            <button
                              key={i}
                              onClick={() => openLightbox(images, i, ev.title || "", ev.description || "")}
                              style={{
                                borderRadius: 10,
                                overflow: "hidden",
                                border: `1px solid ${COLORS.light}`,
                                padding: 0,
                                display: "block",
                                background: "white",
                                cursor: "pointer",
                              }}
                              aria-label={`Open image ${i + 1}`}
                            >
                              <div style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden" }}>
                                <img src={src} alt={`preview ${i + 1}`} onError={fallbackImg} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                              </div>
                            </button>
                          ))}
                          {images.length === 0 && (
                            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: 12, borderRadius: 12, border: `1px solid ${COLORS.light}`, color: COLORS.mutedText }}>
                              No photos available
                            </div>
                          )}
                        </div>
                      </div>

                      {/* actions */}
                      <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
                        <button
                          onClick={() => openLightbox(images, 0, ev.title || "", ev.description || "")}
                          disabled={images.length === 0}
                          style={{
                            background: "#327BBE",
                            color: "white",
                            padding: "12px 14px",
                            borderRadius: 10,
                            border: "none",
                            fontWeight: 600,
                            cursor: images.length ? "pointer" : "not-allowed",
                          }}
                        >
                          View Gallery ({images.length})
                        </button>

                        {ev.meetingLink && (
                          <a
                            href={ev.meetingLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              border: `1px solid ${COLORS.primary}`,
                              color: COLORS.primary,
                              padding: "10px 14px",
                              borderRadius: 10,
                              textAlign: "center",
                              fontWeight: 700,
                              textDecoration: "none",
                            }}
                          >
                            Join Meeting
                          </a>
                        )}
                      </div>
                    </aside>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Branding footer */}
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "white", padding: "10px 18px", borderRadius: 999, border: `1px solid ${COLORS.light}`, boxShadow: "0 6px 20px rgba(16,24,40,0.04)" }}>
            <img src={LOGO_PATH} alt="Kalki logo" style={{ width: 28, height: 28, objectFit: "contain" }} onError={(e) => (e.currentTarget.style.display = "none")} />
            <div style={{ fontSize: 13, fontWeight: 800 }} className="text-[#327BBE]">KALKI FINANCIAL SOLUTIONS</div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(3,6,12,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
          }}
          onClick={closeLightbox}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 1100,
              maxHeight: "90vh",
              borderRadius: 14,
              overflow: "hidden",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 14, borderBottom: `1px solid ${COLORS.light}` }}>
              <div>
                <div style={{ fontWeight: 800 }}>{lightbox.title}</div>
                <div style={{ color: COLORS.mutedText, fontSize: 13 }}>{lightbox.caption}</div>
              </div>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ padding: "6px 10px", background: COLORS.primary, color: "white", borderRadius: 999, fontWeight: 800 }}>
                  {lightbox.index + 1}/{lightbox.images.length}
                </div>

                <button onClick={closeLightbox} style={{ background: "transparent", border: "none", padding: 8, cursor: "pointer" }} aria-label="Close">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Image + nav */}
            <div style={{ display: "flex", gap: 12, alignItems: "stretch", padding: 12, flex: 1, minHeight: 320 }}>
              {/* big image area */}
              <div style={{ position: "relative", flex: 1, display: "grid", placeItems: "center", background: "#0b0b0b" }}>
                <img
                  src={lightbox.images[lightbox.index]}
                  alt={`image ${lightbox.index + 1}`}
                  style={{ maxWidth: "100%", maxHeight: "76vh", objectFit: "contain", borderRadius: 10 }}
                  onError={(e) => fallbackImg(e)}
                />

                {/* left / right */}
                <button
                  onClick={prevImage}
                  aria-label="Previous"
                  style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    background: "white",
                    border: "none",
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 8px 20px rgba(2,6,23,0.12)",
                    cursor: "pointer",
                  }}
                >
                  <ChevronLeft size={20} style={{ color: COLORS.primary }} />
                </button>

                <button
                  onClick={nextImage}
                  aria-label="Next"
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    background: "white",
                    border: "none",
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 8px 20px rgba(2,6,23,0.12)",
                    cursor: "pointer",
                  }}
                >
                  <ChevronRight size={20} style={{ color: COLORS.primary }} />
                </button>
              </div>

              {/* thumbnails column on wide screens (hidden on small) */}
              <div style={{ width: 160, display: "flex", flexDirection: "column", gap: 8, overflowY: "auto" }}>
                {lightbox.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox((s) => ({ ...s, index: i }))}
                    style={{
                      borderRadius: 8,
                      overflow: "hidden",
                      border: i === lightbox.index ? `2px solid ${COLORS.primary}` : `1px solid ${COLORS.light}`,
                      padding: 0,
                      height: 80,
                      background: "white",
                      cursor: "pointer",
                    }}
                    aria-label={`Open image ${i + 1}`}
                  >
                    <img src={src} alt={`thumb ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} onError={fallbackImg} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
