'use client'

import { useState } from 'react'
import SectionContainer from '@/components/ui/section-container'
import CyberpunkButton from '@/components/ui/cyberpunk-button'

interface FormData {
  name: string
  email: string
  studentId: string
  major: string
  interests: string[]
  experience: string
}

export default function JoinPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    studentId: '',
    major: '',
    interests: [],
    experience: 'beginner'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <SectionContainer className="py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Join ACM
          </h1>
          <p className="text-xl text-gray-300">
            Become part of the most innovative tech community on campus
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-morphism rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-acm-cyan focus:neon-glow transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-acm-cyan focus:neon-glow transition-all"
                placeholder="student@college.edu"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Student ID *
              </label>
              <input
                type="text"
                required
                value={formData.studentId}
                onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-acm-cyan focus:neon-glow transition-all"
                placeholder="Enter your student ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Major *
              </label>
              <input
                type="text"
                required
                value={formData.major}
                onChange={(e) => setFormData({...formData, major: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-acm-cyan focus:neon-glow transition-all"
                placeholder="Your major"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Technical Interests
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Web Dev', 'AI/ML', 'Mobile', 'Cloud', 'Cybersecurity', 'Data Science'].map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-4 py-2 rounded-lg border transition-all ${
                    formData.interests.includes(interest)
                      ? 'bg-acm-cyan/20 border-acm-cyan text-acm-cyan neon-glow'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:border-acm-cyan'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Experience Level
            </label>
            <select
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-acm-cyan focus:neon-glow transition-all"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <CyberpunkButton type="submit" className="w-full">
            Join ACM Tech Society
          </CyberpunkButton>
        </form>
      </div>
    </SectionContainer>
  )
}