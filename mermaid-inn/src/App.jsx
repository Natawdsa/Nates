import { useState, useEffect } from 'react'
import './index.css'

const css = {
  serif: { fontFamily: "'Cormorant Garamond', Georgia, serif" },
  sans:  { fontFamily: "'Inter', sans-serif" },
  gold:  '#a07840',
  goldLt:'#c49a5a',
  ink:   '#0f0e0c',
  stone: '#2c2826',
  warm:  '#5c554e',
  muted: '#9c9188',
  border:'#e0d8cc',
  parchment:'#faf7f2',
  cream: '#f3ede3',
}

const eyebrow = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '.68rem', fontWeight: 500,
  letterSpacing: '.18em', textTransform: 'uppercase',
  color: css.gold,
}

const ROOMS = [
  { num: '01', type: 'Four-Poster Suite', name: 'Rye Royal',      desc: 'Our grandest chamber — a hand-carved four-poster bed, original Tudor beams, and views across the cobbled streets of Rye.', href: 'https://www.mermaidinn.com/room/rye-royal/' },
  { num: '02', type: 'Deluxe Double',    name: 'Fleur de Lys',   desc: 'Continental grace married to English warmth — period oak panelling, deep-set windows, and genuine quiet.', href: 'https://www.mermaidinn.com/room/fleur-de-lys/' },
  { num: '03', type: 'Classic Double',   name: 'The Hawkhurst',  desc: 'Sloping ceilings, creaking floorboards, centuries of atmosphere. Legend has it the smugglers once sheltered in this very chamber.', href: 'https://www.mermaidinn.com' },
]

const EXPERIENCES = [
  { num: '01', title: 'Giants Fireplace Bar',    desc: "One of England's most dramatic inglenook fireplaces. A glass of local wine, an open fire, and nowhere better to be on a winter evening." },
  { num: '02', title: 'Guided History Tours',    desc: 'On the last Sunday of every month, owner Judith Blincow leads guests through 600 years of secrets — tunnels, hidden chambers, and untold stories.' },
  { num: '03', title: 'Tudor Bar',               desc: 'An oak-panelled bar unchanged for centuries. Order something local, find a corner, and let the atmosphere do the rest.' },
  { num: '04', title: 'Walled Patio Garden',     desc: 'A private courtyard of ancient stone and climbing roses, hidden from the street. The perfect place to pause on a warm Sussex afternoon.' },
]

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, width: '100%', zIndex: 100,
    padding: '0 2.5rem', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', height: 64,
    background: 'rgba(15,14,12,.93)',
    backdropFilter: 'blur(12px)',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,.07)' : '1px solid transparent',
    transition: 'border-color .3s',
  }

  return (
    <nav style={navStyle}>
      <a href="#top" style={{ ...css.serif, fontSize: '1.15rem', fontWeight: 400, letterSpacing: '.08em', color: '#f0ebe2', textDecoration: 'none' }}>
        The Mermaid <span style={{ color: css.goldLt }}>Inn</span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        {['History','Rooms','Dining','Experiences','Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: '.72rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(240,235,226,.5)', textDecoration: 'none', transition: 'color .2s' }}
            onMouseEnter={e => e.target.style.color='#f0ebe2'}
            onMouseLeave={e => e.target.style.color='rgba(240,235,226,.5)'}
          >{l}</a>
        ))}
        <a href="https://www.mermaidinn.com" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '.7rem', letterSpacing: '.14em', textTransform: 'uppercase', color: css.goldLt, textDecoration: 'none', padding: '.5rem 1.1rem', border: '1px solid rgba(160,120,64,.5)', transition: 'all .2s' }}
          onMouseEnter={e => { e.target.style.borderColor = css.goldLt; e.target.style.color = '#f0ebe2' }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(160,120,64,.5)'; e.target.style.color = css.goldLt }}
        >Book a Stay</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="top" style={{ height: '100vh', minHeight: 600, position: 'relative', display: 'flex', alignItems: 'flex-end', background: css.ink }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1800&q=85')", backgroundSize: 'cover', backgroundPosition: 'center 30%', opacity: .4 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(15,14,12,.1) 30%,rgba(15,14,12,.85) 100%)' }} />
      <div style={{ position: 'relative', padding: '0 2.5rem 5rem', maxWidth: 780 }}>
        <p style={{ ...eyebrow, color: css.goldLt, marginBottom: '1.5rem' }}>Rye, East Sussex · Since 1420</p>
        <h1 style={{ ...css.serif, fontSize: 'clamp(3.2rem,7vw,6rem)', fontWeight: 300, lineHeight: 1.05, color: '#f0ebe2', letterSpacing: '.01em', marginBottom: '1.25rem' }}>
          Where history<br />still <em style={{ color: css.goldLt }}>breathes</em>
        </h1>
        <p style={{ fontSize: '1rem', fontWeight: 300, color: 'rgba(240,235,226,.65)', maxWidth: 440, marginBottom: '2.5rem', lineHeight: 1.75 }}>
          Six centuries of shelter, story, and fine hospitality in one of England's oldest inns — rebuilt in 1420 and unchanged in spirit ever since.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="https://www.mermaidinn.com" target="_blank" rel="noopener noreferrer"
            style={{ background: css.gold, color: '#fff', padding: '.875rem 2rem', textDecoration: 'none', fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase', transition: 'background .25s' }}
            onMouseEnter={e => e.target.style.background = css.goldLt}
            onMouseLeave={e => e.target.style.background = css.gold}
          >Reserve a Room</a>
          <a href="#history"
            style={{ color: 'rgba(240,235,226,.6)', textDecoration: 'none', fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase', borderBottom: '1px solid rgba(240,235,226,.25)', paddingBottom: 2, transition: 'all .2s' }}
            onMouseEnter={e => { e.target.style.color='#f0ebe2'; e.target.style.borderColor='rgba(240,235,226,.6)' }}
            onMouseLeave={e => { e.target.style.color='rgba(240,235,226,.6)'; e.target.style.borderColor='rgba(240,235,226,.25)' }}
          >Discover our story</a>
        </div>
      </div>
    </section>
  )
}

function Strip() {
  const items = [['1420','Year Founded'],['31','Unique Rooms'],['2','AA Rosettes'],['600+','Years of History']]
  return (
    <div style={{ background: css.stone, borderBottom: '1px solid rgba(255,255,255,.05)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {items.map(([val, lbl], i) => (
          <div key={val} style={{ padding: '2rem 2.5rem', borderRight: i < 3 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
            <div style={{ ...css.serif, fontSize: '2.6rem', fontWeight: 300, color: css.goldLt, lineHeight: 1, marginBottom: '.25rem' }}>{val}</div>
            <div style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(240,235,226,.3)' }}>{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function History() {
  return (
    <section id="history" style={{ padding: '7rem 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7rem', alignItems: 'center' }}>
        <div>
          <p style={{ ...eyebrow, marginBottom: '1.25rem' }}>Our Story</p>
          <h2 style={{ ...css.serif, fontSize: 'clamp(2.4rem,4vw,3.6rem)', fontWeight: 300, color: css.ink, lineHeight: 1.15, marginBottom: '1.75rem' }}>
            A living piece of<br /><em style={{ color: css.gold }}>English history</em>
          </h2>
          {[
            'Our cellars date to 1156. The inn was rebuilt in 1420 after French raiders burned Rye to the ground, and has stood its ground ever since — through smugglers\' plots, royal visits, and centuries of quiet English life.',
            'In the 1730s, the notorious Hawkhurst Gang used The Mermaid as their headquarters. Secret tunnels still run beneath the building — a revolving cupboard once served as their escape route.',
            'Queen Elizabeth the Queen Mother and Prince Edward number among the distinguished guests to have slept beneath these ancient beams.',
          ].map((p, i) => (
            <p key={i} style={{ fontSize: '.95rem', fontWeight: 300, color: css.warm, lineHeight: 1.85, marginBottom: '1.25rem' }}>{p}</p>
          ))}
          <span style={{ display: 'block', width: 32, height: 1, background: css.gold, marginTop: '.5rem' }} />
        </div>
        <div style={{ position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85" alt="Timber-beamed interior" style={{ width: '100%', height: 540, objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem 1.5rem', background: 'linear-gradient(transparent,rgba(15,14,12,.8))' }}>
            <p style={{ ...css.serif, fontSize: '.9rem', fontStyle: 'italic', color: 'rgba(240,235,226,.7)', letterSpacing: '.03em' }}>
              The Giants Fireplace Bar — unchanged since the 15th century
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Rooms() {
  return (
    <section id="rooms" style={{ padding: '7rem 0', background: css.ink }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ ...eyebrow, color: css.goldLt }}>Accommodation</p>
          <h2 style={{ ...css.serif, fontSize: 'clamp(2.4rem,4vw,3.4rem)', fontWeight: 300, color: '#f0ebe2', lineHeight: 1.15, marginTop: '1.25rem' }}>
            Thirty-one rooms.<br />Each one irreplaceable.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(255,255,255,.06)' }}>
          {ROOMS.map(r => (
            <RoomCard key={r.num} {...r} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://www.mermaidinn.com" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(240,235,226,.4)', textDecoration: 'none', borderBottom: '1px solid rgba(240,235,226,.2)', paddingBottom: 2 }}
          >Browse all 31 rooms</a>
        </div>
      </div>
    </section>
  )
}

function RoomCard({ num, type, name, desc, href }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: hov ? 'rgba(255,255,255,.02)' : css.ink, padding: '2.75rem 2.25rem', borderTop: `2px solid ${hov ? css.gold : 'transparent'}`, transition: 'all .3s', position: 'relative' }}
    >
      <div style={{ ...css.serif, fontSize: '3.5rem', fontWeight: 300, color: 'rgba(240,235,226,.06)', lineHeight: 1, marginBottom: '.5rem', userSelect: 'none' }}>{num}</div>
      <div style={{ fontSize: '.65rem', letterSpacing: '.16em', textTransform: 'uppercase', color: css.goldLt, marginBottom: '.75rem' }}>{type}</div>
      <div style={{ ...css.serif, fontSize: '1.6rem', fontWeight: 400, color: '#f0ebe2', marginBottom: '1rem', lineHeight: 1.2 }}>{name}</div>
      <p style={{ fontSize: '.875rem', fontWeight: 300, color: 'rgba(240,235,226,.5)', lineHeight: 1.75, marginBottom: '1.75rem' }}>{desc}</p>
      <a href={href} target="_blank" rel="noopener noreferrer"
        style={{ fontSize: '.68rem', letterSpacing: '.12em', textTransform: 'uppercase', color: css.goldLt, textDecoration: 'none', borderBottom: '1px solid rgba(160,120,64,.4)', paddingBottom: 2 }}
      >View room</a>
    </div>
  )
}

function PullQuote() {
  return (
    <div style={{ padding: '5rem 2rem', background: css.cream, textAlign: 'center' }}>
      <span style={{ display: 'block', width: 32, height: 1, background: css.gold, margin: '0 auto 2rem' }} />
      <blockquote style={{ ...css.serif, fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 300, fontStyle: 'italic', color: css.ink, lineHeight: 1.5, maxWidth: 780, margin: '0 auto 1.5rem' }}>
        "Sloping ceilings, creaking floorboards, and the gentle creak of centuries underfoot — a place that has no need to manufacture atmosphere."
      </blockquote>
      <cite style={{ fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase', color: css.muted, fontStyle: 'normal' }}>The Times Travel</cite>
    </div>
  )
}

function Dining() {
  return (
    <section id="dining" style={{ padding: '7rem 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7rem', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85" alt="The Linen Fold Restaurant" style={{ width: '100%', height: 580, objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: '2rem', right: '-1.5rem', background: css.parchment, padding: '1.25rem 1.75rem', borderLeft: `2px solid ${css.gold}` }}>
            <div style={{ ...css.serif, fontSize: '2rem', fontWeight: 300, color: css.gold, lineHeight: 1 }}>2</div>
            <div style={{ fontSize: '.65rem', letterSpacing: '.14em', textTransform: 'uppercase', color: css.muted, marginTop: '.2rem' }}>AA Rosettes</div>
          </div>
        </div>
        <div>
          <p style={{ ...eyebrow, marginBottom: '1.25rem' }}>Dining</p>
          <h2 style={{ ...css.serif, fontSize: 'clamp(2.4rem,4vw,3.4rem)', fontWeight: 300, color: css.ink, lineHeight: 1.15, marginBottom: '1.75rem' }}>
            The Linen Fold<br /><em style={{ color: css.gold }}>Restaurant</em>
          </h2>
          {[
            'Three wood-panelled rooms, candlelit and unhurried. The Linen Fold serves celebrated British and French cuisine built around the finest local produce — Winchelsea beef, Romney Marsh lamb, Rye Bay scallops.',
            'Awarded 2 AA Rosettes, our kitchen balances classic technique with the honest flavours of East Sussex. Breakfast through dinner, seven days a week.',
          ].map((p, i) => (
            <p key={i} style={{ fontSize: '.95rem', fontWeight: 300, color: css.warm, lineHeight: 1.85, marginBottom: '1.25rem' }}>{p}</p>
          ))}
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', margin: '1.75rem 0 2rem' }}>
            {['Breakfast','Lunch','Dinner','Sunday Roast'].map(m => (
              <span key={m} style={{ fontSize: '.65rem', letterSpacing: '.12em', textTransform: 'uppercase', color: css.warm, padding: '.4rem .9rem', border: `1px solid ${css.border}` }}>{m}</span>
            ))}
          </div>
          <a href="https://www.mermaidinn.com" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: css.gold, color: '#fff', padding: '.875rem 2rem', textDecoration: 'none', fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase' }}
          >Reserve a Table</a>
        </div>
      </div>
    </section>
  )
}

function Experiences() {
  return (
    <section id="experiences" style={{ padding: '7rem 0', background: css.stone }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ ...eyebrow, color: css.goldLt }}>Beyond the room</p>
          <h2 style={{ ...css.serif, fontSize: 'clamp(2.4rem,4vw,3.4rem)', fontWeight: 300, color: '#f0ebe2', lineHeight: 1.15, marginTop: '1.25rem' }}>
            Spaces with soul
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.06)' }}>
          {EXPERIENCES.map(e => <ExpCard key={e.num} {...e} />)}
        </div>
      </div>
    </section>
  )
}

function ExpCard({ num, title, desc }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: hov ? '#302c28' : css.stone, padding: '3rem 2.75rem', transition: 'background .3s' }}
    >
      <div style={{ fontSize: '.8rem', color: css.goldLt, letterSpacing: '.08em', marginBottom: '1.25rem', ...css.serif }}>{num}</div>
      <div style={{ ...css.serif, fontSize: '1.5rem', fontWeight: 400, color: '#f0ebe2', marginBottom: '.75rem' }}>{title}</div>
      <p style={{ fontSize: '.875rem', fontWeight: 300, color: 'rgba(240,235,226,.5)', lineHeight: 1.75 }}>{desc}</p>
    </div>
  )
}

function Gallery() {
  const imgs = [
    ['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80','Inn exterior','g1'],
    ['https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700&q=80','Four-poster bedroom',''],
    ['https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=700&q=80','Bar',''],
    ['https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&q=80','Dining',''],
    ['https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=700&q=80','Countryside',''],
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '280px 280px', gap: 3 }}>
      {imgs.map(([src, alt, cls], i) => (
        <GalleryItem key={src} src={src} alt={alt} tall={i === 0} />
      ))}
    </div>
  )
}

function GalleryItem({ src, alt, tall }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ overflow: 'hidden', gridRow: tall ? '1 / 3' : 'auto' }}
    >
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .7s ease', transform: hov ? 'scale(1.04)' : 'scale(1)' }} />
    </div>
  )
}

function Testimonials() {
  const items = [
    { q: 'Staying at The Mermaid felt like stepping into another century. The four-poster bed, the creaking floorboards — extraordinary.', a: 'Sophie T.', l: 'London' },
    { q: 'The Linen Fold is a genuine gem. The Rye Bay scallops were the finest I have had anywhere in England.', a: 'James M.', l: 'Edinburgh' },
    { q: "A place with real soul. The smugglers' tunnel tour alone is worth the journey from Paris.", a: 'Clara B.', l: 'Paris' },
  ]
  return (
    <section style={{ padding: '7rem 0', background: css.cream }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem 3rem', textAlign: 'center' }}>
        <p style={eyebrow}>Guest Voices</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, background: css.border }}>
        {items.map(({ q, a, l }) => (
          <div key={a} style={{ background: css.parchment, padding: '3rem 2.5rem' }}>
            <p style={{ ...css.serif, fontSize: '1.2rem', fontWeight: 300, fontStyle: 'italic', color: css.ink, lineHeight: 1.65, marginBottom: '2rem' }}>"{q}"</p>
            <span style={{ display: 'block', width: 24, height: 1, background: css.gold, marginBottom: '1.25rem' }} />
            <p style={{ fontSize: '.72rem', letterSpacing: '.12em', textTransform: 'uppercase', color: css.muted }}>{a} — {l}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CtaBand() {
  return (
    <div style={{ padding: '6rem 2rem', background: css.ink, textAlign: 'center' }}>
      <p style={{ ...eyebrow, color: css.goldLt, marginBottom: '1.5rem' }}>Begin Your Stay</p>
      <h2 style={{ ...css.serif, fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#f0ebe2', lineHeight: 1.15, marginBottom: '1rem' }}>
        Your chapter<br /><em>awaits.</em>
      </h2>
      <p style={{ fontSize: '.9rem', fontWeight: 300, color: 'rgba(240,235,226,.45)', marginBottom: '2.5rem' }}>
        Free parking · Complimentary Wi-Fi · Best rate guaranteed direct
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
        <a href="https://www.mermaidinn.com" target="_blank" rel="noopener noreferrer"
          style={{ background: css.gold, color: '#fff', padding: '.875rem 2rem', textDecoration: 'none', fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase' }}
        >Check Availability</a>
        <a href="tel:+441797223065"
          style={{ color: 'rgba(240,235,226,.45)', textDecoration: 'none', fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase', borderBottom: '1px solid rgba(240,235,226,.2)', paddingBottom: 2 }}
        >+44 (0)1797 223 065</a>
      </div>
    </div>
  )
}

function Footer() {
  const nav = ['History','Rooms & Suites','Dining','Experiences']
  return (
    <footer id="contact" style={{ background: '#0a0908', padding: '5rem 2rem 3rem' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div>
          <div style={{ ...css.serif, fontSize: '1.35rem', fontWeight: 300, color: '#f0ebe2', letterSpacing: '.06em', marginBottom: '.35rem' }}>The Mermaid Inn</div>
          <div style={{ fontSize: '.65rem', letterSpacing: '.16em', textTransform: 'uppercase', color: css.gold, marginBottom: '1.5rem' }}>Est. 1420 · Rye</div>
          <p style={{ fontSize: '.85rem', fontWeight: 300, color: 'rgba(240,235,226,.35)', lineHeight: 1.8 }}>
            One of England's oldest inns — standing on Mermaid Street in the ancient Cinque Port town of Rye, East Sussex, since 1420.
          </p>
        </div>
        <div>
          <h4 style={{ fontSize: '.68rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(240,235,226,.25)', marginBottom: '1.25rem' }}>Address</h4>
          {['Mermaid Street','Rye, East Sussex','TN31 7EY'].map(l => (
            <p key={l} style={{ fontSize: '.85rem', fontWeight: 300, color: 'rgba(240,235,226,.4)', lineHeight: 2 }}>{l}</p>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: '.68rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(240,235,226,.25)', marginBottom: '1.25rem' }}>Contact</h4>
          {[['tel:+441797223065','+44 (0)1797 223 065'],['mailto:info@mermaidinn.com','info@mermaidinn.com']].map(([h, l]) => (
            <a key={h} href={h} style={{ display: 'block', fontSize: '.85rem', fontWeight: 300, color: 'rgba(240,235,226,.4)', textDecoration: 'none', lineHeight: 2 }}>{l}</a>
          ))}
        </div>
        <div>
          <h4 style={{ fontSize: '.68rem', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(240,235,226,.25)', marginBottom: '1.25rem' }}>Navigate</h4>
          {nav.map(l => (
            <a key={l} href={`#${l.split(' ')[0].toLowerCase()}`} style={{ display: 'block', fontSize: '.85rem', fontWeight: 300, color: 'rgba(240,235,226,.4)', textDecoration: 'none', lineHeight: 2 }}>{l}</a>
          ))}
          <a href="https://www.mermaidinn.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '.85rem', fontWeight: 300, color: css.goldLt, textDecoration: 'none', lineHeight: 2 }}>Book Direct</a>
        </div>
      </div>
      <div style={{ maxWidth: 1160, margin: '2.5rem auto 0', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontSize: '.75rem', color: 'rgba(240,235,226,.18)', fontWeight: 300 }}>© {new Date().getFullYear()} The Mermaid Inn, Rye. All rights reserved.</p>
        <p style={{ fontSize: '.75rem', color: 'rgba(240,235,226,.18)', fontWeight: 300 }}>Mermaid Street · Rye · East Sussex · TN31 7EY</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Strip />
      <History />
      <Rooms />
      <PullQuote />
      <Dining />
      <Experiences />
      <Gallery />
      <Testimonials />
      <CtaBand />
      <Footer />
    </>
  )
}
