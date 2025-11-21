'use client'

import { motion } from 'framer-motion'
import thesisData from '@/data/thesis-supervision.json'

interface Thesis {
  title: string
  type: string
  supervisors: string[]
  semester: string
  students: string[]
  status: 'current' | 'finished'
}

export default function Teaching() {
  const theses = thesisData as Thesis[]
  
  const getTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      'B': "Bachelor's Thesis",
      'M': "Master's Thesis",
      'S': "Semester Project",
      'G': "Group Project"
    }
    return types[type] || type
  }

  const formatSemester = (semester: string) => {
    const match = semester.match(/(HS|FS)\s*(\d+)/)
    if (match) {
      const [, term, year] = match
      const fullYear = `20${year}`
      const termName = term === 'HS' ? 'Fall' : 'Spring'
      return `${termName} ${fullYear}`
    }
    return semester
  }

  return (
    <section id="teaching" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title text-center mb-12">Teaching</h1>

        {/* Hands-On Deep Learning Course */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="card">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                🎓 Hands-On Deep Learning — Graduate Course
              </h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Dive deep into modern deep learning with this lab-based course designed to build both theory and real-world experience. Using PyTorch, students engage in a sequence of hands-on exercises covering six critical themes: computer vision, audio processing, graph neural networks, natural language processing, reinforcement learning, and generative AI.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3 text-lg">Course Structure & Format</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Biweekly Modules:</strong> The course is divided into six topics, each spanning two weeks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Interactive Sessions:</strong> In each class, students collaborate (or work independently) on a Python notebook walking through the topic, and then tackle a challenge on CodeExpert.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Discussion Rounds:</strong> Every other week, you discuss your notebook and challenge solutions with a TA — a 15–20 minute session to deepen understanding.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Grading:</strong> The course uses a point system (180 total points), split across session attendance, notebook work, challenges, and discussions. To pass, you need ≥150 points.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Compute Access:</strong> Notebooks require GPU — you can use ETH's Snowflake cluster (via SLURM) or Google Colab.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-3 text-lg">Prerequisites</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Solid understanding of deep learning fundamentals, e.g., from a course like Computational Thinking (Chapters 5 & 6) or self-study.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Proficiency in an imperative programming language — Python is used in class, so basic Python skills (lists, control flow, functions) are required.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-pink-400 mb-3 text-lg">Learning Outcomes</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Build and train neural networks across domains: vision, audio, graphs, NLP, RL, and generative models.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Gain hands-on mastery of PyTorch through guided notebooks and challenge tasks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Develop problem-solving practice by submitting challenges on CodeExpert and receiving immediate feedback.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Reflect and articulate your solutions: discuss your work in small-group sessions with TAs to solidify your understanding.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thesis Supervision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Thesis Supervision
          </h2>
          
          <div className="space-y-4">
            {theses.map((thesis, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        thesis.status === 'current'
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                          : 'bg-green-500/20 text-green-400 border border-green-500/50'
                      }`}>
                        {thesis.status === 'current' ? 'In Progress' : '✓ Completed'}
                      </span>
                      <span className="text-gray-500 text-sm">{getTypeLabel(thesis.type)}</span>
                      <span className="text-gray-500 text-sm">• {formatSemester(thesis.semester)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">
                      {thesis.title.replace(' [confidential]', '')}
                    </h3>
                    <p className="text-gray-400 mb-1">
                      <span className="font-medium">Student:</span> {thesis.students.length > 0 ? thesis.students.join(', ') : 'N/A'}
                    </p>
                    {thesis.supervisors.filter(s => s !== 'Till Aczel').length > 0 && (
                      <p className="text-gray-500 text-sm">
                        <span className="font-medium">Co-supervised by:</span> {thesis.supervisors.filter(s => s !== 'Till Aczel').join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

