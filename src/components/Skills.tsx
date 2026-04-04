"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-khaki-50">
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
            {t.skills.section_label}
          </span>
          <div className="flex-1 h-px bg-khaki-200" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.key}
              className="bg-white rounded-2xl p-6 border border-khaki-100 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-khaki-500 font-semibold mb-4">
                {t.skills.categories[cat.labelKey as keyof typeof t.skills.categories]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-khaki-100 text-dark/80 border border-khaki-200 hover:bg-khaki-200 hover:border-khaki-400 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + skillIdx * 0.04 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
