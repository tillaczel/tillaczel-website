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
                🎓 Hands-On Deep Learning
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                A practical deep learning course where students move from theory to real-world implementation. They learn to build models in PyTorch across image classification and generation, audio denoising, natural language processing, graph neural networks, and reinforcement learning.
              </p>

              <div className="bg-gray-700/30 p-4 rounded-lg mb-6 border border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  <strong className="text-blue-400">Course Overhaul:</strong>
                  When I took over the course, enrollment was around 30 students. I scaled it to 150, modernized the content, and reworked the assignments to ensure they meaningfully test understanding.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3 text-lg">Key Improvements & Implementations</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        <strong>Scalable Infrastructure:</strong> Built automated GPU-backed grading on the CodeExpert platform using SLURM. This infrastructure allows the course to scale from 30 to 150 students while keeping evaluations reliable and fair.
                      </span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        <strong>Discussions:</strong> Introduced interactive 2-on-1 sessions with students and TAs. These ensure genuine understanding despite ChatGPT assistance and give students space to clarify concepts through real dialogue.
                      </span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        <strong>Modernized Content:</strong> Added topics such as diffusion models, LoRA fine-tuning, next-token prediction pretraining, and other contemporary deep learning techniques to keep the course aligned with current research.
                      </span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>
                        <strong>Competitive Challenge:</strong> Introduced weekly/biweekly model-building challenges with a public leaderboard, where students compete for the top 3 spots—making the course more engaging and motivating.
                      </span>
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
                      <span className="text-gray-500 dark:text-gray-500 text-sm">{getTypeLabel(thesis.type)}</span>
                      <span className="text-gray-500 dark:text-gray-500 text-sm">• {formatSemester(thesis.semester)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">
                      {thesis.title.replace(' [confidential]', '')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      <span className="font-medium">Student:</span> {thesis.students.length > 0 ? thesis.students.join(', ') : 'N/A'}
                    </p>
                    {thesis.supervisors.filter(s => s !== 'Till Aczel').length > 0 && (
                      <p className="text-gray-500 dark:text-gray-500 text-sm">
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

