import React, { useEffect, useRef, useState } from "react";
import {
  Handshake,
  Notebook,
  BookOpenText,
  ChartNoAxesCombined,
  X,
  ChevronRight
} from "lucide-react";

const cardData = [
  {
    title: "Responsibilities",
    description: [
      "Embrace the system, follow it, and align with your leaders.",
      "Allow your leaders to guide you while you earn and learn simultaneously.",
      "Invite anyone and everyone to sessions and workshops.",
      "Schedule follow-up sessions with your leader to enhance growth.",
    ],
    Icon: Handshake,
  },
  {
    title: "Educate People On Securing Their Future",
    description: [
      "“An investment in knowledge pays the best interest.” We help families secure future needs while enjoying life fully.",
    ],
    Icon: Notebook,
  },
  {
    title: "Required Skills",
    description: ["Energetic self-starter", "Coachable", "18+ with valid SSN"],
    Icon: BookOpenText,
  },
  {
    title: "What Will You Gain",
    description: [
      "Craft tailored plans across:",
      "Retirement planning",
      "Tax savings",
      "401(k) rollover",
      "College savings",
      "Asset protection",
      "Risk management",
      "Estate planning",
    ],
    Icon: ChartNoAxesCombined,
  },
];

export default function PartnerProgramVariantA() {
  const [selectedCard, setSelectedCard] = useState(null);
  const calendlyReadyRef = useRef(false);

  const bluePrimary = "#1e40af";
  const blueDark = "#1e3a8a";
  const black = "#0f0f0f";

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/futurewesecure-info/30min" });
    } else {
      window.open("https://calendly.com/futurewesecure-info/30min", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="text-center mb-5 py-5">
          <div className="flex justify-center items-center gap-6 ">
            {/* <div className="w-16 h-0.5" style={{ backgroundColor: bluePrimary }}></div>
            <span className="text-xs font-medium tracking-widest uppercase opacity-80" style={{ color: black }}>
              KALKI FINANCIAL SOLUTIONS
            </span>
            <div className="w-16 h-0.5" style={{ backgroundColor: bluePrimary }}></div> */}
          </div>

          <h2 className=" py-5 text-3xl md:text-4xl lg:text-5xl font-black  leading-tight">
            <span style={{ color: black }}>Partner </span>
            {/* <br /> */}
            <span style={{ color: bluePrimary }}>Program</span>
          </h2>

          <div className="space-y-4">
            {/* <p className="text-2xl font-light opacity-90" style={{ color: black }}>
              Career Program
            </p> */}
            <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: black }}>
              Build a meaningful career helping families master personal finance.
            </p>
          </div>
        </div>

        {/* Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              onClick={() => setSelectedCard(card)}
              className="group bg-white rounded-2xl p-6 border-2 hover:border-blue-200 transition-all duration-500 hover:shadow-xl cursor-pointer"
              style={{
                borderColor: "rgba(30, 64, 175, 0.1)",
                background: "linear-gradient(145deg, #ffffff, #fafbff)"
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: bluePrimary }}>
                  <card.Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold mb-3 leading-tight" style={{ color: black }}>
                    {card.title}
                  </h3>

                  <ul className="space-y-1 mb-4">
                    {card.description.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-sm text-black/70 leading-relaxed flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: bluePrimary }}></div>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
                    <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: bluePrimary }}>
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs text-black/60">{card.description.length} points</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border-2" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: black }}>Ready to Join Our Team?</h3>
            <p className="text-black/70 mb-6 max-w-2xl mx-auto">
              Start your journey toward a rewarding career in financial services with comprehensive training and mentorship.
            </p>
            <button
              onClick={openCalendly}
              className="w-full max-w-md mx-auto py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: bluePrimary }}
            >
              Schedule Discovery Call
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setSelectedCard(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: bluePrimary }}>
                  <selectedCard.Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: black }}>{selectedCard.title}</h3>
              </div>
              <button onClick={() => setSelectedCard(null)} className="p-1 hover:bg-gray-100 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {selectedCard.description.map((item, index) => (
                <div key={index} className="p-3 rounded-lg border" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
                  <p className="text-black/80 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
              <button
                onClick={openCalendly}
                className="flex-1 py-3 rounded-lg font-semibold text-white transition-all duration-300"
                style={{ backgroundColor: bluePrimary }}
              >
                Book Call
              </button>
              <button
                onClick={() => setSelectedCard(null)}
                className="flex-1 py-3 rounded-lg font-semibold border transition-all duration-300"
                style={{ borderColor: bluePrimary, color: bluePrimary }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}