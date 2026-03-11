"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const faqKeys = [1, 2, 3, 4, 5, 6];

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-gray-400">{t("subtitle")}</p>
        </div>

        <div className="space-y-3">
          {faqKeys.map((key) => {
            const isOpen = openIndex === key;
            return (
              <div
                key={key}
                className="fade-in-up rounded-xl bg-navy-900 border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : key)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium pr-4">
                    {t(`items.q${key}`)}
                  </span>
                  <svg
                    className={`w-5 h-5 shrink-0 text-gray-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-5 text-gray-400 text-sm leading-relaxed">
                    {t(`items.a${key}`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
