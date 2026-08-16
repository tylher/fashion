"use client";

import ProductCard from "./ProductCard";
import { PRODUCTS } from "../../data/home";

export default function FeaturedCollection() {
  return (
    <section className="bg-paper px-8 py-20 md:px-16 md:py-28">
      <div className="mb-10 flex flex-col gap-3 md:mb-14">
        <span className="eyebrow">Featured collection</span>
        <h2 className="font-display text-3xl font-bold text-ink md:text-5xl">
          Six pieces worth building around.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.name} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
