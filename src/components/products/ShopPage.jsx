"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SHOP_PRODUCTS } from "../../data/shop";
import { SHOP_CONFIG } from "../../data/shop";
import { filterAndSortProducts, paginate } from "../../lib/ShopUtils";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import SizeGuideNote from "./SizeguideNote";
import BestsellerBanner from "./BestSellerBanner";
import ProductCard from "./productCard";
import Pagination from "./Pagination";
import ProductModal from "./ProductModal";



const DEFAULT_FILTERS = {
  category: "All",
  size: "",
  color: "",
  priceRange: "any",
  sort: "newest",
  bestsellersOnly: false,
};

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const gridRef = useRef(null);

  const filtered = useMemo(() => {
    const base = filterAndSortProducts(SHOP_PRODUCTS, { search, ...filters });
    return filters.bestsellersOnly ? base.filter((p) => p.bestseller) : base;
  }, [search, filters]);

  const { items, totalPages } = useMemo(
    () => paginate(filtered, page, SHOP_CONFIG.pageSize),
    [filtered, page],
  );

  const updateFilters = (next) => {
    setFilters(next);
    setPage(1);
  };

  const updateSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleViewBestsellers = () => {
    setFilters({ ...DEFAULT_FILTERS, bestsellersOnly: true });
    setPage(1);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-paper px-6 py-16 md:px-16 md:py-24">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="eyebrow">Shop the collection</span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ink md:text-5xl">
            Eleven pieces, all in one place.
          </h1>
        </div>
        <SearchBar value={search} onChange={updateSearch} />
      </div>

      <FilterBar filters={filters} onChange={updateFilters} />
      <SizeGuideNote />

      <BestsellerBanner onViewBestsellers={handleViewBestsellers} />

      <div ref={gridRef}>
        {items.length === 0 ? (
          <p className="py-20 text-center font-body text-sm text-ink/50">
            No pieces match those filters. Try clearing one.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>
        )}

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
