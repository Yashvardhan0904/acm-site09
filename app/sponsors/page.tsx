import SectionContainer from '@/components/ui/section-container'
import SponsorCard from '@/components/ui/sponsor-card'
import { sponsors } from '@/data/dummy-data'
import CyberpunkButton from '@/components/ui/cyberpunk-button'

export default function SponsorsPage() {
  return (
    <SectionContainer className="py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
          Our Sponsors
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We're proud to partner with industry leaders who support our mission 
          of fostering the next generation of tech innovators.
        </p>
      </div>

      {/* Sponsors by Tier */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-acm-cyan text-center">Platinum Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.filter(s => s.tier === 'platinum').map((sponsor, index) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-acm-cyan text-center">Gold Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.filter(s => s.tier === 'gold').map((sponsor, index) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-acm-cyan text-center">Silver Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.filter(s => s.tier === 'silver').map((sponsor, index) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
          ))}
        </div>
      </div>

      {/* Become a Sponsor CTA */}
      <div className="glass-morphism rounded-2xl p-8 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Interested in Sponsoring?</h2>
        <p className="text-xl text-gray-300 mb-6">
          Join our network of partners and help shape the future of tech talent.
        </p>
        <CyberpunkButton>
          Become a Sponsor
        </CyberpunkButton>
      </div>
    </SectionContainer>
  )
}