// FoundationalCommitments.TrustGreen.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, Mail, CheckCircle, Shield, Target, Clock } from "lucide-react";
import faqimg from "../../assets/faqimg.jpg";

const commitmentsData = [
  {
    title: "Is it possible to engage a financial advisor if I don't have a substantial amount of disposable income?",
    content: "Yes, everyone can benefit from financial advising. We help you make confident financial decisions — regardless of your income level.",
  },
  {
    title: "Can you help make my investments more secure?",
    content: "We work with you to balance risk and reward, ensuring your investments support your long-term goals.",
  },
  {
    title: "Could you please review my portfolio?",
    content: "Regular portfolio reviews keep your financial direction aligned. We conduct a full Financial Needs Analysis for your entire portfolio.",
  },
  {
    title: "What kind of kids' education plans do you offer?",
    content: "We estimate future education costs and recommend personalized financial products to match your family's goals.",
  },
  {
    title: "Do you provide assistance with life insurance?",
    content: "Life insurance is essential for long-term family security, asset protection, and estate planning — and we guide you through it all.",
  },
];

export default function FoundationalCommitmentsTrustGreen() {
  const [open, setOpen] = useState(null);
  // Trust-focused green colors
  const primaryGreen = "#059669";    // Professional green
  const darkGreen = "#047857";       // Dark green
  const lightGreen = "#d1fae5";      // Light green
  const teal = "#0d9488";            // Teal accent
  const darkGray = "#1f2937";

  const contentRefs = useRef({});

  useEffect(() => {
    Object.keys(contentRefs.current).forEach((k) => {
      const el = contentRefs.current[k];
      if (!el) return;
      if (Number(k) === open) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    });
  }, [open]);

  return (
    <section id="faq" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-16 h-px bg-emerald-200"></div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-8 border border-blue-200">
                <Shield className="w-5 h-5 text-blue-700" />
                Frequently Asked Questions
              </span>
            </div>
            <div className="w-16 h-px bg-emerald-200"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            {/* Financial Guidance */}
            <span className="block font-semibold mt-2 text-blue-600">Everything you want to know</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here’s what people commonly ask before working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - FAQ */}
          <div>
            <div className="space-y-2">
              {commitmentsData.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left group focus:outline-none"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <CheckCircle
                          className={`w-5 h-5 mt-1 flex-shrink-0 transition-colors ${isOpen ? "text-emerald-500" : "text-gray-400 group-hover:text-emerald-400"
                            }`}
                        />
                        <h3 className={`font-medium text-gray-800 transition-colors flex-1 ${isOpen ? "text-gray-900" : "group-hover:text-gray-900"
                          }`}>
                          {item.title}
                        </h3>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-90 text-emerald-500" : "text-gray-400"
                          }`}
                      />
                    </button>

                    <div
                      id={`faq-panel-${i}`}
                      ref={(el) => (contentRefs.current[i] = el)}
                      className="overflow-hidden transition-max-h duration-500 ease-in-out"
                      style={{ maxHeight: 0 }}
                    >
                      <div className="pb-6 px-6">
                        <div className="pl-9">
                          <div className="w-full h-px bg-emerald-100 mb-4"></div>
                          <p className="text-gray-600 leading-relaxed text-sm">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-emerald-100">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">1,200+</div>
                <div className="text-sm text-gray-600">Families</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-teal-100">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Contact */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src={faqimg}
                alt="Professional financial consultation"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 to-transparent">
                <div className="text-white">
                  <div className="font-semibold text-lg">Your Financial Security</div>
                  <div className="text-sm text-emerald-200 mt-1">Protected with KALKI Expertise</div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
              <div className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">Ready to Secure Your Future?</h3>
                <p className="text-emerald-100 mb-4">
                  Get personalized financial advice from our experts
                </p>
                <a
                  href="mailto:Info@futurewesecure.com"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}