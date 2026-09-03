"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FOOTER } from "../data/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

// TODO: replace with real contact details
const PHONE_NUMBER = "+2348057872464"; // digits used in tel: link
const WHATSAPP_NUMBER = "2348057872464"; // no + or leading zeros, per wa.me format
const WHATSAPP_MESSAGE = "Hi, I'd like to make an enquiry.";

const menuGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const menuLine = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.6 },
  },
};

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !isHome || scrolled || open;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-paper/10 bg-ink/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-6 md:px-16">
        <Link
          href="/"
          className="font-display text-xl font-bold text-paper"
          onClick={() => setOpen(false)}
        >
          {FOOTER.brand}
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-ui text-sm text-paper/80 transition-colors hover:text-paper"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-coral transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}

          {/* Contact icon buttons */}
          <div className="flex items-center gap-3 pl-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="Call us"
              title="Call us"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-coral hover:text-coral"
            >
              <FiPhone className="text-base" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              title="Chat on WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/80 transition-colors hover:border-coral hover:text-coral"
            >
              <FaWhatsapp className="text-base" />
            </a>
          </div>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Call us"
            title="Call us"
            className="flex h-9 w-9 items-center justify-center text-paper"
          >
            <FiPhone className="text-lg" />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            title="Chat on WhatsApp"
            className="flex h-9 w-9 items-center justify-center text-paper"
          >
            <FaWhatsapp className="text-lg" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center text-paper"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[73px] bg-ink md:hidden w-full h-fit"
          >
            <motion.nav
              variants={menuGroup}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2 px-8 py-10"
            >
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <motion.div key={link.href} variants={menuLine}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block font-display text-4xl font-bold transition-colors ${
                        active ? "text-coral" : "text-paper"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
