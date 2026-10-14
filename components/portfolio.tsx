'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Code2, Link, Mail, Menu, X } from 'lucide-react'
import { navItems, profile, projects, skills, getAvailableLinks, type Project } from '@/lib/portfolio-data'

function LinkIcon({ label }: { label: string }) {
  if (label === 'GitHub') return <Code2 aria-hidden="true" />
  if (label === 'LinkedIn') return <Link aria-hidden="true" />
  return <Mail aria-hidden="true" />
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-top"><span>{project.number}</span><span>{project.status}</span></div>
      <div className="project-card-body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        {project.contribution && <p className="contribution"><strong>Contribution:</strong> {project.contribution}</p>}
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {project.links?.length ? <div className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight aria-hidden="true" /></a>)}</div> : null}
      </div>
    </article>
  )
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const availableLinks = getAvailableLinks()

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
    <div className="site-shell" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top"><span>AKR</span><small>developer portfolio</small></a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-kicker"><span className="status-dot" /> Available for internship opportunities · 2026</div>
          <h1>Building <em>useful</em><br />things beneath<br />the surface.</h1>
          <div className="hero-bottom"><p>{profile.intro}</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowDown aria-hidden="true" /></a>{profile.resume ? <a className="button button-ghost" href={profile.resume} download="Akshayaditya-KR-Resume.pdf">Resume <ArrowDown aria-hidden="true" /></a> : null}</div></div>
          <div className="scroll-note"><span>01</span><span className="line" /><span>scroll to explore</span></div>
        </section>

        <section id="about" className="section-wrap split-section"><div className="section-label">01 / about</div><div className="section-content"><h2>Curious about how<br /><em>systems connect.</em></h2><p className="large-copy">I&apos;m {profile.name}, an aspiring backend developer interested in understanding how modern software works — from APIs and infrastructure to AI agents and the tools that bring products to life.</p><p>I enjoy exploring technologies, building practical projects, and learning how different components work together to create useful software. My goal is to become a capable engineer who can use AI tools and agentic workflows effectively.</p></div></section>

        <section id="skills" className="section-wrap split-section skills-section"><div className="section-label">02 / capabilities</div><div className="section-content"><h2>Learning by<br /><em>building.</em></h2><div className="skill-groups"><div><p className="eyebrow">Building with</p><div className="skill-list">{skills.building.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div><p className="eyebrow">Currently exploring</p><div className="skill-list muted">{skills.exploring.map((skill) => <span key={skill}>{skill}</span>)}</div></div></div></div></section>

        <section id="projects" className="section-wrap projects-section"><div className="section-heading"><div><div className="section-label">03 / selected work</div><h2>Projects with<br /><em>a purpose.</em></h2></div><p>Eight practical explorations across backend systems, AI, analytics, and product workflows.</p></div><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div></section>

        <section id="github" className="section-wrap github-section"><div className="section-label">04 / open source</div><div className="github-card"><div><Code2 className="github-mark" aria-hidden="true" /><h2>More on<br /><em>GitHub.</em></h2><p>Explore the code, experiments, and ongoing learning behind these projects.</p></div>{profile.github ? <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">Visit profile <ArrowUpRight aria-hidden="true" /></a> : <p className="config-note">GitHub profile link coming soon.</p>}</div></section>

        <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div className="section-label">05 / contact</div><div><h2>Let&apos;s make<br /><em>something useful.</em></h2><p>Open to conversations about internships, backend engineering, and building thoughtful software.</p><div className="contact-links">{availableLinks.length ? availableLinks.map((link) => <a key={link.label} href={link.href} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noreferrer'}><LinkIcon label={link.label} />{link.label}<ArrowUpRight aria-hidden="true" /></a>) : <p className="config-note">Contact links coming soon.</p>}</div></div></div></section>
      </main>
      <footer className="site-footer section-wrap"><span>© 2026 {profile.name}</span><span>Built with curiosity.</span></footer>
    </div>
  )
}
