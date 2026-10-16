export type Project = {
  number: string
  name: string
  category: string
  description: string
  contribution?: string
  status: string
  tags: string[]
  architecture?: string
  links?: { label: string; href: string }[]
}

export const profile = {
  name: 'Akshayaditya K R',
  initials: 'AKR',
  headline: 'Aspiring backend developer building robust systems with agentic AI.',
  intro: 'I specialize in backend architectures, microservices, and AI-assisted engineering — designing resilient APIs, database layers, and agentic workflows beneath the surface.',
  email: 'akshadit1976@gmail.com',
  github: 'https://www.github.com/AkShAdIt',
  linkedin: 'https://www.linkedin.com/in/akshayadityakr/',
  resume: '',
}

export const skills = {
  building: [
    'Backend Systems',
    'REST & GraphQL APIs',
    'PostgreSQL / SQL',
    'Node.js & TypeScript',
    'Python',
    'Agentic AI Workflows',
    'Webhook Architectures',
    'System Design',
  ],
  exploring: [
    'Distributed Systems',
    'Microservices',
    'Docker & CI/CD',
    'Vector Databases',
    'Redis Caching',
    'Observability & Metrics',
  ],
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'Matchmint',
    category: 'Sports Infrastructure',
    description: 'A comprehensive cricket tournament management platform engineered for real-time auctions, dynamic fixture scheduling, live ball-by-ball scoring, standings, and deep player statistics.',
    status: 'Production Ready',
    tags: ['Next.js', 'PostgreSQL', 'WebSockets', 'Live Scoring', 'Analytics'],
    architecture: 'Real-time WebSocket event streaming paired with a transactional SQL schema for concurrent auction bidding and ball-by-ball score distribution.',
    links: [{ label: 'GitHub', href: 'https://www.github.com/AkShAdIt' }],
  },
  {
    number: '02',
    name: 'MemChat',
    category: 'Intelligent Storage',
    description: 'A conversational cloud storage engine designed to turn raw file hierarchies into queryable, contextual knowledge through natural language retrieval.',
    status: 'Active Prototype',
    tags: ['AI Embeddings', 'Cloud Storage', 'Vector Search', 'Node.js'],
    architecture: 'Hybrid vector search pipeline indexing document chunks with metadata filtering for fast semantic retrieval.',
    links: [{ label: 'GitHub', href: 'https://www.github.com/AkShAdIt' }],
  },
  {
    number: '03',
    name: 'Namma3DLab',
    category: 'Service Platform',
    description: 'A digitized workflow engine streamlining 3D printing orders, file validation, queue management, and print job dispatching for makers and labs.',
    status: 'Operational',
    tags: ['Workflow Automation', 'REST API', 'Queue Management', 'TypeScript'],
    architecture: 'Asynchronous job queue processing 3D CAD mesh files with automated dimensional validation and slice estimation.',
    links: [{ label: 'GitHub', href: 'https://www.github.com/AkShAdIt' }],
  },
  {
    number: '04',
    name: 'Attendly',
    category: 'Attendance & Analytics',
    description: 'An attendance management application featuring an intuitive swipe-based attendance marking mechanism backed by predictive presence analytics.',
    status: 'Engineered',
    tags: ['Mobile UX', 'Analytics', 'PostgreSQL', 'API Design'],
    architecture: 'High-throughput batch attendance ingestion endpoint with optimistic UI updates and anomaly detection heuristics.',
    links: [{ label: 'GitHub', href: 'https://www.github.com/AkShAdIt' }],
  },
  {
    number: '05',
    name: 'Devactics',
    category: 'Developer Analytics',
    description: 'A privacy-conscious website traffic analytics and visitor verification platform built specifically for developer tools and technical documentation.',
    status: 'Open Source',
    tags: ['Traffic Insights', 'Geo-IP', 'Telemetry Engine', 'Privacy First'],
    architecture: 'Lightweight client-side telemetry ping collector writing to an append-only time-series analytics buffer.',
    links: [{ label: 'GitHub', href: 'https://www.github.com/AkShAdIt' }],
  },
  {
    number: '06',
    name: 'Sakhi',
    category: 'Healthcare Assistant',
    description: 'An offline-first, voice-enabled healthcare assistant built for low-connectivity regions, enabling natural query resolution without constant internet access.',
    contribution: 'Implemented the AI integration, offline agent functionality, speech API connections, and Google OAuth login integration.',
    status: 'Open Source',
    tags: ['Offline-First', 'Voice AI', 'Agentic Logic', 'OAuth 2.0'],
    architecture: 'On-device local LLM execution coupled with fallback server synchronization when network connectivity restores.',
    links: [{ label: 'GitHub', href: 'https://www.github.com/AkShAdIt' }],
  },
  {
    number: '07',
    name: 'CrowdRakshak',
    category: 'Safety Systems',
    description: 'An AI-powered computer vision monitoring system that detects crowd densities, bottlenecks, and hazardous movement patterns in public venues.',
    status: 'Research Project',
    tags: ['Computer Vision', 'Real-Time Telemetry', 'Safety', 'Alert Pipeline'],
    architecture: 'Frame-by-frame object tracking inference pipeline feeding an alert dispatch webhook on threshold breaches.',
    links: [{ label: 'GitHub', href: 'https://www.github.com/AkShAdIt' }],
  },
  {
    number: '08',
    name: 'Paysure',
    category: 'Fintech Infrastructure',
    description: 'A robust merchant payment verification platform designed to guarantee double-verification and idempotent payment confirmations.',
    contribution: 'Engineered the backend payment integration using Razorpay APIs, webhook signature verification, and transactional reconciliation.',
    status: 'Production Grade',
    tags: ['Razorpay', 'Webhooks', 'Idempotency', 'Fintech Security'],
    architecture: 'HMAC SHA256 cryptographic signature validation on Razorpay webhooks with distributed locking to prevent duplicate credit processing.',
    links: [{ label: 'GitHub', href: 'https://www.github.com/AkShAdIt' }],
  },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Open Source', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export function getAvailableLinks() {
  return [
    profile.email && { label: 'Email', href: `mailto:${profile.email}`, value: profile.email },
    profile.github && { label: 'GitHub', href: profile.github, value: 'AkShAdIt' },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin, value: 'akshayadityakr' },
  ].filter(Boolean) as { label: string; href: string; value: string }[]
}

