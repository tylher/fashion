"use client";

import { motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";

export default function SearchBar({ value, onChange }) {
  return (
    <motion.div
      layout
      className="flex items-center gap-2 rounded-btn border border-ink/15 bg-paper px-3 py-2.5 md:w-64"
    >
      <FiSearch className="shrink-0 text-ink/50" aria-hidden="true" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products"
        aria-label="Search products"
        className="w-full bg-transparent font-body text-sm text-ink placeholder:text-ink/40 focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="text-ink/40 transition-colors hover:text-ink"
        >
          <FiX />
        </button>
      )}
    </motion.div>
  );
}
