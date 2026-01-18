"use client"

import React from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    achievements: [
      "Reduced application load time by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects ranging from e-commerce platforms to SaaS applications.",
    achievements: [
      "Delivered 10+ projects on time",
      "Improved code quality metrics by 30%",
      "Introduced automated testing",
    ],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Hub",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Built responsive web applications using React and modern CSS frameworks. Collaborated with designers to implement pixel-perfect UIs.",
    achievements: [
      "Developed 5 production applications",
      "Improved mobile responsiveness",
      "Optimized performance metrics",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    period: "2015 - 2019",
    description: "Focused on software engineering, data structures, and web technologies.",
  },
]

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
  "Tools & Others": ["Git", "Docker", "AWS", "CI/CD", "Jest", "Figma"],
}

const achievements = [
  { icon: Award, title: "Best Developer Award", year: "2023", description: "Recognized for exceptional contributions" },
  { icon: Award, title: "Hackathon Winner", year: "2022", description: "First place in regional hackathon" },
  { icon: Award, title: "Open Source Contributor", year: "2021", description: "500+ contributions on GitHub" },
]

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate full-stack developer with a love for creating elegant solutions
              to complex problems. I turn ideas into reality through code.
            </p>
          </div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-card border rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary/60 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Sangeet Sharma</h2>
                  <p className="text-muted-foreground mb-4">
                    I'm a full-stack developer with over 4 years of experience in building
                    web applications. I specialize in React, Node.js, and cloud technologies.
                    My passion lies in creating user-friendly applications that solve real-world
                    problems.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    When I'm not coding, you can find me exploring new technologies, contributing
                    to open-source projects, or sharing my knowledge through blog posts and
                    mentoring.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>Available for Projects</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border rounded-lg p-6">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {job.period}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium">{job.company}</span>
                      <span className="text-muted-foreground">• {job.location}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{job.description}</p>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-card border rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border rounded-lg p-6 text-center"
                >
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-primary mb-2">{achievement.year}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
