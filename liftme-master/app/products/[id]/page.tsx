"use client"

import { products } from "@/lib/products"
import Image from "next/image"
import { ProductGallery } from "@/components/product-gallery"

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number(params.id))

  if (!product) {
    return (
      <div className="p-8 text-center text-red-600">
        Product not found.
      </div>
    )
  }

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Product Title */}
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
        {product.name}
      </h1>

      {/* Responsive Grid: Gallery left, Details right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Product Image or Gallery */}
        <div className="flex justify-center">
          {product.gallery && product.gallery.length > 0 ? (
            <ProductGallery images={product.gallery} />
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-auto object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            <DetailRow label="Category" value={product.category} />
            <DetailRow label="Description" value={product.description} />
            <DetailRow label="Capacity" value={product.capacity} />
            <DetailRow label="Speed" value={product.speed} />
            <DetailRow label="Power" value={product.power} />
            <DetailRow label="Space" value={product.space} />
            <DetailRow label="Price" value={product.price} />
          </div>
        </div>
      </div>

      {/* Tags Section */}
      {product.tags && product.tags.length > 0 && (
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Features</h2>
          <ul className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <li
                key={tag}
                className="bg-gradient-to-r from-green-100 to-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// Reusable row component
function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between px-6 py-4 hover:bg-gray-50 transition">
      <span className="font-semibold text-gray-700">{label}</span>
      <span className="text-gray-600 max-w-xs text-right">{value}</span>
    </div>
  )
}
