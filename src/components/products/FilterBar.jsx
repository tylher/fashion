"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import {
  CATEGORIES,
  SIZES,
  COLORS,
  PRICE_RANGES,
  SORT_OPTIONS,
} from "../../data/shop";

function Dropdown({ id, label, activeLabel, open, onToggle, children }) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => onToggle(open ? null : id)}
        className={`pill flex items-center gap-1.5 ${activeLabel ? "pill--active" : ""}`}
      >
        {activeLabel || label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown className="text-sm" aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-0 top-[calc(100%+8px)] z-30 min-w-[200px] rounded-card border border-ink/10 bg-paper p-3 shadow-xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FilterBar({ filters, onChange }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const close = () => setOpenDropdown(null);

  const activePriceLabel = PRICE_RANGES.find(
    (r) => r.value === filters.priceRange,
  )?.label;
  const activeSortLabel = SORT_OPTIONS.find(
    (s) => s.value === filters.sort,
  )?.label;

  return (
    <div
      className="flex flex-wrap items-center gap-3 border-b border-ink/10 pb-6"
      onMouseLeave={close}
    >
      {/* Category — sliding active pill */}
      <div className="flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onChange({ ...filters, category: cat })}
            className="relative rounded-full px-4 py-2 font-ui text-xs font-semibold uppercase tracking-wide"
          >
            {filters.category === cat && (
              <motion.span
                layoutId="categoryPill"
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
            <span
              className={`relative ${filters.category === cat ? "text-paper" : "text-ink/60"}`}
            >
              {cat}
            </span>
          </button>
        ))}
      </div>

      <div className="h-6 w-px bg-ink/10" />

      {/* Size */}
      <Dropdown
        id="size"
        label="Size"
        activeLabel={filters.size}
        open={openDropdown === "size"}
        onToggle={setOpenDropdown}
      >
        <div className="grid grid-cols-3 gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => {
                onChange({
                  ...filters,
                  size: filters.size === size ? "" : size,
                });
                close();
              }}
              className={`pill text-[11px] ${filters.size === size ? "pill--active" : ""}`}
            >
              {size}
            </button>
          ))}
        </div>
      </Dropdown>

      {/* Color */}
      <Dropdown
        id="color"
        label="Color"
        activeLabel={filters.color}
        open={openDropdown === "color"}
        onToggle={setOpenDropdown}
      >
        <div className="flex flex-col gap-1">
          {COLORS.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => {
                onChange({
                  ...filters,
                  color: filters.color === c.name ? "" : c.name,
                });
                close();
              }}
              className="flex items-center gap-2.5 rounded-btn px-2 py-1.5 text-left transition-colors hover:bg-ink/5"
            >
              <span
                className="h-4 w-4 rounded-full border border-ink/15"
                style={{ backgroundColor: c.hex }}
                aria-hidden="true"
              />
              <span className="font-ui text-xs text-ink">{c.name}</span>
              {filters.color === c.name && (
                <FiCheck className="ml-auto text-xs text-ink" />
              )}
            </button>
          ))}
        </div>
      </Dropdown>

      {/* Price */}
      <Dropdown
        id="price"
        label="Price"
        activeLabel={filters.priceRange !== "any" ? activePriceLabel : ""}
        open={openDropdown === "price"}
        onToggle={setOpenDropdown}
      >
        <div className="flex flex-col gap-1">
          {PRICE_RANGES.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => {
                onChange({ ...filters, priceRange: r.value });
                close();
              }}
              className="flex items-center justify-between rounded-btn px-2 py-1.5 text-left font-ui text-xs text-ink transition-colors hover:bg-ink/5"
            >
              {r.label}
              {filters.priceRange === r.value && (
                <FiCheck className="text-xs" />
              )}
            </button>
          ))}
        </div>
      </Dropdown>

      <div className="ml-auto">
        {/* Sort */}
        <Dropdown
          id="sort"
          label="Sort"
          activeLabel={activeSortLabel !== "Newest" ? activeSortLabel : ""}
          open={openDropdown === "sort"}
          onToggle={setOpenDropdown}
        >
          <div className="flex flex-col gap-1">
            {SORT_OPTIONS.map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => {
                  onChange({ ...filters, sort: s.value });
                  close();
                }}
                className="flex items-center justify-between rounded-btn px-2 py-1.5 text-left font-ui text-xs text-ink transition-colors hover:bg-ink/5"
              >
                {s.label}
                {filters.sort === s.value && <FiCheck className="text-xs" />}
              </button>
            ))}
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
