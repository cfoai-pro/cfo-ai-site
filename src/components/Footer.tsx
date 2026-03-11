"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/5">
      {/* Final CTA */}
      <div className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-gray-400 mb-8">{t("ctaSubtitle")}</p>
          <a href="#pricing" className="btn-primary text-lg px-8 py-4">
            {t("cta")}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="CFO-AI" width={24} height={24} />
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} CFO-AI. {t("rights")}
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="mailto:hello@cfo-ai.cloud" className="hover:text-white transition-colors">
              hello@cfo-ai.cloud
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
