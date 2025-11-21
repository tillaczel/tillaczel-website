'use client'

import { motion } from 'framer-motion'
import thesisData from '@/data/thesis-supervision.json'

interface Thesis {
  id: number
  student: string
  title: string
  year: number
  type: string
  status: 'completed' | 'in-progress'
  description: string
}

export default function Teaching() {
  const theses = thesisData as Thesis[]

  return (
    <section id="teaching" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="section-title text-center mb-12">Teaching</h1>

        {/* Hands-On Deep Learning Course */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="card">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl">🎓</div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Hands-On Deep Learning
                </h2>
                <p className="text-gray-400 mt-1">Graduate Course</p>
              </div>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                This comprehensive course provides students with both theoretical understanding and 
                practical skills in deep learning. Through a combination of lectures, hands-on 
                coding sessions, and real-world projects, students learn to design, implement, 
                and deploy deep neural networks for various applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Topics Covered</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Neural Networks Fundamentals</li>
                    <li>• Convolutional Neural Networks</li>
                    <li>• Recurrent Neural Networks</li>
                    <li>• Transformers & Attention</li>
                    <li>• Generative Models</li>
                    <li>• Transfer Learning</li>
                  </ul>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-400 mb-2">Course Format</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Weekly lectures (3 hours)</li>
                    <li>• Hands-on lab sessions</li>
                    <li>• Group projects</li>
                    <li>• Final capstone project</li>
                    <li>• Guest lectures from industry</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thesis Supervision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Thesis Supervision
          </h2>
          
          <div className="space-y-6">
            {theses.map((thesis, index) => (
              <motion.div
                key={thesis.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        thesis.status === 'completed'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                      }`}>
                        {thesis.status === 'completed' ? '✓ Completed' : 'In Progress'}
                      </span>
                      <span className="text-gray-500 text-sm">{thesis.type}</span>
                      <span className="text-gray-500 text-sm">• {thesis.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-400">
                      {thesis.title}
                    </h3>
                    <p className="text-gray-400 mb-3 font-medium">
                      {thesis.student}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {thesis.description}
                    </p>
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

