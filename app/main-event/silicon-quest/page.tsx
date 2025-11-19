import SectionContainer from '@/components/ui/section-container'
import CyberpunkButton from '@/components/ui/cyberpunk-button'

export default function SiliconQuestPage() {
  return (
    <SectionContainer className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Silicon Quest
          </h1>
          <p className="text-xl text-gray-300">
            AI & Machine Learning Workshop • March 22, 2024
          </p>
        </div>

        <div className="glass-morphism rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-bold mb-1">When</h3>
              <p className="text-gray-300">March 22, 2024</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-bold mb-1">Where</h3>
              <p className="text-gray-300">Computer Lab B</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⏰</div>
              <h3 className="font-bold mb-1">Duration</h3>
              <p className="text-gray-300">4 Hours</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Silicon Quest is an intensive AI and Machine Learning workshop designed 
            for developers of all levels. Dive deep into practical ML implementation 
            using Python, TensorFlow, and real-world datasets. Whether you're a beginner 
            or looking to enhance your skills, this workshop will equip you with the 
            knowledge to build intelligent applications.
          </p>

          <CyberpunkButton className="w-full">
            Register for Silicon Quest
          </CyberpunkButton>
        </div>

        {/* Workshop Topics */}
        <div className="glass-morphism rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-acm-cyan">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Neural Networks Fundamentals',
              'TensorFlow & Keras Basics',
              'Data Preprocessing',
              'Model Training & Evaluation',
              'Computer Vision Applications',
              'Natural Language Processing',
              'Model Deployment',
              'Ethical AI Considerations'
            ].map((topic, index) => (
              <div key={topic} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-acm-cyan rounded-full"></div>
                <span className="text-gray-300">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}