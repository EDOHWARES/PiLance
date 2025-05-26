"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Clock, DollarSign, Star, Briefcase, User, Settings, LogOut, Eye, Heart, MessageSquare, Upload, CheckCircle, PlayCircle, PauseCircle, FileText, Calendar } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

// Mock data for freelancer's jobs
const myJobs = [
  {
    id: 1,
    title: "Build a DeFi Dashboard for Pi Network",
    client: "CryptoVentures",
    clientRating: 4.9,
    status: "in-progress",
    budget: "750",
    earned: "375",
    progress: 65,
    deadline: "2024-02-15",
    startDate: "2024-01-15",
    milestones: [
      { id: 1, title: "UI Design", status: "completed", amount: "200", dueDate: "2024-01-20" },
      { id: 2, title: "Frontend Development", status: "in-progress", amount: "300", dueDate: "2024-02-05" },
      { id: 3, title: "Backend Integration", status: "pending", amount: "250", dueDate: "2024-02-15" }
    ],
    lastMessage: "Great progress on the dashboard! The UI looks amazing.",
    unreadMessages: 2,
    timeTracked: "45h 30m",
    isActive: true
  },
  {
    id: 2,
    title: "Smart Contract Audit",
    client: "BlockchainSolutions", 
    clientRating: 5.0,
    status: "pending-approval",
    budget: "1200",
    earned: "0",
    progress: 0,
    deadline: "2024-03-01",
    startDate: "2024-02-01",
    milestones: [
      { id: 1, title: "Initial Review", status: "pending", amount: "400", dueDate: "2024-02-10" },
      { id: 2, title: "Detailed Audit", status: "pending", amount: "500", dueDate: "2024-02-20" },
      { id: 3, title: "Final Report", status: "pending", amount: "300", dueDate: "2024-03-01" }
    ],
    lastMessage: "Looking forward to working with you!",
    unreadMessages: 1,
    timeTracked: "0h 0m",
    isActive: false
  },
  {
    id: 3,
    title: "Mobile App UI Design",
    client: "PiMarket Inc",
    clientRating: 4.7,
    status: "completed",
    budget: "400",
    earned: "400",
    progress: 100,
    deadline: "2024-01-10",
    startDate: "2023-12-20",
    milestones: [
      { id: 1, title: "Wireframes", status: "completed", amount: "150", dueDate: "2023-12-25" },
      { id: 2, title: "High-fidelity Designs", status: "completed", amount: "200", dueDate: "2024-01-05" },
      { id: 3, title: "Prototype", status: "completed", amount: "50", dueDate: "2024-01-10" }
    ],
    lastMessage: "Perfect work! Will definitely hire again.",
    unreadMessages: 0,
    timeTracked: "32h 15m",
    isActive: false,
    rating: 5,
    review: "Excellent designer with great attention to detail!"
  }
]

const availableJobs = [
  {
    id: 4,
    title: "Pi Network Integration for E-commerce",
    description: "Looking for a developer to integrate Pi Network payments into our existing e-commerce platform...",
    budget: "800-1200",
    duration: "3-4 weeks", 
    skills: ["React", "Node.js", "Pi Network", "Payment Integration"],
    client: "ShopPi",
    clientRating: 4.8,
    postedTime: "3 hours ago",
    proposals: 8,
    verified: true,
  },
  {
    id: 5,
    title: "Content Writing for Pi Ecosystem Blog",
    description: "Need technical writers to create engaging content about Pi Network developments...",
    budget: "300-500",
    duration: "2-3 weeks",
    skills: ["Technical Writing", "Blockchain", "Content Strategy"],
    client: "PiNews",
    clientRating: 4.6,
    postedTime: "1 day ago", 
    proposals: 12,
    verified: false,
  }
]

export default function FreelancerDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState("my-jobs")

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-green-400/20 text-green-400 border-green-400/30"
      case "pending-approval":
        return "bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
      case "completed":
        return "bg-blue-400/20 text-blue-400 border-blue-400/30"
      case "applied":
        return "bg-purple-400/20 text-purple-400 border-purple-400/30"
      default:
        return "bg-gray-400/20 text-gray-400 border-gray-400/30"
    }
  }

  const getMilestoneStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-400/20 text-green-400 border-green-400/30"
      case "in-progress":
        return "bg-blue-400/20 text-blue-400 border-blue-400/30"
      case "pending":
        return "bg-gray-400/20 text-gray-400 border-gray-400/30"
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
              <Badge variant="secondary" className="bg-blue-400/20 text-blue-400 border-blue-400/30">
                <User className="w-3 h-3 mr-1" />
                Freelancer
              </Badge>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                      <AvatarFallback className="bg-blue-500">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-slate-800 border-white/10" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none text-white">John Doe</p>
                      <p className="text-xs leading-none text-white/60">Full Stack Developer</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem className="text-white hover:bg-white/10">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:bg-white/10">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>My Proposals</span>
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, <span className="text-blue-400">John!</span>
            </h1>
            <p className="text-white/70">Manage your projects and find new opportunities</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Active Jobs</p>
                    <p className="text-2xl font-bold text-white">1</p>
                  </div>
                  <Briefcase className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Total Earned</p>
                    <p className="text-2xl font-bold text-yellow-400">775 π</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Success Rate</p>
                    <p className="text-2xl font-bold text-white">100%</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Avg Rating</p>
                    <p className="text-2xl font-bold text-white">5.0</p>
                  </div>
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 bg-white/5 border-white/10">
              <TabsTrigger value="my-jobs" className="data-[state=active]:bg-blue-500">My Jobs</TabsTrigger>
              <TabsTrigger value="browse-jobs" className="data-[state=active]:bg-blue-500">Browse Jobs</TabsTrigger>
            </TabsList>

            {/* My Jobs Tab */}
            <TabsContent value="my-jobs" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">My Jobs</h2>
                <Badge variant="secondary" className="bg-white/10 text-white">
                  {myJobs.length} projects
                </Badge>
              </div>

              {myJobs.map((job) => (
                <Card key={job.id} className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-white text-xl">{job.title}</CardTitle>
                          <Badge variant="secondary" className={getStatusColor(job.status)}>
                            {job.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {job.client}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {job.clientRating}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.timeTracked}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {job.unreadMessages > 0 && (
                          <Badge variant="secondary" className="bg-red-400/20 text-red-400 border-red-400/30">
                            {job.unreadMessages} new
                          </Badge>
                        )}
                        {job.isActive && (
                          <Button size="sm" variant="outline" className="border-green-400/30 text-green-400">
                            <PlayCircle className="w-4 h-4 mr-1" />
                            Active
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Progress and Earnings */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Progress</span>
                          <span className="text-white">{job.progress}%</span>
                        </div>
                        <Progress value={job.progress} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/60">Earnings</span>
                          <span className="text-yellow-400">{job.earned} / {job.budget} π</span>
                        </div>
                        <Progress value={(parseInt(job.earned) / parseInt(job.budget)) * 100} className="h-2" />
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="space-y-3">
                      <h4 className="text-white font-medium">Milestones</h4>
                      <div className="space-y-2">
                        {job.milestones.map((milestone) => (
                          <div key={milestone.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <div className="flex items-center gap-3">
                              <Badge variant="secondary" className={getMilestoneStatusColor(milestone.status)}>
                                {milestone.status.replace('-', ' ')}
                              </Badge>
                              <span className="text-white">{milestone.title}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-white/60">
                              <span>{milestone.amount} π</span>
                              <span>Due: {new Date(milestone.dueDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Last Message */}
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-blue-400" />
                        <span className="text-white/60 text-sm">Latest message from {job.client}</span>
                      </div>
                      <p className="text-white/80 text-sm">{job.lastMessage}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                        <span>Started: {new Date(job.startDate).toLocaleDateString()}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-white/20 text-blue-400 hover:bg-white/5">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Chat
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 text-blue-400 hover:bg-white/5">
                          <Upload className="w-4 h-4 mr-1" />
                          Deliver
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Completed Job Review */}
                    {job.status === "completed" && job.rating && (
                      <div className="p-4 bg-green-400/10 border border-green-400/20 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(job.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-green-400 font-medium">Project Completed</span>
                        </div>
                        <p className="text-white/80 text-sm">{job.review}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Browse Jobs Tab */}
            <TabsContent value="browse-jobs" className="space-y-6">
              {/* Search and Filters */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
                      <Input
                        placeholder="Search jobs, skills, or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                    <Button variant="outline" className="border-white/20 text-blue-400 hover:bg-white/5">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Available Jobs */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Available Jobs</h2>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    {availableJobs.length} jobs found
                  </Badge>
                </div>

                {availableJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-white text-xl">{job.title}</CardTitle>
                            {job.verified && (
                              <Badge
                                variant="secondary"
                                className="bg-green-400/20 text-green-400 border-green-400/30 text-xs"
                              >
                                Verified Client
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {job.client}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400" />
                              {job.clientRating}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.postedTime}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSaveJob(job.id)}
                          className="text-white/60 hover:text-white"
                        >
                          <Heart className={`w-4 h-4 ${savedJobs.includes(job.id) ? "fill-red-400 text-red-400" : ""}`} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4 line-clamp-3">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-blue-400/20 text-blue-400 border-blue-400/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-white/70">
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-yellow-400" />
                            <span>{job.budget} Pi</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{job.proposals} proposals</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-white/20 text-blue-400 hover:bg-white/5">
                            View Details
                          </Button>
                          <Link href={`/freelancer/proposal/${job.id}`}>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600"
                            >
                              Submit Proposal
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
