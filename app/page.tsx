"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Shield,
  Sparkles,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Gift,
  Truck,
  Award,
  MapPin,
  Navigation,
  Compass,
  Check,
  X,
} from "lucide-react"
import Image from "next/image"

export default function ZibbruJourney() {
  const [scrollY, setScrollY] = useState(0)
  const [currentMilestone, setCurrentMilestone] = useState(0)
  const [journeyProgress, setJourneyProgress] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 30,
  })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [preOrderProgress, setPreOrderProgress] = useState(342)

  const roadRef = useRef<HTMLDivElement>(null)

  // Scroll tracking for journey progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100

      setScrollY(scrolled)
      setJourneyProgress(Math.min(progress, 100))

      // Update current milestone based on scroll position
      const milestoneThreshold = maxScroll / 4
      const milestone = Math.floor(scrolled / milestoneThreshold)
      setCurrentMilestone(Math.min(milestone, 3))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const testimonials = [
    {
      name: "Priya & Max",
      quote: "Max finally sleeps through the night. I don't feel guilty about his comfort anymore.",
      location: "Mumbai",
      petAge: "3 years old",
    },
    {
      name: "Arjun & Bella",
      quote: "Bella's arthritis improved within weeks. This bed truly understands what pets need.",
      location: "Bangalore",
      petAge: "8 years old",
    },
    {
      name: "Sneha & Charlie",
      quote: "Our home looks elegant, and Charlie is the happiest he's ever been. Worth every rupee.",
      location: "Delhi",
      petAge: "5 years old",
    },
  ]

  const milestones = [
    {
      icon: Heart,
      title: "Bond",
      subtitle: "Your pet has been there through everything.",
      description:
        "Through late nights, early mornings, and every moment in between. They're not just pets—they're family. The deep connection you share deserves to be honored with comfort that matches their devotion.",
      color: "text-rose-500",
      bgColor: "from-rose-100 to-pink-100",
      distance: "0 km",
      roadSign: "💝 FAMILY BOND",
    },
    {
      icon: Shield,
      title: "Guilt",
      subtitle: "Most pet parents settle for cheap beds.",
      description:
        "You've seen those flattened foam beds, smelly fabrics, and designs that clash with your beautiful home. Deep down, you know they deserve better. That guilt? It's love asking you to do more.",
      color: "text-amber-500",
      bgColor: "from-amber-100 to-yellow-100",
      distance: "15 km",
      roadSign: "⚠️ THEY DESERVE BETTER",
    },
    {
      icon: Sparkles,
      title: "Love",
      subtitle: "First-time pet parents want perfection.",
      description:
        "Every choice matters when it's your first pet. You want to get everything right—the food, the toys, the comfort. This isn't just a purchase; it's an expression of the love you can't put into words.",
      color: "text-emerald-500",
      bgColor: "from-emerald-100 to-green-100",
      distance: "32 km",
      roadSign: "✨ PERFECT LOVE",
    },
    {
      icon: Star,
      title: "Gratitude",
      subtitle: "Older pets need orthopedic comfort.",
      description:
        "They've given you years of unconditional love. Now their joints ache, they move slower, but their eyes still light up when they see you. It's time to give back with the comfort they truly need.",
      color: "text-purple-500",
      bgColor: "from-purple-100 to-indigo-100",
      distance: "50 km",
      roadSign: "🙏 GRATEFUL COMFORT",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-x-hidden">
      {/* Journey Progress Bar - Fixed */}
      <div className="fixed top-0 left-0 w-full h-2 bg-amber-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 ease-out"
          style={{ width: `${journeyProgress}%` }}
        />
      </div>

      {/* Journey Compass - Fixed */}
      <div className="fixed top-6 right-6 z-40 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-amber-200">
        <div className="relative">
          <Compass className="w-8 h-8 text-amber-600" style={{ transform: `rotate(${journeyProgress * 3.6}deg)` }} />
          <div className="absolute -bottom-8 -left-4 text-xs text-amber-600 font-semibold whitespace-nowrap">
            {journeyProgress.toFixed(0)}% Journey
          </div>
        </div>
      </div>

      {/* Animated Road SVG - Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M10,10 Q30,30 50,20 T90,40 Q70,60 50,70 T10,90"
            stroke="#F6C28B"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="2,2"
            className="animate-pulse"
          />
          <path
            d="M15,15 Q35,35 55,25 T95,45 Q75,65 55,75 T15,95"
            stroke="#D97706"
            strokeWidth="0.3"
            fill="none"
            strokeDasharray="1,3"
            style={{
              strokeDashoffset: scrollY * 0.1,
              transition: "stroke-dashoffset 0.1s ease-out",
            }}
          />
        </svg>
      </div>

      {/* Hero Section - Journey Starts Here */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-amber-300 rounded-full" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Journey Start Marker */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  START
                </div>
              </div>
              <div>
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-sm px-4 py-2">
                  🇮🇳 Made in India • Vet-Endorsed Design
                </Badge>
                <p className="text-amber-600 text-sm mt-1">Your pet's comfort journey starts here</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
                  <span className="text-amber-900">India's First</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 animate-gradient">
                    Emotion-Engineered
                  </span>
                  <br />
                  <span className="text-amber-900">Pet Bed</span>
                </h1>

                {/* Decorative Road Elements */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-30">
                  <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full mt-2" />
                </div>
              </div>

              <div className="relative bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-2xl border-l-4 border-amber-500">
                <Navigation className="absolute top-4 right-4 w-6 h-6 text-amber-600" />
                <p className="text-2xl md:text-3xl text-amber-800 font-light">Reserve the Comfort They Deserve</p>
                <p className="text-amber-600 mt-2">🛣️ Where dreams sleep softly</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-6 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">🚀 Reserve Now - ₹299</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-10 py-6 text-xl rounded-full flex items-center gap-3 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-6 h-6" />
                Watch Launch Video
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">25+</div>
                <div className="text-amber-600 text-sm">Breeds Tested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">3-Layer</div>
                <div className="text-amber-600 text-sm">Comfort System</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">30-Day</div>
                <div className="text-amber-600 text-sm">Guarantee</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Product Showcase */}
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-br from-white via-amber-50 to-orange-50 rounded-3xl p-8 shadow-2xl border border-amber-200">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Zibbru LuxeNest Premium Pet Bed"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />

                {/* Floating Badges */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  🏆 Founder's Edition
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ✅ Vet-Endorsed
                </div>
              </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 -left-8 animate-spin-slow">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute bottom-1/4 -right-8 animate-spin-slow" style={{ animationDelay: "2s" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Road Map - Emotional Milestones */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-amber-200 mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <span className="text-amber-800 font-semibold">Emotional Journey in Progress</span>
              <div className="text-amber-600">|</div>
              <span className="text-amber-600">Next: {milestones[currentMilestone]?.title}</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-6">The Comfort Journey</h2>
            <p className="text-2xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              🛣️ Follow the emotional path that led us to engineer the perfect pet bed
            </p>
          </div>

          {/* Interactive Road Journey */}
          <div className="relative" ref={roadRef}>
            {/* Winding Road SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 1200" preserveAspectRatio="xMidYMid meet">
                {/* Main Road */}
                <path
                  d="M100,50 Q200,150 300,100 T500,200 Q600,300 500,400 T300,500 Q200,600 300,700 T500,800 Q600,900 500,1000 T300,1100"
                  stroke="#F6C28B"
                  strokeWidth="20"
                  fill="none"
                  className="opacity-60"
                />

                {/* Road Markings */}
                <path
                  d="M100,50 Q200,150 300,100 T500,200 Q600,300 500,400 T300,500 Q200,600 300,700 T500,800 Q600,900 500,1000 T300,1100"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="20,20"
                  className="opacity-80"
                  style={{
                    strokeDashoffset: -scrollY * 0.5,
                    transition: "stroke-dashoffset 0.1s ease-out",
                  }}
                />

                {/* Progress Indicator */}
                <path
                  d="M100,50 Q200,150 300,100 T500,200 Q600,300 500,400 T300,500 Q200,600 300,700 T500,800 Q600,900 500,1000 T300,1100"
                  stroke="#D97706"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="1000"
                  strokeDashoffset={1000 - journeyProgress * 10}
                  className="transition-all duration-300 ease-out"
                />
              </svg>
            </div>

            {/* Milestone Stations */}
            <div className="relative z-10 space-y-32">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? "lg:pr-1/3" : "lg:pl-1/3 lg:ml-auto"}`}>
                  {/* Road Sign */}
                  <div className={`absolute -top-16 ${index % 2 === 0 ? "right-8" : "left-8"} z-20`}>
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="text-sm font-bold">{milestone.roadSign}</div>
                      <div className="text-xs opacity-90">{milestone.distance}</div>
                    </div>
                    {/* Sign Post */}
                    <div className="w-2 h-16 bg-amber-800 mx-auto mt-2 rounded-full" />
                  </div>

                  {/* Milestone Card */}
                  <Card
                    className={`bg-gradient-to-br ${milestone.bgColor} border-2 border-amber-200 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl transform hover:scale-105 ${currentMilestone >= index ? "ring-4 ring-amber-400 ring-opacity-50" : ""}`}
                  >
                    <CardContent className="p-10">
                      <div className={`flex items-center gap-6 mb-6 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                        <div className="relative">
                          <div
                            className={`p-6 rounded-full bg-gradient-to-br from-white to-amber-50 shadow-xl border-4 border-amber-200`}
                          >
                            <milestone.icon className={`w-12 h-12 ${milestone.color}`} />
                          </div>
                          {/* Distance Marker */}
                          <div className="absolute -bottom-3 -right-3 bg-amber-800 text-white text-xs px-2 py-1 rounded-full font-bold">
                            {milestone.distance}
                          </div>
                        </div>
                        <div className={index % 2 === 0 ? "" : "lg:text-right"}>
                          <h3 className="text-3xl font-serif font-bold text-amber-900 mb-2">{milestone.title}</h3>
                          <p className="text-xl text-amber-700 font-semibold">{milestone.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-lg text-amber-800 leading-relaxed mb-6">{milestone.description}</p>

                      {/* Journey Progress for this milestone */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-4 h-4 rounded-full ${currentMilestone >= index ? "bg-green-500 animate-pulse" : "bg-gray-300"}`}
                        />
                        <span className="text-amber-600 text-sm font-semibold">
                          {currentMilestone >= index ? "✅ Milestone Reached" : "🚶 Journey Continues..."}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Journey Completion */}
            {currentMilestone >= 3 && (
              <div className="text-center mt-20">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full shadow-lg animate-bounce">
                  <Star className="w-6 h-6" />
                  <span className="font-bold text-lg">🎉 Journey Complete! LuxeNest™ Awaits!</span>
                  <Star className="w-6 h-6" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Product Reveal - LuxeNest™ Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full shadow-lg mb-8">
              <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
              <span className="font-bold text-lg">🔬 ENGINEERED FOR DREAMS</span>
              <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-6">Zibbru LuxeNest™ Revealed</h2>
            <p className="text-2xl text-amber-700 max-w-3xl mx-auto">
              🏆 Designed by Vets. Engineered for Dreams. Every inch crafted with a tail wag in mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl blur-xl opacity-30 animate-pulse" />
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=700"
                    alt="LuxeNest 3-Layer Comfort System"
                    width={700}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />

                  {/* Feature Callouts */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    3-Layer System
                  </div>
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Vet-Endorsed
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Product Features */}
              <div className="space-y-6">
                <div className="group">
                  <Card className="bg-gradient-to-r from-white to-amber-50 border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-amber-900 mb-1">3-Layer Comfort Foam</h4>
                          <p className="text-amber-700">
                            🧠 Pet ergonomics with vet-recommended foam technology that adapts to every breed
                          </p>
                        </div>
                        <div className="text-2xl">🏆</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group">
                  <Card className="bg-gradient-to-r from-white to-emerald-50 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-amber-900 mb-1">Antibacterial & Breathable</h4>
                          <p className="text-amber-700">
                            🛡️ Machine washable, chew-resistant covers that stay fresh and climate adaptive
                          </p>
                        </div>
                        <div className="text-2xl">💎</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="group">
                  <Card className="bg-gradient-to-r from-white to-purple-50 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-amber-900 mb-1">Personalized Stitching</h4>
                          <p className="text-amber-700">
                            ✨ Your pet's name embroidered with premium thread - only for Founder's Edition
                          </p>
                        </div>
                        <div className="text-2xl">⭐</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Comparison Table */}
              <Card className="bg-gradient-to-br from-amber-900 to-orange-900 text-white shadow-2xl rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-serif font-bold mb-6 text-center">⚔️ Why LuxeNest™ Wins</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-2 text-sm font-bold border-b border-amber-700 pb-2">
                      <span className="text-amber-200">Feature</span>
                      <span className="text-green-400">LuxeNest™</span>
                      <span className="text-red-400">Amazon Basics</span>
                      <span className="text-yellow-400">Local Beds</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-sm py-2">
                      <span className="text-amber-200">Personalized Embroidery</span>
                      <Check className="w-5 h-5 text-green-400" />
                      <X className="w-5 h-5 text-red-400" />
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-sm py-2">
                      <span className="text-amber-200">Vet-Endorsed Design</span>
                      <Check className="w-5 h-5 text-green-400" />
                      <X className="w-5 h-5 text-red-400" />
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-sm py-2">
                      <span className="text-amber-200">3-Layer Comfort Foam</span>
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-yellow-400 text-xs">Medium</span>
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-sm py-2">
                      <span className="text-amber-200">Lifestyle Aesthetic</span>
                      <Check className="w-5 h-5 text-green-400" />
                      <X className="w-5 h-5 text-red-400" />
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order CTA - Founder's Edition */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 relative overflow-hidden">
        {/* Celebration Background */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-300 text-2xl animate-float opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {["🎉", "🎊", "✨", "🏆", "💎", "⭐"][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border-4 border-yellow-400">
            <CardContent className="p-12 md:p-16">
              {/* Limited Edition Banner */}
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full inline-flex items-center gap-4 mb-8 shadow-lg">
                <MapPin className="w-6 h-6" />
                <span className="font-bold text-lg">🏁 PRE-ORDER WINDOW • FOUNDER'S EDITION</span>
                <Star className="w-6 h-6" />
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6">
                🎯 Pre-Order the Future of Pet Comfort
              </h2>

              <p className="text-2xl text-amber-700 mb-10 leading-relaxed">
                Secure your LuxeNest™ for just ₹299 – delivery in 30 days. Join the first 500 pet parents to experience
                emotion-engineered comfort.
              </p>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 mb-10 border-2 border-amber-300">
                <h3 className="text-xl font-bold text-amber-900 mb-4">⏰ Pre-Order Window Closes In:</h3>
                <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="bg-gradient-to-br from-amber-900 to-orange-900 text-white text-3xl font-bold py-4 px-3 rounded-xl shadow-lg">
                        {value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-amber-700 text-sm mt-2 capitalize font-semibold">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pre-Order Progress */}
              <div className="mb-10">
                <div className="flex justify-between text-amber-700 mb-3">
                  <span className="font-semibold">🎯 Founder's Edition Reserved</span>
                  <span className="font-bold">{preOrderProgress} of 500 Units</span>
                </div>
                <div className="relative">
                  <Progress value={(preOrderProgress / 500) * 100} className="h-4 bg-amber-200" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30 animate-pulse" />
                </div>
                <p className="text-amber-600 text-sm mt-2">
                  ⚡ Only {500 - preOrderProgress} Founder's Edition units remaining!
                </p>
              </div>

              {/* Founder's Edition Perks */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <Card className="bg-gradient-to-br from-yellow-100 to-amber-100 border-2 border-yellow-400 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Gift className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                    <h4 className="font-bold text-amber-900 mb-2">🎁 Free Luxury Toy</h4>
                    <p className="text-amber-700 text-sm">Complimentary premium pet toy included</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-400 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-bold text-amber-900 mb-2">🎨 Name Embroidered</h4>
                    <p className="text-amber-700 text-sm">Your pet's name stitched with premium thread</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-rose-100 to-red-100 border-2 border-rose-400 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-12 h-12 text-rose-600 mx-auto mb-3" />
                    <h4 className="font-bold text-amber-900 mb-2">🌈 Luxury Colors</h4>
                    <p className="text-amber-700 text-sm">Exclusive color options for founders</p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-600 hover:via-amber-600 hover:to-orange-600 text-white px-16 py-6 text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 relative overflow-hidden group mb-6"
              >
                <span className="relative z-10 flex items-center gap-4">
                  <Star className="w-8 h-8" />🚀 Reserve for ₹299
                  <Star className="w-8 h-8" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <p className="text-amber-600 font-semibold">
                🛡️ Full payment only after you love it • 30-day money-back guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg mb-8">
              <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
              <span className="font-bold text-lg">🏠 LIFESTYLE GALLERY</span>
              <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-6">
              Good Interiors Deserve Good Pet Beds
            </h2>
            <p className="text-2xl text-amber-700 max-w-4xl mx-auto">
              🏛️ LuxeNest™ complements your beautiful home with luxury photoshoots in minimalist interiors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=400&width=500`}
                    alt={`Modern Home with LuxeNest ${i}`}
                    width={500}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Lifestyle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Lifestyle Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    🏠 Modern Home
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lifestyle Quote */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300 shadow-xl rounded-2xl max-w-3xl mx-auto">
              <CardContent className="p-8">
                <blockquote className="text-2xl font-serif text-amber-900 italic">
                  "As a pet parent, I don't want to buy another product. I want something that shows my love."
                </blockquote>
                <p className="text-amber-600 mt-4 font-semibold">- The Zibbru Philosophy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials - Real Pet Parent Stories */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg mb-8">
              <Heart className="w-6 h-6" />
              <span className="font-bold text-lg">💝 REAL LOVE STORIES</span>
              <Heart className="w-6 h-6" />
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-6">
              Love Stories from Pet Parents
            </h2>
            <p className="text-2xl text-amber-700">Real experiences from the LuxeNest™ family</p>
          </div>

          <div className="relative">
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl border-4 border-rose-200 overflow-hidden">
              <CardContent className="p-12 md:p-16 text-center relative">
                <div className="pt-8">
                  {/* Stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
                    ))}
                  </div>

                  <blockquote className="text-3xl md:text-4xl font-serif text-amber-900 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 inline-block">
                    <p className="font-bold text-xl text-amber-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-amber-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-amber-500 text-sm mt-1">🐕 Pet: {testimonials[currentTestimonial].petAge}</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 text-2xl animate-bounce">✨</div>
                <div className="absolute top-4 right-4 text-2xl animate-bounce" style={{ animationDelay: "0.5s" }}>
                  💎
                </div>
                <div className="absolute bottom-4 left-4 text-2xl animate-bounce" style={{ animationDelay: "1s" }}>
                  🌟
                </div>
                <div className="absolute bottom-4 right-4 text-2xl animate-bounce" style={{ animationDelay: "1.5s" }}>
                  🏆
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center gap-6 mt-10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="rounded-full border-2 border-rose-400 text-rose-600 hover:bg-rose-50 px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 mr-2" />
                Previous Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="rounded-full border-2 border-rose-400 text-rose-600 hover:bg-rose-50 px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Next Story
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline - Pre-Order to Delivery */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg mb-8">
              <Compass className="w-6 h-6" />
              <span className="font-bold text-lg">🗺️ YOUR LUXENEST™ JOURNEY</span>
              <Navigation className="w-6 h-6" />
            </div>

            <h2 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-6">
              Your LuxeNest™ Experience Timeline
            </h2>
            <p className="text-2xl text-amber-700">
              From pre-order to delivery, every step is crafted with care and precision
            </p>
          </div>

          <div className="relative">
            {/* Timeline Road */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full transform -translate-y-1/2 hidden md:block" />

            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Tease",
                  desc: "7-day emotional teaser campaign with blurred product shots",
                  color: "from-rose-400 to-pink-400",
                  step: "1",
                },
                {
                  icon: Sparkles,
                  title: "Reveal",
                  desc: "Website launch with countdown timer and full product reveal",
                  color: "from-purple-400 to-indigo-400",
                  step: "2",
                },
                {
                  icon: Award,
                  title: "Pre-Order",
                  desc: "5-day window to secure your LuxeNest™ for ₹299",
                  color: "from-amber-400 to-yellow-400",
                  step: "3",
                },
                {
                  icon: Gift,
                  title: "Founder's Batch",
                  desc: "First 500 orders get free toy + name embroidery + luxury colors",
                  color: "from-emerald-400 to-green-400",
                  step: "4",
                },
                {
                  icon: Truck,
                  title: "Delivery",
                  desc: "30-40 days post booking with tracked delivery to your home",
                  color: "from-blue-400 to-cyan-400",
                  step: "5",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl transform hover:scale-105 border-2 border-amber-200">
                    <CardContent className="p-8 text-center relative">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div
                        className={`bg-gradient-to-br ${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      >
                        <step.icon className="w-10 h-10 text-white" />
                      </div>

                      <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">{step.title}</h3>
                      <p className="text-amber-700 leading-relaxed text-sm">{step.desc}</p>

                      {/* Badge */}
                      <div className="mt-4">
                        <Badge className="bg-amber-100 text-amber-800 border-amber-300">🎯 Precision Crafted</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connection Arrow (Desktop) */}
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-amber-400 text-2xl z-10">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Thank You Letter */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Card className="bg-gradient-to-br from-amber-50 via-white to-orange-50 shadow-2xl rounded-3xl overflow-hidden border-4 border-yellow-400">
            <CardContent className="p-12 md:p-16 relative">
              {/* Zibbru Seal */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white text-2xl font-bold">Z</div>
              </div>

              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-8">Love, from Zibbru</h2>

                {/* Letter Style */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-3xl border-4 border-amber-300 shadow-inner relative">
                  {/* Wax Seal */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-yellow-400 text-lg font-bold">Z</div>
                  </div>

                  <div className="text-left max-w-3xl mx-auto">
                    <p className="text-amber-800 leading-relaxed font-serif text-lg mb-6">
                      <span className="text-2xl">D</span>ear precious companion,
                    </p>

                    <p className="text-amber-800 leading-relaxed font-serif text-lg mb-6">
                      You've given unconditional love, endless joy, and countless memories that warm hearts every single
                      day. Through every sunrise walk, every cozy evening cuddle, and every moment of pure happiness,
                      you've been a constant source of light.
                    </p>

                    <p className="text-amber-800 leading-relaxed font-serif text-lg mb-6">
                      Now it's time for us to give back. LuxeNest™ isn't just a bed—it's our promise that your comfort
                      matters as much as your love does to us. Every thread, every layer, every detail has been
                      emotion-engineered with the same care and devotion you show daily.
                    </p>

                    <p className="text-amber-800 leading-relaxed font-serif text-lg mb-8">
                      At Zibbru, we don't build products. We build rituals of care, filled with love, comfort, and
                      connection. LuxeNest™ is just the beginning.
                    </p>

                    <div className="text-right">
                      <p className="text-amber-900 font-bold text-xl mb-2">With endless love and gratitude,</p>
                      <p className="text-amber-700 font-serif text-lg italic">The Zibbru Family</p>
                      <div className="text-amber-600 text-sm mt-2">🇮🇳 Crafted with love in India • Est. 2024</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="space-y-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-600 hover:via-amber-600 hover:to-orange-600 text-white px-16 py-6 text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <Heart className="w-8 h-8" />🚀 Reserve Your LuxeNest™ Now
                    <Star className="w-8 h-8" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                <p className="text-amber-600 font-semibold text-lg">
                  📜 Download your personalized thank you letter after pre-order
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-amber-100 py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-2xl font-bold">Z</div>
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">Zibbru</h3>
                <p className="text-amber-300 text-lg">Emotion-Engineered Pet Products</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-700">
              <h4 className="font-bold text-xl mb-4 text-yellow-400">📞 Contact</h4>
              <p className="text-amber-300 mb-2">hello@zibbru.com</p>
              <p className="text-amber-300">+91&nbsp;98765&nbsp;43210</p>
            </div>

            {/* Support */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-700">
              <h4 className="font-bold text-xl mb-4 text-yellow-400">🛡️ Support</h4>
              <p className="text-amber-300 mb-2">30-Day Guarantee</p>
              <p className="text-amber-300">Free Delivery</p>
            </div>

            {/* Social */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-700">
              <h4 className="font-bold text-xl mb-4 text-yellow-400">📱 Social</h4>
              <p className="text-amber-300 mb-2">@zibbru.pets</p>
              <p className="text-amber-300">Share your&nbsp;#LuxeNest moments</p>
            </div>

            {/* Promise */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-700">
              <h4 className="font-bold text-xl mb-4 text-yellow-400">🏆 Promise</h4>
              <p className="text-amber-300 mb-2">Hand-crafted Excellence</p>
              <p className="text-amber-300">Customer-first Care</p>
            </div>
          </div>

          <div className="text-amber-300">© {new Date().getFullYear()} Zibbru. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
