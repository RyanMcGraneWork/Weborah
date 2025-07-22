"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
            Discover our latest work and see how we transform ideas into 
            powerful digital solutions that drive business growth.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 px-4">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-electric-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-electric-500/10"
            >
              {/* Project image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                
                {/* Overlay with buttons - appears on hover for desktop */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  {project.liveUrl && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Button
                        className="h-11 px-6 text-base bg-electric-500 text-white hover:bg-electric-600 border-0 shadow-lg hover:shadow-electric-500/25 transition-all duration-300"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  )}
                  {project.githubUrl && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Button
                        className="h-11 px-6 text-base bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Project content */}
              <div className="p-4 sm:p-6 relative">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="inline-block bg-gradient-to-r from-electric-500/20 to-neon-500/20 text-electric-400 text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-electric-500/20">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-electric-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="text-xs bg-slate-700/70 text-slate-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-slate-600/50 hover:border-electric-500/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs bg-gradient-to-r from-electric-500/10 to-neon-500/10 text-electric-400 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-electric-500/20">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Mobile action buttons */}
                <div className="md:hidden flex gap-3 mb-4">
                  {project.liveUrl && (
                    <Button
                      className="flex-1 h-10 px-4 text-sm bg-electric-500 text-white hover:bg-electric-600 border-0 shadow-lg transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      className="flex-1 h-10 px-4 text-sm bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 shadow-lg transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>

                <Button
                  className="text-electric-500 hover:text-electric-400 p-0 h-auto group hover:bg-transparent font-medium text-sm sm:text-base"
                  asChild
                >
                  <Link href={`/projects#${project.id}`} className="flex items-center">
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center px-4"
        >
          <Button
            className="w-full sm:w-auto h-12 px-6 sm:px-8 text-base bg-gradient-to-r from-electric-500 to-electric-600 text-white hover:from-electric-600 hover:to-electric-700 border-0 shadow-lg hover:shadow-electric-500/25 group transition-all duration-300"
            asChild
          >
            <Link href="/projects" className="flex items-center justify-center">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
