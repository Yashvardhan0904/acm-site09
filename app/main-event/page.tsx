import SectionContainer from '@/components/ui/section-container'
import EventCard from '@/components/ui/event-card'
import { upcomingEvents } from '@/lib/data/dummy-data'
import Link from 'next/link'

export default function MainEventPage() {
  const mainEvents = upcomingEvents.filter(event => 
    event.registrationLink?.includes('/main-event/')
  )

  return (
    <SectionContainer className="py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
          Main Events
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Flagship events that define the ACM experience. Dive deep into innovation 
          and push your boundaries with these premier tech challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {mainEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>

      {/* Event Highlights */}
      <div className="glass-morphism rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-acm-cyan text-center">
          Why Attend Our Main Events?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Win Amazing Prizes</h3>
            <p className="text-gray-300">Cash prizes, tech gadgets, and internship opportunities</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Network with Experts</h3>
            <p className="text-gray-300">Connect with industry professionals and mentors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-2">Career Opportunities</h3>
            <p className="text-gray-300">Get noticed by top tech companies and recruiters</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}