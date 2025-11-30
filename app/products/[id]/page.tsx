"use client"

import { products } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"
import { ProductGallery } from "@/components/product-gallery"
import { ArrowLeft, Check, Zap, Maximize, Gauge, Weight, ChevronRight } from "lucide-react"
import { motion } from "motion/react"

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number(params.id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50/50 py-20">
      {/* Breadcrumb / Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/products" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Product Info (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-2xl font-bold text-primary">
                  {product.price}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  (Estimated)
                </span>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </motion.div>

            {/* Key Specs Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <SpecCard icon={Weight} label="Capacity" value={product.capacity} />
              <SpecCard icon={Gauge} label="Speed" value={product.speed} />
              <SpecCard icon={Zap} label="Power" value={product.power} />
              <SpecCard icon={Maximize} label="Space" value={product.space} />
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-6 border-t border-gray-200"
            >
              <button className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center group">
                Get a Free Quote
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Professional installation & lifetime support included.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Gallery & Features */}
          <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
            {/* Gallery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {(product.gallery && product.gallery.length > 0) || (product.videos && product.videos.length > 0) ? (
                <ProductGallery images={product.gallery || []} videos={product.videos || []} />
              ) : (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </motion.div>

            {/* Features List */}
            {product.tags && product.tags.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-1 h-6 bg-primary rounded-full mr-3"></span>
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {product.tags.map((tag, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 group-hover:bg-green-200 transition-colors">
                        <Check className="w-3.5 h-3.5 text-green-700" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function SpecCard({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 mb-2">
        <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
          {label}
        </span>
      </div>
      <p className="text-sm font-bold text-gray-900 line-clamp-2" title={value}>
        {value}
      </p>
    </div>
  )
}
