"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FlipWords } from "./FlipWords"

export function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Pattern + Animated Blobs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:18px_18px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-400 rounded-full blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0.3, x: 0, y: 0 }}
          animate={{ opacity: 0.5, x: 30, y: -20 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-indigo-400 rounded-full blur-[160px]"
        />
        <motion.div
          initial={{ opacity: 0.25, scale: 1 }}
          animate={{ opacity: 0.4, scale: 1.1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 left-1/2 w-[20rem] h-[20rem] bg-cyan-400 rounded-full blur-[130px]"
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
            >
              ✨ Redefining accessibility at home
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Your <span className="lift-text-gradient">home</span>,{" "}
              <br className="hidden sm:block" />
              <FlipWords
                words={["without limits.", "made accessible.", "reimagined."]}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Premium home lifts designed for aging, mobility-limited, and
              differently-abled individuals. Experience independence with
              elegance, backed by local expertise and care.
            </motion.p>

            {/* ✅ Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Redirects to /contact page */}
              <Link href="/contact">
                <Button
                  size="lg"
                  className="lift-gradient text-white hover:opacity-90 group"
                >
                  Get Your Quote Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* Watch Video Button (placeholder) */}
              <Button size="lg" variant="outline" className="group bg-transparent">
                <Play className="mr-2 w-4 h-4" />
                Watch Our Story
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                1-Year Warranty
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                Local Support
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                Fast Installation
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/liftme-cover.jpg"
                alt="Elderly person using LiftMe home lift with family support"
                width={1200}
                height={800}
                className="object-cover w-full h-[600px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
