"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { timelineItems } from "@/data/experience";
import clsx from "clsx";

const typeIcon = {
  work: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  education: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  certificate: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
};

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-khaki-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-khaki-500 font-semibold">
            {t.experience.section_label}
          </span>
          <div className="flex-1 h-px bg-khaki-200" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-khaki-200 hidden sm:block" />

          <div className="space-y-8">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Icon dot */}
                <div className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-khaki-300 items-center justify-center text-khaki-500 z-10">
                  {typeIcon[item.type]}
                </div>

                {/* Content */}
                <div
                  className={clsx(
                    "flex-1 bg-white rounded-2xl p-6 border shadow-sm",
                    item.current ? "border-khaki-400" : "border-khaki-100"
                  )}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-dark">{item.title}</h3>
                      <p className="text-sm text-khaki-600 font-medium">{item.organization}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-dark/50 font-medium">
                        {item.period}
                        {item.periodEnd ? ` – ${item.periodEnd}` : ""}
                        {item.current ? ` – ${t.experience.present}` : ""}
                      </span>
                      {item.location && (
                        <p className="text-xs text-dark/40 mt-0.5">{item.location}</p>
                      )}
                    </div>
                  </div>

                  {item.current && (
                    <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 mb-3">
                      {t.experience.present}
                    </span>
                  )}

                  {item.description && (
                    <ul className="mt-3 space-y-1.5">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-sm text-dark/60 flex gap-2">
                          <span className="text-khaki-400 mt-1 flex-shrink-0">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-khaki-600 hover:text-khaki-800 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {item.linkLabel || t.experience.verify}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
