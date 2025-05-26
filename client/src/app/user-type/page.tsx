"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Briefcase, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function UserTypePage() {
  const [selectedType, setSelectedType] = useState<"freelancer" | "client" | null>(null)

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
            <Badge variant="secondary" className="bg-green-400/20 text-green-400 border-green-400/30">
              <CheckCircle className="w-3 h-3 mr-1" />
              Wallet Connected
            </Badge>
          </div>
        </header>

        <main className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-16">
              Are you looking to offer your skills or hire talented freelancers?
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Freelancer Card */}
              <Card
                className={`bg-white/5 backdrop-blur-sm border-white/10 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedType === "freelancer" ? "ring-2 ring-yellow-400 bg-white/10" : ""
                }`}
                onClick={() => setSelectedType("freelancer")}
              >
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">I'm a Freelancer</CardTitle>
                  <CardDescription className="text-white/60 text-lg">Offer your skills and earn Pi</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Browse and apply to jobs</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Showcase your portfolio</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Get paid in Pi instantly</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Build your reputation</span>
                    </div>
                  </div>

                  {selectedType === "freelancer" && (
                    <Link href="/freelancer/onboarding">
                      <Button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-6">
                        <span>Continue as Freelancer</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>

              {/* Client Card */}
              <Card
                className={`bg-white/5 backdrop-blur-sm border-white/10 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedType === "client" ? "ring-2 ring-yellow-400 bg-white/10" : ""
                }`}
                onClick={() => setSelectedType("client")}
              >
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-10 h-10 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">I'm a Client</CardTitle>
                  <CardDescription className="text-white/60 text-lg">Hire talented freelancers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Post jobs and projects</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Review freelancer proposals</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Secure escrow payments</span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Manage your projects</span>
                    </div>
                  </div>

                  {selectedType === "client" && (
                    <Link href="/client/onboarding">
                      <Button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-6">
                        <span>Continue as Client</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
