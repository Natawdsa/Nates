import { useState, useEffect } from 'react'
import './index.css'

const NAV_LINKS = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Dining', href: '#dining' },
  { label: 'History', href: '#history' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Contact', href: '#contact' },
]

const ROOMS = [
  {
    name: 'Rye Royal',
    type: 'Four-Poster Suite',
    desc: 'Our grandest chamber — a carved four-poster bed, original Tudor beams, and views over the cobbled streets of Rye. History sleeps here.',
    tag: 'Most Popular',
    emoji: '🛏️',
  },
  {
    name: 'Fleur de Lys',
    type: 'Deluxe Double',
    desc: 'Named for the French heraldic symbol, this room marries continental elegance with quintessentially English comfort and period oak panelling.',
    tag: 'Romantic',
    emoji: '⚜️',
  },
  {
    name: 'The Smugglers\' Rest',
    type: 'Classic Double',
    desc: 'Legend has it the Hawkhurst Gang once sheltered here. Sloping ceilings, creaking floorboards, and an atmosphere thick with intrigue.',
    tag: 'Historic',
    emoji: '🗝️',
  },
]

const EXPERIENCES = [
  {
    icon: '🏰',
    title: 'Guided History Tours',
    desc: 'Every last Sunday of the month, owner Judith Blincow leads guests through 600 years of secrets — tunnels, smugglers and all.',
  },
  {
    icon: '🍷',
    title: 'Giants Fireplace Bar',
    desc: 'Gather around one of England\'s most dramatic inglenook fireplaces with a glass of local wine or a craft ale from the Sussex coast.',
  },
  {
    icon: '🌿',
    title: 'Walled Patio Garden',
    desc: 'Step outside into our hidden courtyard — a sun-drenched retreat surrounded by centuries-old stone walls and climbing roses.',
  },
  {
    icon: '🎭',
    title: 'Tudor Bar',
    desc: 'A convivial oak-panelled bar unchanged for centuries. Perfect for a quiet nightcap or a spirited evening with new friends.',
  },
]

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80', alt: 'Historic hotel exterior' },
  { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', alt: 'Four-poster bedroom' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Fine dining restaurant' },
  { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80', alt: 'Bar with wine' },
  { src: 'https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&q=80', alt: 'English countryside' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80', alt: 'Scallop dish' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(28,24,20,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(184,150,46,0.3)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <a href="#top" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'Playfair Display, serif', color: '#d4af5a', lineHeight: 1 }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.05em' }}>The Mermaid Inn</div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#b8962e', fontFamily: 'Lato, sans-serif' }}>Est. 1420 · Rye, East Sussex</div>
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: '#e8e0d0',
                textDecoration: 'none',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
              }}
              onMouseEnter={e => e.target.style.color = '#d4af5a'}
              onMouseLeave={e => e.target.style.color = '#e8e0d0'}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.mermaidinn.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent',
              border: '1px solid #b8962e',
              color: '#d4af5a',
              padding: '0.5rem 1.25rem',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontFamily: 'Lato, sans-serif',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = '#b8962e'; e.target.style.color = '#1c1814' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#d4af5a' }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#d4af5a', fontSize: '1.5rem' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(28,24,20,0.98)', padding: '1rem 2rem 2rem', borderTop: '1px solid rgba(184,150,46,0.2)' }}>
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', color: '#e8e0d0', textDecoration: 'none', padding: '0.75rem 0', fontFamily: 'Lato, sans-serif', fontSize: '0.9rem', letterSpacing: '0.1em', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.mermaidinn.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: '1rem', background: '#b8962e', color: '#1c1814', padding: '0.75rem 1.5rem', textDecoration: 'none', fontFamily: 'Lato, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#1c1814',
      }}
    >
      {/* Background image overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.35,
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(28,24,20,0.3) 0%, rgba(28,24,20,0.7) 100%)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', textAlign: 'center', padding: '2rem', maxWidth: '900px' }}>
        <p style={{
          fontFamily: 'Lato, sans-serif',
          color: '#b8962e',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          marginBottom: '1.5rem',
        }}>
          Est. 1420 · Rye, East Sussex
        </p>

        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          color: '#f5f0e8',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '0.5rem',
        }}>
          The Mermaid Inn
        </h1>

        <p style={{
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          color: '#d4af5a',
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          marginBottom: '2rem',
        }}>
          Six centuries of stories. One unforgettable stay.
        </p>

        {/* Gold divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ width: '60px', height: '1px', background: '#b8962e' }} />
          <span style={{ color: '#b8962e', fontSize: '1.2rem' }}>⚓</span>
          <div style={{ width: '60px', height: '1px', background: '#b8962e' }} />
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://www.mermaidinn.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#b8962e',
              color: '#1c1814',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => e.target.style.background = '#d4af5a'}
            onMouseLeave={e => e.target.style.background = '#b8962e'}
          >
            Reserve Your Room
          </a>
          <a
            href="#history"
            style={{
              background: 'transparent',
              color: '#f5f0e8',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: '1px solid rgba(245,240,232,0.4)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = '#b8962e'; e.target.style.color = '#d4af5a' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(245,240,232,0.4)'; e.target.style.color = '#f5f0e8' }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#b8962e',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        fontFamily: 'Lato, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'bounce 2s infinite',
      }}>
        <span>Scroll</span>
        <span>↓</span>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}

function StatsBar() {
  return (
    <div style={{ background: '#1c1814', borderTop: '1px solid rgba(184,150,46,0.3)', borderBottom: '1px solid rgba(184,150,46,0.3)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', textAlign: 'center' }}>
        {[
          { value: '1420', label: 'Year Founded' },
          { value: '31', label: 'Unique Rooms' },
          { value: '2', label: 'AA Rosettes' },
          { value: '600+', label: 'Years of History' },
        ].map(s => (
          <div key={s.value} style={{ padding: '1rem' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', color: '#d4af5a', fontSize: '2.5rem', fontWeight: 700 }}>{s.value}</div>
            <div style={{ color: '#a09080', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Lato, sans-serif', marginTop: '0.25rem' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function History() {
  return (
    <section id="history" style={{ padding: '6rem 2rem', background: '#f5f0e8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Text */}
        <div>
          <p style={{ color: '#b8962e', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', fontFamily: 'Lato, sans-serif', marginBottom: '1rem' }}>Our Story</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1c1814', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            A Living Piece of<br /><em style={{ color: '#6b2737' }}>English History</em>
          </h2>
          <div style={{ width: '50px', height: '2px', background: '#b8962e', marginBottom: '1.5rem' }} />
          <p style={{ color: '#4a4540', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
            Our cellars date to 1156. The inn was rebuilt in 1420 after French raiders burned Rye to the ground — and has stood ever since, weathering centuries with quiet defiance.
          </p>
          <p style={{ color: '#4a4540', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
            In the 1730s, the notorious Hawkhurst Gang used The Mermaid as their base, slipping between secret tunnels that still run beneath your feet. A revolving cupboard once served as their escape route.
          </p>
          <p style={{ color: '#4a4540', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Today, Queen Elizabeth the Queen Mother and Prince Edward are among the distinguished guests to have slept within these ancient walls.
          </p>
        </div>

        {/* Image */}
        <div style={{ position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=700&q=80"
            alt="Historic inn interior with timber beams"
            style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
          />
          {/* Gold frame accent */}
          <div style={{
            position: 'absolute',
            top: '-12px', right: '-12px',
            width: '100%', height: '100%',
            border: '2px solid #b8962e',
            zIndex: -1,
          }} />
          {/* Date badge */}
          <div style={{
            position: 'absolute',
            bottom: '-1.5rem', left: '2rem',
            background: '#1c1814',
            color: '#d4af5a',
            padding: '1rem 1.5rem',
            fontFamily: 'Playfair Display, serif',
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>1420</div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#a09080', fontFamily: 'Lato, sans-serif' }}>REBUILT AFTER FRENCH RAID</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Rooms() {
  return (
    <section id="rooms" style={{ padding: '6rem 2rem', background: '#1c1814' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#b8962e', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', fontFamily: 'Lato, sans-serif', marginBottom: '1rem' }}>Accommodation</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f5f0e8', marginBottom: '1rem' }}>Rooms & Suites</h2>
          <p style={{ color: '#a09080', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
            Thirty-one rooms, each with its own character — sloping ceilings, carved four-posters, and the gentle creak of centuries underfoot.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {ROOMS.map((room, i) => (
            <div
              key={room.name}
              style={{
                background: '#26211c',
                border: '1px solid rgba(184,150,46,0.2)',
                overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(184,150,46,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(184,150,46,0.2)' }}
            >
              <div style={{ height: '220px', background: '#3a3028', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', position: 'relative' }}>
                {room.emoji}
                <span style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: '#b8962e', color: '#1c1814',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.65rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', fontFamily: 'Lato, sans-serif', fontWeight: 700,
                }}>
                  {room.tag}
                </span>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <p style={{ color: '#b8962e', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Lato, sans-serif', marginBottom: '0.5rem' }}>{room.type}</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8', fontSize: '1.5rem', marginBottom: '0.75rem' }}>{room.name}</h3>
                <p style={{ color: '#a09080', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{room.desc}</p>
                <a
                  href="https://www.mermaidinn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    color: '#d4af5a',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontFamily: 'Lato, sans-serif',
                    borderBottom: '1px solid rgba(184,150,46,0.4)',
                    paddingBottom: '2px',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  View Room →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://www.mermaidinn.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              border: '1px solid #b8962e',
              color: '#d4af5a',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'Lato, sans-serif',
            }}
          >
            View All 31 Rooms
          </a>
        </div>
      </div>
    </section>
  )
}

function Dining() {
  return (
    <section id="dining" style={{ padding: '6rem 2rem', background: '#f5f0e8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Image */}
        <div style={{ position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80"
            alt="The Linen Fold restaurant"
            style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', bottom: '2rem', left: '2rem',
            background: 'rgba(28,24,20,0.92)',
            padding: '1.25rem 1.5rem',
            borderLeft: '3px solid #b8962e',
          }}>
            <div style={{ color: '#d4af5a', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontStyle: 'italic' }}>2 AA Rosettes</div>
            <div style={{ color: '#a09080', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Lato, sans-serif' }}>Restaurant Excellence</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p style={{ color: '#b8962e', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', fontFamily: 'Lato, sans-serif', marginBottom: '1rem' }}>Dining</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1c1814', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            The Linen Fold<br /><em style={{ color: '#6b2737' }}>Restaurant</em>
          </h2>
          <div style={{ width: '50px', height: '2px', background: '#b8962e', marginBottom: '1.5rem' }} />
          <p style={{ color: '#4a4540', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
            Three wood-panelled rooms, candlelit and unhurried. The Linen Fold serves celebrated British and French cuisine, championing local produce from the land and sea around Rye.
          </p>
          <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#eee8d8', borderLeft: '3px solid #b8962e' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', color: '#1c1814', fontSize: '1.05rem', lineHeight: 1.7 }}>
              "Winchelsea beef, Romney Marsh lamb, Rye Bay scallops — the best of East Sussex, right on your plate."
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['Breakfast', 'Lunch', 'Dinner', 'Sunday Roast'].map(m => (
              <span key={m} style={{ background: '#1c1814', color: '#d4af5a', padding: '0.4rem 1rem', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Lato, sans-serif' }}>{m}</span>
            ))}
          </div>
          <a
            href="https://www.mermaidinn.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#6b2737',
              color: '#f5f0e8',
              padding: '1rem 2rem',
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 700,
            }}
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  )
}

function Experiences() {
  return (
    <section id="experiences" style={{ padding: '6rem 2rem', background: '#2a2420' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#b8962e', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', fontFamily: 'Lato, sans-serif', marginBottom: '1rem' }}>Beyond the Room</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f5f0e8' }}>Experiences & Spaces</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {EXPERIENCES.map(exp => (
            <div
              key={exp.title}
              style={{
                padding: '2.5rem 2rem',
                border: '1px solid rgba(184,150,46,0.15)',
                background: 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(184,150,46,0.5)'; e.currentTarget.style.background = 'rgba(184,150,46,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,150,46,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{exp.icon}</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{exp.title}</h3>
              <p style={{ color: '#a09080', lineHeight: 1.7, fontSize: '0.95rem' }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section style={{ padding: '0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '4px' }}>
        {GALLERY_IMAGES.map((img, i) => (
          <div key={i} style={{ overflow: 'hidden', height: '260px', position: 'relative' }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { quote: "Staying at The Mermaid felt like stepping into another century. The four-poster bed, the creaking floorboards, the fireplace — extraordinary.", author: "Sophie T.", location: "London" },
    { quote: "The Linen Fold restaurant is a genuine gem. The Rye Bay scallops were the best I've had anywhere in England.", author: "James M.", location: "Edinburgh" },
    { quote: "A place with real soul. The history tour through the smugglers' tunnels alone is worth the trip.", author: "Clara B.", location: "Paris" },
  ]

  return (
    <section style={{ padding: '6rem 2rem', background: '#f5f0e8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#b8962e', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', fontFamily: 'Lato, sans-serif', marginBottom: '1rem' }}>Guest Stories</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1c1814' }}>What Our Guests Say</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: '#fff', padding: '2.5rem', borderTop: '3px solid #b8962e' }}>
              <p style={{ color: '#6b5c4a', fontSize: '2rem', fontFamily: 'Playfair Display, serif', lineHeight: 1, marginBottom: '1rem' }}>"</p>
              <p style={{ color: '#4a4540', lineHeight: 1.8, fontStyle: 'italic', fontSize: '1rem', marginBottom: '1.5rem' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '32px', height: '32px', background: '#b8962e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1c1814', fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '0.9rem' }}>
                  {t.author[0]}
                </div>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', color: '#1c1814', fontSize: '0.95rem', fontWeight: 600 }}>{t.author}</div>
                  <div style={{ color: '#a09080', fontSize: '0.75rem', fontFamily: 'Lato, sans-serif' }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookingBanner() {
  return (
    <section style={{
      padding: '5rem 2rem',
      background: '#6b2737',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ color: 'rgba(245,240,232,0.6)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', fontFamily: 'Lato, sans-serif', marginBottom: '1rem' }}>Begin Your Stay</p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f5f0e8', marginBottom: '1rem' }}>
          Six Centuries of Welcome.<br /><em>Your Chapter Awaits.</em>
        </h2>
        <p style={{ color: 'rgba(245,240,232,0.7)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Free parking, complimentary Wi-Fi, and history in every room. Book directly for the best rate.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://www.mermaidinn.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#b8962e',
              color: '#1c1814',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Check Availability
          </a>
          <a
            href="tel:+441797223065"
            style={{
              background: 'transparent',
              color: '#f5f0e8',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: '1px solid rgba(245,240,232,0.4)',
            }}
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 2rem', background: '#1c1814' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem' }}>
        <div>
          <div style={{ fontFamily: 'Playfair Display, serif', color: '#d4af5a', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>The Mermaid Inn</div>
          <div style={{ color: '#a09080', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Lato, sans-serif', marginBottom: '1.5rem' }}>Est. 1420</div>
          <p style={{ color: '#a09080', lineHeight: 1.8, fontSize: '0.95rem' }}>
            One of England's oldest and most storied inns, standing proudly in the ancient town of Rye since 1420.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Find Us</h4>
          <div style={{ color: '#a09080', lineHeight: 2, fontSize: '0.95rem' }}>
            <p>Mermaid Street</p>
            <p>Rye, East Sussex</p>
            <p>TN31 7EY</p>
            <p style={{ marginTop: '1rem' }}>
              <a href="tel:+441797223065" style={{ color: '#d4af5a', textDecoration: 'none' }}>+44 (0)1797 223 065</a>
            </p>
            <p>
              <a href="mailto:info@mermaidinn.com" style={{ color: '#d4af5a', textDecoration: 'none' }}>info@mermaidinn.com</a>
            </p>
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Explore</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[...NAV_LINKS, { label: 'Book a Room', href: 'https://www.mermaidinn.com' }].map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{ color: '#a09080', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s', fontFamily: 'Lato, sans-serif' }}
                onMouseEnter={e => e.target.style.color = '#d4af5a'}
                onMouseLeave={e => e.target.style.color = '#a09080'}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Good to Know</h4>
          <div style={{ color: '#a09080', lineHeight: 2, fontSize: '0.95rem' }}>
            <p>✓ Free parking on-site</p>
            <p>✓ Complimentary Wi-Fi</p>
            <p>✓ Monthly history tours</p>
            <p>✓ Events & function rooms</p>
            <p>✓ Walled patio garden</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '4rem auto 0', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: '#5a5048', fontSize: '0.8rem', fontFamily: 'Lato, sans-serif' }}>
          © {new Date().getFullYear()} The Mermaid Inn, Rye. All rights reserved.
        </p>
        <p style={{ color: '#5a5048', fontSize: '0.8rem', fontFamily: 'Lato, sans-serif' }}>
          Mermaid Street, Rye, East Sussex TN31 7EY
        </p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <History />
      <Rooms />
      <Dining />
      <Experiences />
      <Gallery />
      <Testimonials />
      <BookingBanner />
      <Contact />
    </>
  )
}
