"use client"

import * as React from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectGalleryProps {
  images: string[]
  videos?: string[]
}

export function ProjectGallery({ images, videos = [] }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)

  // Combine images and videos into a single slides array
  const slides = [
    ...images.map(src => ({ type: 'image' as const, src })),
    ...videos.map(src => ({ type: 'video' as const, src }))
  ]

  if (slides.length === 0) return null

  const selectedSlide = slides[selectedIndex]

  return (
    <div className="space-y-4">
      {/* Main View - 9:16 Aspect Ratio */}
      <div 
        className="relative w-full max-w-md mx-auto aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
        onClick={() => setIsOpen(true)}
      >
        {selectedSlide.type === 'image' ? (
          <Image
            src={selectedSlide.src}
            alt={`Gallery item ${selectedIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative w-full h-full">
            <video
              src={selectedSlide.src}
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
              autoPlay
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-4 px-2 snap-x justify-center">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={cn(
              "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all snap-center",
              selectedIndex === i 
                ? "border-primary ring-2 ring-primary/20 scale-105" 
                : "border-transparent opacity-70 hover:opacity-100 hover:scale-105"
            )}
          >
            {slide.type === 'image' ? (
              <Image
                src={slide.src}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="relative w-full h-full bg-black">
                <video
                  src={slide.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Fullscreen view */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {selectedSlide.type === 'image' ? (
              <Image
                src={selectedSlide.src}
                alt="Full size view"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] rounded-xl object-contain"
              />
            ) : (
              <video
                src={selectedSlide.src}
                className="max-w-full max-h-[90vh] rounded-xl"
                controls
                autoPlay
              />
            )}
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              ✕
            </button>

            {/* Navigation in fullscreen */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex((prev) => (prev - 1 + slides.length) % slides.length)
              }}
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex((prev) => (prev + 1) % slides.length)
              }}
            >
              →
            </button>
          </div>
        </div>
      )}
      
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
