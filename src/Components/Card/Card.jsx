import React from "react";

export default function ProfessionalServicesDesign2() {
  const blue = "#007BFF";
  const blueDark = "#003B70";
  const black = "#0f0f0f";

  const services = [
    {
      title: "Expertise",
      description: "Over ten years of experience. Clear insights, strategic roadmaps, and ongoing reviews that keep your goals on track.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img1.jpg",
      features: ["Strategic Planning", "Ongoing Reviews", "Clear Insights"]
    },
    {
      title: "Discretion",
      description: "Your privacy matters. We handle sensitive information with full confidentiality and secure data processes.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img2.jpg",
      features: ["Full Confidentiality", "Secure Processes", "Data Protection"]
    },
    {
      title: "Dependability",
      description: "Consistent support, transparent updates, and a results-driven approach to your long-term well-being.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img3.jpg",
      features: ["24/7 Support", "Transparent Updates", "Results-Driven"]
    },
    {
      title: "Consulting",
      description: "Cut through complexity. Focused strategy sessions that help you clarify goals and close financial gaps.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img4.jpg",
      features: ["Strategy Sessions", "Goal Clarification", "Gap Analysis"]
    },
    {
      title: "Sales",
      description: "Curated financial solutions that prioritize suitability, cost-efficiency, and long-term value.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img5.jpg",
      features: ["Curated Solutions", "Cost-Efficiency", "Long-term Value"]
    },
    {
      title: "Partnership",
      description: "If our philosophy aligns, we grow together—built on trust, shared standards, and mutual integrity.",
      image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img6.jpg",
      features: ["Trust-Based", "Shared Standards", "Mutual Growth"]
    }
  ];

  const trustMetrics = [
    { number: "15+", label: "Years of Excellence", suffix: "years" },
    { number: "10,000+", label: "Families Secured", suffix: "clients" },
    { number: "₹500Cr+", label: "Assets Managed", suffix: "assets" },
    { number: "98%", label: "Client Satisfaction", suffix: "rating" }
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Premium Header */}
        <div className="text-center mb-20">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 mb-8">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l4 4L19 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-semibold text-blue-800 text-sm tracking-wide">
              WHAT CAN YOU EXPECT FROM US
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            {/* Your Financial Security,
            <br /> */}
            <span className="font-normal text-blue-600">Our Skills & Offers</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Expertise you can trust — delivered with clarity, transparency, and long-term vision.
          </p>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{metric.number}</div>
                <div className="text-sm text-gray-500 font-medium">{metric.label}</div>
                <div className="text-xs text-gray-400 mt-1">{metric.suffix}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimalist Cards Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/007BFF/white?text=${service.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA + Learn More Row */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => window.Calendly?.initPopupWidget?.({ url: "https://calendly.com/futurewesecure-info/30min" })}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Get Started
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="mt-5 h-[3px] w-0 group-hover:w-full transition-[width] duration-400 rounded-full bg-gradient-to-r from-blue-600 to-blue-700" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-50 to-white border border-blue-200 shadow-sm">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              Want a quick, no-pressure review?
            </h3>
            <p className="text-gray-600 text-sm">
              Schedule a brief call — we'll listen, assess, and suggest next steps.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => window.Calendly?.initPopupWidget?.({ url: "https://calendly.com/futurewesecure-info/30min" })}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Review
            </button>

            <button className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-blue-600 text-sm font-semibold text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


// {/* 
  
//   import React from "react";

// export default function ProfessionalServicesDesign1() {
//   const blue = "#007BFF";
//   const blueDark = "#003B70";
//   const black = "#0f0f0f";

//   const services = [
//     {
//       title: "Expertise",
//       description: "Over ten years of experience. Clear insights, strategic roadmaps, and ongoing reviews that keep your goals on track.",
//       image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img1.jpg",
//       stats: "10+ Years"
//     },
//     {
//       title: "Discretion",
//       description: "Your privacy matters. We handle sensitive information with full confidentiality and secure data processes.",
//       image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img2.jpg",
//       stats: "100% Secure"
//     },
//     {
//       title: "Dependability",
//       description: "Consistent support, transparent updates, and a results-driven approach to your long-term well-being.",
//       image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img3.jpg",
//       stats: "24/7 Support"
//     },
//     {
//       title: "Consulting",
//       description: "Cut through complexity. Focused strategy sessions that help you clarify goals and close financial gaps.",
//       image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img4.jpg",
//       stats: "500+ Clients"
//     },
//     {
//       title: "Sales",
//       description: "Curated financial solutions that prioritize suitability, cost-efficiency, and long-term value.",
//       image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img5.jpg",
//       stats: "Best Value"
//     },
//     {
//       title: "Partnership",
//       description: "If our philosophy aligns, we grow together—built on trust, shared standards, and mutual integrity.",
//       image: "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img6.jpg",
//       stats: "Long-term"
//     },
//   ];

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//       <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//       <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

//       <div className="max-w-7xl mx-auto relative">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-blue-200/50 mb-8">
//             <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
//               <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//                 <path d="M5 12l4 4L19 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <span className="font-semibold text-blue-700 tracking-wide">KALKI FINANCIAL SOLUTIONS</span>
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
//               Protection · Investment · Retirement
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Comprehensive financial planning designed to secure your future, grow your wealth, and ensure peaceful retirement.
//           </p>

//           {/* Stats Bar */}
//           <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
//             {[
//               { value: "15+", label: "Years Experience" },
//               { value: "₹500Cr+", label: "Assets Managed" },
//               { value: "10K+", label: "Happy Clients" },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-2xl font-bold text-blue-800">{stat.value}</div>
//                 <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Enhanced Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3"
//             >
//               {/* Image Container */}
//               <div className="relative h-56 w-full overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
//                   loading="lazy"
//                   onError={(e) => {
//                     e.target.src = `https://placehold.co/600x400/007BFF/white?text=${service.title}`;
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
//                 {/* Stats Overlay */}
//                 <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
//                   <span className="text-sm font-semibold text-gray-900">{service.stats}</span>
//                 </div>

//                 {/* Blue Accent */}
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
//                     Featured
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   {service.description}
//                 </p>

//                 {/* Features Tags */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <span className="text-xs font-medium px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700">
//                     Clarity
//                   </span>
//                   <span className="text-xs font-medium px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700">
//                     Consistency
//                   </span>
//                   <span className="text-xs font-medium px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700">
//                     Accountability
//                   </span>
//                 </div>

//                 {/* CTA Button */}
//                 <button
//                   onClick={() => window.Calendly?.initPopupWidget?.({ url: "https://calendly.com/futurewesecure-info/30min" })}
//                   className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
//                 >
//                   Get Started
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transform group-hover/btn:translate-x-1 transition-transform">
//                     <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//               </div>

//               {/* Accent Border */}
//               <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500" />
//             </div>
//           ))}
//         </div>

//         {/* Enhanced CTA Section */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-black/10"></div>
//           <div className="relative">
//             <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Start Your Financial Journey Today
//             </h3>
//             <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
//               Get personalized financial advice and create a roadmap for your protection, investment, and retirement goals.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={() => window.Calendly?.initPopupWidget?.({ url: "https://calendly.com/futurewesecure-info/30min" })}
//                 className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
//               >
//                 Book Free Consultation
//               </button>
//               <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
//                 Download Brochure
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 10s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// }

//   */}