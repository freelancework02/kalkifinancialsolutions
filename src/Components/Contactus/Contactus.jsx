// ContactSectionV3.Corporate.jsx
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Mail,
  Phone,
  Calendar,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// BRAND PALETTE — extracted from your Kalki logo
const BRAND = {
  primary: "#327BBE",
  slate: "#879096",
  slateDark: "#596268",
  charcoal: "#383937",
  black: "#1E1F1E",
  white: "#FFFFFF",
  gradient: "linear-gradient(135deg,#327BBE,#1E1F1E)",
};

export default function ContactSectionV3_Corporate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Please enter a valid email.";
    if (formData.message.trim().length < 12)
      e.message = "Tell us a bit more (minimum 12 characters).";
    if (formData.company) e.company = "Spam detected.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    emailjs
      .send(
        "service_o49f57q",
        "template_zueof2i",
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "_NCXgVXdplNNFVAvR"
      )
      .then(() => {
        toast.success("Message sent! We'll get back within 24 hours.");
        setFormData({ name: "", email: "", message: "", company: "" });
      })
      .catch(() => toast.error("Error sending message. Try again."))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      className="py-20 px-6 md:px-10"
      style={{
        background: "#F8FAFC",
        borderTop: `8px solid ${BRAND.primary}`,
      }}
    >
      <ToastContainer position="top-right" theme="light" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: BRAND.black }}
          >
            Let’s talk about your goals
          </h2>

          <p
            style={{
              color: BRAND.slateDark,
              fontSize: 18,
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            Send a message, book a call, or chat — we respond quickly and help
            you move forward with clarity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT COLUMN = CARDS */}
          <div className="space-y-6">
            {/* CONTACT CARD */}
            <div
              className="rounded-3xl p-8 shadow-xl"
              style={{
                background: BRAND.white,
                border: `1px solid ${BRAND.slate}33`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: BRAND.black }}
              >
                KALKI FINANCIAL SOLUTIONS
              </h3>

              <ContactRow
                icon={<Phone />}
                title="773-726-0391"
                title2="773-595-6232"
                subtitle="Direct line"
                color={BRAND.primary}
              />
              <ContactRow
                icon={<Mail />}
                title="kalkifinancialsolutions@gmail.com"
                subtitle="We reply within 24 hours"
                color={BRAND.primary}
              />

              <div className="mt-8 space-y-3">
                <a
                  href="https://api.whatsapp.com/send?phone=17737260391&text=Hello!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold"
                  style={{
                    background: BRAND.gradient,
                    color: BRAND.white,
                  }}
                >
                  <FaWhatsapp className="text-2xl" /> Message on WhatsApp
                </a>

                <button
                  onClick={() =>
                    window.Calendly?.initPopupWidget?.({
                      url: "https://calendly.com/kalkifinancialsolutions/30min",
                    })
                  }
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold"
                  style={{
                    border: `2px solid ${BRAND.primary}`,
                    color: BRAND.primary,
                  }}
                >
                  <Calendar /> Book Strategy Call
                </button>
              </div>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-3 gap-4">
              <StatCard
                icon={<Users />}
                number="1.2K+"
                label="Families"
                color={BRAND.primary}
              />
              <StatCard
                icon={<TrendingUp />}
                number="15+"
                label="Years Exp"
                color={BRAND.primary}
              />
              <StatCard
                icon={<CheckCircle />}
                number="24h"
                label="Response"
                color={BRAND.primary}
              />
            </div>
          </div>

          {/* RIGHT COLUMN = FORM */}
          <div
            className="rounded-3xl p-10 shadow-xl"
            style={{
              background: BRAND.white,
              border: `1px solid ${BRAND.slate}33`,
            }}
          >
            <h3
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: BRAND.black }}
            >
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <InputField
                label="Full Name *"
                name="name"
                value={formData.name}
                error={errors.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              {/* EMAIL */}
              <InputField
                label="Email Address *"
                name="email"
                value={formData.email}
                error={errors.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              {/* MESSAGE */}
              <TextareaField
                label="Your Financial Goals *"
                name="message"
                value={formData.message}
                error={errors.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold"
                style={{
                  background: BRAND.gradient,
                  color: BRAND.white,
                }}
              >
                {isSubmitting ? "Sending..." : "Request Personalized Plan"}
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 text-sm" style={{ color: BRAND.slate }}>
          © {new Date().getFullYear()} Kalki Financial Solutions. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}

/*— SMALL SUBCOMPONENTS —*/
function ContactRow({ icon, title, title2, subtitle, color }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: `${color}15`, color }}
      >
        {icon}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="font-semibold">{title2}</div>
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}

function StatCard({ icon, number, label, color }) {
  return (
    <div
      className="text-center p-6 rounded-2xl shadow-sm"
      style={{ background: "#ffffff" }}
    >
      <div style={{ color }} className="mb-2">
        {icon}
      </div>
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

function InputField({ label, name, value, error, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-4 rounded-xl border"
        style={{ borderColor: error ? "red" : "#ccc" }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function TextareaField({ label, name, value, error, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">{label}</label>
      <textarea
        name={name}
        value={value}
        rows="5"
        onChange={onChange}
        className="w-full p-4 rounded-xl border"
        style={{ borderColor: error ? "red" : "#ccc" }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
