import SectionContainer from '@/components/ui/section-container'

const benefits = [
  {
    title: 'Technical Workshops',
    description: 'Weekly hands-on sessions on cutting-edge technologies and frameworks',
    icon: '💻'
  },
  {
    title: 'Industry Connections',
    description: 'Network with tech companies and professionals through our partner events',
    icon: '🌐'
  },
  {
    title: 'Project Collaboration',
    description: 'Work on real-world projects with talented peers and mentors',
    icon: '🚀'
  },
  {
    title: 'Career Development',
    description: 'Resume reviews, interview prep, and career guidance from seniors',
    icon: '🎯'
  },
  {
    title: 'Hackathons',
    description: 'Participate in competitive coding events with amazing prizes',
    icon: '⚡'
  },
  {
    title: 'Learning Resources',
    description: 'Access to premium courses, tools, and learning materials',
    icon: '📚'
  }
]

export default function BenefitsPage() {
  return (
    <SectionContainer className="py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
          Why Join ACM?
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Unlock exclusive benefits that will accelerate your tech career and 
          connect you with an amazing community of innovators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="glass-morphism rounded-2xl p-6 hover:neon-glow transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-acm-cyan">
              {benefit.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 glass-morphism rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gradient">Membership Perks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl md:text-5xl font-bold text-acm-cyan mb-2">100%</div>
            <div className="text-gray-300">Free Membership</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold text-acm-cyan mb-2">24/7</div>
            <div className="text-gray-300">Community Access</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold text-acm-cyan mb-2">50+</div>
            <div className="text-gray-300">Learning Hours/Month</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold text-acm-cyan mb-2">1:1</div>
            <div className="text-gray-300">Mentorship Available</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}