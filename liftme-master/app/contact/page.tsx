"use client"

import type React from "react"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    liftType: "",
    installLocation: "",
    timeframe: "",
    budget: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
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
              Get Your <span className="lift-text-gradient">Free Quote</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your home? Let's discuss your needs and create a customized solution that brings
              freedom to your family.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Our team is here to help you every step of the way. Choose your preferred way to connect with us.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Call Us</h3>
                        <p className="text-gray-600">+92 301 060 070</p>
                        <p className="text-sm text-gray-500">24/7 Support Available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                        <p className="text-gray-600">+92 301 060 070</p>
                        <p className="text-sm text-gray-500">Quick Response</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">info@liftme.pk</p>
                        <p className="text-sm text-gray-500">Detailed Inquiries</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Location</h3>
                        <p className="text-gray-600">Lahore, Pakistan</p>
                        <p className="text-sm text-gray-500">Serving Nationwide</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900">Emergency Only</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Request Your Free Quote</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours with a personalized quote and
                    consultation.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+92 XXX XXX XXXX"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">City/Location *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Enter your city"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="liftType">Lift Type</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, liftType: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select lift type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="compact">Compact Home Lift</SelectItem>
                            <SelectItem value="wheelchair">Wheelchair Accessible</SelectItem>
                            <SelectItem value="outdoor">Outdoor Platform</SelectItem>
                            <SelectItem value="premium">Premium Glass Lift</SelectItem>
                            <SelectItem value="curved">Curved Stair Lift</SelectItem>
                            <SelectItem value="commercial">Commercial Grade</SelectItem>
                            <SelectItem value="unsure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="installLocation">Installation Location</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, installLocation: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="indoor">Indoor Staircase</SelectItem>
                            <SelectItem value="outdoor">Outdoor Entrance</SelectItem>
                            <SelectItem value="basement">Basement Access</SelectItem>
                            <SelectItem value="multiple">Multiple Floors</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="timeframe">Installation Timeframe</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, timeframe: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeframe" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As Soon As Possible</SelectItem>
                            <SelectItem value="1month">Within 1 Month</SelectItem>
                            <SelectItem value="3months">Within 3 Months</SelectItem>
                            <SelectItem value="6months">Within 6 Months</SelectItem>
                            <SelectItem value="planning">Just Planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="500k-750k">PKR 500k - 750k</SelectItem>
                            <SelectItem value="750k-1m">PKR 750k - 1M</SelectItem>
                            <SelectItem value="1m-1.5m">PKR 1M - 1.5M</SelectItem>
                            <SelectItem value="1.5m+">PKR 1.5M+</SelectItem>
                            <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your specific needs, space constraints, or any questions you have..."
                        rows={4}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-600">
                        I'd like to receive updates about new products and offers
                      </Label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" size="lg" className="flex-1 lift-gradient text-white hover:opacity-90">
                        Get My Free Quote
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        className="flex-1 bg-transparent"
                        onClick={() => window.open("https://wa.me/923010600070")}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Us
                      </Button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Animation Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0, scale: 0.8 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 pointer-events-none"
      >
        <div className="bg-white rounded-2xl p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Quote Submitted!</h3>
          <p className="text-gray-600">We'll get back to you within 24 hours.</p>
        </div>
      </motion.div>
    </div>
  )
}
