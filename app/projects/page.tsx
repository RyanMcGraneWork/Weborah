"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/lib/projects";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Apps" },
  { id: "mobile", name: "Mobile Apps" },
  { id: "saas", name: "SaaS Platforms" },
  { id: "design", name: "Design" },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Project Portfolio</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Explore our collection of successful projects. Each one represents 
                our commitment to excellence and innovation in web development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center space-x-2 text-slate-400 mb-4">
                <Filter className="h-4 w-4" />
                <span className="text-sm">Filter by category:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id 
                      ? "h-9 px-3 bg-gradient-to-r from-electric-500 to-electric-600 text-white hover:from-electric-600 hover:to-electric-700 shadow-lg hover:shadow-electric-500/25" 
                      : "h-9 px-3 border border-slate-700 text-slate-400 hover:border-electric-500 hover:text-electric-500 bg-transparent"
                    }
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-slate-400 text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-electric-500/50 transition-all duration-300"
    >
      {/* Project image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-electric-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Overlay with links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-slate-900/80 flex items-center justify-center space-x-4"
        >          {project.liveUrl && (
            <Button
              className="h-9 px-3 border border-electric-500 text-electric-500 hover:bg-electric-500 hover:text-white"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button
              className="h-9 px-3 border border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </motion.div>
      </div>

      {/* Project content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-electric-500/20 text-electric-500 text-xs font-medium px-2 py-1 rounded-full">
            {project.category.toUpperCase()}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-500 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-4 text-sm leading-relaxed">
          {project.longDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
