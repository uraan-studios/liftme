
export type Product = {
  id: number
  name: string
  category: string
  description: string
  capacity: string
  speed: string
  power: string
  space: string
  price: string
  tags: string[]
  image: string
  gallery?: string[]
  videos?: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Panoramic Home Lift",
    category: "Panoramic",
    description:
      "Elevate your home's look while providing seamless access with our stunning Panoramic Home Lift.",
    capacity: "250-300 kg",
    power: "2.2 kW",
    speed: "customizable",
    space: "customizable",
    price: "From PKR 1.5 million",
    tags: ["Personalized", "Quiet", "Closed Guide Rails"],
    image: "/images/panoramic-home-lift/image.jpg",
    gallery: [
      "/images/panoramic-home-lift/panoramic-home-lift-1.jpg",
      "/images/panoramic-home-lift/panoramic-home-lift-2.jpg",
      "/images/panoramic-home-lift/paoaramic-home-lift-3.jpg",
    ],
    videos: [
      "/images/panoramic-home-lift/Khyabane-rahat.mp4",
      "/images/panoramic-home-lift/Panoramic-cabin.mp4",
      "/images/panoramic-home-lift/former-homelift.mp4",
      "/images/panoramic-home-lift/oldhome.mp4",
      "/images/panoramic-home-lift/rangers.mp4",
    ]
  },
  {
    id: 2,
    name: "Capsule Home Lift",
    category: "Capsule",
    description:
      "Crafted from durable stainless steel, our Capsule Lift is a stylish and weatherproof solution.",
    capacity: "250-300 kg",
    power: "2.2 kW",
    speed: "customizable",
    space: "customizable",
    price: "From PKR 1.2 million",
    tags: ["Personalized", "Outdoor", "Stainless Steel Cabin"],
    image: "/images/capsule-home-lift/image.jpg",
    gallery: [
      "/images/capsule-home-lift/capsule-home-lift-1.jpg",
      "/images/capsule-home-lift/capsule-home-lift-2.jpg",
      "/images/capsule-home-lift/capsule-home-lift-3.jpg",
      
    ],
    videos: [
      "/images/capsule-home-lift/capsule.mp4",
      "/images/capsule-home-lift/malir-capsule.mp4",
    ]
  },
  {
    id: 3,
    name: "Flat Top Lift",
    category: "Cabin Lift",
    description:
      "a modern, minimalistic cabin design with a seamless flat ceiling and concealed lighting",
    capacity: "450-750 kg (6 to 10 persons)",
    power: "3.0 kW",
    speed: "0.5 - 1.0 m/s",
    space: "customizable",
    price: "From PKR 1.4 million",
    tags: ["Luxury", "Modern Design", "Indoor"],
    image:"/images/flat-top-lift/image.jpg"

,
    gallery: [
      "/images/flat-top-lift/flat-top-1.jpg",
      "/images/flat-top-lift/flat-top-2.jpg",
      
    ],
  },
  {
  id: 4,
  name: "Half Cabin Lift",
  category: "Cabin Lift",
  description:
    "The Half Cabin Lift combines modern design with practicality — ideal for spaces that need a balance between openness and enclosure. With its half-glass body and stainless steel lower panels, it ensures durability, visibility, and a smooth, silent ride.",
  capacity: "4 to 6 persons",
  power: "2.2 kW",
  speed: "0.5 - 1.0 m/s",
  space: "customizable",
  price: "From PKR 1.3 million",
  tags: ["Half Glass Cabin", "Compact Design", "Energy Efficient"],
  image: "/images/half-cabin-lift/image.jpg",
  gallery: [
    "/images/half-cabin-lift/half-cabin-1.jpg",
    "/images/half-cabin-lift/half-cabin-2.jpg",
    
  ],
},
{
  id: 5,
  name: "Space Less Lift",
  category: "Cabin Lift",
  description:
    "The Space Less Lift is designed for homes and buildings where space is limited. It operates without a traditional machine room or deep pit, providing a sleek and efficient lifting solution without compromising safety or style. Ideal for compact homes, offices, and villas.",
  capacity: "2 to 4 persons",
  power: "1.5 - 2.2 kW",
  speed: "0.3 - 0.5 m/s",
  space: "No machine room or deep pit required",
  price: "From PKR 1.1 million",
  tags: ["Compact Design", "Machine-Room-Less", "Energy Efficient"],
  image: "/images/space-less-lift/image.jpg",
  gallery: [
    "/images/space-less-lift/space-less-lift-1.jpg",
    "/images/space-less-lift/space-less-lift-2.jpg",
   
  ],
  videos: [
    "/images/space-less-lift/Spaceless Lift.mp4"
  ]
},
{
  id: 6,
  name: "Platform Lift",
  category: "Vertical Transport",
  description:
    "A compact and reliable vertical platform lift designed to provide safe and smooth access between levels. Ideal for homes, offices, and public buildings where space is limited.",
  capacity: "300 kg",
  speed: "0.15 m/s",
  power: "2.2 kW",
  space: "Compact footprint suitable for indoor or outdoor installation",
  price: "₨ 1,250,000",
  tags: ["Accessibility", "Compact", "Indoor", "Outdoor", "Hydraulic"],
  image: "/images/platform-lift/image.jpg",
  gallery: [
    "/images/platform-lift/platform-lift-1.jpg",
    "/images/platform-lift/platform-lift-2.jpg",
    "/images/platform-lift/platform-lift-3.jpg"
  ],
  videos: [
    "/images/platform-lift/Platform - PN Com.mp4"
  ]
}
]
