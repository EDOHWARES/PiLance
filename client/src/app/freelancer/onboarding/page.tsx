"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Plus, X, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FreelancerOnboarding() {
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [projects, setProjects] = useState([{ title: "", description: "", url: "" }])

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const addProject = () => {
    setProjects([...projects, { title: "", description: "", url: "" }])
  }

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index))
  }

  const updateProject = (index: number, field: string, value: string) => {
    const updated = projects.map((project, i) => (i === index ? { ...project, [field]: value } : project))
    setProjects(updated)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">π</span>
              </div>
              <span className="text-white font-bold text-xl">PiLance</span>
            </Link>
            <Badge variant="secondary" className="bg-blue-400/20 text-blue-400 border-blue-400/30">
              <User className="w-3 h-3 mr-1" />
              Freelancer Setup
            </Badge>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Complete Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Freelancer Profile
                </span>
              </h1>
              <p className="text-white/70 text-lg">Tell clients about your skills and experience to get hired faster</p>
            </div>

            <form className="space-y-8">
              {/* Personal Information */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-400" />
                    Personal Information
                  </CardTitle>
                  <CardDescription className="text-white/60">Basic information about yourself</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-white">
                      Professional Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="Full Stack Developer"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="text-white">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell clients about yourself, your experience, and what makes you unique..."
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-white">
                        Years of Experience
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hourlyRate" className="text-white">
                        Hourly Rate (Pi)
                      </Label>
                      <Input
                        id="hourlyRate"
                        type="number"
                        placeholder="50"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Skills & Expertise</CardTitle>
                  <CardDescription className="text-white/60">
                    Add your technical skills and areas of expertise
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill (e.g., React, Python, Design)"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                    />
                    <Button type="button" onClick={addSkill} className="bg-blue-500 hover:bg-blue-600">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-400/20 text-blue-400 border-blue-400/30 px-3 py-1"
                      >
                        {skill}
                        <button type="button" onClick={() => removeSkill(skill)} className="ml-2 hover:text-red-400">
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio Projects */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Portfolio Projects</CardTitle>
                  <CardDescription className="text-white/60">
                    Showcase your best work to attract clients
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="space-y-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex justify-between items-center">
                        <h4 className="text-white font-medium">Project {index + 1}</h4>
                        {projects.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeProject(index)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>

                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label className="text-white">Project Title</Label>
                          <Input
                            value={project.title}
                            onChange={(e) => updateProject(index, "title", e.target.value)}
                            placeholder="E-commerce Website"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-white">Description</Label>
                          <Textarea
                            value={project.description}
                            onChange={(e) => updateProject(index, "description", e.target.value)}
                            placeholder="Describe what you built and the technologies used..."
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-white">Project URL (optional)</Label>
                          <Input
                            value={project.url}
                            onChange={(e) => updateProject(index, "url", e.target.value)}
                            placeholder="https://example.com"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    onClick={addProject}
                    variant="outline"
                    className="w-full border-white/20 text-blue-400 hover:bg-white/5"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Another Project
                  </Button>
                </CardContent>
              </Card>

              {/* Submit */}
              <div className="flex justify-center">
                <Link href="/freelancer/dashboard">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold px-12 py-6 text-lg"
                  >
                    Complete Profile
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
