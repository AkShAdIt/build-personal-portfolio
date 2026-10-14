export type Project = {
  number: string
  name: string
  category: string
  description: string
  contribution?: string
  status: string
  tags: string[]
  links?: { label: string; href: string }[]
}

export const profile = {
  name: 'Akshayaditya K R',
  initials: 'AKR',
  headline: 'Aspiring backend developer building useful systems with AI.',
  intro: 'I explore backend engineering, agentic AI, and the tools that make modern software work beneath the surface.',
  email: '',
  github: '',
  linkedin: '',
  resume: '',
}

export const skills = {
  building: ['Backend systems', 'APIs', 'AI-assisted development', 'Agentic workflows'],
  exploring: ['Web development', 'Analytics', 'DevOps'],
}

export const projects: Project[] = [
  { number: '01', name: 'Matchmint', category: 'Sports platform', description: 'A cricket tournament management platform for auctions, fixtures, live scoring, standings, player statistics, and match viewing.', status: 'Project', tags: ['Tournament management', 'Live scoring', 'Analytics'] },
  { number: '02', name: 'MemChat', category: 'Cloud storage', description: 'A chat-first cloud storage platform designed to make file organization and retrieval feel conversational.', status: 'Project', tags: ['Cloud storage', 'Conversational UX', 'File management'] },
  { number: '03', name: 'Namma3DLab', category: '3D printing', description: 'A focused platform designed to streamline access to 3D printing services and simplify the printing workflow.', status: 'Project', tags: ['3D printing', 'Service platform', 'Workflow'] },
  { number: '04', name: 'Attendly', category: 'Attendance', description: 'An attendance management application with a swipe-based marking experience and AI-based analytics.', status: 'Project', tags: ['Attendance', 'Mobile UX', 'Analytics'] },
  { number: '05', name: 'Devactics', category: 'Developer tools', description: 'A website traffic analytics and visitor verification platform built for developers.', status: 'Project', tags: ['Traffic insights', 'Geography', 'Verification'] },
  { number: '06', name: 'Sakhi', category: 'Healthcare assistant', description: 'An offline-first, voice-enabled healthcare assistant designed to improve access to information with less dependence on connectivity.', contribution: 'Implemented the AI integration, offline agent functionality, API connections, and Google login integration.', status: 'Open source', tags: ['Offline-first', 'Voice-enabled', 'AI assistant'] },
  { number: '07', name: 'CrowdRakshak', category: 'Safety systems', description: 'An AI-powered crowd monitoring system designed to analyze crowd conditions and assist with identifying potential safety risks.', status: 'Project', tags: ['Computer vision', 'Monitoring', 'Safety'] },
  { number: '08', name: 'Paysure', category: 'Payments', description: 'A merchant payment verification platform designed to improve payment confirmation reliability.', contribution: 'Worked on the backend payment integration using Razorpay APIs and webhooks.', status: 'Project', tags: ['Razorpay', 'Webhooks', 'Backend'] },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export function getAvailableLinks() {
  return [
    profile.github && { label: 'GitHub', href: profile.github },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin },
    profile.email && { label: 'Email', href: `mailto:${profile.email}` },
  ].filter(Boolean) as { label: string; href: string }[]
}
