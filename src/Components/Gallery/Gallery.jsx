import React, { useEffect, useState, useCallback, useRef } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { ChevronLeft, ChevronRight, X, Calendar, Users, MapPin } from "lucide-react";

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

export default function EventsGalleryVariantB() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    index: 0,
    title: "",
  });

  const [visibleIds, setVisibleIds] = useState(new Set());
  const observerRef = useRef(null);

  // Brand colors
  const bluePrimary = "#1e40af";
  const blueDark = "#1e3a8a";
  const blueLight = "#dbeafe";
  const black = "#0f0f0f";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const qs = await getDocs(collection(db, "properedgefinance"));
        const events = qs.docs.map((doc) => ({
          id: Number.isNaN(parseInt(doc.id, 10)) ? doc.id : parseInt(doc.id, 10),
          ...doc.data(),
        }));
        events.sort((a, b) => {
          const an = typeof a.id === "number";
          const bn = typeof b.id === "number";
          if (an && bn) return a.id - b.id;
          return String(a.id).localeCompare(String(b.id));
        });
        setEventsData(events);
      } catch (e) {
        console.error(e);
        setErr("Couldn't load the gallery. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // IntersectionObserver for animations
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
    if (!el) return;
    const id = el.getAttribute("data-event-id");
    if (!id) return;
    observerRef.current && observerRef.current.observe(el);
  }, []);

  const openLightbox = useCallback((images, index = 0, title = "") => {
    if (!Array.isArray(images) || images.length === 0) return;
    setLightbox({ open: true, images, index, title });
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

  // Keyboard navigation
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

  function heroImageForEvent(e) {
    if (Array.isArray(e.images) && e.images.length) return e.images[0];
    if (e.thumbnail) return e.thumbnail;
    if (e.image) return e.image;
    return "";
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-5 py-5">
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border shadow-lg mb-8"
            style={{ borderColor: "rgba(30, 64, 175, 0.15)" }}>
            <div className="w-2 h-2  rounded-full" style={{ backgroundColor: bluePrimary }}></div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: bluePrimary }}>
              Events Gallery
            </span>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: bluePrimary }}></div>
          </div> */}

          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight" style={{ color: black }}>
            Gallery — <span style={{ color: bluePrimary }}>Magazine View</span>
          </h2>

          {/* <div className="w-24 h-1.5 mx-auto mb-6 rounded-full" style={{ backgroundColor: bluePrimary }}></div> */}

          <p className="text-xl opacity-80 max-w-3xl mx-auto" style={{ color: black }}>
            Carefully composed event pages with a large hero image and preview strip — fast to scan, pleasant to explore.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white/40 animate-pulse h-64" />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && err && (
          <div className="text-center text-black/70 py-16">{err}</div>
        )}

        {/* Events Grid */}
        <div className="space-y-12">
          {!loading && !err && eventsData.map((ev) => {
            const images = Array.isArray(ev.images) ? ev.images : [];
            const hero = heroImageForEvent(ev);
            const visible = visibleIds.has(String(ev.id));

            return (
              <article
                key={ev.id}
                data-event-id={String(ev.id)}
                ref={setCardRef}
                className={`bg-white rounded-3xl overflow-hidden border-2 shadow-xl hover:shadow-2xl transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                style={{
                  borderColor: "rgba(30, 64, 175, 0.1)",
                  transition: "opacity .55s ease, transform .55s cubic-bezier(.2,.9,.2,1), box-shadow .3s ease"
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                  {/* Main Hero Image */}
                  <div className="lg:col-span-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <button
                        onClick={() => openLightbox(images, 0, ev.title || `Event ${ev.id}`)}
                        className="group block w-full text-left"
                        aria-label={`Open gallery for ${ev.title || `Event ${ev.id}`}`}
                      >
                        <div className="relative h-72 md:h-96 w-full bg-gray-100 overflow-hidden">
                          {hero ? (
                            <img
                              src={hero}
                              alt={ev.title || ""}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                              <Calendar className="w-16 h-16 opacity-30" style={{ color: bluePrimary }} />
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                          {/* Event Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg">
                              {ev.title || `Event ${ev.id}`}
                            </h3>
                            <p className="mt-2 text-white/90 text-lg drop-shadow-lg max-w-2xl">
                              {ev.subtitle || (ev.description ? String(ev.description).slice(0, 120) + "…" : "")}
                            </p>
                          </div>

                          {/* Image Count Badge */}
                          {images.length > 0 && (
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-2 rounded-full text-sm font-bold text-white shadow-lg backdrop-blur-sm bg-black/40">
                                {images.length} photos
                              </span>
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Sidebar Content */}
                  <div className="space-y-4">
                    {/* Event Details Card */}
                    <div className="bg-blue-50 rounded-2xl p-4 border-2" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
                      <h4 className="font-bold text-lg mb-3" style={{ color: black }}>
                        Event Details
                      </h4>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4" style={{ color: bluePrimary }} />
                          <span className="text-sm text-black/70">{ev.date || "Date TBA"}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4" style={{ color: bluePrimary }} />
                          <span className="text-sm text-black/70">{ev.location || "Location TBA"}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Users className="w-4 h-4" style={{ color: bluePrimary }} />
                          <span className="text-sm text-black/70">{ev.attendees || "Multiple attendees"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Image Previews */}
                    <div className="grid grid-cols-2 gap-3">
                      {images.slice(0, 4).map((src, i) => (
                        <button
                          key={i}
                          onClick={() => openLightbox(images, i, ev.title)}
                          className="group relative block rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}
                          aria-label={`Open image ${i + 1}`}
                        >
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={src}
                              alt={`preview ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                          <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
                        </button>
                      ))}

                      {images.length === 0 && (
                        <div className="col-span-2 rounded-xl border-2 p-6 text-center" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
                          <Calendar className="w-8 h-8 mx-auto mb-2 opacity-40" style={{ color: bluePrimary }} />
                          <p className="text-sm text-black/60">No photos available</p>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => openLightbox(images, 0, ev.title)}
                        className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: bluePrimary }}
                        disabled={images.length === 0}
                      >
                        View Gallery ({images.length})
                      </button>

                      {ev.meetingLink && (
                        <a
                          href={ev.meetingLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 rounded-xl font-semibold text-center border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                          style={{ borderColor: bluePrimary, color: bluePrimary }}
                        >
                          Join Meeting
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Branding */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border shadow-lg"
            style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
            <span className="text-sm font-semibold tracking-widest uppercase opacity-70" style={{ color: black }}>
              KALKI FINANCIAL SOLUTIONS
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden bg-white" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
              <h3 className="font-bold text-lg" style={{ color: black }}>{lightbox.title}</h3>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: bluePrimary }}>
                  {lightbox.index + 1} / {lightbox.images.length}
                </span>
                <button onClick={closeLightbox} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative bg-black flex items-center justify-center p-8">
              <img
                src={lightbox.images[lightbox.index]}
                alt={`lightbox ${lightbox.index + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" style={{ color: bluePrimary }} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" style={{ color: bluePrimary }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}