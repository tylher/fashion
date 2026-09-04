"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

// Swap in the real business WhatsApp number, digits only, with country
// code and no leading + or 0 (e.g. Nigerian number 080... becomes
// 234803xxxxxxx). wa.me is strict about this format — a leading +, a
// leading 0, spaces, or dashes will silently produce a dead link.
const WHATSAPP_NUMBER = "2348057872464";

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

  // Prefilled message includes the product name and price so the
  // conversation opens with enough context for whoever's on the other
  // end to act on it immediately, without the customer having to type
  // out what they want. encodeURIComponent handles spaces, punctuation,
  // and currency symbols in `price` safely for a URL.
  const whatsappMessage = encodeURIComponent(
    `Hi, I'd like to purchase the ${name} (${price}).`,
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

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

        {/* Was a <button> with no onClick — visually there but did nothing
            on tap/click. An <a> to a wa.me link is the actual mechanism
            for "open WhatsApp with a prefilled message"; there's no click
            handler needed since the browser/OS handles the wa.me scheme
            itself (opens the WhatsApp app on mobile, web.whatsapp.com on
            desktop with no app installed). */}
        
         <a href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 rounded-btn bg-paper/90 px-3 py-2 font-ui text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-paper"
        >
          Shop now
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}