import HeroSection from '@/components/ui/hero-section'
import SectionContainer from '@/components/ui/section-container'
import EventCard from '@/components/ui/event-card'
import { upcomingEvents } from '@/lib/data/dummy-data'

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Featured Events Section */}
      <SectionContainer className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Events
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dive into cutting-edge workshops, hackathons, and tech talks that 
            will supercharge your development journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.slice(0, 3).map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </SectionContainer>

      {/* Stats Section */}
      <SectionContainer className="py-20 bg-gradient-to-r from-acm-blue/20 to-acm-cyan/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">500+</div>
            <div className="text-gray-300">Active Members</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">50+</div>
            <div className="text-gray-300">Events Hosted</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">20+</div>
            <div className="text-gray-300">Projects Built</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">15+</div>
            <div className="text-gray-300">Industry Partners</div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}