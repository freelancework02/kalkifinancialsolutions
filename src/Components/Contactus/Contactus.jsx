import React, { useState } from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { Mail, Phone, Calendar, ShieldCheck, MapPin, Award, TrendingUp, Users, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSectionV3 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // New color theme based on KALKI FINANCIAL SOLUTIONS branding
  const darkBg = "#0f172a";
  const cardDark = "#1e293b";
  const primaryColor = "#2563eb"; // Professional blue
  const secondaryColor = "#059669"; // Complementary green
  const accentColor = "#7c3aed"; // Purple accent
  const accentLight = "#a78bfa";
  const textLight = "#f1f5f9";
  const textMuted = "#94a3b8";
  const borderColor = "#334155";

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

    emailjs
      .send(
        "service_o49f57q",
        "template_zueof2i",
        templateParams,
        "_NCXgVXdplNNFVAvR"
      )
      .then(
        (response) => {
          toast.success("🎉 Excellent! We'll contact you within 24 hours.");
          setFormData({ name: "", email: "", message: "", company: "" });
          setErrors({});
        },
        (error) => {
          console.error(error);
          toast.error("❌ Could not send your message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="relative overflow-hidden min-h-screen" style={{
      background:
        `radial-gradient(800px 260px at 12% 6%, rgba(37, 99, 235, 0.10), transparent 30%), ` +
        `linear-gradient(180deg, #03050a 0%, #071127 30%, #0b0f16 60%)`,
    }}>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-8"
            style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${borderColor}` }}>
            <div className="flex items-center gap-2">
              {/* {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="w-4 h-4" style={{ color: primaryColor }} />
              ))} */}
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-white">
              We reply within 24 hours
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl  lg:text-5xl font-bold mb-6" style={{ color: textLight }}>
            Let's talk about your goals
          </h2>

          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: textMuted }}>
            Send a message, chat on WhatsApp, or book a quick call—whatever works best for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Contact Methods */}
          <div className="space-y-6">
            {/* Main Contact Card */}
            <div className="rounded-3xl p-8 relative overflow-hidden"
              style={{ background: cardDark, border: `1px solid ${borderColor}` }}>
              {/* Primary accent line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(37, 99, 235, 0.1)', border: `1px solid rgba(37, 99, 235, 0.3)` }}>
                  <Award className="w-7 h-7" style={{ color: primaryColor }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: textLight }}>KALKI FINANCIAL SOLUTIONS</h3>
                  <p style={{ color: textMuted }}>Excellence in Financial Planning</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${borderColor}` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(37, 99, 235, 0.1)' }}>
                    <Phone className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: textLight }}>516-917-0756</div>
                    <div style={{ color: textMuted, fontSize: '0.875rem' }}>Direct line to our advisors</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${borderColor}` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(37, 99, 235, 0.1)' }}>
                    <Mail className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: textLight }}>Info@futurewesecure.com</div>
                    <div style={{ color: textMuted, fontSize: '0.875rem' }}>Response within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${borderColor}` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(37, 99, 235, 0.1)' }}>
                    <MapPin className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: textLight }}>Mount Airy, MD</div>
                    <div style={{ color: textMuted, fontSize: '0.875rem' }}>Serving clients nationwide</div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-3">
                <a
                  href="https://api.whatsapp.com/send?phone=15165818909&text=Hello!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                    color: textLight
                  }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Instant WhatsApp Consultation
                </a>

                <button
                  onClick={() =>
                    window.Calendly?.initPopupWidget?.({
                      url: "https://calendly.com/futurewesecure-info/30min",
                    })
                  }
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold border transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    background: 'rgba(37, 99, 235, 0.05)'
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Strategy Session
                </button>
              </div>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-2xl"
                style={{ background: cardDark, border: `1px solid ${borderColor}` }}>
                <Users className="w-8 h-8 mx-auto mb-2" style={{ color: primaryColor }} />
                <div className="text-2xl font-bold" style={{ color: textLight }}>1.2K+</div>
                <div style={{ color: textMuted, fontSize: '0.75rem' }}>Families</div>
              </div>
              <div className="text-center p-4 rounded-2xl"
                style={{ background: cardDark, border: `1px solid ${borderColor}` }}>
                <TrendingUp className="w-8 h-8 mx-auto mb-2" style={{ color: primaryColor }} />
                <div className="text-2xl font-bold" style={{ color: textLight }}>15+</div>
                <div style={{ color: textMuted, fontSize: '0.75rem' }}>Years Exp</div>
              </div>
              <div className="text-center p-4 rounded-2xl"
                style={{ background: cardDark, border: `1px solid ${borderColor}` }}>
                <CheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: primaryColor }} />
                <div className="text-2xl font-bold" style={{ color: textLight }}>24h</div>
                <div style={{ color: textMuted, fontSize: '0.75rem' }}>Response</div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: cardDark, border: `1px solid ${borderColor}` }}>
            {/* Form Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: textLight }}>
                Begin Your Journey
              </h3>
              <p style={{ color: textMuted }}>
                Complete the form below for a personalized financial strategy
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3" style={{ color: textLight }}>
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className={`w-full p-4 rounded-xl outline-none transition-all duration-200 ${errors.name
                    ? "border-2 border-red-500 bg-red-500/10"
                    : "border border-gray-600 bg-white/5 focus:border-blue-500 focus:bg-white/10"
                    }`}
                  style={{ color: textLight }}
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

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3" style={{ color: textLight }}>
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className={`w-full p-4 rounded-xl outline-none transition-all duration-200 ${errors.email
                    ? "border-2 border-red-500 bg-red-500/10"
                    : "border border-gray-600 bg-white/5 focus:border-blue-500 focus:bg-white/10"
                    }`}
                  style={{ color: textLight }}
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

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3" style={{ color: textLight }}>
                  Your Financial Goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your financial objectives, current situation, and what you'd like to achieve..."
                  rows="5"
                  className={`w-full p-4 rounded-xl outline-none resize-none transition-all duration-200 ${errors.message
                    ? "border-2 border-red-500 bg-red-500/10"
                    : "border border-gray-600 bg-white/5 focus:border-blue-500 focus:bg-white/10"
                    }`}
                  style={{ color: textLight }}
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
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-1 ${isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl"
                  }`}
                style={{ color: textLight }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    Processing Your Request...
                  </div>
                ) : (
                  "Request Personalized Financial Plan"
                )}
              </button>

              {/* Security Assurance */}
              <div className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: 'rgba(37, 99, 235, 0.05)', border: `1px solid rgba(37, 99, 235, 0.2)` }}>
                <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: primaryColor }} />
                <p className="text-sm" style={{ color: textMuted }}>
                  <strong style={{ color: primaryColor }}>100% Confidential:</strong> Your information is encrypted and never shared with third parties.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Services Footer */}
        <div className="mt-16 text-center">
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: borderColor }}>
            <div className="text-2xl font-bold mb-2" style={{ color: textLight }}>KALKI FINANCIAL SOLUTIONS</div>
            <p className="mb-4" style={{ color: textMuted }}>Protection - Investment - Retirement Planning</p>
            <div className="text-sm" style={{ color: textMuted }}>
              © {new Date().getFullYear()} Future We Secure. All Rights Reserved.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSectionV3;