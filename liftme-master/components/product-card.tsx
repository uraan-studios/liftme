"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Product } from "@/lib/products"

export function ProductCard({
  product,
  viewMode = "grid",
}: {
  product: Product
  viewMode?: "grid" | "list"
}) {
  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden ${
        viewMode === "list" ? "flex" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${viewMode === "list" ? "w-1/3" : ""}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
            viewMode === "list" ? "h-full" : "w-full h-64"
          }`}
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-gray-900">{product.price}</Badge>
        </div>
      </div>

      <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
        <div className="flex flex-wrap gap-2 mb-3">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>

        
        <p className="text-gray-600 mb-4 truncate">
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
          <div>
            <span className="font-medium">Capacity:</span> {product.capacity}
          </div>
          <div>
            <span className="font-medium">Speed:</span> {product.speed}
          </div>
          <div>
            <span className="font-medium">Power:</span> {product.power}
          </div>
          <div>
            <span className="font-medium">Space:</span> {product.space}
          </div>
        </div>

        <div className="flex gap-3">
          <Link href={`/products/${product.id}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
            >
              Learn More
            </Button>
          </Link>
          <Button className="flex-1 lift-gradient text-white">
            Get Quote
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
