import SectionContainer from '@/components/ui/section-container'
import CyberpunkButton from '@/components/ui/cyberpunk-button'

export default function FangWeekendPage() {
  return (
    <SectionContainer className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Fang Weekend
          </h1>
          <p className="text-xl text-gray-300">
            48-Hour Intensive Hackathon • March 15-17, 2024
          </p>
        </div>

        <div className="glass-morphism rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-bold mb-1">When</h3>
              <p className="text-gray-300">March 15-17, 2024</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-bold mb-1">Where</h3>
              <p className="text-gray-300">Tech Innovation Center</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⏰</div>
              <h3 className="font-bold mb-1">Duration</h3>
              <p className="text-gray-300">48 Hours</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Fang Weekend is our premier 48-hour hackathon where innovation meets execution. 
            Join 200+ developers, designers, and innovators to build solutions for real-world 
            challenges. With mentorship from industry experts and access to cutting-edge 
            technologies, this is your chance to make an impact.
          </p>

          <CyberpunkButton className="w-full">
            Register for Fang Weekend
          </CyberpunkButton>
        </div>

        {/* Schedule */}
        <div className="glass-morphism rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-acm-cyan">Event Schedule</h2>
          <div className="space-y-4">
            {[
              { day: 'Day 1', events: ['Opening Ceremony', 'Team Formation', 'Hacking Begins'] },
              { day: 'Day 2', events: ['Workshops', 'Mentor Sessions', 'Mid-point Checkin'] },
              { day: 'Day 3', events: ['Hacking Ends', 'Project Demos', 'Award Ceremony'] }
            ].map((day, index) => (
              <div key={day.day} className="border-l-2 border-acm-cyan pl-4">
                <h3 className="text-xl font-bold mb-2">{day.day}</h3>
                <ul className="text-gray-300 space-y-1">
                  {day.events.map(event => (
                    <li key={event}>• {event}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}