"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (locale: "pt" | "en") => {
    router.replace(pathname, { locale });
  };

  const navLinks = [
    { href: "#how-it-works", label: t("howItWorks") },
    { href: "#features", label: t("features") },
    { href: "#pricing", label: t("pricing") },
    { href: "#faq", label: t("faq") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.png" alt="CFO-AI" width={36} height={36} />
            <span className="text-xl font-bold gradient-text">CFO-AI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => switchLocale("pt")}
                className="px-2 py-1 rounded text-gray-400 hover:text-white transition-colors"
              >
                PT
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => switchLocale("en")}
                className="px-2 py-1 rounded text-gray-400 hover:text-white transition-colors"
              >
                EN
              </button>
            </div>
            <a href="#pricing" className="btn-primary text-sm !py-2 !px-5">
              {t("cta")}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/5 mt-2 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={() => switchLocale("pt")}
                className="px-2 py-1 text-sm text-gray-400 hover:text-white"
              >
                PT
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => switchLocale("en")}
                className="px-2 py-1 text-sm text-gray-400 hover:text-white"
              >
                EN
              </button>
            </div>
            <a
              href="#pricing"
              className="btn-primary text-sm !py-2 !px-5 mt-3 text-center block"
            >
              {t("cta")}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
