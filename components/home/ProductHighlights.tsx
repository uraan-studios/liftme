"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Home, ShipWheelIcon as Wheelchair, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Panoramic Lift",
    description: "Elegant glass cabin lifts offering a 360° view with modern aesthetics.",
    capacity: "500kg",
    installTime: "4-5 days",
    features: ["Panoramic View", "Luxury Finish", "LED Lighting", "Smooth Ride"],
    icon: Zap,
    image: "/images/panoramic-home-lift/image.jpg",
  },
  {
    id: 2,
    name: "Capsule Cabin Lift",
    description: "Stylish and space-efficient capsule design for homes and commercial spaces.",
    capacity: "400kg",
    installTime: "3-4 days",
    features: ["Capsule Design", "Energy Efficient", "Quiet Operation", "Modern Look"],
    icon: Building,
    image: "/images/capsule-home-lift/image.jpg",
  },
  {
    id: 3,
    name: "Platform Lift",
    description: "Ideal for wheelchairs and small spaces — designed for accessibility and convenience.",
    capacity: "350kg",
    installTime: "2-3 days",
    features: ["Wheelchair Friendly", "Safe & Secure", "Low Maintenance", "Compact Design"],
    icon: Wheelchair,
    image: "/images/platform-lift/image.jpg",
  },
  {
    id: 4,
    name: "Flat Top Lift",
    description: "Perfect blend of functionality and design for low-ceiling installations.",
    capacity: "300kg",
    installTime: "2-3 days",
    features: ["Flat Top Design", "Smooth Motion", "Durable", "Space Saving"],
    icon: Home,
    image: "/images/flat-top-lift/image.jpg",
  },
]

export function ProductHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect <span className="lift-text-gradient">Lift Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From compact installations to premium designs, we have the perfect lift to match your home and mobility
            needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full flex flex-col">
                <Link href={`/products/${product.id}`} className="relative overflow-hidden block">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <product.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </Link>

                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/products/${product.id}`} className="block">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{product.name}</h3>
                  </Link>

                  <p className="text-gray-600 mb-4 text-sm flex-1">{product.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>Capacity: {product.capacity}</span>
                    <span>Install: {product.installTime}</span>
                  </div>

                  <Link href={`/products/${product.id}`} className="block mt-auto">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button size="lg" className="lift-gradient text-white hover:opacity-90">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
