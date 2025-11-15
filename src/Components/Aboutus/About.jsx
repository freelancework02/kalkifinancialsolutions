import React from "react";
import image from "../../assets/ashesh.jpeg";

export default function AboutUs() {
  const bluePrimary = "#1e40af";
  const blueLight = "#dbeafe";
  const blueDark = "#1e3a8a";
  const black = "#0f0f0f";
  const white = "#ffffff";

  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'><rect width='100%' height='100%' fill='%23ffffff'/><g fill='%231e40af' opacity='0.12'><circle cx='400' cy='400' r='250'/></g><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='28' fill='%23000000' opacity='0.25'>Image unavailable</text></svg>`
  )}`;

  return (
    <section
      className="relative min-h-screen"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8faff 50%, #ffffff 100%)",
      }}
    >
      {/* Enhanced background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[.02]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, ${bluePrimary} 12%, transparent 12.5%, transparent 87%, ${bluePrimary} 87.5%, ${bluePrimary}),
            linear-gradient(150deg, ${bluePrimary} 12%, transparent 12.5%, transparent 87%, ${bluePrimary} 87.5%, ${bluePrimary}),
            linear-gradient(30deg, ${bluePrimary} 12%, transparent 12.5%, transparent 87%, ${bluePrimary} 87.5%, ${bluePrimary}),
            linear-gradient(150deg, ${bluePrimary} 12%, transparent 12.5%, transparent 87%, ${bluePrimary} 87.5%, ${bluePrimary}),
            linear-gradient(60deg, ${bluePrimary}77 25%, transparent 25.5%, transparent 75%, ${bluePrimary}77 75%, ${bluePrimary}77),
            linear-gradient(60deg, ${bluePrimary}77 25%, transparent 25.5%, transparent 75%, ${bluePrimary}77 75%, ${bluePrimary}77)
          `,
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px"
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border mb-8"
            style={{
              borderColor: "rgba(30, 64, 175, 0.15)",
              boxShadow: "0 8px 32px rgba(30, 64, 175, 0.08)"
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: bluePrimary }}></div>
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: bluePrimary }}
            >
              ABOUT KALKI FINANCIAL
            </span>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: bluePrimary }}></div>
          </div>

          <h1
            className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-2"
            style={{ color: black }}
          >
            ABOUT <span style={{ color: bluePrimary }}>US</span>
          </h1>

          {/* <div
            className="w-20 h-1 mx-auto rounded-full opacity-80"
            style={{ backgroundColor: bluePrimary }}
          ></div> */}
        </div>

        {/* Enhanced Card */}
        <div
          className="rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border-2 p-8 md:p-12 lg:p-14"
          style={{
            borderColor: "rgba(30, 64, 175, 0.08)",
            boxShadow: "0 20px 60px -12px rgba(30, 64, 175, 0.18)",
          }}
        >
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            {/* LEFT: Text Content - Enhanced */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: bluePrimary }}></div>
                  <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: black }}>
                    Our Mission
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-black/75 leading-relaxed text-lg">
                    At Future We Secure, we understand that personal finances can be
                    overwhelming—especially when most people never receive formal
                    education on the subject. Our mission is to empower you with the
                    knowledge and tools needed to take control of your financial
                    future.
                  </p>

                  <p className="text-black/75 leading-relaxed text-lg">
                    We begin by teaching the fundamentals of budgeting, saving,
                    investing, and debt management. From there, we help you build
                    personalized financial strategies that match your goals—whether
                    that's saving for education, growing tax-deferred wealth,
                    preparing for retirement, or handling day-to-day financial
                    challenges.
                  </p>

                  <p className="text-black/75 leading-relaxed text-lg">
                    Through ongoing support, workshops, tools, and one-on-one
                    guidance, we help you build long-term clarity and confidence.
                    Our purpose is simple: demystify personal finance and help your
                    family build a secure future—step by step.
                  </p>
                </div>
              </div>

              {/* Enhanced Badges */}
              <div className="pt-6">
                <div
                  className="h-[1px] w-full mb-6 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(30, 64, 175, 0.3), transparent)",
                  }}
                />
                <div className="flex flex-wrap gap-3">
                  {[
                    "Education First",
                    "Personalized Planning",
                    "Ongoing Support",
                  ].map((badge, i) => (
                    <span
                      key={i}
                      className="text-sm font-semibold px-4 py-2.5 rounded-xl border-2 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                      style={{
                        borderColor: "rgba(30, 64, 175, 0.2)",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        color: bluePrimary,
                        boxShadow: "0 4px 12px rgba(30, 64, 175, 0.1)"
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Founder - Enhanced */}
            <div className="lg:w-1/2 flex flex-col items-center text-center">
              {/* Enhanced portrait container */}
              <div className="relative mb-8">
                {/* Improved glow effect */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 left-1/2 top-1/2 w-[17rem] h-[17rem] lg:w-[21rem] lg:h-[21rem] rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: `radial-gradient(circle, ${bluePrimary} 0%, transparent 70%)`,
                    filter: "blur(20px)",
                    opacity: 0.15,
                  }}
                />

                {/* Enhanced portrait ring */}
                <div
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-2"
                  style={{
                    background: `linear-gradient(135deg, ${bluePrimary}, ${blueDark})`,
                    boxShadow: `
                      0 25px 50px -12px rgba(30, 64, 175, 0.25),
                      inset 0 2px 4px rgba(255, 255, 255, 0.5)
                    `,
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                    <img
                      src={image}
                      alt="Ashish Patel — Founder"
                      loading="lazy"
                      decoding="async"
                      role="img"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = placeholder;
                      }}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full" style={{ backgroundColor: bluePrimary, opacity: 0.3 }}></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full" style={{ backgroundColor: bluePrimary, opacity: 0.3 }}></div>
              </div>

              {/* Enhanced founder info */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h2
                    className="text-base font-bold tracking-widest uppercase"
                    style={{ color: bluePrimary }}
                  >
                    Founder
                  </h2>
                  <h3 className="text-3xl lg:text-4xl font-black" style={{ color: black }}>
                    Ashish Patel
                  </h3>
                  <p className="text-black/60 text-base">(License Number – 21322826)</p>
                </div>

                {/* Enhanced accent line */}
                <div
                  className="h-1 w-24 rounded-full mx-auto opacity-60"
                  style={{
                    background: `linear-gradient(to right, transparent, ${bluePrimary}, transparent)`,
                  }}
                />

                {/* Company tag */}
                <div className="pt-4">
                  <p className="text-sm font-medium tracking-wide uppercase" style={{ color: "rgba(15, 15, 15, 0.6)" }}>
                    KALKI FINANCIAL SOLUTIONS
                  </p>
                  <p className="text-xs mt-1" style={{ color: "rgba(15, 15, 15, 0.5)" }}>
                    Protection • Investment • Retirement Planning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}