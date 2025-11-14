// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Logo/logonew.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const closeBtnRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Products", path: "/product" },
    { name: "Partnership", path: "/partnership" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Events", path: "/events" },
  ];

  const isActive = (p) => location.pathname === p;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : original || "";
    return () => (document.body.style.overflow = original || "");
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    if (isOpen) setTimeout(() => closeBtnRef.current?.focus(), 10);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  /**
   * Color system taken from the attached logo:
   *  - --brand-primary: bright medium-blue (used for highlights / active states)
   *  - --brand-dark: deep navy (used for main text / icons)
   *  - --tagline: charcoal for secondary text
   *
   * Adjust these vars here or in CSS if you want a global tweak later.
   */
  const headerStyle = {
    // primary / visible blue from logo
    "--brand-primary": "#1976D2",
    // darker navy for text/icons
    "--brand-dark": "#002B55",
    // muted charcoal for small/secondary text
    "--tagline": "#333333",
  };

  return (
    <header
      // apply color vars to the root so child elements can reference them
      style={headerStyle}
      className={[
        "navbar-root--light",
        "fixed top-0 z-20 w-full transition-all duration-300",
        isScrolled
          ? "navbar--scrolled shadow-md backdrop-blur"
          : "navbar--top",
      ].join(" ")}
    >
      <div className="container mx-auto px-3 lg:px-6">
        <div className="flex items-center justify-between gap-4 py-3 md:py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 h-[56px] md:h-[64px]"
            aria-label="Future we secure - Home"
          >
            <img
              src={Logo}
              alt="Future we secure"
              className={`logo ${isScrolled ? "logo--sm" : "logo--lg"}`}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "nav-link--light",
                    "px-3 py-2 rounded-xl relative",
                    active ? "nav-link--active" : "",
                  ].join(" ")}
                  // inline styles use CSS vars defined on header
                  style={{
                    color: active ? "var(--brand-primary)" : "var(--brand-dark)",
                  }}
                >
                  <span className="inline-block">{item.name}</span>

                  {/* underline element — uses brand-primary when active */}
                  <span
                    className="nav-underline--light block absolute left-3 right-3 bottom-1 h-[3px] rounded"
                    style={{
                      backgroundColor: active ? "var(--brand-primary)" : "transparent",
                      transition: "background-color 180ms ease",
                    }}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-xl"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
          >
            <AiOutlineMenu
              className="text-3xl"
              style={{ color: "var(--brand-dark)" }}
            />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <button
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
        className={[
          "fixed inset-0 transition-opacity duration-300 lg:hidden",
          // darker, subtle tint to match logo aesthetic
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        // inline style keeps the color in harmony with the palette
        style={{ backgroundColor: "rgba(0, 43, 85, 0.28)" }}
      />

      {/* Mobile Drawer */}
      <aside
        id="mobile-drawer"
        className={[
          "fixed top-0 right-0 h-full w-[88%] sm:w-[60%] max-w-[400px]",
          "drawer-surface--light text-slate-900 border-l border-slate-200 shadow-2xl",
          "transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        // make drawer background a soft white and ensure text uses brand-dark
        style={{
          background: "#ffffff",
          color: "var(--brand-dark)",
        }}
      >
        <div className="relative h-full flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b" style={{ borderColor: "#e6eef9" }}>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3"
            >
              <img src={Logo} alt="Future we secure" className="h-9 w-auto" />
              <span style={{ color: "var(--brand-dark)", fontWeight: 600 }}>
                Future we secure
              </span>
            </Link>

            <button
              ref={closeBtnRef}
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl"
              aria-label="Close menu"
            >
              <AiOutlineClose
                className="text-3xl"
                style={{ color: "var(--brand-dark)" }}
              />
            </button>
          </div>

          {/* Drawer Content */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="py-1 divide-y divide-slate-100">
              {navLinks.map((item) => {
                const active = isActive(item.path);
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "flex items-center justify-between",
                        "px-5 py-4 text-base sm:text-[17px]",
                        "nav-link--light mobile",
                        active ? "nav-link--active" : "",
                      ].join(" ")}
                      style={{
                        color: active ? "var(--brand-primary)" : "var(--brand-dark)",
                        background: active ? "rgba(25,118,210,0.06)" : "transparent",
                        borderLeft: active ? "3px solid var(--brand-primary)" : "3px solid transparent",
                      }}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Drawer Footer (repeats nav links for quick access) */}
          <div className="drawer-footer px-5 pt-3 pb-6 border-t bg-white rounded-md" style={{ borderColor: "#f1f7ff" }}>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name + "-footer"}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl border border-slate-200 hover:bg-orange-50 transition"
                    // subtle "action" color for footer links — keep brand for hover outline
                    style={{
                      color: "var(--brand-dark)",
                      borderColor: "#e6eef9",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(25,118,210,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
