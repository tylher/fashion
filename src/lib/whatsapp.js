import { SHOP_CONFIG } from "../data/shop";

export function buildWhatsAppLink(product, { size, color } = {}) {
  const lines = [
    `Hi! I'd like to buy the ${product.name} (${SHOP_CONFIG.currency}${product.price}).`,
  ];

  if (size) lines.push(`Size: ${size}`);
  if (color) lines.push(`Color: ${color}`);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${text}`;
}
