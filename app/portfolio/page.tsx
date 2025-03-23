"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Award, Music, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import Image from "next/image"

type TabType = "projects" | "certificates" | "spotify-albums" | "partners"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabType>("projects")

  const tabs = [
    {
      id: "projects",
      label: "Projects",
      icon: Code2,
      available: true,
    },
    {
      id: "certificates",
      label: "Certificates (Soon)",
      icon: Award,
      available: false,
    },
    {
      id: "spotify-albums",
      label: "Spotify (Soon)",
      icon: Music,
      available: false,
    },
    {
      id: "partners",
      label: "Partners",
      icon: Users,
      available: true,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 portrait:pb-20 landscape:pt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 text-white">Portfolio Showcase</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore my journey through projects, certifications, and favorite music. Each section represents a part of
              who I am.
            </p>
          </motion.div>

          <div className="relative mb-12">
            <div className="bg-zinc-900 rounded-2xl" />

            <div className="grid grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => (tab.available ? setActiveTab(tab.id as TabType) : null)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-3 rounded-xl transition-all duration-300 relative text-center h-full",
                    tab.available
                      ? activeTab === tab.id
                        ? "bg-zinc-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-zinc-800/50"
                      : "text-gray-500 bg-zinc-800/30 cursor-not-allowed",
                  )}
                >
                  <tab.icon className={cn("w-5 h-5 sm:w-6 sm:h-6", !tab.available && "opacity-50")} />
                  <span className="text-xs sm:text-sm font-medium line-clamp-1">{tab.label}</span>
                  {activeTab === tab.id && tab.available && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-yellow-400 rounded-full"></span>
                  )}
                  {!tab.available && (
                    <span className="absolute -top-1 -right-1 text-xs px-1.5 py-0.5 bg-yellow-400/20 text-yellow-400 rounded-full hidden sm:inline-block">
                      Soon
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {activeTab === "projects" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-white">My Projects</h3>

                  <div className="grid gap-8">
                    {/* Coming Soon Project */}
                    <motion.div
                      className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 flex items-center justify-center p-8 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div>
                        <div className="w-16 h-16 bg-zinc-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Code2 className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Projects Coming Soon</h4>
                        <p className="text-gray-400">
                          Stay tuned for upcoming projects. I'm currently working on some exciting new projects that
                          will be showcased here.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "certificates" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">Certificate content coming soon...</h3>
                </div>
              </div>
            )}

            {activeTab === "spotify-albums" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-6 text-white">My Favorite Albums</h3>
                  <p className="text-gray-400 mb-4">Spotify album collection coming soon...</p>

                  <div className="flex items-center justify-center p-12">
                    <div className="text-center">
                      <Music className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                      <p className="text-gray-300">Stay tuned for my music collection!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "partners" && (
              <div className="grid gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-white">Our Partners</h3>

                  <div className="grid gap-8">
                    <motion.div
                      className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="relative w-full md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden bg-black">
                          <Image
                            src="https://i.ibb.co/tT3b1zwX/blob.jpg"
                            alt="⌗ HOSHINO ⋮ サポート - My Channel"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                          <h4 className="text-xl font-semibold mb-2">MFK - Mengoding Forum Coding</h4>
                          <p className="text-gray-400 mb-4">
                            A community of passionate developers sharing knowledge and resources to help each other grow
                            in the coding world.
                          </p>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <motion.a
                              href="https://www.whatsapp.com/channel/0029VadpJ1YGZNCuFznsSI3w"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 mr-2"
                              >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                              </svg>
                              Join Group
                            </motion.a>

                            <motion.a
                              href="https://wa.me/201128698632"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-4 py-3 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg transition-colors duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 mr-2"
                              >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                              </svg>
                              Contact Owner
                            </motion.a>
                          </div>

                          <div className="mt-4 text-sm text-gray-500">
                            <p>Owner: Angelo - nix</p>
                            <p>Phone: +20 11 28698632</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Navbar />
    </div>
  )
}

