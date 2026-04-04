"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { projects, type ProjectTag } from "@/data/projects";
import clsx from "clsx";

type Filter = "All" | ProjectTag;

const filters: { key: Filter; labelKey: string }[] = [
  { key: "All", labelKey: "filter_all" },
  { key: "Machine Learning", labelKey: "filter_ml" },
  { key: "NLP", labelKey: "filter_nlp" },
  { key: "EDA", labelKey: "filter_eda" },
  { key: "Computer Vision", labelKey: "filter_cv" },
];

const badgeColors = {
  academic: "bg-blue-50 text-blue-600 border-blue-100",
  revou: "bg-emerald-50 text-emerald-600 border-emerald-100",
  dummy: "bg-khaki-100 text-khaki-600 border-khaki-200",
};

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter as ProjectTag));

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-khaki-500 font-semibold">
            {t.projects.section_label}
          </span>
          <div className="flex-1 h-px bg-khaki-200" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={clsx(
                "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all",
                activeFilter === f.key
                  ? "bg-dark text-white border-dark"
                  : "bg-white text-dark/60 border-khaki-200 hover:border-khaki-400"
              )}
            >
              {t.projects[f.labelKey as keyof typeof t.projects]}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group bg-white border border-khaki-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              {/* Card image / color block */}
              <div className="h-36 bg-gradient-to-br from-khaki-200 to-khaki-100 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-khaki-400" />
                  <div className="absolute bottom-2 left-6 w-12 h-12 rounded-full bg-khaki-500" />
                </div>
                {/* Badge */}
                <span
                  className={clsx(
                    "absolute top-3 left-3 text-[10px] font-semibold px-2 py-0.5 rounded-full border uppercase tracking-wider",
                    badgeColors[project.badge]
                  )}
                >
                  {t.projects[`badge_${project.badge}` as keyof typeof t.projects]}
                </span>
                {/* Period */}
                <span className="absolute bottom-3 right-3 text-[10px] text-khaki-600/70 font-medium">
                  {project.period}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="font-bold text-dark mb-2 group-hover:text-khaki-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-dark/60 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-khaki-50 border border-khaki-200 text-khaki-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-dark/70 hover:text-dark flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                      {t.projects.view_github}
                    </a>
                  )}
                  {project.notebook && (
                    <a
                      href={`/${project.notebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-khaki-500 hover:text-khaki-700 flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t.projects.view_notebook}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
