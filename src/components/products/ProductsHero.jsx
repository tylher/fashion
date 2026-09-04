"use client";

// components/ProductsHero.jsx
//
// Products page hero. Full-bleed video of the runway walk — that's the
// most characteristic thing in this brief, so it IS the hero, not a
// backdrop behind a generic headline treatment. Content sits low-left,
// like a magazine cover credit block, not centered. One accent color
// (coral) does all the work; violet/gold/emerald are left for other
// parts of the site so the hero doesn't read as a color-swatch demo.
//
// No eyebrow label above the headline — deliberately. The only other
// text element (the italic caption) is placed apart from the headline
// specifically so it reads as a caption about the film, not a
// decorative label sitting on top of it. On mobile it flows in the
// document under the CTA instead of floating at bottom-right, because
// two independently bottom-anchored absolute blocks collide on narrow
// screens — see note below.
//
// The mute toggle is the hero's second interactive element instead of a
// redundant "watch the film" button — the background IS the film, so
// giving control over its sound is the actually-useful addition.
//
// Swap VIDEO_SRC / POSTER_SRC for the real runway footage + a first-frame
// still once you have them.
const VIDEO_SRC = "/videos/fashion-promo.mp4";
const POSTER_SRC = "/images/products/hero-poster.jpg";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { LuVolume2, LuVolumeX } from "react-icons/lu";

const EASE = [0.16, 1, 0.3, 1];

// Single orchestrated reveal on mount — headline, subhead, and CTA rise
// in sequence once. No per-section scroll-triggered fades scattered
// around; this is the one motion moment this hero spends.
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

function item(reduceMotion) {
  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  };
}

export default function ProductsHero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const reduceMotion = useReducedMotion();
  const fade = item(reduceMotion);

  function toggleSound() {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  }

  return (
    <section className="relative h-[100dvh] min-h-[560px] w-full overflow-hidden bg-ink">
      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER_SRC}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Legibility gradient — stronger at the bottom where the content
          sits, a light wash at the top in case a transparent nav overlays
          this section. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/25" />

      {/* MUTE TOGGLE — the hero's one other interactive element. Circular,
          unlike the rectangular button below: it's a utility control, not
          a "button" in the design guide's sense. */}
      <button
        onClick={toggleSound}
        aria-label={muted ? "Unmute video sound" : "Mute video sound"}
        className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 bg-ink/40 text-paper backdrop-blur-md transition-colors hover:bg-ink/60 sm:right-8 sm:top-8"
      >
        {muted ? (
          <LuVolumeX size={17} strokeWidth={1.75} />
        ) : (
          <LuVolume2 size={17} strokeWidth={1.75} />
        )}
      </button>

      {/* CONTENT — anchored low-left, magazine-credit style rather than
          centered hero-template style. */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute inset-x-0 bottom-0 z-10 px-5 pb-12 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20"
      >
        <div className="max-w-[900px]">
          {/* Headline uses a single clamp() instead of a vw-size-per-breakpoint
              ladder. Plain vw sizing grows continuously right up to a
              breakpoint, then jumps to a different vw multiplier — on this
              headline that meant text ballooning to ~83px just before 640px
              wide, then visibly shrinking to ~58px past it. clamp(min, fluid,
              max) scales smoothly the whole way and still tops out at the
              original 6.4rem on desktop. */}
          <motion.h1
            variants={fade}
            className="font-display text-[clamp(3rem,10vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-paper"
          >
            Made for the walk.
          </motion.h1>

          <motion.p
            variants={fade}
            className="mt-5 max-w-[46ch] font-body text-base leading-relaxed text-paper/80 sm:text-lg"
          >
            This season&rsquo;s collection, shot exactly as it&rsquo;s worn - in
            motion, on the runway.
          </motion.p>

          <motion.div variants={fade} className="mt-8">
            
              <a href="#collection"
              className="group inline-flex items-center rounded-btn bg-coral px-6 py-3 font-ui text-sm font-medium text-ink transition-[background-color,box-shadow] duration-300 hover:bg-coral/90 hover:shadow-[0_0_0_6px_var(--color-coral-glow)]"
            >
              Browse the collection
            </a>
          </motion.div>

          {/* EDITORIAL CAPTION — on mobile this now flows normally right
              under the CTA instead of floating at bottom-right. Two
              independently bottom-anchored absolute blocks (this one at
              bottom-6/right-5, the CTA pinned via the parent's bottom-0 +
              pb-12) land close enough on a ~375px-wide screen that their
              boxes overlap — the button's right edge and the caption's
              left edge cross by roughly 85px. From sm: up there's enough
              width for both corners to coexist, so it switches back to
              the original absolute bottom-right placement there.
              font-voice per the theme's own comment: "for pull quotes and
              editorial captions only." */}
          <motion.p
            variants={fade}
            className="mt-6 max-w-[220px] text-left font-voice text-sm italic leading-snug text-paper/65 sm:absolute sm:bottom-8 sm:right-8 sm:mt-0 sm:max-w-[260px] sm:text-right sm:text-base"
          >
            Filmed backstage at the spring runway show.
          </motion.p>
        </div>
      </motion.div>

      {/* SCROLL CUE — small, functional wayfinding toward the product
          grid below, not decoration. Respects reduced-motion. */}
      {/* {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="block h-8 w-px bg-paper/40" />
        </motion.div>
      )} */}
    </section>
  );
}