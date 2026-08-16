"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Positioned around the edges so they never collide with the centered copy.
const FALLING_PILLS = [
  { label: "Bestsellers", top: "10%", left: "6%", rotate: -9 },
  { label: "Selling fast", top: "16%", left: "80%", rotate: 7 },
  { label: "Almost gone", top: "72%", left: "10%", rotate: 6 },
  { label: "Limited stock", top: "6%", left: "44%", rotate: -4 },
  { label: "Selling fast", top: "80%", left: "72%", rotate: -7 },
  { label: "Bestsellers", top: "44%", left: "90%", rotate: 10 },
];

// Parent-controlled variants — pills no longer track their own viewport
// intersection. Each was firing an independent whileInView observer, and
// once transformed to y:-70 inside an overflow-hidden box, the visible
// sliver could dip below the 0.4 threshold and get stuck hidden (or flip
// states on the next layout shift). Inheriting from one parent trigger
// avoids that entirely.
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: -70, rotate: 0 },
  visible: (rotate) => ({
    opacity: 1,
    y: 0,
    rotate,
    transition: { type: "spring", bounce: 0.55, duration: 1 },
  }),
};

export default function BestsellerBanner({ onViewBestsellers }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative my-14 min-h-[440px] overflow-hidden rounded-panel"
    >
      <div className="absolute inset-0 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      {/* Pills inherit "visible" from the section above — no independent
          viewport tracking, so they can't flicker or get stuck. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {FALLING_PILLS.map((pill, i) => (
          <motion.span
            key={`${pill.label}-${i}`}
            custom={pill.rotate}
            variants={pillVariants}
            style={{ top: pill.top, left: pill.left }}
            className="glass-pill absolute !bg-paper/12 !text-paper"
          >
            {pill.label}
          </motion.span>
        ))}
      </div>

      <div className="relative flex h-full min-h-[440px] flex-col items-center justify-center gap-6 px-8 py-16 text-center md:px-14">
        <p className=" eyebrow-on-dark">Selling out fast</p>
        <h3 className="max-w-lg font-display text-2xl font-bold text-paper md:text-4xl">
          The pieces everyone keeps coming back for.
        </h3>

        <button
          type="button"
          onClick={onViewBestsellers}
          className="btn btn-primary"
        >
          Shop bestsellers
          <FiArrowRight aria-hidden="true" />
        </button>
      </div>
    </motion.section>
  );
}
