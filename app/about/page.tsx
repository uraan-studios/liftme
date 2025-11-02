"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Clock, Heart, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link" // ✅ Import Link

const timeline = [
  {
    year: "2018",
    title: "Foundation",
    description: "LiftMe was founded with a vision to make homes accessible for everyone in Pakistan.",
  },
  {
    year: "2019",
    title: "First Installation",
    description: "Completed our first home lift installation in Lahore, marking the beginning of our journey.",
  },
  {
    year: "2020",
    title: "Expansion",
    description: "Expanded operations to Karachi and Islamabad, serving families across major cities.",
  },
  {
    year: "2021",
    title: "Innovation",
    description: "Introduced our premium glass lift series and wheelchair-accessible models.",
  },
  {
    year: "2022",
    title: "Recognition",
    description: "Received the Pakistan Accessibility Excellence Award for our contribution to inclusive design.",
  },
  {
    year: "2023",
    title: "Nationwide",
    description: "Achieved nationwide coverage with 500+ successful installations and 24/7 support.",
  },
]

const team = [
  {
    name: "Engr. Muhammad Ali",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    description: "Mechanical engineer with 15+ years in accessibility solutions.",
  },
  {
    name: "Sarah Ahmed",
    role: "Head of Design",
    image: "/placeholder.svg?height=300&width=300",
    description: "Industrial designer focused on inclusive and beautiful home solutions.",
  },
  {
    name: "Tariq Hassan",
    role: "Technical Director",
    image: "/placeholder.svg?height=300&width=300",
    description: "Expert in lift technology and safety systems with international certifications.",
  },
  {
    name: "Dr. Fatima Khan",
    role: "Customer Experience",
    image: "/placeholder.svg?height=300&width=300",
    description: "Healthcare professional ensuring our solutions meet real mobility needs.",
  },
]

const stats = [
  { number: "500+", label: "Happy Families", icon: Users },
  { number: "50+", label: "Cities Served", icon: MapPin },
  { number: "5", label: "Years Experience", icon: Clock },
  { number: "99%", label: "Satisfaction Rate", icon: Heart },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-6 bg-blue-100 text-blue-700">Our Story</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Redefining <span className="lift-text-gradient">Accessibility</span> at Home
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe everyone deserves freedom and independence in their own home. Since 2018, we've been
                transforming lives across Pakistan with premium home lift solutions that combine safety, elegance, and
                reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* ✅ Redirect to products page */}
                <Link href="/products">
                  <Button size="lg" className="lift-gradient text-white hover:opacity-90">
                    Our Products
                  </Button>
                </Link>

                {/* ✅ Redirect to contact page */}
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/about/about-hero.jpg"
                alt="LiftMe team installing home lift"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-2xl font-bold text-gray-900">2018</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our <span className="lift-text-gradient">Mission & Vision</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower aging, mobility-limited, and differently-abled individuals by providing premium home lift
                    solutions that restore independence, dignity, and freedom in their own homes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To become Pakistan's most trusted name in home accessibility solutions, setting the standard for
                    quality, innovation, and customer care.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="lift-text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to Pakistan's leading home lift provider, here's how we've grown while staying true
              to our mission.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <Badge className="bg-blue-100 text-blue-700 mr-3">{item.year}</Badge>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="lift-text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind LiftMe, dedicated to transforming homes and lives across Pakistan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of families who have already discovered the freedom and independence that comes with a
              LiftMe home lift.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            
              <Link href="/contact">
                <Button size="lg" className="lift-gradient text-white hover:opacity-90">
                  Get Your Free Quote
                </Button>
              </Link>

             
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  View Our Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
