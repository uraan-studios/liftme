"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    location: "Lahore",
    rating: 5,
    text: "LiftMe transformed our home for my elderly father. The installation was quick, and the lift is whisper-quiet. Our family finally has peace of mind.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Fatima Khan",
    location: "Karachi",
    rating: 5,
    text: "After my accident, I thought I'd never feel independent again. The wheelchair-accessible lift gave me back my freedom. Exceptional service from start to finish.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Dr. Malik Raza",
    location: "Islamabad",
    rating: 5,
    text: "As an architect, I appreciate quality engineering. LiftMe's compact design fit perfectly in our narrow staircase without compromising our home's aesthetics.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Sana Qureshi",
    location: "Faisalabad",
    rating: 5,
    text: "The team was incredibly patient with my mother's concerns. They explained everything clearly and the ongoing support has been outstanding.",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialSlider() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stories of <span className="lift-text-gradient">Freedom</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real families sharing how LiftMe has transformed their homes and lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="w-6 h-6 text-gray-300 mb-2" />
                    <p className="text-gray-700 text-sm leading-relaxed italic">{testimonial.text}</p>
                  </div>
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
          <p className="text-gray-600 mb-6">Join our growing family of satisfied customers</p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              500+ Happy Families
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              4.9/5 Average Rating
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              99% Satisfaction Rate
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
