import React from "react";

const bluePrimary = "#1e40af";
const blueDark = "#1e3a8a";
const black = "#0f0f0f";

const services = [
  {
    title: "Planning for the Future",
    description: (
      <>
        <p className="text-black/75 leading-relaxed">
          We've helped clients prepare for the unknown while staying aligned with their financial goals. Ask us about:
        </p>
        <ul className="list-disc list-outside mt-3 text-black/70 pl-5 space-y-1">
          <li>Financial planning</li>
          <li>Tax optimization</li>
          <li>Education funding</li>
          <li>Estate planning</li>
        </ul>
        <p className="mt-3 text-black/75 leading-relaxed">
          As an independent firm, we source across providers to tailor solutions that fit your exact needs.
        </p>
      </>
    ),
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img7.jpg",
  },
  {
    title: "Comprehensive End-to-End Approach",
    description:
      "We start with a deep needs analysis, clarify goals, and review your full portfolio. Then we tailor strategies to your risk tolerance and market realities—expect unbiased recommendations built around you.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img8.jpg",
  },
  {
    title: "Committed to Service",
    description:
      "Great strategies begin with great relationships. Our mission is to exceed expectations—on day one and year ten. Let's map short- and long-term moves that bring your goals within reach.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img9.jpg",
  },
];

export default function ValuepropVariantA() {
  return (
    <section className="py-5 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="text-center mb-20">
          {/* <div className="flex justify-center items-center gap-6 mb-8">
            <div className="w-16 h-0.5" style={{ backgroundColor: bluePrimary }}></div>
            <span className="text-xs font-medium tracking-widest uppercase opacity-80" style={{ color: black }}>
              KALKI FINANCIAL SOLUTIONS
            </span>
            <div className="w-16 h-0.5" style={{ backgroundColor: bluePrimary }}></div>
          </div> */}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tight">
            <span style={{ color: black }}>Our Value Proposition</span>
          </h1>

          <div className="space-y-4">
            {/* <p className="text-2xl font-light opacity-90" style={{ color: black }}>
              Our Value Proposition
            </p> */}
            <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: black }}>
              Clear guidance. Disciplined strategy. A better future ahead.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 hover:border-blue-200 transition-all duration-500 hover:shadow-xl"
              style={{
                borderColor: "rgba(30, 64, 175, 0.1)",
                background: "linear-gradient(145deg, #ffffff, #fafbff)"
              }}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Image */}
                <div className="lg:w-2/5 relative overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: bluePrimary }}>
                      {index === 0 ? "Flagship" : "Featured"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 space-y-6">
                  <div className="flex items-center gap-4">
                    {/* <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: bluePrimary }}>
                      {index + 1}
                    </div> */}
                    <h3 className="text-2xl font-bold" style={{ color: black }}>
                      {service.title}
                    </h3>
                  </div>

                  <div className="text-black/70 leading-relaxed space-y-4">
                    {service.description}
                  </div>

                  {/* Minimal Tags */}
                  <div className="flex flex-wrap gap-3">
                    {["Clarity", "Tailored", "Ongoing"].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded text-sm font-medium border"
                        style={{
                          borderColor: "rgba(30, 64, 175, 0.3)",
                          color: bluePrimary
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      onClick={() => {
                        if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                          window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                        } else {
                          window.open("https://calendly.com/futurewesecure-info/30min", "_blank", "noopener,noreferrer");
                        }
                      }}
                      className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: bluePrimary }}
                    >
                      Talk to Advisor
                    </button>

                    <button
                      onClick={() => {
                        if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                          window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                        }
                      }}
                      className="text-sm font-semibold transition-colors duration-300 hover:underline"
                      style={{ color: bluePrimary }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white border shadow-lg"
            style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: bluePrimary }}>
              Ready to Start Your Journey?
            </span>
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                  window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                } else {
                  window.open("https://calendly.com/futurewesecure-info/30min", "_blank", "noopener,noreferrer");
                }
              }}
              className="px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: bluePrimary }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight({ className = "", size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}