"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import {
  CATEGORIES,
  SIZES,
  COLORS,
  PRICE_RANGES,
  SORT_OPTIONS,
} from "../../data/shop";

function Dropdown({ id, label, activeLabel, open, onToggle, align = "left", children }) {
  const rootRef = useRef(null);

  // Click-outside close. onMouseLeave on the parent row only ever worked
  // with a mouse — there's no "leave" event on touch, so on a phone a
  // dropdown opened by tap had no way to close except picking an option.
  // This listens for any pointer down outside this dropdown's own DOM
  // node and closes it, covering touch and mouse alike.
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        onToggle(null);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open, onToggle]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => onToggle(open ? null : id)}
        className={`pill flex items-center gap-1.5 whitespace-nowrap ${activeLabel ? "pill--active" : ""}`}
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
            // align="right" flips the panel to hang off the button's right
            // edge instead of its left edge — needed for the Sort dropdown,
            // which sits flush against the right side of the bar (ml-auto)
            // and would otherwise render partly or fully off the right
            // edge of the screen on mobile.
            className={`absolute top-[calc(100%+8px)] z-30 min-w-[200px] max-w-[calc(100vw-2.5rem)] rounded-card border border-ink/10 bg-paper p-3 shadow-xl ${
              align === "right" ? "right-0" : "left-0"
            }`}
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
    <div className="flex flex-wrap items-center gap-y-3 gap-x-3 border-b border-ink/10 pb-6">
      {/* Category — sliding active pill */}
      <div className="flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onChange({ ...filters, category: cat })}
            className="relative whitespace-nowrap rounded-full px-4 py-2.5 font-ui text-xs font-semibold uppercase tracking-wide"
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

      {/* Divider hidden below sm. A 1px-tall vertical rule reads fine
          sitting mid-row on a wide screen, but once the bar wraps to
          multiple lines it can land at the very start or end of a line
          on its own, which just looks like a stray mark rather than a
          separator between two groups. Not worth fighting — it only
          existed to break up a single long line in the first place. */}
      <div className="hidden h-6 w-px sm:block bg-ink/10" />

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
              className="flex items-center gap-2.5 rounded-btn px-2 py-2 text-left transition-colors hover:bg-ink/5"
            >
              <span
                className="h-4 w-4 shrink-0 rounded-full border border-ink/15"
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
              className="flex items-center justify-between rounded-btn px-2 py-2 text-left font-ui text-xs text-ink transition-colors hover:bg-ink/5"
            >
              {r.label}
              {filters.priceRange === r.value && (
                <FiCheck className="text-xs" />
              )}
            </button>
          ))}
        </div>
      </Dropdown>

      <div className="">
        {/* Sort — panel aligns to the button's right edge (align="right")
            since this dropdown sits flush against the right side of the
            bar; see the comment on Dropdown above. */}
        <Dropdown
          id="sort"
          label="Sort"
          activeLabel={activeSortLabel !== "Newest" ? activeSortLabel : ""}
          open={openDropdown === "sort"}
          onToggle={setOpenDropdown}
          align="right"
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
                className="flex items-center justify-between rounded-btn px-2 py-2 text-left font-ui text-xs text-ink transition-colors hover:bg-ink/5"
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