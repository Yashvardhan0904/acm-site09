import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="glass-morphism border-t border-acm-cyan/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-acm-cyan to-acm-blue rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">ACM</span>
              </div>
              <span className="text-xl font-bold neon-text">TECH SOCIETY</span>
            </Link>
            <p className="text-gray-300 max-w-md">
              Empowering students through technology, innovation, and collaboration. 
              Join us in shaping the future of software development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-acm-cyan">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/events" className="text-gray-300 hover:text-acm-cyan transition-colors">Events</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-acm-cyan transition-colors">About</Link></li>
              <li><Link href="/join" className="text-gray-300 hover:text-acm-cyan transition-colors">Join Us</Link></li>
              <li><Link href="/sponsors" className="text-gray-300 hover:text-acm-cyan transition-colors">Sponsors</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-acm-cyan">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: acm@college.edu</li>
              <li>Campus: Tech Building, Room 301</li>
              <li>Meeting: Every Thursday, 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ACM Tech Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}