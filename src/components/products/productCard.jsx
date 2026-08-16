"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiEye } from "react-icons/fi";
import { SHOP_CONFIG } from "../../data/shop";

const panelVariants = {
  rest: { opacity: 0, y: 24 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.35, duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: (i % 6) * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ProductCard({ product, index, onQuickView }) {
  const [hovered, setHovered] = useState(false);
  const category = product.category.toLowerCase();

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`cat-${category} group relative aspect-[3/4] overflow-hidden rounded-card bg-ink/5`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        style={{ opacity: hovered ? 0 : 1 }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.images[1]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      <div className="absolute left-4 top-4 flex gap-2">
        <span className="cat-tag">{product.category}</span>
        {product.bestseller && (
          <span className="cat-tag !bg-ink">Bestseller</span>
        )}
      </div>

      <button
        type="button"
        onClick={() => onQuickView(product)}
        aria-label={`Quick view ${product.name}`}
        className="glass-pill absolute right-4 top-4 !bg-paper/85 !text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <FiEye aria-hidden="true" />
      </button>

      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

      <motion.div
        variants={panelVariants}
        initial="rest"
        animate={hovered ? "hover" : "rest"}
        className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5"
      >
        <div>
          <p className="font-display text-base font-bold text-paper">
            {product.name}
          </p>
          <p className="font-ui text-sm text-paper/80">
            {SHOP_CONFIG.currency}
            {product.price}
          </p>
        </div>

        <a
          href={buildWhatsAppLink(product)}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-1 rounded-btn bg-paper/90 px-3 py-2 font-ui text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-paper"
        >
          Buy now
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </motion.div>
    </motion.article>
  );
}
