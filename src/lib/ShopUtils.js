import { PRICE_RANGES } from "../data/shop";

export function filterAndSortProducts(
  products,
  { search, category, size, color, priceRange, sort },
) {
  const range = PRICE_RANGES.find((r) => r.value === priceRange);

  let result = products.filter((p) => {
    const matchesSearch = search
      ? p.name.toLowerCase().includes(search.trim().toLowerCase())
      : true;
    const matchesCategory =
      category && category !== "All" ? p.category === category : true;
    const matchesSize = size ? p.sizes.includes(size) : true;
    const matchesColor = color ? p.colors.some((c) => c.name === color) : true;
    const matchesPrice =
      range && range.value !== "any"
        ? (range.min === undefined || p.price >= range.min) &&
          (range.max === undefined || p.price <= range.max)
        : true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSize &&
      matchesColor &&
      matchesPrice
    );
  });

  if (sort === "price-asc")
    result = [...result].sort((a, b) => a.price - b.price);
  if (sort === "price-desc")
    result = [...result].sort((a, b) => b.price - a.price);

  return result;
}

export function paginate(items, page, pageSize) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    page: safePage,
    totalPages,
    totalItems: items.length,
  };
}
