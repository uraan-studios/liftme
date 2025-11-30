
export type Project = {
  id: number
  name: string
  category: string
  description: string
  client?: string
  location?: string
  date?: string
  image: string
  gallery: string[]
  videos?: string[]
}

export const projects: Project[] = [
  // Platform Lift Projects
  {
    id: 1,
    name: "Bamba Eye Hospital – Platform Lift",
    category: "Platform Lift",
    description: "Installation of a platform lift at Bamba Eye Hospital.",
    client: "Bamba Eye Hospital",
    location: "Karachi, Pakistan",
    image: "/images/platform-lift/bambaeye-hsp1.jpg",
    gallery: ["/images/platform-lift/bambaeye-hsp1.jpg","/images/platform-lift/bambaeye-hsp2.jpg"],
    videos: ["/videos/placeholder.mp4"]
  },
  {
    id: 2,
    name: "COM3 Towers Karachi – Platform Lift",
    category: "Platform Lift",
    description: "Platform lift installation at COM3 Towers Karachi.",
    client: "COM3 Towers Management",
    location: "Karachi, Pakistan",
    image: "/images/platform-lift/com3lift-p1.jpg",
    gallery: ["/images/platform-lift/com3lift-p1.jpg","/images/platform-lift/com3lift-p2.jpg","/images/platform-lift/com3lift-p3.jpg"],
    videos: ["/videos/placeholder.mp4"]
  },
  {
    id: 3,
    name: "Pak Navy Com Home Installation – Platform Lift",
    category: "Platform Lift",
    description: "Platform lift installed at Pak Navy Com Home.",
    client: "Pak Navy Com",
    location: "Pakistan",
    image: "/images/platform-lift/image.jpg",
    gallery: [],
    videos: ["/images/platform-lift/Platform - PN Com.mp4"]
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
    gallery: [ "/images/platform-lift/pf-home2.jpg", "/images/platform-lift/pf-home3.jpg"],
    videos: ["/videos/placeholder.mp4"]
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
    gallery: ["/images/capsule-home-lift/p2.jpg", "/images/capsule-home-lift/p3.jpg"],
    videos: ["/images/capsule-home-lift/capsule.mp4"]
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
    gallery: ["/images/capsule-home-lift/capsule2.jpg","/images/capsule-home-lift/capsule3.jpg","/images/capsule-home-lift/capsule4.jpg"],
    videos: ["/images/capsule-home-lift/malir-capsule.mp4"]
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
    videos: []
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
    videos: []
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
        "/images/panoramic-home-lift/p5.jpg"],
    videos: ["/images/panoramic-home-lift/panoramic-cabin.mp4"]
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
        "/images/panoramic-home-lift/ex4.jpg",],
    videos: []
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
        "/images/panoramic-home-lift/f2.jpg"],
    videos: ["/images/panoramic-home-lift/former-homelift.mp4"]
  },
  {
    id: 12,
    name: "Home Lift at Khayaban e Rahat – Panoramic Lift",
    category: "Panoramic Lift",
    description: "Panoramic lift installed at a home in Khayaban e Rahat.",
    client: "Private Home Owner",
    location: "Pakistan",
    image: "/images/panoramic-home-lift/image.jpg",
    gallery: [],
    videos: ["/images/Khayabane-rahat.mp4"]
  },
  {
    id: 13,
    name: "Old Age Home Nazimabad Karachi – Panoramic Lift",
    category: "Panoramic Lift",
    description: "Panoramic lift installed at Old Age Home in Nazimabad.",
    client: "Old Age Home Nazimabad",
    location: "Karachi, Pakistan",
    image: "/images/panoramic-home-lift/image.jpg",
    gallery: [],
    videos: ["/images/panoramic-home-lift/oldhome.mp4"]
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
        "/images/panoramic-home-lift/rangers3.jpg"],
    videos: ["/images/panoramic-home-lift/rangers.mp4"]
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
    gallery: [],
    videos: ["/images/space-less-lift/Spaceless Lift.mp4"]
  },
]
