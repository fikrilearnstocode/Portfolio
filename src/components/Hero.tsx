"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-khaki-50 via-white to-khaki-100"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-khaki-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-khaki-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              className="text-xs uppercase tracking-[0.3em] text-khaki-500 font-semibold mb-4"
              {...fadeUp(0.1)}
            >
              {t.hero.greeting}
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-dark leading-tight mb-2"
              {...fadeUp(0.2)}
            >
              {t.hero.name}
            </motion.h1>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
              {...fadeUp(0.3)}
            >
              <div className="h-px w-8 bg-khaki-400" />
              <span className="text-khaki-600 font-semibold tracking-widest text-sm uppercase">
                {t.hero.role}
              </span>
              <div className="h-px w-8 bg-khaki-400" />
            </motion.div>

            <motion.p
              className="text-xl font-medium text-dark/80 mb-2"
              {...fadeUp(0.4)}
            >
              {t.hero.tagline}
            </motion.p>

            <motion.p
              className="text-base text-dark/60 mb-10 max-w-lg mx-auto lg:mx-0"
              {...fadeUp(0.5)}
            >
              {t.hero.subtagline}
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start flex-wrap"
              {...fadeUp(0.6)}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-dark text-white text-sm font-semibold rounded-full hover:bg-khaki-600 transition-colors"
              >
                {t.hero.cta_projects}
              </a>
              <a
                href="/cv/fikri-firstly-cv.pdf"
                download
                className="px-6 py-3 border-2 border-khaki-400 text-khaki-600 text-sm font-semibold rounded-full hover:bg-khaki-400 hover:text-white transition-all"
              >
                {t.hero.cta_cv}
              </a>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-khaki-300 scale-110" />
              <div className="absolute inset-0 rounded-full border border-khaki-200 scale-125" />

              {/* Photo */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-khaki-200">
                <img
                  src="/images/profile.jpg"
                  alt="Fikri Firstly"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    el.parentElement!.classList.add("flex", "items-center", "justify-center");
                    el.parentElement!.innerHTML =
                      '<span class="text-5xl font-black text-khaki-500">FF</span>';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-dark/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-khaki-400"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
