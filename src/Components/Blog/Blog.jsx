import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, BookOpen } from "lucide-react";

/**
 * BLOG — Minimalist Professional
 * - Clean, focused layout
 * - Professional financial aesthetic
 * - KALKI brand consistency
 */
export default function BlogVariantB() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  // Brand colors
  const bluePrimary = "#1e40af";
  const black = "#0f0f0f";

  const formatDate = (timestamp) => {
    if (!timestamp) return "Recent";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getReadTime = (content) => {
    if (!content) return "2 min";
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-6 mb-8">
            {/* <div className="w-16 h-0.5" style={{ backgroundColor: bluePrimary }}></div>
            <span className="text-xs font-medium tracking-widest uppercase opacity-80" style={{ color: black }}>
              KALKI FINANCIAL SOLUTIONS
            </span>
            <div className="w-16 h-0.5" style={{ backgroundColor: bluePrimary }}></div> */}
          </div>

          <h1 className="text-3xl md:text-4xl lg:5xl font-black mb-2 tracking-tight">
            <span style={{ color: black }}>Blog <span style={{ color: "bluePrimary" }}>& </span>Insights</span>
          </h1>

          <div className="space-y-4">
            {/* <p className="text-2xl font-light opacity-90" style={{ color: black }}>
              Financial Blog
            </p> */}
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
                className="group bg-white rounded-2xl p-6 border-2 hover:border-blue-200 transition-all duration-500 hover:shadow-xl cursor-pointer"
                style={{
                  borderColor: "rgba(30, 64, 175, 0.1)",
                  background: "linear-gradient(145deg, #ffffff, #fafbff)"
                }}
                onClick={() => navigate(`/blog/${blog.id}`, { state: { blog } })}
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2" style={{ color: black }}>
                      {blog.title}
                    </h3>

                    <p className="text-black/70 text-sm leading-relaxed mb-3 line-clamp-2">
                      {blog.summary || String(blog.content).slice(0, 80) + "..."}
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
                        className="text-sm font-semibold transition-colors duration-300 hover:underline flex items-center gap-1 group-hover:gap-2"
                        style={{ color: bluePrimary }}
                      >
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </button>
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

        {/* Minimal CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white border shadow-lg"
            style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: bluePrimary }}>
              Stay Updated with KALKI
            </span>
            <button
              className="px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: bluePrimary }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}