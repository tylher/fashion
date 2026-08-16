import { FiInstagram, FiTwitter, FiMail } from "react-icons/fi";

export const FOOTER = {
  brand: "Maison Veil",
  tagline: "Cut in Lagos. Worn everywhere.",
  columns: [
    {
      title: "Shop",
      links: [
        { label: "New arrivals", href: "/shop" },
        { label: "Outerwear", href: "/shop/outerwear" },
        { label: "Dresses", href: "/shop/dresses" },
        { label: "Accessories", href: "/shop/accessories" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "The atelier", href: "/about" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Press", href: "/press" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
        { label: "Size guide", href: "/size-guide" },
      ],
    },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com", icon: FiInstagram },
    { label: "Twitter", href: "https://twitter.com", icon: FiTwitter },
    { label: "Email", href: "mailto:hello@maisonveil.com", icon: FiMail },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  copyright: `© ${new Date().getFullYear()} Maison Veil. All rights reserved.`,
};
