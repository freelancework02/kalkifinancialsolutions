import React, { useEffect, useRef } from "react";

export default function ProductcardVariantB() {
  const bluePrimary = "#1e40af";
  const blueDark = "#1e3a8a";
  const black = "#0f0f0f";

  // Calendly loader (same as before)
  const calendlyReadyRef = useRef(false);

  const openCalendly = () => {
    const openPopup = () =>
      window.Calendly?.initPopupWidget?.({
        url: "https://calendly.com/futurewesecure-info/30min",
      });

    if (calendlyReadyRef.current && window.Calendly) {
      openPopup();
      return;
    }

    let script = document.getElementById("calendly-script");
    if (!script) {
      script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        calendlyReadyRef.current = true;
        openPopup();
      };
      document.body.appendChild(script);
    } else {
      const wait = setInterval(() => {
        if (window.Calendly) {
          clearInterval(wait);
          calendlyReadyRef.current = true;
          openPopup();
        }
      }, 50);
      setTimeout(() => clearInterval(wait), 5000);
    }
  };

  useEffect(() => {
    if (!document.getElementById("calendly-script")) {
      const s = document.createElement("script");
      s.id = "calendly-script";
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      s.onload = () => (calendlyReadyRef.current = true);
      document.body.appendChild(s);
    } else {
      calendlyReadyRef.current = !!window.Calendly;
    }
  }, []);

  const services = [
    {
      title: "Fixed & Indexed Annuities",
      description:
        "A contract with an insurer that can guarantee principal and interest while offering potential lifelong income withdrawals.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img4.jpg",
    },
    {
      title: "Indexed Universal Life",
      description:
        "Death benefit protection plus portfolio diversification with the potential for tax-advantaged growth.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img3.jpg",
    },
    {
      title: "Term Life",
      description:
        "Straightforward coverage for the years you need it most—protect temporary responsibilities with confidence.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img2.jpg",
    },
    {
      title: "Traditional IRA / Roth IRA",
      description:
        "Tax-deferred growth with Traditional IRAs or tax-free qualified withdrawals with Roth IRAs—plan an efficient retirement.",
      image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2148793763.jpg",
    },
    {
      title: "Whole Life Insurance",
      description:
        "Lifetime coverage with guaranteed benefits and cash value that can grow over time.",
      image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2163.jpg",
    },
    {
      title: "Will & Trust",
      description:
        "Establish your Will & Trust plus four other core estate documents to protect wishes and heirs.",
      image:
        "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img1.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          {/* <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5" style={{ backgroundColor: bluePrimary }}></div>
            <span className="text-lg font-bold tracking-widest uppercase" style={{ color: bluePrimary }}>
              Product Portfolio
            </span>
            <div className="w-12 h-0.5" style={{ backgroundColor: bluePrimary }}></div>
          </div> */}

          <h2 className=" py-5 text-3xl md:text-4xl lg:text-5xl font-black  leading-tight">
            <span style={{ color: black }}>Financial </span>
            {/* <br /> */}
            <span style={{ color: bluePrimary }}>Products</span>
          </h2>

          <p className="text-xl opacity-80 max-w-2xl mx-auto" style={{ color: black }}>
            Scan the range — quick CTAs let customers act fast.
          </p>
        </div>

        {/* Products Grid - Enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border-2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              style={{
                borderColor: "rgba(30, 64, 175, 0.1)"
              }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className="h-48 md:h-full">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: bluePrimary }}></div>

                  {/* Product Number */}
                  {/* <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <span className="font-bold text-xs" style={{ color: bluePrimary }}>
                        {index + 1}
                      </span>
                    </div>
                  </div> */}
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 leading-tight" style={{ color: black }}>
                      {product.title}
                    </h3>

                    <p className="text-black/70 leading-relaxed text-sm mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Action Section */}
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
                    <button
                      onClick={openCalendly}
                      className="px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: bluePrimary }}
                    >
                      Get Details
                    </button>

                    <div className="text-right">
                      <span className="text-xs text-black/60">Quick call • </span>
                      <span className="text-xs font-semibold" style={{ color: bluePrimary }}>15m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Badge */}
              <button
                onClick={openCalendly}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: bluePrimary }}
                aria-label={`Start ${product.title}`}
              >
                Start
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-3xl p-8 border-2" style={{ borderColor: "rgba(30, 64, 175, 0.1)" }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: black }}>
              Ready to Explore Your Options?
            </h3>
            <p className="text-black/70 mb-6 max-w-2xl mx-auto">
              Book a complimentary consultation to discuss which financial products align with your goals.
            </p>
            <button
              onClick={openCalendly}
              className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: bluePrimary }}
            >
              Book Free Consultation
            </button>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold tracking-widest uppercase opacity-70" style={{ color: black }}>
              KALKI FINANCIAL SOLUTIONS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}