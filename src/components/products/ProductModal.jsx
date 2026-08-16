"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiX, FiArrowRight, FiCheck } from "react-icons/fi";
import { SHOP_CONFIG } from "../../data/shop";
import { buildWhatsAppLink } from "../../lib/whatsapp";

export default function ProductModal({ product, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [color, setColor] = useState(product.colors[0]?.name ?? "");

  // Reset selection state whenever a different product opens
  useEffect(() => {
    setActiveImage(0);
    setSize(product.sizes[0] ?? "");
    setColor(product.colors[0]?.name ?? "");
  }, [product]);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        aria-hidden="true"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} details`}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        className="relative z-10 grid max-h-[88vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-panel bg-paper md:grid-cols-2 md:overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-ink shadow-md transition-transform hover:scale-105"
        >
          <FiX aria-hidden="true" />
        </button>

        {/* Gallery */}
        <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[activeImage]}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {product.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-2 w-6 rounded-full transition-colors ${
                  activeImage === i ? "bg-paper" : "bg-paper/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-5 p-6 md:p-8">
          <div>
            <span className="cat-tag">{product.category}</span>
            <h3 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
              {product.name}
            </h3>
            <p className="mt-1 font-ui text-lg text-ink/70">
              {SHOP_CONFIG.currency}
              {product.price}
            </p>
          </div>

          <p className="font-body text-sm leading-relaxed text-ink/70">
            {product.description}
          </p>

          {/* Color */}
          <div>
            <p className="font-ui text-xs uppercase tracking-wide text-ink/50">
              Color
            </p>
            <div className="mt-2 flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColor(c.name)}
                  aria-label={c.name}
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border border-ink/15"
                  style={{ backgroundColor: c.hex }}
                >
                  {color === c.name && (
                    <FiCheck
                      className="text-sm"
                      style={{
                        color: c.hex === "#DED4C4" ? "#1A1330" : "#FFF8F0",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <p className="font-ui text-xs uppercase tracking-wide text-ink/50">
              Size
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`pill ${size === s ? "pill--active" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <p className="rounded-btn bg-ink/5 px-4 py-3 font-body text-xs leading-relaxed text-ink/60">
            {product.fit}
          </p>

          <a
            href={buildWhatsAppLink(product, { size, color })}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-auto justify-center"
          >
            Buy now on WhatsApp
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
