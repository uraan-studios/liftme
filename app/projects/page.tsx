"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Grid, List } from "lucide-react"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"

const filters = ["All", "Platform Lift", "Capsule Cabin Lift", "Flat Top Lift", "Half Cabin Lift", "Panoramic Lift", "Spaceless Lift"]

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Our <span className="lift-text-gradient">Completed Projects</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful lift installations across residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* Filters & View Toggle */}
      <section className="py-8 bg-white border-b sticky top-16 z-10 shadow-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto md:pb-0 md:flex-wrap no-scrollbar mask-gradient-right md:mask-none justify-start md:justify-start">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "lift-gradient text-white flex-shrink-0" : "flex-shrink-0"}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-gray-900 text-white hover:bg-gray-800" : ""}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "bg-gray-900 text-white hover:bg-gray-800" : ""}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/projects/${project.id}`}>
                  <ProjectCard project={project} viewMode={viewMode} />
                </Link>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
