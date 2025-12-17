// BlogVariantB.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, BookOpen } from "lucide-react";

/**
 * BLOG — Minimalist Professional (API-backed)
 * - Uses API_BASE for all requests and image URLs.
 * - Shows a hero image/banner inside each card.
 *
 * Save as BlogVariantB.jsx
 */

const API_BASE = "https://www.kalkifinancialsolutions.com";

export default function BlogVariantB() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        // Fetch paginated list
        const listRes = await fetch(`${API_BASE}/api/blogs?page=1&per=12`);
        if (!listRes.ok) throw new Error(`Failed to load blogs: ${listRes.status}`);
        const listJson = await listRes.json();
        const rows = Array.isArray(listJson.data) ? listJson.data : [];

        // For each blog, fetch details to obtain images (N+1). It's fine for moderate counts.
        const details = await Promise.all(
          rows.map(async (r) => {
            try {
              const id = r.id || r.blog_id || r.blogId;
              if (!id) return { ...r, hero: "", images: [] };

              const detailRes = await fetch(`${API_BASE}/api/blogs/${id}`);
              if (!detailRes.ok) {
                return { ...r, hero: "", images: [] };
              }
              const detailJson = await detailRes.json();
              const blog = detailJson.blog || detailJson;
              const imagesMeta = Array.isArray(detailJson.images) ? detailJson.images : [];

              // Build image URLs from image ids
              const images = imagesMeta.map((im) => `${API_BASE}/api/blogs/image/${im.id}/blob`);

              // Choose hero: blog.cover_image_id if present, else the first image
              let hero = "";
              if (blog && blog.cover_image_id) {
                const matched = imagesMeta.find((m) => Number(m.id) === Number(blog.cover_image_id));
                if (matched) hero = `${API_BASE}/api/blogs/image/${matched.id}/blob`;
              }
              if (!hero && images.length) hero = images[0];

              // Normalize fields to expected names used by UI
              return {
                id: Number(id),
                title: blog?.title || r.title || "Untitled",
                summary: blog?.excerpt || r.excerpt || r.summary || "",
                content: blog?.content_html || blog?.content || r.content || "",
                createdAt: blog?.created_at || blog?.createdAt || r.created_at || r.createdAt || null,
                author: blog?.author || r.author || "KALKI Team",
                image: hero || (r.image || ""),
                images,
                imagesMeta,
                raw: blog || r
              };
            } catch (e) {
              console.error("blog detail fetch error", e);
              return { ...r, hero: "", images: [] };
            }
          })
        );

        if (!cancelled) {
          setBlogs(details);
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) setBlogs([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  // helpers
  const bluePrimary = "#1e40af";
  const black = "#0f0f0f";

  const formatDate = (createdAt) => {
    if (!createdAt) return "Recent";
    try {
      const d = typeof createdAt === "string" || createdAt instanceof String ? new Date(createdAt) : new Date(createdAt);
      if (isNaN(d.getTime())) return "Recent";
      return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    } catch {
      return "Recent";
    }
  };

  const getReadTime = (content) => {
    if (!content) return "2 min";
    const text = typeof content === "string" ? content : String(content);
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-6 mb-8" />
          <h1 className="text-3xl md:text-4xl lg:5xl font-black mb-2 tracking-tight">
            <span style={{ color: "#327BBE" }}>Blog <span style={{ color: "#327BBE" }}>& </span>Insights</span>
          </h1>
          <div className="space-y-4">
            <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: black }}>
              Expert perspectives on wealth management and financial strategy.
            </p>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 animate-pulse"
                style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
                <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        )}

        {!loading && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white rounded-2xl p-0 border-2 hover:border-blue-200 transition-all duration-500 hover:shadow-xl cursor-pointer overflow-hidden"
                style={{
                  borderColor: "rgba(30, 64, 175, 0.1)",
                  background: "linear-gradient(145deg, #ffffff, #fafbff)"
                }}
                onClick={() => navigate(`/blog/${blog.id}`, { state: { blog } })}
              >
                {/* Hero image banner inside card */}
                <div className="w-full h-44 md:h-48 overflow-hidden bg-gray-100">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/fallback-blank.png"; }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <BookOpen />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex gap-4">
                    {/* Small thumbnail (kept for compactness) */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/fallback-blank.png"; }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <BookOpen />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2" style={{ color: black }}>
                        {blog.title}
                      </h3>

                      <p className="text-black/70 text-sm leading-relaxed mb-3 line-clamp-2">
                        {blog.summary || (typeof blog.content === "string" ? blog.content.replace(/<[^>]*>/g, "").slice(0, 120) + "..." : "")}
                      </p>

                      <div className="flex items-center justify-between text-xs text-black/60 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(blog.createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{getReadTime(blog.content)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="w-3 h-3" style={{ color: bluePrimary }} />
                          </div>
                          <span className="text-xs font-medium" style={{ color: bluePrimary }}>
                            {blog.author || "KALKI Team"}
                          </span>
                        </div>

                        <button
                          className="text-sm text-[#327BBE] font-semibold transition-colors duration-300 hover:underline flex items-center gap-1 group-hover:gap-2"
                        >
                          Read
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && blogs.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-8 border-2 max-w-md mx-auto" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-40" style={{ color: bluePrimary }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: black }}>Content Coming Soon</h3>
              <p className="text-black/70">We're crafting valuable financial insights for you.</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
