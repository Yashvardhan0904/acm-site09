

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: 'workshop' | 'hackathon' | 'talk' | 'social'
  image: string
  registrationLink?: string
}

export interface Sponsor {
  id: string
  name: string
  tier: 'platinum' | 'gold' | 'silver'
  logo: string
  website: string
}

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Fang Weekend Hackathon',
    description: '48-hour intensive hackathon building solutions for real-world problems with industry mentors.',
    date: '2024-03-15',
    time: '6:00 PM',
    location: 'Tech Innovation Center',
    type: 'hackathon',
    image: '/images/fang-weekend.jpg',
    registrationLink: '/main-event/fangweekend'
  },
  {
    id: '2',
    title: 'Silicon Quest AI Workshop',
    description: 'Hands-on workshop exploring machine learning and AI implementation with Python and TensorFlow.',
    date: '2024-03-22',
    time: '2:00 PM',
    location: 'Computer Lab B',
    type: 'workshop',
    image: '/images/silicon-quest.jpg',
    registrationLink: '/main-event/silicon-quest'
  },
  {
    id: '3',
    title: 'Web3 & Blockchain Fundamentals',
    description: 'Deep dive into blockchain technology, smart contracts, and decentralized applications.',
    date: '2024-04-05',
    time: '4:00 PM',
    location: 'Lecture Hall A',
    type: 'talk',
    image: '/images/web3-talk.jpg'
  }
]

export const pastEvents: Event[] = [
  {
    id: '4',
    title: 'React Native Mobile Dev',
    description: 'Building cross-platform mobile applications with React Native and Expo.',
    date: '2024-02-10',
    time: '3:00 PM',
    location: 'Dev Studio',
    type: 'workshop',
    image: '/images/react-native.jpg'
  },
  {
    id: '5',
    title: 'Cloud Infrastructure Day',
    description: 'AWS and Azure cloud services overview with hands-on deployment sessions.',
    date: '2024-01-28',
    time: '10:00 AM',
    location: 'Cloud Lab',
    type: 'workshop',
    image: '/images/cloud-day.jpg'
  }
]

export const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'TechCorp',
    tier: 'platinum',
    logo: '/logos/techcorp.png',
    website: 'https://techcorp.com'
  },
  {
    id: '2',
    name: 'DevSolutions',
    tier: 'gold',
    logo: '/logos/devsolutions.png',
    website: 'https://devsolutions.com'
  },
  {
    id: '3',
    name: 'CodeHub',
    tier: 'silver',
    logo: '/logos/codehub.png',
    website: 'https://codehub.com'
  }
]