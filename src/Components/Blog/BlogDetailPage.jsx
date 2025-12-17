// BlogDetailVariantA.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Contactus/Contactus";

/**
 * Blog Detail — Variant A (API-backed)
 * - Reads :id from route
 * - Calls GET /api/blogs/:id  -> { blog, images }
 * - Builds image URLs from image ids: /api/blogs/image/:imageId/blob
 */

export default function BlogDetailVariantA() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [imagesMeta, setImagesMeta] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;
    const fetchBlog = async () => {
      setLoading(true);
      setErr("");
      try {
        if (!id) {
          setErr("Invalid blog id.");
          setLoading(false);
          return;
        }

        const res = await fetch(`https://www.kalkifinancialsolutions.com/api/blogs/${encodeURIComponent(id)}`);
        if (!res.ok) {
          if (res.status === 404) {
            setErr("Blog not found.");
          } else {
            setErr(`Failed to load blog (status ${res.status}).`);
          }
          setLoading(false);
          return;
        }

        const json = await res.json();
        // API returns { blog, images }
        const blogData = json.blog || json;
        const images = Array.isArray(json.images) ? json.images : [];

        if (cancelled) return;

        setBlog(blogData);
        setImagesMeta(images);
      } catch (e) {
        console.error("fetch blog error", e);
        if (!cancelled) setErr("An error occurred while loading the blog.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchBlog();
    return () => {
      cancelled = true;
    };
  }, [id]);

  // Determine hero image URL:
  const heroUrl = (() => {
    if (blog && blog.image) return blog.image; // fallback if frontend provided this
    if (blog && blog.cover_image_id) {
      const m = imagesMeta.find((i) => Number(i.id) === Number(blog.cover_image_id));
      if (m) return `https://www.kalkifinancialsolutions.com/api/blogs/image/${m.id}/blob`;
    }
    if (imagesMeta.length) return `https://www.kalkifinancialsolutions.com/api/blogs/image/${imagesMeta[0].id}/blob`;
    return ""; // no image available
  })();

  const formattedContentLines = (() => {
    const content = blog?.content_html || blog?.content || blog?.content_text || "";
    // If content_html exists (HTML), return null so we render as HTML below.
    if (blog?.content_html) return null;

    // otherwise prepare plain-text paragraphs as in previous version
    const raw = typeof content === "string" ? content : String(content || "");
    const prepared = raw
      .split("\n")
      .map((line, index, arr) => {
        const isBullet = line.trim().match(/^[-*•]\s/);
        const isNumbered = line.trim().match(/^\d+\.\s/);
        if ((isBullet || isNumbered) && index > 0 && arr[index - 1].trim() !== "") return `\n${line}`;
        return line;
      })
      .join("\n")
      .split("\n")
      .map((l) => l);
    return prepared;
  })();

  // helpers
  const fmtDate = (d) => {
    if (!d) return "";
    try {
      const dt = typeof d === "string" || d instanceof String ? new Date(d) : new Date(d);
      if (isNaN(dt.getTime())) return "";
      return dt.toLocaleDateString();
    } catch {
      return "";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="h-20 md:h-24 lg:h-28" />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="inline-block w-64 h-64 rounded-lg bg-gray-100 animate-pulse mb-6" />
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto mb-2 animate-pulse" />
            <div className="h-3 bg-gray-200 rounded w-36 mx-auto animate-pulse" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (err || !blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="h-20 md:h-24 lg:h-28" />
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-2xl font-semibold mb-4">{err || "Blog not found"}</h2>
          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#f37021] to-[#d95800] text-white"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="mt-4 px-6 py-2 rounded-full border border-gray-200 bg-white"
            >
              Browse Blogs
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // render
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="h-20 md:h-24 lg:h-28" /> {/* spacer for navbar */}

      {/* Hero */}
      <header className="relative w-full overflow-hidden">
        <div className="h-[48vw] max-h-[560px] w-full relative">
          {heroUrl ? (
            <img
              src={heroUrl}
              alt={blog.title || "Blog"}
              className="w-full h-full object-cover brightness-75"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Floating info card */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 -mt-20 md:-mt-24 relative">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-black/6 flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-3 mb-3">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: "rgba(0,0,0,0.45)" }}
                >
                  {fmtDate(blog.publishedAt || blog.created_at || blog.createdAt)}
                </span>
                <div className="text-xs text-slate-600"> {blog.author || "Team"}</div>
              </div>

              <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-black truncate">
                {blog.title}
              </h1>

              <p className="mt-3 text-sm md:text-base text-black/70">
                {blog.summary ||
                  blog.excerpt ||
                  "An in-depth article curated by our experts to help you understand financial insights and smart strategies."}
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col gap-3 w-full md:w-auto">
              <button
                onClick={() => navigate("/blog")}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{ background: "#327BBE" }}
              >
                Back to Blogs
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <article className="prose prose-lg max-w-none text-slate-800">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left column image */}
            <div className="md:w-2/5 lg:w-1/3 rounded-2xl overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.08)]">
              {heroUrl ? (
                <img
                  src={heroUrl}
                  alt={blog.title}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-64 bg-gray-100" />
              )}
            </div>

            {/* Right column text */}
            <div className="md:w-3/5 lg:w-2/3 space-y-5 text-gray-700 text-justify">
              {/* If API provided HTML content, render as HTML. Otherwise render formatted lines. */}
              {blog.content_html ? (
                <div
                  className="content-html"
                  dangerouslySetInnerHTML={{ __html: blog.content_html }}
                />
              ) : (
                <>
                  {formattedContentLines &&
                    formattedContentLines.map((line, idx) => {
                      const trimmed = (line || "").trim();
                      if (!trimmed) return null;
                      const isList = trimmed.match(/^[-*•]\s/) || trimmed.match(/^\d+\.\s/);
                      return (
                        <p
                          key={idx}
                          className={isList ? "pl-5 relative before:absolute before:left-0" : ""}
                          style={{
                            marginTop: isList ? "0.6rem" : "1rem",
                            lineHeight: "1.7",
                          }}
                        >
                          {line}
                        </p>
                      );
                    })}
                </>
              )}
            </div>
          </div>

          {/* CTA block */}
          <div className="mt-12 rounded-2xl p-8 bg-gradient-to-r from-white via-[#ddeeffff] to-white border border-black/6 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-black mb-3">Ready to explore more insights?</h3>
            <p className="text-slate-600 mb-6">Discover expert-driven perspectives and financial wisdom in our growing blog collection.</p>
            <button
              onClick={() => navigate("/blog")}
              className="rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ background: "#327BBE" }}
            >
              Browse All Blogs
            </button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
