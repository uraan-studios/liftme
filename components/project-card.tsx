"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/lib/projects"

export function ProjectCard({
  project,
  viewMode = "grid",
}: {
  project: Project
  viewMode?: "grid" | "list"
}) {
  return (
    <Card 
      className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full ${
        viewMode === "list" ? "flex flex-row" : "flex flex-col"
      }`}
    >
      <div 
        className={`relative overflow-hidden ${
          viewMode === "list" ? "w-1/3 h-auto" : "w-full h-64"
        }`}
      >
        <Image
          src={project.image}
          alt={project.name}
          width={600}
          height={400}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-gray-900">{project.category}</Badge>
        </div>
      </div>

      <CardContent className={`p-6 flex flex-col flex-1 ${viewMode === "list" ? "justify-between" : ""}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{project.name}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        <div className="space-y-2 mb-6 text-sm text-gray-500">
          {project.location && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              {project.location}
            </div>
          )}
          {project.client && (
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-primary" />
              {project.client}
            </div>
          )}
        </div>

        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button className="w-full lift-gradient text-white group-hover:opacity-90 transition-opacity">
            View Project Details
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
