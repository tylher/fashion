"use client";

import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="mt-14 flex items-center justify-center gap-2"
      aria-label="Product pagination"
    >
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 disabled:opacity-30"
      >
        <FiChevronLeft aria-hidden="true" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          aria-current={p === page ? "page" : undefined}
          className="relative flex h-9 w-9 items-center justify-center rounded-full font-ui text-sm"
        >
          {p === page && (
            <motion.span
              layoutId="paginationDot"
              className="absolute inset-0 rounded-full bg-ink"
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            />
          )}
          <span
            className={`relative ${p === page ? "text-paper" : "text-ink/60"}`}
          >
            {p}
          </span>
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5 disabled:opacity-30"
      >
        <FiChevronRight aria-hidden="true" />
      </button>
    </nav>
  );
}
