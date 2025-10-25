"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Wrench, MapPin, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "1-Year Warranty",
    description: "Comprehensive coverage for complete peace of mind",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Users,
    title: "Local Support",
    description: "Pakistan-based team available when you need us",
    color: "from-green-500 to-green-700",
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description: "Quick setup with minimal disruption to your home",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: MapPin,
    title: "Small Footprint",
    description: "Designed to fit in the tightest spaces",
    color: "from-orange-500 to-orange-700",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Built to last with the finest materials",
    color: "from-red-500 to-red-700",
  },
  {
    icon: Wrench,
    title: "Expert Service",
    description: "Certified technicians and ongoing maintenance",
    color: "from-indigo-500 to-indigo-700",
  },
]

export function WhyLiftMe() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">
      {/* Decorative Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1.1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-green-200 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="lift-text-gradient">LiftMe</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just about lifts — we're about restoring independence, dignity, and freedom in your own home.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="transform-gpu"
            >
              <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-lg hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div
                    className={`relative w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.color}`}
                  >
                    <div className="absolute inset-0 rounded-full animate-pulse bg-white/20" />
                    <feature.icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-3">Ready to Transform Your Home?</h3>
          <p className="text-blue-50/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of families who have already discovered the freedom and independence that comes with a LiftMe
            home lift.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Redirect to Contact Page */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
              >
                Get Your Free Quote
              </motion.button>
            </Link>

            {/* WhatsApp Redirect */}
            <motion.a
              href="https://wa.me/923111060070?text=Hello!%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20a%20lift%20installation."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black/20 text-white rounded-full font-semibold border border-white/30 hover:bg-black/30 transition inline-block"
            >
              Schedule Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
