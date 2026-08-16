export const SHOP_PRODUCTS = [
  // ============ Outerwear ============
  {
    id: "wool-coat",
    name: "The Wool Coat",
    price: 580,
    category: "Outerwear",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Ink", hex: "#1A1330" },
      { name: "Stone", hex: "#DED4C4" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A double-breasted wool coat cut for layering. Structured shoulders, a fluid drape below the waist.",
    fit: "True to size. Sized up one for extra room to layer a knit underneath.",
  },
  {
    id: "tailored-blazer",
    name: "Tailored Blazer",
    price: 420,
    category: "Outerwear",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Ink", hex: "#1A1330" }],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Single-breasted, fully lined, with a nipped waist and a slightly dropped shoulder.",
    fit: "Runs true to size. Model is 5'9\" wearing a size S.",
  },
  {
    id: "trench-overcoat",
    name: "Trench Overcoat",
    price: 540,
    category: "Outerwear",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Stone", hex: "#DED4C4" },
      { name: "Ink", hex: "#1A1330" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A relaxed trench in water-resistant cotton twill, with a removable belt.",
    fit: "Oversized fit — size down for a closer silhouette.",
  },
  {
    id: "puffer-jacket",
    name: "Puffer Jacket",
    price: 495,
    category: "Outerwear",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Ink", hex: "#1A1330" },
      { name: "Coral", hex: "#FF6B4A" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Lightweight yet insulated with recycled down. The perfect transitional layer.",
    fit: "True to size, with a relaxed fit through the body.",
  },
  {
    id: "parka",
    name: "Utility Parka",
    price: 620,
    category: "Outerwear",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Stone", hex: "#DED4C4" }],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Oversized parka with multiple pockets and a detachable faux-fur hood.",
    fit: "Generous fit — size down for a neater look.",
  },

  // ============ Dresses ============
  {
    id: "silk-column-dress",
    name: "Silk Column Dress",
    price: 390,
    category: "Dresses",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Ink", hex: "#1A1330" },
      { name: "Coral", hex: "#FF6B4A" },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A bias-cut silk column dress that skims rather than clings. Adjustable straps.",
    fit: "True to size. Falls mid-calf on a 5'7\" frame.",
  },
  {
    id: "satin-slip-dress",
    name: "Satin Slip Dress",
    price: 310,
    category: "Dresses",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Gold", hex: "#F4B740" }],
    sizes: ["XS", "S", "M"],
    description:
      "Cut on the bias for movement, finished with a French seam throughout.",
    fit: "Runs small — we recommend sizing up if you're between sizes.",
  },
  {
    id: "wrap-midi-dress",
    name: "Wrap Midi Dress",
    price: 340,
    category: "Dresses",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Ink", hex: "#1A1330" },
      { name: "Stone", hex: "#DED4C4" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A wrap silhouette with an interior tie for adjustable fit through the waist.",
    fit: "True to size, adjustable via the wrap tie.",
  },
  {
    id: "shirt-dress",
    name: "Classic Shirt Dress",
    price: 280,
    category: "Dresses",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Stone", hex: "#DED4C4" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Belted shirt dress in crisp organic cotton, with a button-down front and side slits.",
    fit: "Relaxed fit – take your usual size.",
  },
  {
    id: "mini-skirt-dress",
    name: "Wool Mini Dress",
    price: 250,
    category: "Dresses",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Coral", hex: "#FF6B4A" }],
    sizes: ["XS", "S", "M"],
    description:
      "A structured mini dress in wool blend, with a mock neck and patch pockets.",
    fit: "True to size – designed for a tailored fit.",
  },

  // ============ Tops ============
  {
    id: "silk-blouse",
    name: "Silk Blouse",
    price: 210,
    category: "Tops",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Ink", hex: "#1A1330" },
      { name: "Stone", hex: "#DED4C4" },
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A classic silk blouse with a relaxed collar and mother-of-pearl buttons.",
    fit: "True to size – wears well tucked or untucked.",
  },
  {
    id: "linen-shirt",
    name: "Linen Button-Up",
    price: 180,
    category: "Tops",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Stone", hex: "#DED4C4" },
      { name: "Coral", hex: "#FF6B4A" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Lightweight European linen, garment-washed for a soft hand. Relaxed fit.",
    fit: "Oversized – size down for a cleaner line.",
  },
  {
    id: "cashmere-turtleneck",
    name: "Cashmere Turtleneck",
    price: 260,
    category: "Tops",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Ink", hex: "#1A1330" },
      { name: "Stone", hex: "#DED4C4" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "100% cashmere, fully fashioned for a clean seam line at the shoulder.",
    fit: "True to size, with a relaxed roll-neck collar.",
  },
  {
    id: "cotton-tee",
    name: "Cotton Crew Tee",
    price: 95,
    category: "Tops",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Ink", hex: "#1A1330" },
      { name: "Stone", hex: "#DED4C4" },
      { name: "Coral", hex: "#FF6B4A" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Heavyweight organic cotton, cut with a boxy silhouette. A timeless staple.",
    fit: "True to size – boxy, cropped fit.",
  },

  // ============ Bottoms ============
  {
    id: "wide-leg-trousers",
    name: "Wide-Leg Trousers",
    price: 350,
    category: "Bottoms",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Ink", hex: "#1A1330" }],
    sizes: ["XS", "S", "M", "L"],
    description:
      "High-rise, fluid trousers with pressed creases and side adjusters.",
    fit: "True to size – the wide leg adds volume.",
  },
  {
    id: "tailored-trousers",
    name: "Tailored Wool Trousers",
    price: 390,
    category: "Bottoms",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Stone", hex: "#DED4C4" },
      { name: "Ink", hex: "#1A1330" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Classic tailored trousers in Italian wool, with a clean front and back welt pockets.",
    fit: "True to size – straight leg, sits at the natural waist.",
  },
  {
    id: "midi-skirt",
    name: "Leather Midi Skirt",
    price: 330,
    category: "Bottoms",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Ink", hex: "#1A1330" }],
    sizes: ["S", "M", "L"],
    description:
      "Buttery-soft leather midi skirt with a front slit and elasticated back waist.",
    fit: "True to size – comfortable stretch in the back.",
  },
  {
    id: "cargo-pants",
    name: "Cargo Pants",
    price: 290,
    category: "Bottoms",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Stone", hex: "#DED4C4" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Relaxed cargo pants with oversized pockets and a drawstring waist.",
    fit: "True to size – roomy through the thigh and calf.",
  },

  // ============ Knitwear ============
  {
    id: "merino-cardigan",
    name: "Merino Cardigan",
    price: 220,
    category: "Knitwear",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Coral", hex: "#FF6B4A" }],
    sizes: ["S", "M", "L"],
    description:
      "A lightweight merino cardigan with horn buttons and a ribbed hem.",
    fit: "True to size. Layers well over the silk column dress.",
  },
  {
    id: "crewneck-sweater",
    name: "Crewneck Cashmere Sweater",
    price: 275,
    category: "Knitwear",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Ink", hex: "#1A1330" },
      { name: "Stone", hex: "#DED4C4" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Classic crewneck in pure cashmere, with ribbed cuffs and hem.",
    fit: "True to size – comfortable, everyday fit.",
  },
  {
    id: "knit-vest",
    name: "Wool Knit Vest",
    price: 195,
    category: "Knitwear",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Coral", hex: "#FF6B4A" }],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Sleeveless wool-blend vest with a deep V-neck and ribbed trim.",
    fit: "True to size – layer over a button-up or tee.",
  },

  // ============ Accessories ============
  {
    id: "leather-belt",
    name: "Leather Belt",
    price: 90,
    category: "Accessories",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Ink", hex: "#1A1330" }],
    sizes: ["S/M", "L/XL"],
    description:
      "Full-grain leather with a brushed brass buckle. Ages beautifully.",
    fit: "Two sizes cover most waists — check the size guide for a measurement range.",
  },
  {
    id: "structured-tote",
    name: "Structured Tote",
    price: 260,
    category: "Accessories",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Ink", hex: "#1A1330" },
      { name: "Coral", hex: "#FF6B4A" },
    ],
    sizes: ["One size"],
    description:
      "A structured tote in vegetable-tanned leather with an interior zip pocket.",
    fit: 'One size. Fits a 13" laptop with room to spare.',
  },
  {
    id: "gold-hoop-earrings",
    name: "Gold Hoop Earrings",
    price: 75,
    category: "Accessories",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Gold", hex: "#F4B740" }],
    sizes: ["One size"],
    description: "14k gold-plated hoops, lightweight enough for everyday wear.",
    fit: "One size. 3.5cm diameter.",
  },
  {
    id: "silk-scarf",
    name: "Silk Scarf",
    price: 120,
    category: "Accessories",
    bestseller: true,
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Coral", hex: "#FF6B4A" },
      { name: "Stone", hex: "#DED4C4" },
    ],
    sizes: ["One size"],
    description:
      "Hand-rolled silk scarf with an abstract floral print. Can be worn around the neck or as a headscarf.",
    fit: "One size – 90cm x 90cm.",
  },
  {
    id: "sunglasses",
    name: "Acetate Sunglasses",
    price: 150,
    category: "Accessories",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Ink", hex: "#1A1330" }],
    sizes: ["One size"],
    description:
      "Handmade acetate frames with UV-protective lenses. A classic wayfarer silhouette.",
    fit: "One size – fits most face shapes.",
  },
  {
    id: "leather-wallet",
    name: "Slim Leather Wallet",
    price: 85,
    category: "Accessories",
    bestseller: false,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    colors: [{ name: "Stone", hex: "#DED4C4" }],
    sizes: ["One size"],
    description:
      "Minimalist cardholder in vegetable-tanned leather, with 4 card slots.",
    fit: "One size – 10cm x 7cm.",
  },
];
export const CATEGORIES = [
  "All",
  "Outerwear",
  "Dresses",
  "Accessories",
  "Knitwear",
];

export const SIZES = ["XS", "S", "M", "L", "XL", "One size", "S/M", "L/XL"];

export const COLORS = [
  { name: "Ink", hex: "#1A1330" },
  { name: "Stone", hex: "#DED4C4" },
  { name: "Coral", hex: "#FF6B4A" },
  { name: "Gold", hex: "#F4B740" },
];

export const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
];

export const PRICE_RANGES = [
  { label: "Any price", value: "any" },
  { label: "Under $200", value: "under-200", max: 200 },
  { label: "$200 – $400", value: "200-400", min: 200, max: 400 },
  { label: "$400+", value: "400-plus", min: 400 },
];

export const SIZE_GUIDE = {
  note: "Fit runs true to size across the collection unless noted on a product page. When between sizes, size up for outerwear and knitwear, size down for silk pieces.",
  chart: [
    { size: "XS", bust: '31–32"', waist: '24–25"', hip: '34–35"' },
    { size: "S", bust: '33–34"', waist: '26–27"', hip: '36–37"' },
    { size: "M", bust: '35–36"', waist: '28–29"', hip: '38–39"' },
    { size: "L", bust: '37–39"', waist: '30–32"', hip: '40–42"' },
    { size: "XL", bust: '40–42"', waist: '33–35"', hip: '43–45"' },
  ],
};

export const SHOP_CONFIG = {
  // Digits only, country code first, no + or leading zeros — e.g. Nigeria
  // number 080... becomes 234...
  whatsappNumber: "2348012345678",
  currency: "$",
  pageSize: 6,
};
