"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Video } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Project = {
  id: number
  name: string
  category: string
  description: string
  client?: string
  location?: string
  date?: string
  image: string
  gallery: string[]
}

const projects: Project[] = [
  // Platform Lift Projects
  {
    id: 1,
    name: "Bamba Eye Hospital – Platform Lift",
    category: "Platform Lift",
    description: "Installation of a platform lift at Bamba Eye Hospital.",
    client: "Bamba Eye Hospital",
    location: "Karachi, Pakistan",
   
    image: "/images/platform-lift/bambaeye-hsp1.jpg",
    gallery: ["/images/platform-lift/bambaeye-hsp1.jpg","/images/platform-lift/bambaeye-hsp2.jpg", "/videos/placeholder.mp4"],
  },
  {
    id: 2,
    name: "COM3 Towers Karachi – Platform Lift",
    category: "Platform Lift",
    description: "Platform lift installation at COM3 Towers Karachi.",
    client: "COM3 Towers Management",
    location: "Karachi, Pakistan",
   
    image: "/images/platform-lift/com3lift-p1.jpg",
    gallery: ["/images/platform-lift/com3lift-p1.jpg","/images/platform-lift/com3lift-p2.jpg","/images/platform-lift/com3lift-p3.jpg","/videos/placeholder.mp4"],
  },
  {
    id: 3,
    name: "Pak Navy Com Home Installation – Platform Lift",
    category: "Platform Lift",
    description: "Platform lift installed at Pak Navy Com Home.",
    client: "Pak Navy Com",
    location: "Pakistan",
    
    image: "/images/platform-lift/image.jpg",
    gallery: [ "/images/platform-lift/Platform - PN Com.mp4"],
  },
  {
    id: 4,
    name: "Personal Home Installation – Platform Lift",
    category: "Platform Lift",
    description: "Platform lift installed at a private residence.",
    client: "Private Home Owner",
    location: "Pakistan",
    date: "TBD",
    image: "/images/platform-lift/pf-home1.jpg",
    gallery: [ "/images/platform-lift/pf-home2.jpg", "/images/platform-lift/pf-home3.jpg","/videos/placeholder.mp4"],
  },

  // Capsule Cabin Lift Projects
  {
    id: 5,
    name: "KASB Developers – Capsule Cabin Lift",
    category: "Capsule Cabin Lift",
    description: "Capsule cabin lift installed at KASB developers project.",
    client: "KASB Developers",
    location: "Pakistan",
    date: "TBD",
    image: "/images/capsule-home-lift/p1.jpg",
    gallery: ["/images/capsule-home-lift/p2.jpg", "/images/capsule-home-lift/p3.jpg","/images/capsule-home-lift/capsule.mp4"],
  },
  {
    id: 6,
    name: "Home Installation Malir Karachi – Capsule Cabin Lift",
    category: "Capsule Cabin Lift",
    description: "Capsule cabin lift installed at a private home in Malir.",
    client: "Private Home Owner",
    location: "Malir, Karachi",
    date: "TBD",
    image: "/images/capsule-home-lift/capsule1.jpg",
    gallery: ["/images/capsule-home-lift/capsule2.jpg","/images/capsule-home-lift/capsule3.jpg","/images/capsule-home-lift/capsule4.jpg","/images/capsule-home-lift/malir-capsule.mp4"],
  },

  // Flat Top Lift Projects
  {
    id: 7,
    name: "Home Installation Malir Karachi – Flat Top Lift",
    category: "Flat Top Lift",
    description: "Flat top lift installed at a private home in Malir.",
    client: "Private Home Owner",
    location: "Malir, Karachi",
    date: "TBD",
    image: "/images/flat-top-lift/flattop1.jpg",
    gallery: ["/images/flat-top-lift/flattop2.jpg","/images/flat-top-lift/flattop3.jpg" ],
  },

  // Half Cabin Lift Projects
  {
    id: 8,
    name: "Bath Island Karachi – Half Cabin Lift",
    category: "Half Cabin Lift",
    description: "Half cabin lift installed at a property in Bath Island.",
    client: "Private Owner",
    location: "Bath Island, Karachi",
    date: "TBD",
    image: "/images/half-cabin-lift/half1.jpg",
    gallery: ["/images/half-cabin-lift/half2.jpg",],
  },

  // Panoramic Lift Projects
  {
    id: 9,
    name: "DHA Karachi Home Installation – Panoramic Lift",
    category: "Panoramic Lift",
    description: "Panoramic lift installed at a private home in DHA Karachi.",
    client: "Private Home Owner",
    location: "DHA, Karachi",
    date: "TBD",
    image: "/images/panoramic-home-lift/p1.jpg",
    gallery: ["/images/panoramic-home-lift/p2.jpg",
        "/images/panoramic-home-lift/p3.jpg",
        "/images/panoramic-home-lift/p4.jpg",
        "/images/panoramic-home-lift/p5.jpg",
         "/images/panoramic-home-lift/panoramic-cabin.mp4"],
  },
  {
    id: 10,
    name: "Ex Foreign Ambassador Njamuddin Sheikh – Panoramic Lift",
    category: "Panoramic Lift",
    description: "Panoramic lift installed at Ex Foreign Ambassador Njamuddin Sheikh’s residence.",
    client: "Ex Foreign Ambassador Njamuddin Sheikh",
    location: "Pakistan",
    date: "TBD",
    image: "/images/panoramic-home-lift/ex1.jpg",
    gallery: ["/images/panoramic-home-lift/ex2.jpg",
        "/images/panoramic-home-lift/ex3.jpg",
        "/images/panoramic-home-lift/ex4.jpg",]
  },
  {
    id: 11,
    name: "Former Hockey Captain Islahuddin – Panoramic Lift",
    category: "Panoramic Lift",
    description: "Panoramic lift installed at the home of Former Hockey Captain Islahuddin.",
    client: "Islahuddin Siddique",
    location: "Pakistan",
    date: "TBD",
    image: "/images/panoramic-home-lift/f1.jpg",
    gallery: ["/images/panoramic-home-lift/f3.jpg",
        "/images/panoramic-home-lift/f2.jpg",
         "/images/panoramic-home-lift/former-homelift.mp4",]
  },
  {
    id: 12,
    name: "Home Lift at Khayaban e Rahat – Panoramic Lift",
    category: "Panoramic Lift",
    description: "Panoramic lift installed at a home in Khayaban e Rahat.",
    client: "Private Home Owner",
    location: "Pakistan",
    
    image: "/images/panoramic-home-lift/image.jpg",
    gallery: ["/images/Khayabane-rahat.mp4"],
  },
  {
    id: 13,
    name: "Old Age Home Nazimabad Karachi – Panoramic Lift",
    category: "Panoramic Lift",
    description: "Panoramic lift installed at Old Age Home in Nazimabad.",
    client: "Old Age Home Nazimabad",
    location: "Karachi, Pakistan",
  
    image: "/images/panoramic-home-lift/image.jpg",
    gallery: ["/images/panoramic-home-lift/oldhome.mp4"],
  },
  {
    id: 14,
    name: "Rangers Hut, Sands Pit Peach – Panoramic Lift",
    category: "Panoramic Lift",
    description: "Panoramic lift installed at Rangers Hut, Sands Pit Peach.",
    client: "Rangers",
    location: "Pakistan",
  
    image: "/images/panoramic-home-lift/rangers1.jpg",
    gallery: ["/images/panoramic-home-lift/rangers1.jpg",
        "/images/panoramic-home-lift/rangers2.jpg",
        "/images/panoramic-home-lift/rangers3.jpg",
        "/images/panoramic-home-lift/rangers.mp4",
    ]
  },

  // Spaceless Lift Projects
  {
    id: 15,
    name: "Home Installation at Baloch Colony Karachi – Spaceless Lift",
    category: "Spaceless Lift",
    description: "Spaceless lift installed at a private home in Baloch Colony.",
    client: "Private Home Owner",
    location: "Baloch Colony, Karachi",
   
    image: "/images/space-less-lift/Spaceless.jpg",
    gallery: ["/images/space-less-lift/Spaceless Lift.mp4"],
  },
]

export default function ProjectsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const currentIndex = projects.findIndex((p) => p.id === selectedProjectId)
  const project = projects[currentIndex] || null

  const handleNext = () => {
    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % projects.length
      setSelectedProjectId(projects[nextIndex].id)
    }
  }

  const handlePrev = () => {
    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length
      setSelectedProjectId(projects[prevIndex].id)
    }
  }

  return (
    <section className="pt-24 pb-20 px-6 lg:px-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Explore our completed lift installations across residential, commercial, and public spaces.
      </p>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedProjectId(p.id)}
          >
            <Image
              src={p.image}
              alt={p.name}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 ">
              <h2 className="text-lg font-semibold mb-2">{p.name}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{p.description}</p>
              <Button className="w-full">
                View Project
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {project && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <Button variant="ghost" size="icon" onClick={() => setSelectedProjectId(null)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Gallery */}
              <div className="relative">
                <Carousel className="w-full rounded-none">
                  <CarouselContent>
                    {project.gallery.map((media, idx) => (
                      <CarouselItem
                        key={idx}
                        className="min-w-full bg-black flex justify-center items-center"
                      >
                        {media.endsWith(".mp4") ? (
                          <video
                            src={media}
                            controls
                            className="w-full h-[450px] object-contain"
                          />
                        ) : (
                          <Image
                            src={media}
                            alt={`${project.name} media ${idx + 1}`}
                            width={1200}
                            height={700}
                            className="w-full h-[450px] object-cover"
                          />
                        )}
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* Details */}
              <div className="p-6 space-y-3">
                <p className="text-gray-600">{project.description}</p>
                <div className="text-sm text-gray-500 space-y-1">
                  {project.client && (
                    <p>
                      <strong>Client:</strong> {project.client}
                    </p>
                  )}
                  {project.location && (
                    <p>
                      <strong>Location:</strong> {project.location}
                    </p>
                  )}
                  {project.date && (
                    <p>
                      <strong>Date:</strong> {project.date}
                    </p>
                  )}
                  <p>
                    <strong>Category:</strong> {project.category}
                  </p>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <Button variant="secondary" size="icon" onClick={handlePrev}>
                  <ChevronLeft />
                </Button>
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <Button variant="secondary" size="icon" onClick={handleNext}>
                  <ChevronRight />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
