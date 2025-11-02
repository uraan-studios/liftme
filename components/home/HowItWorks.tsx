"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Settings, Calendar, Headphones } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Selection",
    description: "Browse our lift models and find the perfect fit for your home and needs.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: 2,
    title: "Customization",
    description: "Work with our experts to customize your lift for your specific requirements.",
    icon: Settings,
    color: "bg-green-100 text-green-600",
  },
  {
    step: 3,
    title: "Installation",
    description: "Our certified technicians handle professional installation with minimal disruption.",
    icon: Calendar,
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: 4,
    title: "Support",
    description: "Enjoy ongoing support, maintenance, and our comprehensive warranty coverage.",
    icon: Headphones,
    color: "bg-orange-100 text-orange-600",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="lift-text-gradient">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From consultation to ongoing support, we make the process simple and stress-free for you and your family.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
              aria-label={`Step ${step.step}: ${step.title}`}
            >
              <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-md bg-white relative">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-105`}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal (desktop) */}
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2" />
                  {/* Vertical (mobile/tablet) */}
                  <div className="block lg:hidden absolute -bottom-6 left-1/2 w-0.5 h-12 border-l-2 border-dashed border-gray-300 transform -translate-x-1/2" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
