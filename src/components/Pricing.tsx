"use client";

import { useTranslations } from "next-intl";

const plans = ["starter", "professional", "enterprise"] as const;

export default function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="py-24 px-4 bg-navy-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const isPro = plan === "professional";
            const features: string[] = t.raw(`${plan}.features`);

            return (
              <div
                key={plan}
                className={`fade-in-up relative rounded-2xl p-8 ${
                  isPro
                    ? "gradient-border bg-navy-900 scale-105"
                    : "bg-navy-900 border border-white/5"
                }`}
              >
                {/* Popular badge */}
                {isPro && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-semibold px-4 py-1 rounded-full">
                    {t("popular")}
                  </div>
                )}

                {/* Plan info */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-1">
                    {t(`${plan}.name`)}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {t(`${plan}.target`)}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg text-gray-400">€</span>
                    <span className="text-5xl font-extrabold gradient-text">
                      {t(`${plan}.price`)}
                    </span>
                    <span className="text-gray-400">{t("monthly")}</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          isPro ? "text-accent-green" : "text-accent-blue"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="mailto:hello@cfo-ai.cloud"
                  className="w-full py-3 rounded-lg font-semibold transition-all btn-primary !block text-center"
                >
                  {t("cta")}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
