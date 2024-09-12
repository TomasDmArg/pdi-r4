import { Job, SkillSet } from '@/types/types'

export const jobs: Job[] = [
  {
    title: 'Founder & Full Stack Developer',
    company: 'ChatterPay',
    period: 'Sep 2024 - Present',
    responsibilities: [
      'Developing a platform to make DeFi as easy to use as sending a text message',
      'Leading product development, technical architecture, and team management',
      'Winner of Ethereum Uruguay 2024 and ETH Argentina 2024 hackathons'
    ]
  },
  {
    title: 'Full Stack Developer and Internships Lead',
    company: 'FinGurú',
    period: 'Jan 2024 - Present',
    responsibilities: [
      'Migrated Wordpress site to Next.js for improved performance and flexibility',
      'Developed portal using Next.js/React, TypeScript, SASS, and Strapi CMS',
      'Built and coordinated the construction of a course platform',
      'Built a multi-agent AI article generation system',
      'Integrated local payment systems for subscriptions and course payments',
      'Led a team of 5 intern developers',
      'Implemented a content management system for both courses and the portal',
      'Executed UI/UX redesigns and deployed projects on Google Cloud'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'ColosoLife',
    period: 'Apr 2023 - Dec 2023',
    responsibilities: [
      'Developed cross-platform app (Android/iOS/Web) using Ionic and React',
      'Designed UI/UX MVP with Figma',
      'Implemented back-end with PostgreSQL/Supabase'
    ]
  },
  {
    title: 'Lead Developer',
    company: 'Tranqui',
    period: 'December 2022 - Present',
    responsibilities: [
      'Led the development of a suicide prevention app',
      'Acted as a communication bridge between psychologists and developers',
      'Organized and managed a team of 6 developers to successfully launch the app',
      'Achieved media coverage on radio, TV, and news outlets, resulting in active users'
    ]
  },
  {
    title: 'Frontend Developer & UI Design',
    company: 'MAJR',
    period: 'Oct 2022 - Apr 2023',
    responsibilities: [
      'Developed main company website and DAO website',
      'Redesigned browser extension UI with neomorphic design and pivoted product',
      'Created user dashboard with smart contract integration (Ethereum mainnet)',
      'Implemented live data visualization, staking, NFT minting and presentation, contests',
      'Developed design system (public Figma and NPM package)',
      'Built creators MVP landing, extension landing, and login/onboarding app',
      'Designed and developed multiple landings and web apps'
    ]
  },
  {
    title: 'Full Stack Developer & Crypto Analyst',
    company: 'Invicta Crypto',
    period: 'Mar 2022 - Oct 2022',
    responsibilities: [
      'Developed VC presentation site, blog, and custom newsletter system',
      'Created admin dashboard and implemented social media automation',
      'Set up and administered cloud/Linux servers',
      'Built backend with PostgreSQL/Supabase and Next.js/Node',
      'Designed UI for various projects',
      'Reviewed Web3 projects from product and financial perspectives',
      'Participated in investment decisions and startup team discussions'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'CryptoPrices.com.ar',
    period: 'Feb 2021 - Mar 2022',
    responsibilities: [
      'Developed initial site with vanilla JavaScript',
      'Redesigned into a Single Page Application (SPA)',
      'Gathered and incorporated user feedback',
      'Rebuilt the application with Next.js for improved maintainability and best practices'
    ]
  },
  {
    title: 'Frontend Developer & WordPress Admin',
    company: 'Vale Soñar',
    period: 'Jul 2020 - Nov 2020',
    responsibilities: [
      'Customized WordPress e-commerce site with HTML/CSS/JS',
      'Managed product updates and item uploads'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'Enganches DIMA',
    period: 'Dec 2019 - Feb 2020',
    responsibilities: [
      'Created static website for family business',
      'Set up Facebook/Instagram pages and Google Business profile',
      'Implemented Google Maps integration',
      'Contributed to significant business growth and sustainability'
    ]
  }
]

export const achievements = [
    {
      title: 'ChatterPay',
      description: 'Winner team (1 of 6) - Ethereum Uruguay 2024. Grants from The Graph, ICP and Scroll.'
    },
    {
      title: 'ChatterPay',
      description: '1st place - The Level Up Hackathon by Ethereum Argentina 2024 - Keystore track, General. API3 Grant. Most-voted team on quadratic funding.'
    },
    {
      title: 'VeriTrust Protocol',
      description: '1st place - ETH Argentina Hackathon 2023 - Public Goods Track. Chainlink Grant. Most-voted team on quadratic funding.'
    },
    {
      title: 'FinGurú',
      description: '1st place - Algorand Hacker House 2023 (LABITCONF, Buenos Aires - Argentina)'
    },
    {
      title: 'Olimpiada Informática Argentina',
      description: '5th Argentina - OIA 2021 l2, C++ Problem Solving'
    }
];

export const skillSets: SkillSet[] = [
  { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'C++', 'PHP'] },
  { category: 'Front-end', skills: ['React.js', 'Next.js', 'HTML', 'CSS/SASS'] },
  { category: 'Back-end', skills: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'Firebase'] },
  { category: 'Blockchain', skills: ['Ethereum', 'Smart Contracts', 'DeFi protocols'] },
  { category: 'Tools', skills: ['Git', 'Figma', 'Linux', 'Google Cloud', 'Supabase'] }
]
