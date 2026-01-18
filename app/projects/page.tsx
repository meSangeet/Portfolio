"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Github, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample projects data - this will be fetched from database later
const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration",
    longDescription: "Built a comprehensive e-commerce platform with features including user authentication, product catalog, shopping cart, payment processing with Stripe, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    imageUrl: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/meSangeet/ecommerce",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Real-Time Chat Application",
    description: "WebSocket-based chat app with rooms and direct messaging",
    longDescription: "Developed a real-time chat application with features like multiple chat rooms, direct messaging, online status, typing indicators, and message history.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
    imageUrl: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/meSangeet/chat-app",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "3",
    title: "Task Management System",
    description: "Collaborative project management tool with Kanban boards",
    longDescription: "Created a project management tool with Kanban boards, task assignments, deadlines, team collaboration features, and real-time updates.",
    technologies: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Docker"],
    imageUrl: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/meSangeet/task-manager",
    featured: false,
    category: "Full Stack",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Beautiful weather app with forecasts and location tracking",
    longDescription: "Built a weather dashboard that displays current weather, forecasts, and weather maps with location-based services.",
    technologies: ["React", "TypeScript", "Weather API", "Chart.js", "Geolocation"],
    imageUrl: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/meSangeet/weather-app",
    featured: false,
    category: "Frontend",
  },
  {
    id: "5",
    title: "API Gateway Service",
    description: "Microservices API gateway with rate limiting and caching",
    longDescription: "Developed an API gateway service that handles routing, authentication, rate limiting, caching, and monitoring for microservices architecture.",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Kubernetes", "Prometheus"],
    imageUrl: "/api/placeholder/600/400",
    githubUrl: "https://github.com/meSangeet/api-gateway",
    featured: false,
    category: "Backend",
  },
  {
    id: "6",
    title: "Portfolio Website",
    description: "Modern portfolio website with CMS and blog",
    longDescription: "This portfolio website you're viewing right now! Built with Next.js 14, featuring a blog system, contact form, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "/api/placeholder/600/400",
    liveUrl: "https://sangeet.co",
    githubUrl: "https://github.com/meSangeet/portfolio",
    featured: true,
    category: "Full Stack",
  },
]

const categories = ["All", "Full Stack", "Frontend", "Backend"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [filteredProjects, setFilteredProjects] = React.useState(projects)

  React.useEffect(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }

    setFilteredProjects(filtered)
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of work ranging from web applications to backend services.
              Each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search projects or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          {selectedCategory === "All" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredProjects
                  .filter(project => project.featured)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-xl transition-all"
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-secondary rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="text-xs px-2 py-1 bg-secondary rounded-md">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <Button size="sm" variant="default" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-3 w-3" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-3 w-3" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              {selectedCategory === "All" ? "All Projects" : `${selectedCategory} Projects`}
            </h2>
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects
                  .filter(project => selectedCategory !== "All" || !project.featured)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all"
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10" />
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                            {project.category}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-secondary rounded"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-secondary rounded">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <Button size="sm" variant="ghost" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button size="sm" variant="ghost" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
