import React from "react";
import {
  ShieldCheck,
  Briefcase,
  Target,
  Lightbulb,
  Users,
  LineChart,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Calendar,
  Award,
} from "lucide-react";

export default function HomeDesign2() {
  const blue = "#007BFF";
  const blueDark = "#003B70";

  const features = [
    {
      title: "We Help You Plan For Future Needs",
      description: "Enjoy today while preparing for tomorrow. Gain clarity on your finances and build a roadmap toward a secure future.",
      Icon: Target,
    },
    {
      title: "Educate People On Securing Their Future",
      description: "We break down financial concepts into simple, actionable insights so you can make informed wealth decisions.",
      Icon: ShieldCheck,
    },
    {
      title: "Protect Your Assets & Loved Ones",
      description: "Minimize taxes, reduce risks, and create protections that secure your assets for the next generation.",
      Icon: Briefcase,
    },
    {
      title: "Build & Diversify Your Income ",
      description: "Explore structured and strategic income streams tailored to your goals and lifestyle aspirations.",
      Icon: Lightbulb,
    },
  ];

  return (
    <main className="min-h-screen bg-white relative">
      {/* Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-50 rounded-lg rotate-45 opacity-40"></div>
      </div>

      <div className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 border border-blue-200">
              <Award className="w-4 h-4" />
              What We Do
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Empowering You With
              {/* <br /> */}
              <span className="font-semibold text-blue-600"> Clarity, Confidence,</span>
              <br />
              and a Strong Financial Path Forward.
            </h1>

            <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
              We simplify your path to financial security through strategic planning, smart protection, and guided wealth-building.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats & CTA Combined Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "10K+", label: "Happy Clients" },
                  { number: "₹500Cr+", label: "Assets Managed" },
                  { number: "98%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center lg:text-right">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Start Your Journey Today
                </h3>
                <button
                  onClick={() => window.Calendly?.initPopupWidget?.({ url: "https://calendly.com/futurewesecure-info/30min" })}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Session
                </button>
              </div>
            </div>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Trusted Advisors",
                description: "Decades of experience guiding individuals and families with honesty and precision.",
                Icon: Users,
              },
              {
                title: "Tailored Solutions",
                description: "Every plan is built uniquely around your long-term personal goals.",
                Icon: Target,
              },
              {
                title: "Data-Driven Approach",
                description: "We look at real numbers, real projections, and real-life variables.",
                Icon: LineChart,
              },
              {
                title: "Transparent Guidance",
                description: "No hidden agendas—just clear, actionable, and trustworthy advice.",
                Icon: BarChart3,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center bg-blue-50 rounded-2xl p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Ready to Take Control of Your Financial Future?
              </h2>
              <p className="text-gray-600 mb-8">
                Join thousands of clients who have achieved financial freedom with our expert guidance.
              </p>
              <button
                onClick={() => window.Calendly?.initPopupWidget?.({ url: "https://calendly.com/futurewesecure-info/30min" })}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}