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

export function ProductGallery({ images }: { images: string[] }) {
  const [index, setIndex] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)

  if (!images || images.length === 0) return null

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
          {images.map((src, i) => (
            <CarouselItem key={i} className="flex justify-center min-w-full">
              <div
                className="relative cursor-zoom-in"
                onClick={() => {
                  setIndex(i)
                  setIsOpen(true)
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  width={800}
                  height={500}
                  className="rounded-2xl object-cover w-full h-[420px] transition-transform duration-500 hover:scale-[1.03] animate-fadeIn shadow-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition" />
        <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition" />
      </Carousel>

      {/* Fullscreen image view */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl w-full">
            <Image
              src={images[index]}
              alt="Full size image"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl object-contain"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 rounded-full p-2"
            >
              ✕
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
