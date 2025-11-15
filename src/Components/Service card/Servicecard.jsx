import React from "react";

const services = [
  { title: "Retirement Planning", description: "Plan your retirement so your lifestyle is shaped by choice, not just assets at retirement.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img1.jpg" },
  { title: "Estate Planning", description: "Protect what you've built from probate, litigation, and unfavorable taxation.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img2.jpg" },
  { title: "Kids Education Planning", description: "Choose a smart, disciplined path to fund your children's education.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img3.jpg" },
  { title: "Lifetime Income Planning", description: "No pension? Create one—and secure predictable, lifetime income streams.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img4.jpg" },
  { title: "Life Insurance Planning", description: "Right-sized coverage with living benefits and quotes that fit your budget.", image: "https://s3.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/files/images/240314022303_Life%20Insurance%20at%20Various%20Life%20Stages.jpeg" },
  { title: "Investments Planning", description: "Grow capital the smart way. Know the difference between nominal and real returns.", image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img6.jpg" },
];

export default function ServicecardVariantA() {
  const bluePrimary = "#1e40af";
  const blueDark = "#1e3a8a";
  const blueLight = "#dbeafe";
  const black = "#0f0f0f";

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border shadow-lg mb-8"
            style={{ borderColor: "rgba(30, 64, 175, 0.15)" }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: bluePrimary }}></div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: bluePrimary }}>
              Our Services
            </span>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: bluePrimary }}></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight" style={{ color: black }}>
            Professional <span style={{ color: bluePrimary }}>Services</span>
          </h2>

          {/* <div className="w-24 h-1.5 mx-auto mb-6 rounded-full" style={{ backgroundColor: bluePrimary }}></div> */}

          <p className="text-xl opacity-80 max-w-3xl mx-auto" style={{ color: black }}>
            Expert guidance and tailored solutions to help you secure a better financial future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                borderColor: "rgba(30, 64, 175, 0.1)",
                background: "linear-gradient(145deg, #ffffff, #f8faff)"
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Popular Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                    style={{ backgroundColor: bluePrimary }}>
                    Popular
                  </span>
                </div>

                {/* Service Number */}
                {/* <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <span className="font-bold text-sm" style={{ color: bluePrimary }}>
                      {index + 1}
                    </span>
                  </div>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: black }}>
                  {service.title}
                </h3>

                <p className="text-black/70 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Clarity", "Tailored", "Ongoing"].map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300"
                      style={{
                        borderColor: "rgba(30, 64, 175, 0.3)",
                        color: bluePrimary,
                        backgroundColor: "rgba(30, 64, 175, 0.08)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                        window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                      } else {
                        window.open("https://calendly.com/futurewesecure-info/30min", "_blank", "noopener,noreferrer");
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: bluePrimary }}
                  >
                    Book Review
                  </button>

                  <button
                    onClick={() => {
                      if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
                        window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
                      }
                    }}
                    className="text-sm font-medium transition-colors duration-300 hover:underline"
                    style={{ color: bluePrimary }}
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border shadow-lg"
            style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
            <span className="text-sm font-semibold tracking-widest uppercase opacity-70" style={{ color: black }}>
              KALKI FINANCIAL SOLUTIONS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}