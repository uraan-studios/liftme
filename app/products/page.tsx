"use client"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Grid, List } from "lucide-react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"



const filters = ["All", "Panoramic", "Capsule", "Wheelchair", "Outdoor", "Premium", "Commercial"]

export default function ProductsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts =
    selectedFilter === "All"
      ? products
      : products.filter((product) => product.category === selectedFilter)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="lift-text-gradient">Product Range</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect lift solution for your home. From compact designs to premium installations.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto sm:pb-0 sm:flex-wrap no-scrollbar mask-gradient-right sm:mask-none">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "lift-gradient text-white flex-shrink-0" : "flex-shrink-0"}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="md:flex items-center gap-2 hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}>
           {filteredProducts.map((product) => (
  <Link key={product.id} href={`/products/${product.id}`}>
    <ProductCard product={product} viewMode={viewMode} />
  </Link>
))}

          </div>
        </div>
      </section>
    </div>
  )
}
