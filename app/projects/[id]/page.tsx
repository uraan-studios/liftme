"use client"

import { projects } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectCard } from "@/components/project-card"
import { ArrowLeft, MapPin, User, Calendar, Check, ChevronRight } from "lucide-react"
import { motion } from "motion/react"
import { use } from "react"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params)
  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
          <Link href="/projects" className="text-primary hover:underline">
            Return to Projects
          </Link>
        </div>
      </div>
    )
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50/50 py-20">
      {/* Breadcrumb / Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Project Info (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                {project.name}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Project Details */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
                {project.client && (
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Client</p>
                      <p className="text-gray-900 font-medium">{project.client}</p>
                    </div>
                  </div>
                )}
                
                {project.location && (
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Location</p>
                      <p className="text-gray-900 font-medium">{project.location}</p>
                    </div>
                  </div>
                )}

                {project.date && (
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mr-4">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Completion Date</p>
                      <p className="text-gray-900 font-medium">{project.date}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-6 border-t border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">Interested in a similar solution?</h3>
              <Link href="/contact">
                <button className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center group">
                  Get a Free Quote
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Gallery */}
          <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
            {/* Gallery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {(project.gallery && project.gallery.length > 0) || (project.videos && project.videos.length > 0) ? (
                <ProjectGallery images={project.gallery || []} videos={project.videos || []} />
              ) : (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-24 border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
