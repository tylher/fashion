"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";

const PRESS = [
  "Vogue",
  "Business of Fashion",
  "WWD",
  "Elle",
  "The Row Journal",
];

const CLIPPINGS = [
  {
    quote: "The kind of coat you buy once and wear for a decade.",
    name: "Amara O.",
    role: "Editor, Lagos Style Journal",
    rating: 5,
    rotate: -4,
  },
  {
    quote:
      "Finally, a label that treats restraint as a feature, not a limitation.",
    name: "Tobenna K.",
    role: "@tobennawears",
    rating: 5,
    rotate: 3,
  },
  {
    quote:
      "Every seam is doing something. Nothing is decorative for its own sake.",
    name: "Dara F.",
    role: "Stylist",
    rating: 4,
    rotate: -2,
  },
];

const clipVariants = {
  hidden: (rotate) => ({ opacity: 0, y: 60, rotate: rotate * 2.5 }),
  visible: (rotate) => ({
    opacity: 1,
    y: 0,
    rotate,
    transition: { type: "spring", bounce: 0.35, duration: 0.9 },
  }),
};

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-ink px-8 py-24 md:px-16 md:py-32">
      {/* Editorial pull quote — the magazine "cover line" moment */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-16 flex max-w-4xl flex-col items-start gap-4"
      >
        <RiDoubleQuotesL className="text-4xl text-gold" aria-hidden="true" />
        <p className="voice text-2xl leading-snug text-paper md:text-4xl">
          Not another minimalist label. A point of view you can put on.
        </p>
        <span className="font-ui text-sm uppercase tracking-wide text-paper/60">
          Business of Fashion, Autumn review
        </span>
      </motion.div>

      {/* Testimonial "clippings" — tilted like torn magazine pages, straighten on hover */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {CLIPPINGS.map((c) => (
          <motion.div
            key={c.name}
            custom={c.rotate}
            variants={clipVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ rotate: 0, y: -6 }}
            className="flex flex-col gap-4 rounded-card bg-paper p-6 shadow-lg"
          >
            <div className="flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  aria-hidden="true"
                  className={i < c.rating ? "opacity-100" : "opacity-20"}
                />
              ))}
            </div>
            <p className="voice text-lg leading-snug text-ink">
              &ldquo;{c.quote}&rdquo;
            </p>
            <div>
              <p className="font-display text-sm font-bold text-ink">
                {c.name}
              </p>
              <p className="font-ui text-xs uppercase tracking-wide text-ink/50">
                {c.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Press strip — infinite marquee, doubled list for a seamless loop */}
      <div className="mt-20 overflow-hidden border-t border-paper/15 pt-10">
        <motion.div
          className="flex w-max gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {[...PRESS, ...PRESS].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl font-bold uppercase tracking-wide text-paper/40"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
