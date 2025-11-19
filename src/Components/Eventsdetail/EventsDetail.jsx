import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FiCalendar,
  FiUser,
  FiExternalLink,
  FiVideo,
  FiImage,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

export default function EventsDetailVariantA({ event = {}, previousEvents = [] }) {
  const demoCurrent = useMemo(
    () => ({
      title: "Retirement Planning Masterclass: Secure Your Financial Future",
      date: "2025-11-18T17:30:00+05:30",
      description:
        "A comprehensive session covering retirement strategies, tax optimization, and wealth preservation. Learn how to build a secure financial future with expert guidance from KALKI Financial Solutions.",
      host: "Ashish Patel - KALKI Financial Solutions",
      meetingLink: "https://calendly.com/futurewesecure-info/30min",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529336953121-a9d1b95a0df1?q=80&w=1400&auto=format&fit=crop",
      ],
    }),
    []
  );

  const demoPrevious = useMemo(
    () => [
      {
        id: 101,
        title: "Investment Strategies for Market Volatility",
        date: "2025-10-22T18:00:00+05:30",
        host: "KALKI Financial Solutions",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
        recordingLink: "https://example.com/recording/investment-strategies",
      },
      {
        id: 102,
        title: "Estate Planning & Wealth Transfer",
        date: "2025-09-10T17:00:00+05:30",
        host: "KALKI Financial Solutions",
        thumbnailUrl:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        recordingLink: "https://example.com/recording/estate-planning",
      },
    ],
    []
  );

  const model = { ...demoCurrent, ...event };
  const prevList = Array.isArray(previousEvents) && previousEvents.length ? previousEvents : demoPrevious;

  const displayDate = useMemo(() => formatDate(model.date), [model.date]);

  // KALKI Financial Solutions brand colors
  const bluePrimary = "#1e40af";
  const blueDark = "#1e3a8a";
  const blueLight = "#dbeafe";
  const gradient = `linear-gradient(135deg, ${bluePrimary}, ${blueDark})`;

  // lightbox
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const images = model.gallery || [];
  const hasGallery = images && images.length > 0;
  const lightboxRef = useRef(null);
  const heroRef = useRef(null);

  // dynamic top offset to clear navbar
  const [topOffset, setTopOffset] = useState(null);

  // measure navbar (id="site-navbar" or data-fixed-navbar="true") and set padding
  useEffect(() => {
    function computeOffset() {
      const defaultMobile = 64; // px
      const defaultDesktop = 96; // px

      const byId = document.getElementById("site-navbar");
      const byAttr = document.querySelector("[data-fixed-navbar='true']");
      const navbarEl = byId || byAttr;

      if (navbarEl) {
        const rect = navbarEl.getBoundingClientRect();
        // treat it as fixed/sticky if positioned at/near top or style says fixed/sticky
        const style = window.getComputedStyle(navbarEl);
        const isAtTop = Math.abs(rect.top) < 4 || style.position === "fixed" || style.position === "sticky";
        if (isAtTop) {
          const height = Math.ceil(rect.height);
          setTopOffset(height + 12); // breathing space
          return;
        }
      }

      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      setTopOffset(vw < 768 ? defaultMobile : defaultDesktop);
    }

    computeOffset();
    let t = null;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(computeOffset, 80);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  // open lightbox
  const openAt = (i) => {
    if (!Array.isArray(images) || images.length === 0) return;
    setIdx(i);
    setOpen(true);
    setTimeout(() => lightboxRef.current?.focus?.(), 0);
  };
  const next = () => setIdx((p) => (p + 1) % images.length);
  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (!open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  // small parallax effect
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const pct = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);
      const translate = (1 - pct) * 8;
      el.style.transform = `translateY(${translate}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const joinMeeting = () => {
    if (!model.meetingLink) return;
    window.open(model.meetingLink, "_blank", "noopener,noreferrer");
  };

  // safeTop: while measuring, provide a safe default so UI doesn't overlap
  const safeTop = topOffset ?? 64;

  return (
    <section
      className="w-full mb-8"
      style={{
        // apply padding at top equal to navbar height + gap so hero & floating card are below navbar
        paddingTop: `${safeTop}px`,
      }}
    >
      {/* HERO */}
      <div
        ref={heroRef}
        className="relative h-64 md:h-[44vw] max-h-[560px] w-full overflow-hidden rounded-2xl"
        aria-hidden="false"
      >
        <img
          src={model.thumbnailUrl}
          alt={model.title || "Event hero"}
          className="w-full h-full object-cover transition-transform duration-700 will-change-transform"
          loading="lazy"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-black/10 to-transparent" />
        </div>

        {/* Floating info card */}
        <div className="absolute left-4 right-4 bottom-4 md:left-12 md:right-auto md:bottom-12 md:w-[46%]">
          <article
            className="rounded-2xl bg-white/97 backdrop-blur-sm px-5 py-4 shadow-[0_18px_45px_rgba(3,7,18,0.12)] border border-black/6"
            aria-label={`Event info for ${model.title}`}
            role="region"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white rounded-full px-2 py-0.5"
                  style={{ background: "rgba(0,0,0,0.45)" }}
                >
                  <FiCalendar aria-hidden="true" />
                  <span className="text-white text-xs">{displayDate}</span>
                </div>

                <h1 className="mt-2 text-base md:text-lg font-extrabold text-white truncate">{model.title}</h1>

                <p className="mt-1 text-sm text-white line-clamp-2">{model.host}</p>

                <p className="mt-2 text-xs text-white">
                  <strong>Format:</strong> Live session · Q&A · Slides available
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex flex-col gap-2">
                  {model.meetingLink ? (
                    <button
                      onClick={joinMeeting}
                      className="rounded-full px-3 py-1.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{ background: "#327BBE", boxShadow: "0 10px 30px rgba(30, 64, 175, 0.12)" }}
                    >
                      Join Meeting
                    </button>
                  ) : (
                    <button
                      onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                      className="rounded-full px-3 py-1.5 text-sm font-semibold border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      Contact Organizer
                    </button>
                  )}

                  {hasGallery && (
                    <button
                      onClick={() => openAt(0)}
                      className="rounded-full px-3 py-1 text-sm font-medium text-black border border-black/6 bg-white/90 transition-all duration-300 hover:shadow-md"
                    >
                      View Gallery
                    </button>
                  )}
                </div>

                <div className="text-right text-xs text-white">Approx. 90 mins</div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* CONTENT + GALLERY */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            <section className="rounded-2xl border border-black/8 bg-white p-5 md:p-6 shadow-sm">
              <header className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ background: "#327BBE" }}>
                  <FiImage className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-black">About this event</h2>
                  <p className="text-xs text-black/60">What to expect and how to prepare</p>
                </div>
              </header>

              <div className="prose max-w-none text-black/75">
                {looksLikeHtml(model.description) ? (
                  <div dangerouslySetInnerHTML={{ __html: safeHTML(model.description) }} />
                ) : (
                  <p>{model.description}</p>
                )}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-black">Gallery</h3>
                {hasGallery && <div className="text-sm text-black/60">{images.length} photos</div>}
              </div>

              {hasGallery ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {images.slice(0, 6).map((src, i) => (
                      <button
                        key={i}
                        onClick={() => openAt(i)}
                        className="group relative overflow-hidden rounded-xl border border-black/6 focus:outline-none focus-visible:ring-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{ borderColor: "rgba(30, 64, 175, 0.2)", focusVisibleRingColor: blueLight }}
                        aria-label={`Open image ${i + 1}`}
                        title="Open image"
                      >
                        <div className="aspect-[4/3]">
                          <img
                            src={src}
                            alt={`Event photo ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div
                          className="absolute left-2 top-2 px-2 py-0.5 rounded-md text-xs text-white transition-all duration-300"
                          style={{ background: gradient }}
                        >
                          #{i + 1}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    ))}
                  </div>

                  {images.length > 6 && (
                    <div className="mt-3 flex justify-center">
                      <button
                        onClick={() => openAt(6)}
                        className="rounded-lg px-4 py-2 text-sm font-semibold bg-white border border-black/8 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                        style={{ borderColor: "rgba(30, 64, 175, 0.2)" }}
                      >
                        View more
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-xl border border-dashed border-black/10 p-6 text-center text-black/60" style={{ borderColor: "rgba(30, 64, 175, 0.2)" }}>
                  Gallery will appear soon.
                </div>
              )}
            </section>
          </div>

          {/* Right column */}
          <aside>
            <div className="rounded-2xl border border-black/8 bg-white p-4 shadow-sm sticky top-[calc(12px+var(--safe-navbar,0px))]" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
              <h4 className="font-semibold text-black mb-3">Event details</h4>
              <ul className="text-sm text-black/70 space-y-3">
                <li className="flex items-start gap-3">
                  <FiCalendar className="mt-0.5" style={{ color: bluePrimary }} />
                  <div>
                    <div className="font-medium text-black">Date & time</div>
                    <div>{displayDate}</div>
                  </div>
                </li>

                {model.host && (
                  <li className="flex items-start gap-3">
                    <FiUser className="mt-0.5" style={{ color: bluePrimary }} />
                    <div>
                      <div className="font-medium text-black">Hosted by</div>
                      <div>{model.host}</div>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-3">
                {model.meetingLink ? (
                  <button
                    onClick={joinMeeting}
                    className="w-full rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ background: "#327BBE" }}
                  >
                    Join Meeting
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="w-full inline-block text-center rounded-xl px-4 py-2.5 text-sm font-semibold border border-black/8 transition-all duration-300 hover:shadow-md"
                    style={{ borderColor: "rgba(30, 64, 175, 0.2)" }}
                  >
                    Contact Organizer
                  </a>
                )}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-black/8 bg-white p-3 shadow-sm" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
              <h5 className="text-sm font-semibold text-black/80 mb-2">Previous events</h5>
              <div className="space-y-3">
                {prevList.slice(0, 3).map((p) => (
                  <div key={p.id || p.title} className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-blue-50 cursor-pointer" onClick={() => window.open(p.recordingLink, '_blank')}>
                    <img src={p.thumbnailUrl} alt={p.title} className="w-14 h-10 object-cover rounded-md" />
                    <div>
                      <div className="text-sm font-medium text-black">{p.title}</div>
                      <div className="text-xs text-black/60">{formatDate(p.date)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* LIGHTBOX */}
      {open && hasGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setOpen(false)}
        >
          <div
            ref={lightboxRef}
            tabIndex={-1}
            className="relative w-full max-w-5xl outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={images[idx]} alt={`Preview ${idx + 1}`} className="w-full max-h-[78vh] object-contain rounded-md shadow-lg" loading="eager" />

            {/* Top left caption */}
            <div className="absolute left-4 top-4 rounded-md px-3 py-1 text-sm text-white" style={{ background: "rgba(0,0,0,0.35)" }}>
              {model.title}
            </div>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full p-2 bg-white/10 text-white focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/20 hover:scale-110"
              style={{ focusRingColor: blueLight }}
              aria-label="Close preview"
            >
              <FiX />
            </button>

            {/* Prev / Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full p-3 bg-white/10 text-white focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/20 hover:scale-110"
              style={{ focusRingColor: blueLight }}
            >
              <FiChevronLeft size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full p-3 bg-white/10 text-white focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/20 hover:scale-110"
              style={{ focusRingColor: blueLight }}
            >
              <FiChevronRight size={20} />
            </button>

            {/* Footer controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/40 rounded-full px-3 py-1.5 backdrop-blur-sm">
              <span className="text-xs text-white/90">{idx + 1} / {images.length}</span>
              <button
                onClick={() => {
                  window.open(images[idx], "_blank", "noopener,noreferrer");
                }}
                className="text-xs text-white/90 underline transition-all duration-300 hover:text-white"
              >
                Open original
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* helpers */
function formatDate(input) {
  try {
    const dt = new Date(input);
    if (Number.isNaN(dt.getTime())) return String(input || "");
    return dt.toLocaleString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return String(input || "");
  }
}
function looksLikeHtml(s) {
  if (!s || typeof s !== "string") return false;
  return /<\/?[a-z][\s\S]*>/i.test(s);
}
function safeHTML(html) {
  try {
    const allowed = ["B", "I", "STRONG", "EM", "A", "P", "BR", "UL", "OL", "LI"];
    const div = document.createElement("div");
    div.innerHTML = html;
    const walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null);
    const toRemove = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!allowed.includes(node.nodeName)) {
        toRemove.push(node);
      } else if (node.nodeName === "A") {
        node.setAttribute("target", "_blank");
        node.setAttribute("rel", "noopener noreferrer");
        const href = node.getAttribute("href") || "";
        if (!/^https?:\/\//i.test(href)) node.setAttribute("href", "#");
      }
    }
    toRemove.forEach((n) => n.replaceWith(...n.childNodes));
    return div.innerHTML;
  } catch {
    return String(html || "");
  }
}