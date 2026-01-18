"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"

// Sample blog posts - this will be fetched from database later
const blogPosts = [
  {
    id: "1",
    title: "Building Scalable Web Applications with Next.js 14",
    slug: "building-scalable-web-apps-nextjs-14",
    excerpt: "Learn how to build production-ready web applications using the latest features of Next.js 14, including App Router, Server Components, and more.",
    content: "Full markdown content here...",
    coverImage: "/api/placeholder/800/400",
    published: true,
    publishedAt: new Date("2024-01-15"),
    tags: ["Next.js", "React", "Web Development"],
    readTime: "5 min read",
    viewCount: 234,
  },
  {
    id: "2",
    title: "Understanding TypeScript: A Comprehensive Guide",
    slug: "understanding-typescript-guide",
    excerpt: "Dive deep into TypeScript and learn how it can improve your JavaScript development experience with type safety and better tooling.",
    content: "Full markdown content here...",
    coverImage: "/api/placeholder/800/400",
    published: true,
    publishedAt: new Date("2024-01-10"),
    tags: ["TypeScript", "JavaScript", "Programming"],
    readTime: "8 min read",
    viewCount: 456,
  },
  {
    id: "3",
    title: "Mastering PostgreSQL for Web Development",
    slug: "mastering-postgresql-web-dev",
    excerpt: "Explore advanced PostgreSQL features and optimization techniques for building high-performance database-driven applications.",
    content: "Full markdown content here...",
    coverImage: "/api/placeholder/800/400",
    published: true,
    publishedAt: new Date("2024-01-05"),
    tags: ["PostgreSQL", "Database", "Backend"],
    readTime: "10 min read",
    viewCount: 189,
  },
  {
    id: "4",
    title: "The Power of Tailwind CSS in Modern Web Design",
    slug: "power-of-tailwind-css",
    excerpt: "Discover how Tailwind CSS can revolutionize your styling workflow and help you build beautiful, responsive interfaces faster.",
    content: "Full markdown content here...",
    coverImage: "/api/placeholder/800/400",
    published: true,
    publishedAt: new Date("2024-01-01"),
    tags: ["CSS", "Tailwind", "Design"],
    readTime: "6 min read",
    viewCount: 567,
  },
  {
    id: "5",
    title: "Building RESTful APIs with Node.js and Express",
    slug: "building-restful-apis-nodejs",
    excerpt: "Learn best practices for designing and implementing RESTful APIs using Node.js, Express, and modern middleware patterns.",
    content: "Full markdown content here...",
    coverImage: "/api/placeholder/800/400",
    published: true,
    publishedAt: new Date("2023-12-28"),
    tags: ["Node.js", "Express", "API"],
    readTime: "7 min read",
    viewCount: 892,
  },
  {
    id: "6",
    title: "Introduction to Docker for Developers",
    slug: "introduction-docker-developers",
    excerpt: "Get started with Docker and learn how containerization can improve your development workflow and deployment process.",
    content: "Full markdown content here...",
    coverImage: "/api/placeholder/800/400",
    published: true,
    publishedAt: new Date("2023-12-20"),
    tags: ["Docker", "DevOps", "Containers"],
    readTime: "9 min read",
    viewCount: 345,
  },
]

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)))

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null)
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredPosts = React.useMemo(() => {
    let filtered = blogPosts

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag))
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    return filtered
  }, [selectedTag, searchQuery])

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, programming,
              and technology trends.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
              >
                All Posts
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found matching your criteria.</p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20" />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formatDate(post.publishedAt)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                              </div>
                            </div>
                            
                            <span className="text-primary flex items-center gap-1 text-sm font-medium">
                              Read More
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Pagination (placeholder for future implementation) */}
              <div className="mt-12 flex justify-center">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    1
                  </Button>
                  <Button variant="default" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
