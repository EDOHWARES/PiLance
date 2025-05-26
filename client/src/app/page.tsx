"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { Wallet, Zap, Shield, Users, ArrowRight, Star, TrendingUp } from "lucide-react"

export default function HomePage() {
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnectWallet = async () => {
    setIsConnecting(true)
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(false)
      window.location.href = "/user-type"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">π</span>
              </div>
              <span className="text-white font-bold text-xl">PiLance</span>
            </div>
            <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
              Beta
            </Badge>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80">Powered by Pi Network</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future of{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Freelancing
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Connect, collaborate, and get paid in Pi. The first decentralized freelance platform built for the Pi
              ecosystem with secure escrow and instant payments.
            </p>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-md mx-auto mb-12">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-white">Connect Your Pi Wallet</CardTitle>
                <CardDescription className="text-white/60">
                  Secure authentication with your Pi Network wallet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleConnectWallet}
                  disabled={isConnecting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold py-6 text-lg"
                >
                  {isConnecting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Connecting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Connect Pi Wallet</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader className="text-center">
                  <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Secure Escrow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60">
                    Smart contract-based escrow ensures safe payments for both clients and freelancers
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Global Talent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60">
                    Connect with skilled freelancers and clients from the Pi Network community worldwide
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader className="text-center">
                  <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Instant Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60">
                    Get paid instantly in Pi with zero transaction fees and complete transparency
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1,000+</div>
                <div className="text-white/60">Active Freelancers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/60">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/60">Pi Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.9</div>
                <div className="text-white/60 flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  Rating
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
