"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = 800
      setIsVisible(scrolled > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="relative">
            {/* Main CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="lift-gradient text-white shadow-2xl rounded-full px-6 py-3 font-semibold"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                Get Quote
              </Button>
            </motion.div>

            {/* Expanded Options */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 min-w-[200px]"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">Contact Us</h3>
                    <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => window.open("tel:+923010600070")}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => window.open("https://wa.me/923010600070")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>

                    <Button
                      className="w-full lift-gradient text-white"
                      onClick={() => {
                        // Navigate to quote form
                        window.location.href = "/contact"
                      }}
                    >
                      Get Quote Form
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
