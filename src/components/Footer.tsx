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
          </div>
        </div>
      </div>
    </footer>
  );
}
