/**
 HomeVariantsBlue.jsx

 Two layout variants using the same blue theme and the uploaded logo.
 - Both keep the same copy and use the same color tokens.
 - Logo path: /mnt/data/logonew.png

 Usage:
   import { HomeBlueVariantOne, HomeBlueVariantTwo } from './HomeVariantsBlue.jsx';
*/

import React from "react";
import {
  Presentation,
  FileText,
  ShieldCheck,
  Briefcase,
  Calculator,
  CheckCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import logo from "../../assets/Logo/logonew.png"

const Logo = logo // local logo path (provided file)

/* Theme tokens — keep same for both variants */
const T = {
  accentStart: "#2bb0ff",
  accentEnd: "#0b63d6",
  deep: "#041826",
  text: "#07293a",
  surface: "#ffffff",
  subtle: "rgba(11,99,214,0.08)",
  glow: "rgba(43,176,255,0.16)",
};

const cards = [
  {
    title: "We Help You Plan For Future Needs",
    description:
      "Enjoy today while preparing for tomorrow. Gain clarity on your finances and build a roadmap toward a secure future.",
    Icon: Presentation,
  },
  {
    title: "Educate People On Securing Their Future",
    description:
      "We break down financial concepts into simple, actionable insights so you can make informed wealth decisions.",
    Icon: FileText,
  },
  {
    title: "Protect Your Assets & Loved Ones",
    description:
      "Minimize taxes, reduce risks, and create protections that secure your assets for the next generation.",
    Icon: ShieldCheck,
  },
  {
    title: "Build & Diversify Your Income",
    description:
      "Explore structured and strategic income streams tailored to your goals and lifestyle aspirations.",
    Icon: Briefcase,
  },
];

/* ---------------- Variant One
   Layout: Split hero — left text + CTA, right vertical card/logo panel.
   Cards: 4-column grid below hero. Strong visual hierarchy, prominent CTA.
*/
export function HomeBlueVariantOne() {
  const t = T;
  return (
    <main
      className="min-h-screen py-16 px-6 lg:px-12"
      style={{
        background: `radial-gradient(900px 260px at 8% 6%, ${t.glow}, transparent), linear-gradient(180deg,#f8fbfd 0%, #ffffff 40%)`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="p-3 rounded-2xl flex items-center justify-center"
                style={{
                  background: `#fff`,
                  boxShadow: "0 10px 30px rgba(11,99,214,0.12)",
                }}
              >
                <img src={Logo} alt="Kalki Logo" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h3 className="text-sm font-semibold" style={{ color: t.text }}>
                  Kalki Financial Solutions
                </h3>
                <p className="text-sm text-gray-600 mt-0">Protection — Investment — Retirement Planning</p>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ color: t.text }}>
              Empowering You With{" "}
              <span style={{ background: `linear-gradient(90deg, ${t.accentStart}, ${t.accentEnd})`, WebkitBackgroundClip: 'text', color: 'transparent' }}>
                Clarity, Confidence,
              </span>
              <br className="hidden sm:block" />
              and a Strong Financial Path Forward.
            </h1>

            <p className="max-w-2xl text-black/60 text-lg mb-8">
              We simplify your path to financial security through strategic planning, smart protection, and guided wealth-building.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#book"
                onClick={(e) => { e.preventDefault(); window?.Calendly?.initPopupWidget?.({ url: 'https://calendly.com/kalkifinancialsolutions/30min' }); }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
                style={{ background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})`, color: 'white' }}
              >
                <Calculator className="w-5 h-5" />
                Book a Consultation
              </a>

              <a
                href="#learn"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg font-medium border"
                style={{ borderColor: t.subtle, color: t.text, background: 'white' }}
              >
                Learn More
              </a>
            </div>

            <div className="mt-8 flex gap-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ background: t.accentEnd }} />
                <div className="text-sm text-gray-700">Trusted Process</div>
              </div>
              <div className="inline-flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ background: t.accentStart }} />
                <div className="text-sm text-gray-700">Personalized Plans</div>
              </div>
            </div>
          </div>

          {/* Right: vertical logo card / quick features */}
          <aside className="lg:col-span-5">
            <div
              className="rounded-3xl p-6 md:p-8"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.55))',
                border: `1px solid ${t.subtle}`,
                boxShadow: "0 14px 40px rgba(2,20,30,0.06)",
                overflow: 'hidden'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div style={{ width: 72, height: 72, borderRadius: 18, background: `#fff`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 30px rgba(11,99,214,0.12)' }}>
                  <img src={Logo} alt="logo" className="w-16 h-16 object-contain" />
                </div>
                <div>
                  <h4 className="font-bold" style={{ color: t.text }}>Trusted guidance</h4>
                  <p className="text-sm text-gray-600 max-w-xs">Clear plans tailored to your situation and goals.</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="p-4 rounded-xl flex items-start gap-4" style={{ border: `1px solid ${t.subtle}`, background: 'white' }}>
                  <div className="p-2 rounded-lg" style={{ background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})` }}>
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: t.text }}>Trusted Advisors</div>
                    <div className="text-sm text-gray-600">Decades of experience guiding families.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl flex items-start gap-4" style={{ border: `1px solid ${t.subtle}`, background: 'white' }}>
                  <div className="p-2 rounded-lg" style={{ background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})` }}>
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: t.text }}>Tailored Solutions</div>
                    <div className="text-sm text-gray-600">Every plan is built around your long-term goals.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl flex items-start gap-4" style={{ border: `1px solid ${t.subtle}`, background: 'white' }}>
                  <div className="p-2 rounded-lg" style={{ background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})` }}>
                    <Presentation className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: t.text }}>Data-Driven</div>
                    <div className="text-sm text-gray-600">Real numbers, real projections, real clarity.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); window?.Calendly?.initPopupWidget?.({ url: 'https://calendly.com/kalkifinancialsolutions/30min' }); }}
                  className="block text-center px-4 py-3 rounded-lg font-semibold"
                  style={{ background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})`, color: 'white' }}
                >
                  Start Your Plan
                </a>
              </div>
            </div>
          </aside>
        </section>

        {/* Cards grid */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <article key={idx} className="rounded-2xl p-6" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.7))',
              border: `1px solid ${t.subtle}`,
              boxShadow: '0 12px 30px rgba(2,20,30,0.05)',
              transition: 'transform .2s ease, box-shadow .2s ease'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 22px 40px rgba(11,99,214,0.12)`; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(2,20,30,0.05)'; }}
            >
              <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})` }}>
                <c.Icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2" style={{ color: t.text }}>{c.title}</h4>
              <p className="text-sm text-gray-600">{c.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

/* ---------------- Variant Two
   Layout: Centered hero with large overlapping logo badge and alternating feature rows.
   Cards: Staggered list with icons on alternating sides for rhythm.
*/
export function HomeBlueVariantTwo() {
  const t = T;
  return (
    <main
      className="min-h-screen py-20 px-6 lg:px-12"
      style={{
        background: `radial-gradient(700px 260px at 50% 0%, ${t.glow}, transparent), linear-gradient(180deg,#fbfeff 0%, #ffffff 50%)`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Centered hero with logo badge */}
        <section className="text-center mb-16 relative">
          <div className="mx-auto w-full max-w-3xl">
            <div className="relative inline-block mb-6">
              <div style={{
                width: 140, height: 140, borderRadius: 24,
                background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 18px 50px rgba(11,99,214,0.12)'
              }}>
                <img src={Logo} alt="Kalki Logo" className="w-20 h-20 object-contain" />
              </div>

              {/* glow ring */}
              <div style={{
                position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                width: 220, height: 220, borderRadius: 9999, background: `radial-gradient(circle, ${t.glow}, transparent 40%)`, zIndex: -1
              }} />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4" style={{ color: t.text }}>
              Empowering You With{" "}
              <span style={{ background: `linear-gradient(90deg, ${t.accentStart}, ${t.accentEnd})`, WebkitBackgroundClip: 'text', color: 'transparent' }}>
                Clarity, Confidence,
              </span>
              <br />
              and a Strong Financial Path Forward.
            </h1>

            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We simplify your path to financial security through strategic planning, smart protection, and guided wealth-building.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#book"
                onClick={(e) => { e.preventDefault(); window?.Calendly?.initPopupWidget?.({ url: 'https://calendly.com/kalkifinancialsolutions/30min' }); }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
                style={{ background: `linear-gradient(90deg, ${t.accentStart}, ${t.accentEnd})`, color: 'white' }}
              >
                <Calculator className="w-5 h-5" />
                Book a Consultation
              </a>

              <a href="#resources" className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium border" style={{ borderColor: t.subtle, color: t.text }}>
                Resources
              </a>
            </div>
          </div>
        </section>

        {/* Alternating feature rows */}
        <section className="space-y-8">
          {cards.map((c, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl`} style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.78))',
                border: `1px solid ${t.subtle}`,
                boxShadow: '0 10px 30px rgba(2,20,30,0.04)'
              }}>
                {/* icon block */}
                <div className={`flex-shrink-0 ${isEven ? '' : 'md:order-2'}`}>
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${t.accentStart}, ${t.accentEnd})`, boxShadow: '0 10px 30px rgba(11,99,214,0.12)' }}>
                    <c.Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* text */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: t.text }}>{c.title}</h3>
                  <p className="text-gray-700">{c.description}</p>
                </div>

                {/* CTA small */}
                <div className="flex-shrink-0">
                  <a href="#learn" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium" style={{ border: `1px solid ${t.subtle}`, background: 'white', color: t.text }}>
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </section>

        {/* Bottom feature grid */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl" style={{ border: `1px solid ${t.subtle}`, background: 'white', boxShadow: '0 12px 30px rgba(2,20,30,0.04)' }}>
            <div className="flex items-center gap-4 mb-3">
              <Users className="w-6 h-6" style={{ color: t.accentStart }} />
              <h4 className="font-semibold" style={{ color: t.text }}>Trusted Advisors</h4>
            </div>
            <p className="text-gray-700">Decades of experience guiding individuals and families with honesty and precision.</p>
          </div>

          <div className="p-6 rounded-2xl" style={{ border: `1px solid ${t.subtle}`, background: 'white', boxShadow: '0 12px 30px rgba(2,20,30,0.04)' }}>
            <div className="flex items-center gap-4 mb-3">
              <CheckCircle className="w-6 h-6" style={{ color: t.accentEnd }} />
              <h4 className="font-semibold" style={{ color: t.text }}>Tailored Solutions</h4>
            </div>
            <p className="text-gray-700">Every plan is built uniquely around your long-term personal goals.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

/* Default export for convenience */
export default HomeBlueVariantOne;
