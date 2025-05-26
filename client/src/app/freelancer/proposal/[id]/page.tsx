"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, DollarSign, Clock, Star, User, Send, FileText, Calendar } from "lucide-react"
import Link from "next/link"

export default function SubmitProposal({ params }: { params: { id: string } }) {
  const [proposal, setProposal] = useState("")
  const [bidAmount, setBidAmount] = useState("")
  const [timeline, setTimeline] = useState("")

  // Mock job data - in real app, fetch based on params.id
  const job = {
    id: 1,
    title: "Build a DeFi Dashboard for Pi Network",
    description:
      "Looking for an experienced React developer to build a comprehensive DeFi dashboard that integrates with Pi Network. The dashboard should display real-time data, portfolio tracking, and transaction history.",
    budget: "500-1000",
    duration: "2-4 weeks",
    skills: ["React", "TypeScript", "Web3", "DeFi"],
    client: "CryptoVentures",
    clientRating: 4.9,
    postedTime: "2 hours ago",
    proposals: 12,
    verified: true,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle proposal submission
    console.log({ proposal, bidAmount, timeline })
    // Redirect to dashboard with success message
    window.location.href = "/freelancer/dashboard"
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
              <FileText className="w-3 h-3 mr-1" />
              Submit Proposal
            </Badge>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link href="/freelancer/dashboard">
              <Button variant="ghost" className="text-white hover:bg-white/5 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Jobs
              </Button>
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Job Details */}
              <div className="lg:col-span-1">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 sticky top-8">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-white text-lg">{job.title}</CardTitle>
                      {job.verified && (
                        <Badge
                          variant="secondary"
                          className="bg-green-400/20 text-green-400 border-green-400/30 text-xs"
                        >
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {job.client}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {job.clientRating}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-white/80 text-sm">{job.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Budget:</span>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.budget} Pi</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Duration:</span>
                        <div className="flex items-center gap-1 text-white">
                          <Clock className="w-4 h-4" />
                          <span>{job.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Proposals:</span>
                        <span className="text-white">{job.proposals}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-white/60 text-sm">Required Skills:</span>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-blue-400/20 text-blue-400 border-blue-400/30 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Proposal Form */}
              <div className="lg:col-span-2">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Submit Your Proposal</CardTitle>
                    <CardDescription className="text-white/60">
                      Write a compelling proposal to win this project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Cover Letter */}
                      <div className="space-y-2">
                        <Label htmlFor="proposal" className="text-white text-lg">
                          Cover Letter
                        </Label>
                        <Textarea
                          id="proposal"
                          value={proposal}
                          onChange={(e) => setProposal(e.target.value)}
                          placeholder="Explain why you're the perfect fit for this project. Highlight your relevant experience, approach, and what makes you unique..."
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[200px]"
                          required
                        />
                        <p className="text-white/40 text-sm">
                          Tip: Mention specific details from the job description to show you've read it carefully.
                        </p>
                      </div>

                      {/* Bid Amount */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="bidAmount" className="text-white">
                            Your Bid (Pi)
                          </Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-400 w-4 h-4" />
                            <Input
                              id="bidAmount"
                              type="number"
                              value={bidAmount}
                              onChange={(e) => setBidAmount(e.target.value)}
                              placeholder="750"
                              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                              required
                            />
                          </div>
                          <p className="text-white/40 text-sm">Client's budget: {job.budget} Pi</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="timeline" className="text-white">
                            Delivery Timeline
                          </Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
                            <Input
                              id="timeline"
                              value={timeline}
                              onChange={(e) => setTimeline(e.target.value)}
                              placeholder="3 weeks"
                              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                              required
                            />
                          </div>
                          <p className="text-white/40 text-sm">Client expects: {job.duration}</p>
                        </div>
                      </div>

                      {/* Additional Questions */}
                      <div className="space-y-4 p-4 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-white font-medium">Additional Information</h3>

                        <div className="space-y-2">
                          <Label className="text-white">Have you worked with Pi Network before?</Label>
                          <Textarea
                            placeholder="Describe your experience with Pi Network and related technologies..."
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-white">What's your approach to this project?</Label>
                          <Textarea
                            placeholder="Outline your development approach, milestones, and deliverables..."
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end pt-6">
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold px-8 py-6 text-lg"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          Submit Proposal
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
