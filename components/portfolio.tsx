'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Cpu,
  Layers,
  Mail,
  Menu,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'
import {
  navItems,
  profile,
  projects,
  skills,
  getAvailableLinks,
  type Project,
} from '@/lib/portfolio-data'

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function ProjectCard({
  project,
  expandedArch,
  onToggleArch,
}: {
  project: Project
  expandedArch: boolean
  onToggleArch: () => void
}) {
  return (
    <div className="project-card-shell">
      <article className="project-card">
        <div>
          <div className="project-card-top">
            <span className="project-index">{project.number}</span>
            <span className="project-status-badge">{project.status}</span>
          </div>

          <div className="project-card-body">
            <p className="eyebrow">{project.category}</p>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>

            {project.contribution && (
              <div className="project-contribution">
                <strong>Key Focus:</strong> {project.contribution}
              </div>
            )}

            {expandedArch && project.architecture && (
              <div className="architecture-box">
                <strong>
                  <Cpu size={14} /> System Architecture
                </strong>
                {project.architecture}
              </div>
            )}

            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-footer">
          {project.architecture ? (
            <button
              type="button"
              className="arch-toggle-btn"
              onClick={onToggleArch}
              aria-label={`Toggle architecture details for ${project.name}`}
            >
              <Layers size={13} />
              {expandedArch ? 'Hide Architecture' : 'Inspect Architecture'}
            </button>
          ) : (
            <span />
          )}

          <div className="project-links">
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} on ${link.label}`}
              >
                {link.label} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({})

  const availableLinks = getAvailableLinks()

  // Filter categories
  const categories = ['All', 'Backend & Systems', 'AI & Embeddings', 'DevOps & Tools']

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'All') return true
    if (selectedCategory === 'Backend & Systems') {
      return (
        project.category.includes('Sports') ||
        project.category.includes('Fintech') ||
        project.category.includes('Attendance')
      )
    }
    if (selectedCategory === 'AI & Embeddings') {
      return (
        project.category.includes('Intelligent') ||
        project.category.includes('Healthcare') ||
        project.category.includes('Safety')
      )
    }
    if (selectedCategory === 'DevOps & Tools') {
      return (
        project.category.includes('Developer') ||
        project.category.includes('Service')
      )
    }
    return true
  })

  function toggleArch(projectName: string) {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectName]: !prev[projectName],
    }))
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText(profile.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    event.currentTarget.style.setProperty('--pointer-x', `${x.toFixed(3)}`)
    event.currentTarget.style.setProperty('--pointer-y', `${y.toFixed(3)}`)
  }

  function handlePointerLeave(event: React.PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty('--pointer-x', '0')
    event.currentTarget.style.setProperty('--pointer-y', '0')
  }

  return (
    <div
      className="site-shell"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Floating Island Navigation Header */}
      <div className="site-header-wrapper">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Back to top">
            <span>{profile.initials}</span>
            <small>backend systems</small>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            <span>Let&apos;s talk</span>
            <ArrowDown size={13} />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </header>
      </div>

      {/* Mobile Fullscreen Glass Drawer */}
      {menuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-header">
            <span className="wordmark">
              <span>{profile.initials}</span>
              <small>navigation</small>
            </span>
            <button
              className="menu-button"
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <p className="eyebrow">Connect Directly</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="button button-ghost"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="button button-ghost"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      <main id="top">
        {/* Hero Section */}
        <section className="hero section-wrap">
          <div className="hero-badge">
            <span className="status-dot" />
            <span className="hero-kicker">
              Available for backend internship opportunities · 2026
            </span>
          </div>

          <h1>
            Architecting <em>robust</em>
            <br />
            systems beneath
            <br />
            the surface.
          </h1>

          <div className="hero-bottom">
            <p>{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <span>Explore Projects</span>
                <span className="button-icon-pill">
                  <ArrowDown size={14} aria-hidden="true" />
                </span>
              </a>

              <button
                type="button"
                className="button button-ghost"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                <span className="button-icon-pill">
                  {copiedEmail ? (
                    <Check size={14} color="#52a447" />
                  ) : (
                    <Copy size={14} />
                  )}
                </span>
              </button>
            </div>
          </div>

          <div className="scroll-note">
            <span>01</span>
            <span className="line" />
            <span>scroll to explore architecture</span>
          </div>
        </section>

        {/* 01 / About Section */}
        <section id="about" className="section-wrap split-section">
          <div className="section-label">01 / philosophy</div>
          <div className="section-content">
            <h2>
              Curious about how
              <br />
              <em>complex systems hold.</em>
            </h2>
            <p className="large-copy">
              I&apos;m {profile.name}, a backend developer and systems thinker
              dedicated to understanding how modern software scales — from
              transactional API gateways and database schemas to autonomous AI
              agents.
            </p>
            <p>
              I thrive on engineering predictable, high-availability components:
              idempotent webhook listeners, asynchronous queues, and real-time
              telemetry. My focus is combining foundational backend engineering
              with modern agentic AI tooling to deliver real, production-ready
              utility.
            </p>
          </div>
        </section>

        {/* 02 / Capabilities Section */}
        <section id="skills" className="section-wrap split-section skills-section">
          <div className="section-label">02 / capabilities</div>
          <div className="section-content">
            <h2>
              Engineering by
              <br />
              <em>first principles.</em>
            </h2>

            <div className="skill-groups">
              <div>
                <p className="eyebrow">Core Engineering</p>
                <div className="skill-list">
                  {skills.building.map((skill) => (
                    <span key={skill} className="skill-badge">
                      <Terminal size={12} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow">Infrastructure & Exploring</p>
                <div className="skill-list muted">
                  {skills.exploring.map((skill) => (
                    <span key={skill} className="skill-badge">
                      <Sparkles size={12} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / Selected Work Section */}
        <section id="projects" className="section-wrap projects-section">
          <div className="section-heading">
            <div>
              <div className="section-label">03 / selected work</div>
              <h2>
                Systems with
                <br />
                <em>architectural depth.</em>
              </h2>
            </div>
            <p>
              Eight selected explorations spanning transactional backend systems,
              real-time sockets, computer vision, and offline AI agents.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="filter-tabs" role="tablist" aria-label="Filter projects by domain">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                expandedArch={Boolean(expandedProjects[project.name])}
                onToggleArch={() => toggleArch(project.name)}
              />
            ))}
          </div>
        </section>

        {/* 04 / Open Source & GitHub */}
        <section id="github" className="section-wrap github-section">
          <div className="section-label">04 / open source</div>
          <div className="github-card-shell">
            <div className="github-card">
              <div>
                <Code2 className="github-mark" aria-hidden="true" />
                <h2>
                  Code on
                  <br />
                  <em>GitHub.</em>
                </h2>
                <p>
                  Explore repositories, commit histories, experimental schemas,
                  and ongoing system prototypes on my official profile.
                </p>
              </div>

              <a
                className="button button-primary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <span>Visit @AkShAdIt</span>
                <span className="button-icon-pill">
                  <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* 05 / Contact Section */}
        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner">
            <div className="section-label" style={{ color: '#2b5632' }}>
              05 / contact
            </div>
            <div>
              <h2>
                Let&apos;s engineer
                <br />
                <em>something impactful.</em>
              </h2>
              <p>
                Currently seeking 2026 backend engineering and AI systems
                internships. Always open to discussing distributed systems,
                robust API design, or interesting technical challenges.
              </p>

              <div className="contact-links">
                {/* Email Action with Copy Option */}
                <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                  <a
                    href={`mailto:${profile.email}`}
                    className="contact-card-btn"
                  >
                    <Mail size={16} />
                    <span>{profile.email}</span>
                    <ArrowUpRight size={14} />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="contact-card-btn"
                    style={{ padding: '14px 16px' }}
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check size={16} color="#52a447" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-btn"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={14} />
                </a>

                {/* GitHub */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card-btn"
                >
                  <Code2 size={16} />
                  <span>GitHub (@AkShAdIt)</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer section-wrap">
        <span>© 2026 {profile.name} · Bangalore, India</span>
        <span>Engineered with Next.js & TypeScript</span>
      </footer>
    </div>
  )
}
