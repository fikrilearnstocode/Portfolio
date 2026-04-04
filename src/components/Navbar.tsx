"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-khaki-200"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-black tracking-wider text-dark hover:text-khaki-500 transition-colors"
          >
            FF
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark/70 hover:text-dark transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Lang toggle + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-khaki-400 text-khaki-600 hover:bg-khaki-400 hover:text-white transition-all"
            >
              {language === "en" ? "ID" : "EN"}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-1 text-dark"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
              <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
              <div className="w-5 h-0.5 bg-current transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-khaki-200 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-dark/80 hover:text-dark"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
