"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Play } from "lucide-react"

interface ProductGalleryProps {
  images: string[]
  videos?: string[]
}

export function ProductGallery({ images, videos = [] }: ProductGalleryProps) {
  const [index, setIndex] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)

  // Combine images and videos into a single slides array
  const slides = [
    ...images.map(src => ({ type: 'image' as const, src })),
    ...videos.map(src => ({ type: 'video' as const, src }))
  ]

  if (slides.length === 0) return null

  return (
    <div className="relative group">
      {/* Carousel */}
      <Carousel className="w-full max-w-3xl mx-auto overflow-hidden">
        <CarouselContent
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 0.2s ease",
          }}
        >
          {slides.map((slide, i) => (
            <CarouselItem key={i} className="flex justify-center min-w-full">
              <div
                className="relative cursor-zoom-in w-full"
                onClick={() => {
                  setIndex(i)
                  setIsOpen(true)
                }}
              >
                {slide.type === 'image' ? (
                  <Image
                    src={slide.src}
                    alt={`Gallery item ${i + 1}`}
                    width={800}
                    height={500}
                    className="rounded-2xl object-cover w-full h-[420px] transition-transform duration-500 hover:scale-[1.03] animate-fadeIn shadow-lg"
                  />
                ) : (
                  <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-black group-video">
                     <video
                      src={slide.src}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
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
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious 
          className="left-2 opacity-0 group-hover:opacity-100 transition z-10" 
          onClick={(e) => {
            e.stopPropagation()
            setIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }}
        />
        <CarouselNext 
          className="right-2 opacity-0 group-hover:opacity-100 transition z-10" 
          onClick={(e) => {
            e.stopPropagation()
            setIndex((prev) => (prev + 1) % slides.length)
          }}
        />
      </Carousel>

      {/* Fullscreen view */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {slides[index].type === 'image' ? (
              <Image
                src={slides[index].src}
                alt="Full size view"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] rounded-xl object-contain"
              />
            ) : (
              <video
                src={slides[index].src}
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
                setIndex((prev) => (prev - 1 + slides.length) % slides.length)
              }}
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition"
              onClick={(e) => {
                e.stopPropagation()
                setIndex((prev) => (prev + 1) % slides.length)
              }}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Inline animation CSS */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
      `}</style>
    </div>
  )
}
