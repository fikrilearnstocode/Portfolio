"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
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
            {t.about.section_label}
          </span>
          <div className="flex-1 h-px bg-khaki-200" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              <div className="absolute inset-0 bg-khaki-200 rounded-2xl translate-x-3 translate-y-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-khaki-100 border border-khaki-200">
                <img
                  src="/images/profile.jpg"
                  alt="Fikri Firstly"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    el.parentElement!.classList.add("flex", "items-center", "justify-center");
                    el.parentElement!.innerHTML =
                      '<span class="text-6xl font-black text-khaki-400">FF</span>';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex-1 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-dark">
              Fikri Firstly<br />
              <span className="text-khaki-500">Arrasyid Hawe</span>
            </h2>

            <p className="text-dark/70 leading-relaxed">{t.about.p1}</p>
            <p className="text-dark/70 leading-relaxed">{t.about.p2}</p>
            <p className="text-dark/70 leading-relaxed">{t.about.p3}</p>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-black text-dark">8+</p>
                <p className="text-xs text-dark/50 uppercase tracking-wider">Projects</p>
              </div>
              <div className="w-px bg-khaki-200" />
              <div>
                <p className="text-2xl font-black text-dark">2+</p>
                <p className="text-xs text-dark/50 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="w-px bg-khaki-200" />
              <div>
                <p className="text-2xl font-black text-dark">1</p>
                <p className="text-xs text-dark/50 uppercase tracking-wider">Certificate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
