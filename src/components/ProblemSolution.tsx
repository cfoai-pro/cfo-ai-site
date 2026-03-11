"use client";

import { useTranslations } from "next-intl";

const problemIcons = [
  // Clock icon
  <svg key="clock" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // Warning icon
  <svg key="warning" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>,
  // Repeat icon
  <svg key="repeat" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
];

const solutionIcons = [
  // Lightning icon
  <svg key="lightning" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  // Check icon
  <svg key="check" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  // Star icon
  <svg key="star" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
];

export default function ProblemSolution() {
  const t = useTranslations("problem");

  const problems = [1, 2, 3].map((i) => ({
    title: t(`problems.title${i}`),
    desc: t(`problems.desc${i}`),
    icon: problemIcons[i - 1],
  }));

  const solutions = [1, 2, 3].map((i) => ({
    title: t(`solutions.title${i}`),
    desc: t(`solutions.desc${i}`),
    icon: solutionIcons[i - 1],
  }));

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <div className="space-y-6">
            {problems.map((item, i) => (
              <div
                key={i}
                className="fade-in-up flex gap-4 p-6 rounded-xl bg-red-500/5 border border-red-500/10"
              >
                <div className="text-red-400 shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-red-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            {solutions.map((item, i) => (
              <div
                key={i}
                className="fade-in-up flex gap-4 p-6 rounded-xl bg-accent-green/5 border border-accent-green/10"
              >
                <div className="text-accent-green shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-accent-green mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
