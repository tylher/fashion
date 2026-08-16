"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const cardVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProductCard({ product, index }) {
  const { name, price, image, category } = product;

  return (
    <motion.article
      className={`cat-${category} group relative aspect-[3/4] overflow-hidden rounded-card`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <span className="cat-tag absolute left-4 top-4">{category}</span>

      {/* Bottom third of the image is where the text sits — gradient + blur so it stays legible over any photo */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/75 via-ink/35 to-transparent backdrop-blur-[3px]" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <p className="font-display text-base font-bold text-paper">{name}</p>
          <p className="font-ui text-sm text-paper/80">{price}</p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 rounded-btn bg-paper/90 px-3 py-2 font-ui text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-paper"
        >
          Shop now
          <FiArrowUpRight aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  );
}
