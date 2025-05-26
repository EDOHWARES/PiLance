"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, ArrowRight, Building } from "lucide-react"
import Link from "next/link"

export default function ClientOnboarding() {
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
              Client Setup
            </Badge>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Set Up Your{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Client Profile
                </span>
              </h1>
              <p className="text-white/70 text-lg">
                Tell freelancers about your company and projects to attract the best talent
              </p>
            </div>

            <form className="space-y-8">
              {/* Company Information */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Building className="w-5 h-5 mr-2 text-yellow-400" />
                    Company Information
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Basic information about your company or organization
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-white">
                        Company Name
                      </Label>
                      <Input
                        id="companyName"
                        placeholder="Acme Corp"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-white">
                        Industry
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="gaming">Gaming</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-white">
                      Company Website (optional)
                    </Label>
                    <Input
                      id="website"
                      placeholder="https://acmecorp.com"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-white">
                      Company Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Tell freelancers about your company, mission, and what you do..."
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companySize" className="text-white">
                        Company Size
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-white">
                        Location
                      </Label>
                      <Input
                        id="location"
                        placeholder="San Francisco, CA"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                  <CardDescription className="text-white/60">How freelancers can reach you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName" className="text-white">
                        Contact Name
                      </Label>
                      <Input
                        id="contactName"
                        placeholder="John Smith"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@acmecorp.com"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number (optional)
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Project Preferences */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Project Preferences</CardTitle>
                  <CardDescription className="text-white/60">
                    What types of projects are you looking to hire for?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectTypes" className="text-white">
                      Typical Project Types
                    </Label>
                    <Textarea
                      id="projectTypes"
                      placeholder="Web development, mobile apps, blockchain projects, design work..."
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budgetRange" className="text-white">
                        Typical Budget Range (Pi)
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100-500">100-500 Pi</SelectItem>
                          <SelectItem value="500-1000">500-1000 Pi</SelectItem>
                          <SelectItem value="1000-5000">1000-5000 Pi</SelectItem>
                          <SelectItem value="5000-10000">5000-10000 Pi</SelectItem>
                          <SelectItem value="10000+">10000+ Pi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectDuration" className="text-white">
                        Typical Project Duration
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/20 text-white">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                          <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                          <SelectItem value="1-2months">1-2 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6months+">6+ months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit */}
              <div className="flex justify-center">
                <Link href="/client/dashboard">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-12 py-6 text-lg"
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
