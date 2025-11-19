import SectionContainer from '@/components/ui/section-container'
import EventCard from '@/components/ui/event-card'
import { upcomingEvents, pastEvents } from '@/data/dummy-data'

export default function EventsPage() {
  return (
    <SectionContainer className="py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
          Events & Workshops
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Stay ahead of the curve with our curated events designed to enhance 
          your technical skills and connect you with industry leaders.
        </p>
      </div>

      {/* Upcoming Events */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-acm-cyan">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-acm-cyan">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>
    </SectionContainer>
  )
}