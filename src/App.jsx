import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import logoImage from './assets/BlueBeam Electric Co.-logo.png'
import heroProjectImage from './assets/hero-project.jpg'
import aboutImage from './assets/about-image.jpg'
import debrisServiceImage from './assets/service-debris.jpg'
import demolitionServiceImage from './assets/service-demolition.jpg'
import sitePrepImage from './assets/service-site-prep.jpg'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why BlueBeam Electric', href: '/why-BlueBeam Electric Co.' },
  { label: 'Contact', href: '/contact' },
]

const serviceGroups = [
  {
    title: 'Electrical Systems',
    image: demolitionServiceImage,
    imageAlt: 'Demolition services project site with heavy equipment',
    items: [
      'Power distribution & service installation',
      'Lighting systems & controls',
      'Emergency & backup power systems',
      'Commercial & multifamily electrical systems',
    ],
  },
  {
    title: 'Retrofits & Upgrades',
    image: sitePrepImage,
    imageAlt: 'Site preparation work with demolition equipment on location',
    items: [
      'Electrical system upgrades & modernization',
      'Panel and service upgrades',
      'Lighting retrofits and efficiency improvements',
      'Electrical infrastructure improvements',
    ],
  },
  {
    title: 'Maintenance & System Support',
    image: debrisServiceImage,
    imageAlt: 'Debris removal and disposal work on a demolition site',
    items: [
      'Preventive electrical system maintenance',
      'Electrical troubleshooting & diagnostics',
      'Electrical panel and equipment servicing',
      'Electrical system inspections',
    ],
  },
]

const aboutPoints = [
  'Execute with precision and accountability',
  'Maintain aggressive schedules without sacrificing safety',
  'Coordinate cleanly with all trades and project teams',
  'Solve field challenges quickly and intelligently',
  'Stand behind our work',
  'Deliver consistent results on every project',
]

const whyCards = [
  {
    number: '01',
    title: 'Field-Tested Leadership',
    text: 'Our team is built from real jobsite experience. We understand sequencing, coordination, and construction realities — which means fewer surprises and smarter execution.',
  },
  {
    number: '02',
    title: 'Precision Execution',
    text: 'Electrical systems require careful planning and precise execution. We coordinate closely with project teams to ensure work is completed safely, efficiently, and according to schedule.',
    result: 'Result: cleaner sites, fewer delays, and smoother project transitions.',
  },
  {
    number: '03',
    title: 'Schedule-Driven Performance',
    text: 'We plan ahead, staff appropriately, and stay aligned with project milestones to keep work moving and deadlines intact.',
  },
  {
    number: '04',
    title: 'Solutions in the Field',
    text: 'When challenges arise, we respond quickly with practical solutions that keep projects on track and within budget.',
  },
  {
    number: '05',
    title: 'Safety First',
    text: 'Our OSHA-certified team is committed to disciplined safety practices that protect our crew, our partners, and the jobsite — because safe projects are productive projects.',
  },
  {
    number: '06',
    title: 'Reliable Performance',
    text: 'Experienced electrical professionals, compliant jobsite practices, and dependable follow-through keep every project moving forward with confidence.',
  },
]

const differenceItems = [
  'Experienced electrical professionals',
  'Coordination that prevents delays',
  'Schedule-focused execution',
  'Rapid problem solving in the field',
  'Safe, compliant jobsite practices',
  'Reliable performance you can depend on',
]

function Placeholder({ title, subtitle, className = '' }) {
  return (
    <div className={`image-placeholder ${className}`.trim()} aria-label={title}>
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
    </div>
  )
}

function PageHero({ label, title, subtitle, dark = false }) {
  return (
    <section className={`page-hero ${dark ? 'dark' : ''}`}>
      <div className="container section-intro centered narrow">
        <p className="section-label">{label}</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <section className="hero home-hero-simple">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Where Integrity Meets Execution</p>
          <h1>Professional Electrical Services</h1>
          <h2>Executed with Precision. Delivered Safely.</h2>
          <p className="hero-text">
            BlueBeam Electric Co. provides coordinated electrical systems for commercial, institutional, and multifamily construction projects. We install high-performance electrical infrastructure with precision, efficiency, and schedule-driven execution so buildings operate reliably from day one.
          </p>
          <div className="hero-actions">
            <NavLink className="button button-primary" to="/contact">
              Request Bid
            </NavLink>
            <NavLink className="button button-secondary" to="/services">
              View Services
            </NavLink>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src={heroProjectImage} alt="Demolition project site" className="hero-project-image" />
        </div>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Built on Grit. Driven by Precision. Trusted to Deliver."
        subtitle="BlueBeam Electric Co. was founded on hard work, integrity, and relentless execution in the field."
        dark
      />
      <section className="section about-section">
        <div className="container section-intro">
          <p>
            Shortly after arriving in the United States, our founder began working in the
            construction trades, learning firsthand the discipline, craftsmanship, and
            accountability required on demanding job sites. What began as long days in the field
            evolved into a deep understanding of how electrical systems must be installed safely,
            strategically, and efficiently.
          </p>
          <p>
            BlueBeam Electric Co. was formed to bring that field-earned experience into a company built around
            reliability, technical expertise, and trust.
          </p>
          <p>
            Today, BlueBeam Electric Co. provides professional electrical services to public and private sector
            clients across commercial, industrial, multifamily, and infrastructure projects.
          </p>
        </div>

        <div className="container about-grid">
          <div className="about-copy">
            <h3>Clients rely on BlueBeam Electric Co. because we:</h3>
            <div className="feature-grid compact">
              {aboutPoints.map((point) => (
                <article className="feature-card small" key={point}>
                  <span className="feature-check">✓</span>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="about-image-wrap">
            <img src={aboutImage} alt="Demolition equipment and crew on site" className="about-page-image" />
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Core Services"
        title="Electrical systems that keep buildings running."
        subtitle="From electrical system installation and upgrades to lighting, power distribution, and electrical coordination, BlueBeam Electric keeps projects moving."
        dark
      />
      <section className="section services-section services-page-section">
        <div className="container service-grid">
          {serviceGroups.map((group) => (
            <article className="service-card" key={group.title}>
              {group.image ? (
                <div className="service-image-wrap">
                  <img src={group.image} alt={group.imageAlt} className="service-card-image" />
                </div>
              ) : (
                <Placeholder
                  className="service-image"
                  title={`${group.title} Image`}
                  subtitle="Replace with project photo"
                />
              )}
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function WhyPage() {
  return (
    <>
      <PageHero
        label="Why BlueBeam Electric Co."
        title="Electrical Solutions That Keep Projects Moving."
        subtitle="BlueBeam Electric Co. delivers professional electrical services with a focus on coordination, safety, and efficient execution."
        dark
      />
      <section className="section why-section why-page-section">
        <div className="container section-intro centered narrow light-text">
          <p className="accent-line">Integrity in every project. Performance on every jobsite.</p>
          <p>
            We help contractors and owners reduce risk, protect timelines, and deliver electrical systems that perform from day one.
          </p>
        </div>

        <div className="container why-grid">
          {whyCards.map((card) => (
            <article className="why-card" key={card.number}>
              <span className="why-number">{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.result && <p className="result-line">{card.result}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="section difference-section">
        <div className="container difference-wrap">
          <div>
            <p className="section-label">The BlueBeam Electric Co. Difference</p>
            <h2>Built to perform under real project conditions.</h2>
            <p>
               We understand that electrical systems are not just components — they are critical infrastructure that must be installed safely, efficiently, and correctly for long-term building performance.
            </p>
          </div>
          <div className="difference-list">
            {differenceItems.map((item) => (
              <div className="difference-item" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Request a bid or get in touch with our team."
        subtitle="We’re here to discuss your scope, timeline, and site needs."
        dark
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <h2>Get In Touch</h2>
            <p>Tell us about your project and we&apos;ll follow up promptly.</p>
            <div className="contact-list">
              <div>
                <h4>Phone</h4>
                <p>(555) 000-0000</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@BlueBeamElectric.com</p>
              </div>
              <div>
                <h4>Hours</h4>
                <p>Monday – Friday: 7am – 6pm</p>
                <p>Saturday: 8am – 2pm</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-grid">
              <label>
                Full Name *
                <input type="text" placeholder="John Smith" />
              </label>
              <label>
                Email *
                <input type="email" placeholder="john@example.com" />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="(555) 000-0000" />
              </label>
              <label>
                Service Needed
                <select defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Structural demolition</option>
                  <option>Interior / selective demolition</option>
                  <option>Site preparation</option>
                  <option>Debris removal & disposal</option>
                </select>
              </label>
            </div>
            <label>
              Message *
              <textarea rows="6" placeholder="Describe what you need..." />
            </label>
            <button className="button button-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const pageTitles = {
    '/': 'Home',
    '/about': 'About',
    '/services': 'Services',
    '/why-BlueBeam Electric Co.': 'Why BlueBeam Electric Co.',
    '/contact': 'Contact',
  }

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.title = pageTitles[location.pathname] || 'BlueBeam Electric Co.'
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-row">
          <NavLink className="brand" to="/">
            <span className="brand-mark" aria-hidden="true"><img src={logoImage} alt="" className="brand-logo-image" /></span>
            <span className="brand-text">BlueBeam Electric Co.</span>
          </NavLink>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => (isActive ? 'active' : '')}
                end={item.href === '/'}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink className="button button-primary mobile-only" to="/contact">
              Request Bid
            </NavLink>
          </nav>

          <div className="nav-actions">
            <NavLink className="button button-primary desktop-only" to="/contact">
              Request Bid
            </NavLink>
            <button
              className={`menu-toggle ${menuOpen ? 'open' : ''}`}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/why-BlueBeam Electric Co." element={<WhyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

        <footer className="footer">
  <div className="container footer-grid footer-grid-compact">
    <div className="footer-company">
      <NavLink className="brand footer-brand" to="/">
        <span className="brand-mark" aria-hidden="true"><img src={logoImage} alt="" className="brand-logo-image" /></span>
        <span className="brand-text">BlueBeam Electric Co.</span>
      </NavLink>
      <p>
        Professional electrical services built for safety, performance, and dependable
        execution.
      </p>
    </div>

    <div>
      <h4>Navigation</h4>
      <div className="footer-links">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} end={item.href === '/'}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>

    <div>
      <h4>Services</h4>
      <div className="footer-links">
        <NavLink to="/services">Electrical Systems</NavLink>
        <NavLink to="/services">Retrofits & Upgrades</NavLink>
        <NavLink to="/services">Maintenance & System Support</NavLink>
   
      </div>
    </div>

    <div className="footer-contact">
      <h4>Get In Touch</h4>
      <div className="footer-links">
        <a href="tel:5550000000">(555) 000-0000</a>
        <NavLink className="button button-primary footer-button" to="/contact">
          Request a Bid
        </NavLink>
      </div>
    </div>
  </div>

  <div className="container footer-bottom">
    <p>© 2026 BlueBeam Electric Co. All rights reserved.</p>
    <p>Where Integrity Meets Execution</p>
  </div>
</footer>
    </div>
  )
}

export default App
