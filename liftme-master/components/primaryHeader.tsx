"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" }, // ✅ Added Projects page link
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/liftme-logo.png"
              alt="LiftMe Logo"
              width={100}
              height={60}
              className="w-auto h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="tel:+923111060070">
              <Button variant="ghost" size="lg" className="text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                +92 311 1060 070
              </Button>
            </Link>

            <Link href="/get-quote" target="_blank">
              <Button className="lift-gradient text-white hover:opacity-90">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href))
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`py-2 font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                  <Link href="tel:+923111060070">
                    <Button variant="outline" className="justify-start bg-transparent w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </Link>

                  <Link
                    href="https://wa.me/923111060070"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="justify-start bg-transparent w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </Link>

                  <Link href="/get-quote" target="_blank">
                    <Button className="lift-gradient text-white w-full">
                      Get Your Quote
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
