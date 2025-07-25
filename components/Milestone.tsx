"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Award, Building, Globe, Trophy } from "lucide-react"

interface Milestone {
  year: number
  label: string
}

interface MilestonesTimelineProps {
  milestones: Milestone[]
}

export default function MilestonesTimeline({ milestones }: MilestonesTimelineProps) {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(milestones[0])
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null)

  const milestoneDescriptions = {
    1958: "B.E. Billimoria & Company Ltd. was founded, marking the beginning of a journey in engineering and construction.",
    1975: "Completed our first landmark project, establishing our reputation for quality and excellence in construction.",
    1995: "Expanded operations pan-India, demonstrating our capability to deliver complex projects across different regions.",
    2010: "Received National Excellence Award, recognizing our outstanding contributions to the construction industry.",
    2024: "Celebrating over 67 years of delivering iconic projects that shape India's infrastructure and real estate landscape.",
  }

  const milestoneIcons = {
    1958: Building,
    1975: Award,
    1995: Globe,
    2010: Trophy,
    2024: Calendar,
  }

  const getProgressPercentage = (year: number) => {
    const startYear = milestones[0].year
    const endYear = milestones[milestones.length - 1].year
    return ((year - startYear) / (endYear - startYear)) * 100
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Timeline Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Through Time</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the key milestones that have shaped our company's legacy over the decades
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Background Timeline */}
        <div className="relative w-full h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full mb-20 shadow-inner">
          {/* Progress Line */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full shadow-lg"
            initial={{ width: 0 }}
            animate={{
              width: selectedMilestone ? `${getProgressPercentage(selectedMilestone.year)}%` : "0%",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Milestone Points */}
          {milestones.map((milestone, index) => {
            const IconComponent = milestoneIcons[milestone.year as keyof typeof milestoneIcons]
            const isSelected = selectedMilestone?.year === milestone.year
            const isHovered = hoveredMilestone === milestone.year
            const position = getProgressPercentage(milestone.year)

            return (
              <div
                key={milestone.year}
                className="absolute cursor-pointer group"
                style={{
                  left: `${position}%`,
                  transform: "translateX(-50%)",
                  top: "-12px",
                }}
                onClick={() => setSelectedMilestone(milestone)}
                onMouseEnter={() => setHoveredMilestone(milestone.year)}
                onMouseLeave={() => setHoveredMilestone(null)}
              >
                {/* Milestone Marker */}
                <motion.div
                  className={`relative w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-br from-blue-500 to-purple-600 border-white shadow-lg scale-125"
                      : isHovered
                        ? "bg-white border-blue-400 shadow-md scale-110"
                        : "bg-white border-gray-300 hover:border-blue-400"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent
                    className={`w-4 h-4 ${isSelected ? "text-white" : "text-gray-600 group-hover:text-blue-500"}`}
                  />

                  {/* Pulse Effect for Selected */}
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-400 opacity-30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}
                </motion.div>

                {/* Year Label */}
                <motion.div
                  className={`text-center mt-4 font-semibold transition-all duration-300 ${
                    isSelected ? "text-blue-600 scale-110" : isHovered ? "text-blue-500" : "text-gray-700"
                  }`}
                  animate={{ y: isSelected ? -2 : 0 }}
                >
                  {milestone.year}
                </motion.div>

                {/* Milestone Label */}
                <div
                  className={`text-center mt-1 text-sm transition-all duration-300 ${
                    isSelected ? "text-gray-900 font-medium" : "text-gray-600"
                  }`}
                >
                  {milestone.label}
                </div>

                {/* Hover Tooltip */}
                <AnimatePresence>
                  {isHovered && !isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg z-10"
                    >
                      Click to learn more
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Milestone Details Card */}
        <AnimatePresence mode="wait">
          {selectedMilestone && (
            <motion.div
              key={selectedMilestone.year}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-50" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      {(() => {
                        const IconComponent = milestoneIcons[selectedMilestone.year as keyof typeof milestoneIcons]
                        return <IconComponent className="w-6 h-6 text-white" />
                      })()}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{selectedMilestone.year}</h3>
                      <p className="text-lg text-blue-600 font-medium">{selectedMilestone.label}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {milestoneDescriptions[selectedMilestone.year as keyof typeof milestoneDescriptions]}
                  </p>

                  {/* Timeline Position Indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Milestone {milestones.findIndex((m) => m.year === selectedMilestone.year) + 1} of{" "}
                      {milestones.length}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Hint */}
      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">Click on any milestone above to explore our journey</p>
      </div>
    </div>
  )
}

// Example usage
const sampleMilestones = [
  { year: 1958, label: "Company Founded" },
  { year: 1975, label: "First Landmark Project" },
  { year: 1995, label: "Pan-India Expansion" },
  { year: 2010, label: "National Excellence Award" },
  { year: 2024, label: "67 Years of Excellence" },
]

// Export the component with sample data for demonstration
export function TimelineDemo() {
  return <MilestonesTimeline milestones={sampleMilestones} />
}
