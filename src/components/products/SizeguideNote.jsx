"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { SIZE_GUIDE } from "../../data/shop";

export default function SizeGuideNote() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 rounded-card border border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-ui text-sm font-semibold text-ink">
          Size guide &amp; fit note
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-ink/10 px-5 py-4">
              <p className="font-body text-sm leading-relaxed text-ink/70">
                {SIZE_GUIDE.note}
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[380px] border-collapse text-left">
                  <thead>
                    <tr className="font-ui text-[11px] uppercase tracking-wide text-ink/50">
                      <th className="py-2 pr-4">Size</th>
                      <th className="py-2 pr-4">Bust</th>
                      <th className="py-2 pr-4">Waist</th>
                      <th className="py-2">Hip</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZE_GUIDE.chart.map((row) => (
                      <tr
                        key={row.size}
                        className="border-t border-ink/10 font-body text-sm text-ink"
                      >
                        <td className="py-2 pr-4 font-semibold">{row.size}</td>
                        <td className="py-2 pr-4 text-ink/70">{row.bust}</td>
                        <td className="py-2 pr-4 text-ink/70">{row.waist}</td>
                        <td className="py-2 text-ink/70">{row.hip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
