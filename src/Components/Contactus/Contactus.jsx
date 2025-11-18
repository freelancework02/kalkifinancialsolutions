// src/Components/Contact/ContactSectionV3.jsx
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Mail,
  Phone,
  Calendar,
  ShieldCheck,
  MapPin,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * ContactSectionV3 — updated color system to match Kalki logo & site:
 * - primaryBlue: #1976D2 (electric/royal blue)
 * - deepBlue:    #0F56A4
 * - navy/bg:     #071127 (deep navy)
 * - clean white and muted text for readability
 */

const ContactSectionV3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Brand palette (Kalki)
  const COLORS = {
    primaryBlue: "#1976D2",
    deepBlue: "#0F56A4",
    navy: "#071127",
    card: "#0f1724", // slightly lighter than navy for cards
    white: "#ffffff",
    textLight: "rgba(255,255,255,0.94)",
    textMuted: "rgba(255,255,255,0.68)",
    border: "rgba(255,255,255,0.06)",
    glow: "rgba(25,118,210,0.16)",
    accentGradient: `linear-gradient(135deg, #1976D2 0%, #0F56A4 100%)`,
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters).";
    }
    const email = String(formData.email || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message || formData.message.trim().length < 12) {
      newErrors.message = "Tell us a bit more (at least 12 characters).";
    }
    if (formData.company && formData.company.trim().length > 0) {
      // honeypot was filled -> spam
      newErrors.company = "Spam detected.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Replace these values with your service/template/user IDs (kept as in your original)
    emailjs
      .send(
        "service_o49f57q",
        "template_zueof2i",
        templateParams,
        "_NCXgVXdplNNFVAvR"
      )
      .then(
        () => {
          toast.success("🎉 Excellent! We'll contact you within 24 hours.");
          setFormData({ name: "", email: "", message: "", company: "" });
          setErrors({});
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("❌ Could not send your message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        // deep navy hero-like background with subtle logo-blue radial glow
        background:
          `radial-gradient(700px 240px at 14% 12%, ${COLORS.glow}, transparent 28%), ` +
          `linear-gradient(180deg, ${COLORS.navy} 0%, #0b1630 40%, #061025 100%)`,
        paddingTop: 36,
        paddingBottom: 56,
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(25,118,210,0.12), rgba(15,86,164,0.06))",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(15,86,164,0.06), rgba(15,86,164,0.02))",
            filter: "blur(48px)",
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.02,
          backgroundImage: `
            linear-gradient(rgba(25,118,210,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(25,118,210,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${COLORS.border}`,
            }}
          >
            <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: COLORS.white }}>
              We reply within 24 hours
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.white }}>
            Let's talk about your goals
          </h2>

          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: 840, margin: "0 auto" }}>
            Send a message, chat on WhatsApp, or book a quick call — whatever works best for you. We’ll help craft a
            plan that protects what matters and grows it responsibly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left column — contact cards + CTAs */}
          <div className="space-y-6">
            {/* main contact card */}
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: COLORS.card,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 10px 30px rgba(2,6,23,0.5)",
              }}
            >
              {/* thin accent line */}
              <div style={{
                position: "absolute",
                top: 12,
                left: 28,
                right: 28,
                height: 2,
                borderRadius: 999,
                background: `linear-gradient(90deg, ${COLORS.primaryBlue}, ${COLORS.deepBlue})`,
                opacity: 0.95,
              }} />

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(25,118,210,0.08)",
                    border: `1px solid rgba(25,118,210,0.14)`,
                  }}
                >
                  <Award className="w-7 h-7" style={{ color: COLORS.primaryBlue }} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold" style={{ color: COLORS.white }}>
                    KALKI FINANCIAL SOLUTIONS
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.66)" }}>Excellence in Financial Planning</p>
                </div>
              </div>

              {/* contact info rows */}
              <div className="space-y-4 mb-6">
                <ContactRow
                  icon={<Phone className="w-5 h-5" style={{ color: COLORS.primaryBlue }} />}
                  title="773-726-0391"
                  subtitle="Direct line to our advisors"
                  colors={COLORS}
                />
                <ContactRow
                  icon={<Mail className="w-5 h-5" style={{ color: COLORS.primaryBlue }} />}
                  title=" kalkifinancialsolutions@gmail.com"
                  subtitle="Response within 24 hours"
                  colors={COLORS}
                />
                {/* <ContactRow
                  icon={<MapPin className="w-5 h-5" style={{ color: COLORS.primaryBlue }} />}
                  title="Mount Airy, MD"
                  subtitle="Serving clients nationwide"
                  colors={COLORS}
                /> */}
              </div>

              {/* action buttons */}
              <div className="space-y-3">
                <a
                  href="https://api.whatsapp.com/send?phone=15165818909&text=Hello!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-1"
                  style={{
                    background: COLORS.accentGradient,
                    color: COLORS.white,
                    boxShadow: "0 10px 30px rgba(15,86,164,0.14)",
                  }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Message us on WhatsApp
                </a>

                <button
                  onClick={() =>
                    window.Calendly?.initPopupWidget?.({
                      url: "https://calendly.com/futurewesecure-info/30min",
                    })
                  }
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold border transition-all duration-200 transform hover:-translate-y-0.5"
                  style={{
                    border: `1px solid ${COLORS.primaryBlue}`,
                    color: COLORS.primaryBlue,
                    background: "rgba(25,118,210,0.04)",
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Strategy Session
                </button>
              </div>
            </div>

            {/* trust metrics */}
            <div className="grid grid-cols-3 gap-4">
              <StatCard icon={<Users />} number="1.2K+" label="Families" colors={COLORS} />
              <StatCard icon={<TrendingUp />} number="15+" label="Years Exp" colors={COLORS} />
              <StatCard icon={<CheckCircle />} number="24h" label="Response" colors={COLORS} />
            </div>
          </div>

          {/* Right column — contact form */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 10px 30px rgba(2,6,23,0.45)",
            }}
          >
            <div className="text-center mb-8">
              <div
                className="w-20 h-1 rounded-full mx-auto mb-4"
                style={{ background: `linear-gradient(90deg, ${COLORS.primaryBlue}, ${COLORS.deepBlue})` }}
              />
              <h3 className="text-3xl font-bold mb-2" style={{ color: COLORS.white }}>
                Begin Your Journey
              </h3>
              <p style={{ color: "rgba(255,255,255,0.68)" }}>
                Complete the form below for a personalized financial strategy
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* honeypot */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: COLORS.white }}>
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className={`w-full p-4 rounded-xl outline-none transition-all duration-200 ${errors.name
                    ? "ring-2 ring-red-500 bg-red-500/6"
                    : "border border-transparent bg-white/6 focus:ring-2 focus:ring-offset-0"
                  }`}
                  style={{
                    color: COLORS.white,
                    backgroundClip: "padding-box",
                    borderColor: "transparent",
                  }}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: COLORS.white }}>
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className={`w-full p-4 rounded-xl outline-none transition-all duration-200 ${errors.email
                    ? "ring-2 ring-red-500 bg-red-500/6"
                    : "border border-transparent bg-white/6 focus:ring-2 focus:ring-offset-0"
                  }`}
                  style={{ color: COLORS.white }}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: COLORS.white }}>
                  Your Financial Goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your financial objectives, current situation, and what you'd like to achieve..."
                  rows="5"
                  className={`w-full p-4 rounded-xl outline-none resize-none transition-all duration-200 ${errors.message
                    ? "ring-2 ring-red-500 bg-red-500/6"
                    : "border border-transparent bg-white/6 focus:ring-2 focus:ring-offset-0"
                  }`}
                  style={{ color: COLORS.white }}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 transform ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1"}`}
                style={{
                  background: isSubmitting ? "linear-gradient(90deg, rgba(25,118,210,0.5), rgba(15,86,164,0.5))" : COLORS.accentGradient,
                  color: COLORS.white,
                  boxShadow: isSubmitting ? "none" : "0 12px 40px rgba(15,86,164,0.16)",
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Processing Your Request...
                  </div>
                ) : (
                  "Request Personalized Financial Plan"
                )}
              </button>

              {/* Security assurance */}
              <div
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(25,118,210,0.04)",
                  border: `1px solid rgba(25,118,210,0.08)`,
                }}
              >
                <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: COLORS.primaryBlue }} />
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <strong style={{ color: COLORS.primaryBlue }}>100% Confidential:</strong> Your information is encrypted and never shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* footer */}
        <div className="mt-12 pt-10 border-t" style={{ borderColor: COLORS.border }}>
          <div className="text-center">
            {/* <div className="text-2xl font-bold mb-2" style={{ color: COLORS.white }}>
              KALKI FINANCIAL SOLUTIONS
            </div>
            <p style={{ color: "rgba(255,255,255,0.68)", marginBottom: 10 }}>
              Protection - Investment - Retirement Planning
            </p> */}
            <div style={{ color: "rgba(255,255,255,0.6)" }}>© {new Date().getFullYear()} Future We Secure. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Small presentational subcomponents used above to keep JSX tidy */

function ContactRow({ icon, title, subtitle, colors }) {
  return (
    <div
      className="flex items-center gap-4 p-4 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${colors.border}`,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(25,118,210,0.06)" }}
      >
        {icon}
      </div>

      <div>
        <div className="font-semibold" style={{ color: colors.white }}>
          {title}
        </div>
        <div style={{ color: "rgba(255,255,255,0.66)", fontSize: 14 }}>{subtitle}</div>
      </div>
    </div>
  );
}

function StatCard({ icon, number, label, colors }) {
  return (
    <div
      className="text-center p-4 rounded-2xl"
      style={{
        background: colors.card,
        border: `1px solid ${colors.border}`,
      }}
    >
      <div className="mx-auto mb-3" style={{ width: 40, height: 40 }}>
        {React.cloneElement(icon, { className: "w-8 h-8 mx-auto", style: { color: colors.primaryBlue } })}
      </div>
      <div className="text-2xl font-bold" style={{ color: colors.white }}>
        {number}
      </div>
      <div style={{ color: "rgba(255,255,255,0.66)", fontSize: 12 }}>{label}</div>
    </div>
  );
}

export default ContactSectionV3;
