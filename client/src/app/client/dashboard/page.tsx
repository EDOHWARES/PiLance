"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Plus,
  Eye,
  MessageSquare,
  DollarSign,
  Clock,
  Star,
  Briefcase,
  User,
  Settings,
  LogOut,
  CheckCircle,
  XCircle,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Build a DeFi Dashboard for Pi Network",
    status: "active",
    budget: "750",
    proposals: 12,
    hired: "John Doe",
    progress: 65,
    deadline: "2 weeks",
    lastUpdate: "2 hours ago",
  },
  {
    id: 2,
    title: "Mobile App UI/UX Design",
    status: "reviewing",
    budget: "400",
    proposals: 8,
    hired: null,
    progress: 0,
    deadline: "1 week",
    lastUpdate: "1 day ago",
  },
  {
    id: 3,
    title: "Smart Contract Development",
    status: "completed",
    budget: "1200",
    proposals: 15,
    hired: "Alice Smith",
    progress: 100,
    deadline: "Completed",
    lastUpdate: "3 days ago",
  },
]

const recentProposals = [
  {
    id: 1,
    projectTitle: "Mobile App UI/UX Design",
    freelancer: "Sarah Johnson",
    rating: 4.9,
    bid: "350",
    timeline: "10 days",
    coverLetter:
      "I'm a UI/UX designer with 5+ years of experience in mobile app design. I've worked on several Pi Network projects and understand the ecosystem well...",
    submittedAt: "2 hours ago",
  },
  {
    id: 2,
    projectTitle: "Mobile App UI/UX Design",
    freelancer: "Mike Chen",
    rating: 4.7,
    bid: "420",
    timeline: "12 days",
    coverLetter:
      "Hello! I'm excited about this project. I specialize in modern, user-friendly mobile designs and have experience with crypto/blockchain apps...",
    submittedAt: "4 hours ago",
  },
  {
    id: 3,
    projectTitle: "Mobile App UI/UX Design",
    freelancer: "Emma Wilson",
    rating: 4.8,
    bid: "380",
    timeline: "8 days",
    coverLetter:
      "Hi there! I'm a passionate designer who loves creating intuitive user experiences. I've designed several successful mobile apps in the fintech space...",
    submittedAt: "6 hours ago",
  },
]

export default function ClientDashboard() {
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-400/20 text-green-400 border-green-400/30"
      case "reviewing":
        return "bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
      case "completed":
        return "bg-blue-400/20 text-blue-400 border-blue-400/30"
      default:
        return "bg-gray-400/20 text-gray-400 border-gray-400/30"
    }
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

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
                <Briefcase className="w-3 h-3 mr-1" />
                Client
              </Badge>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                      <AvatarFallback className="bg-yellow-500">AC</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-slate-800 border-white/10" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-white">Acme Corp</p>
                      <p className="text-xs leading-none text-white/60">john@acmecorp.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem className="text-white hover:bg-white/10">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-white/10">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>My Projects</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-white/10">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem className="text-white hover:bg-white/10">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, <span className="text-yellow-400">Acme Corp!</span>
              </h1>
              <p className="text-white/70">Manage your projects and hire talented freelancers</p>
            </div>
            <Link href="/client/post-job">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold">
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Projects Overview */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Your Projects</h2>
                <Badge variant="secondary" className="bg-white/10 text-white">
                  {projects.length} projects
                </Badge>
              </div>

              {projects.map((project) => (
                <Card key={project.id} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <Badge variant="secondary" className={getStatusColor(project.status)}>
                            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-yellow-400" />
                            <span>{project.budget} Pi</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{project.proposals} proposals</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.hired && (
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-blue-500 text-xs">
                                {project.hired
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-white font-medium">{project.hired}</p>
                              <p className="text-white/60 text-sm">Hired Freelancer</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white">{project.progress}% Complete</p>
                            <div className="w-24 h-2 bg-white/20 rounded-full mt-1">
                              <div
                                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{project.deadline}</span>
                          </div>
                          <span>Updated {project.lastUpdate}</span>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-white/20 text-blue hover:bg-white/5">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          {project.status === "reviewing" && (
                            <Link href={`/client/proposals/${project.id}`}>
                              <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                                Review Proposals
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Proposals */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Recent Proposals</h2>

              {recentProposals.map((proposal) => (
                <Card key={proposal.id} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-purple-500 text-xs">
                            {proposal.freelancer
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-medium text-sm">{proposal.freelancer}</p>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span className="text-white/60 text-xs">{proposal.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-blue-400/20 text-blue-400 border-blue-400/30 text-xs">
                        New
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-white/60 text-sm mb-3 line-clamp-2">{proposal.coverLetter}</p>

                    <div className="space-y-2 text-xs text-white/60 mb-4">
                      <div className="flex justify-between">
                        <span>Bid:</span>
                        <span className="text-yellow-400">{proposal.bid} Pi</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span>{proposal.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Submitted:</span>
                        <span>{proposal.submittedAt}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-green-400/30 text-green-400 hover:bg-green-400/10"
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-red-400/30 text-red-400 hover:bg-red-400/10"
                      >
                        <XCircle className="w-3 h-3 mr-1" />
                        Decline
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
