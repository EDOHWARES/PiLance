"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, X, DollarSign, Clock, Briefcase, Send } from "lucide-react"
import Link from "next/link"

export default function PostJob() {
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle job posting
    window.location.href = "/client/dashboard"
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

            <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
              <Briefcase className="w-3 h-3 mr-1" />
              Post New Job
            </Badge>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/client/dashboard">
              <Button variant="ghost" className="text-white hover:bg-white/5 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Post a New{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Job
                </span>
              </h1>
              <p className="text-white/70">Describe your project to attract the best freelancers</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Job Details */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Job Details</CardTitle>
                  <CardDescription className="text-white/60">
                    Provide clear information about your project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-white">
                      Job Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., Build a DeFi Dashboard for Pi Network"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-white">
                      Category
                    </Label>
                    <Select required>
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-development">Mobile Development</SelectItem>
                        <SelectItem value="blockchain">Blockchain & Smart Contracts</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="content">Content & Writing</SelectItem>
                        <SelectItem value="marketing">Marketing & SEO</SelectItem>
                        <SelectItem value="data">Data Science & Analytics</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">
                      Project Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project in detail. Include requirements, goals, and any specific technologies or skills needed..."
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements" className="text-white">
                      Requirements & Deliverables
                    </Label>
                    <Textarea
                      id="requirements"
                      placeholder="List specific requirements, deliverables, and any constraints..."
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Skills & Budget */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Skills & Budget</CardTitle>
                  <CardDescription className="text-white/60">Specify required skills and your budget</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-white">Required Skills</Label>
                    <div className="flex gap-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a required skill"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                      />
                      <Button type="button" onClick={addSkill} className="bg-yellow-500 hover:bg-yellow-600 text-black">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 px-3 py-1"
                        >
                          {skill}
                          <button type="button" onClick={() => removeSkill(skill)} className="ml-2 hover:text-red-400">
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budgetType" className="text-white">
                        Budget Type
                      </Label>
                      <Select required>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select budget type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed">Fixed Price</SelectItem>
                          <SelectItem value="hourly">Hourly Rate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-white">
                        Budget (Pi)
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 w-4 h-4" />
                        <Input
                          id="budget"
                          type="number"
                          placeholder="1000"
                          className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="duration" className="text-white">
                        Project Duration
                      </Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
                        <Input
                          id="duration"
                          placeholder="e.g., 2-4 weeks"
                          className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-white">
                        Experience Level
                      </Label>
                      <Select required>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Additional Information</CardTitle>
                  <CardDescription className="text-white/60">
                    Optional details to help freelancers understand your project better
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="attachments" className="text-white">
                      Project Files (optional)
                    </Label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                      <p className="text-white/60">Drag and drop files here or click to browse</p>
                      <p className="text-white/40 text-sm mt-2">Supported formats: PDF, DOC, PNG, JPG (Max 10MB)</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="questions" className="text-white">
                      Screening Questions (optional)
                    </Label>
                    <Textarea
                      id="questions"
                      placeholder="Add questions you'd like freelancers to answer when submitting proposals..."
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-12 py-6 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Post Job
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
