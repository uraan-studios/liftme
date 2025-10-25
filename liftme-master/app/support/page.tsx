"use client"

import type React from "react"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Clock, Wrench, Phone, MessageCircle, Mail, Download, AlertCircle } from "lucide-react"
import { useState } from "react"

const supportOptions = [
  {
    icon: Phone,
    title: "Emergency Support",
    description: "24/7 emergency assistance for urgent lift issues",
    contact: "+92 301 060 070",
    action: "Call Now",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Quick support via WhatsApp for general inquiries",
    contact: "+92 301 060 070",
    action: "Message Us",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Detailed technical support and documentation",
    contact: "support@liftme.pk",
    action: "Send Email",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Wrench,
    title: "Service Request",
    description: "Schedule maintenance or repair services",
    contact: "Book Online",
    action: "Schedule",
    color: "bg-purple-100 text-purple-600",
  },
]

const warrantyFeatures = [
  {
    icon: Shield,
    title: "1-Year Comprehensive Warranty",
    description: "Full coverage for all components and labor",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Round-the-clock support for urgent issues",
  },
  {
    icon: Wrench,
    title: "Free Annual Maintenance",
    description: "Complimentary yearly service and inspection",
  },
]

const faqs = [
  {
    question: "What is covered under the LiftMe warranty?",
    answer:
      "Our comprehensive 1-year warranty covers all mechanical components, electrical systems, installation defects, and labor costs. This includes motors, control panels, safety systems, and any manufacturing defects.",
  },
  {
    question: "How quickly can you respond to emergency calls?",
    answer:
      "We provide 24/7 emergency support with response times of 2-4 hours in major cities (Lahore, Karachi, Islamabad) and 4-8 hours in other covered areas. Our technicians carry common spare parts for immediate repairs.",
  },
  {
    question: "What maintenance is required for my home lift?",
    answer:
      "We recommend quarterly inspections and annual comprehensive maintenance. Our service includes lubrication, safety system checks, electrical testing, and component replacement as needed. The first year of maintenance is included in your warranty.",
  },
  {
    question: "Can I get spare parts for older lift models?",
    answer:
      "Yes, we maintain inventory for all LiftMe models and can source parts for lifts up to 10 years old. For older models, we provide upgrade options to modern components while maintaining compatibility.",
  },
  {
    question: "Do you provide training for lift operation?",
    answer:
      "Our installation includes comprehensive training for all family members on safe operation, emergency procedures, and basic troubleshooting. We also provide user manuals and video guides.",
  },
  {
    question: "What should I do if my lift stops working?",
    answer:
      "First, check the emergency stop button and power supply. If the issue persists, contact our 24/7 support line immediately. Never attempt repairs yourself - our certified technicians will diagnose and fix the problem safely.",
  },
]

export default function SupportPage() {
  const [serviceForm, setServiceForm] = useState({
    name: "",
    email: "",
    phone: "",
    liftModel: "",
    issueType: "",
    description: "",
    urgency: "",
  })

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Service request submitted:", serviceForm)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="lift-text-gradient">Support</span> & Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you every step of the way. From installation to ongoing maintenance, our expert team
              ensures your lift operates safely and reliably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Help <span className="lift-text-gradient">When You Need It</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach our support team for any questions, concerns, or service needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <option.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                    <p className="text-gray-900 font-medium mb-4">{option.contact}</p>
                    <Button className="w-full lift-gradient text-white hover:opacity-90">{option.action}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="lift-text-gradient">Warranty Coverage</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every LiftMe installation comes with our industry-leading warranty package, giving you complete peace of
                mind and protection for your investment.
              </p>

              <div className="space-y-6">
                {warrantyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                  <CardTitle className="text-center text-xl">What's Included in Your Warranty</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700">All mechanical components</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700">Electrical systems and controls</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700">Safety systems and sensors</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700">Installation workmanship</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700">Free parts and labor</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-gray-700">Emergency call-out service</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Button className="w-full lift-gradient text-white hover:opacity-90">
                      <Download className="w-4 h-4 mr-2" />
                      Download Warranty Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Request <span className="lift-text-gradient">Service</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Need maintenance, repair, or have a technical issue? Submit a service request and our team will get back
                to you promptly.
              </p>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <form onSubmit={handleServiceSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={serviceForm.name}
                          onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={serviceForm.email}
                          onChange={(e) => setServiceForm({ ...serviceForm, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={serviceForm.phone}
                          onChange={(e) => setServiceForm({ ...serviceForm, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="liftModel">Lift Model</Label>
                        <Select onValueChange={(value) => setServiceForm({ ...serviceForm, liftModel: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your lift model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="compact">Compact Home Lift</SelectItem>
                            <SelectItem value="wheelchair">Wheelchair Accessible</SelectItem>
                            <SelectItem value="outdoor">Outdoor Platform</SelectItem>
                            <SelectItem value="premium">Premium Glass Lift</SelectItem>
                            <SelectItem value="curved">Curved Stair Lift</SelectItem>
                            <SelectItem value="commercial">Commercial Grade</SelectItem>
                            <SelectItem value="unknown">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="issueType">Issue Type *</Label>
                        <Select onValueChange={(value) => setServiceForm({ ...serviceForm, issueType: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select issue type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency Repair</SelectItem>
                            <SelectItem value="maintenance">Routine Maintenance</SelectItem>
                            <SelectItem value="noise">Unusual Noise</SelectItem>
                            <SelectItem value="electrical">Electrical Issue</SelectItem>
                            <SelectItem value="safety">Safety Concern</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <Select onValueChange={(value) => setServiceForm({ ...serviceForm, urgency: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (Lift not working)</SelectItem>
                            <SelectItem value="urgent">Urgent (Safety concern)</SelectItem>
                            <SelectItem value="normal">Normal (Routine service)</SelectItem>
                            <SelectItem value="low">Low (General inquiry)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Issue Description *</Label>
                      <Textarea
                        id="description"
                        value={serviceForm.description}
                        onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                        placeholder="Please describe the issue in detail..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full lift-gradient text-white hover:opacity-90">
                      Submit Service Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-900">Emergency Situations</h3>
                </div>
                <p className="text-red-800 mb-4">
                  If your lift has stopped working or you have a safety concern, please call our emergency line
                  immediately:
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: +92 301 060 070
                </Button>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Service Response Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Emergency</span>
                      <span className="font-semibold text-red-600">2-4 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Urgent</span>
                      <span className="font-semibold text-orange-600">Same day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Normal</span>
                      <span className="font-semibold text-blue-600">1-2 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Routine</span>
                      <span className="font-semibold text-green-600">3-5 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Before You Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      <span className="text-gray-600">Check if the emergency stop button is pressed</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      <span className="text-gray-600">Verify power supply to the lift</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      <span className="text-gray-600">Note any error codes or unusual sounds</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      <span className="text-gray-600">Have your lift model and serial number ready</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="lift-text-gradient">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our support services, warranty, and maintenance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
