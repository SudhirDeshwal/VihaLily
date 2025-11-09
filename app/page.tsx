import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <Image src="/logo" alt="Viha Lily Care Inc. logo" width={96} height={96} priority style={{ borderRadius: 12 }} />
          </div>
          <h1>Viha Lily Care Inc.</h1>
          <p>Compassionate Staffing. Professional Care.</p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-secondary">
              Hire Our Staff
            </Link>
            <Link href="/apply" className="btn" style={{ background: 'white', color: 'var(--primary-blue)' }}>
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Viha Lily Care?</h2>
          <p className="section-subtitle">
            Reliable healthcare staffing solutions for Ontario's healthcare facilities
          </p>
          
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🏥</div>
              <h3>Qualified Staff</h3>
              <p>
                Our team consists of fully licensed and experienced RNs, RPNs, and PSWs 
                who are committed to delivering exceptional patient care.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">⏰</div>
              <h3>24/7 Staffing</h3>
              <p>
                We provide round-the-clock coverage for last-minute staffing needs, 
                emergency situations, and planned coverage.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">✅</div>
              <h3>Reliability Guaranteed</h3>
              <p>
                Count on us to deliver reliable, professional healthcare staff who 
                uphold the highest standards of patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive healthcare staffing solutions across Ontario
          </p>
          
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🏥</div>
              <h3>Long-Term Care Staffing</h3>
              <p>
                Experienced staff for nursing homes, retirement communities, 
                and long-term care facilities.
              </p>
              <Link href="/services" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Learn More
              </Link>
            </div>

            <div className="card">
              <div className="card-icon">🧑‍⚕️</div>
              <h3>Hospital Support Staff</h3>
              <p>
                Qualified nurses and healthcare professionals for hospital 
                units, emergency departments, and specialty care.
              </p>
              <Link href="/services" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Learn More
              </Link>
            </div>

            <div className="card">
              <div className="card-icon">🏡</div>
              <h3>Home & Community Care</h3>
              <p>
                Compassionate in-home care services for patients in their 
                homes and community settings.
              </p>
              <Link href="/services" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Learn More
              </Link>
            </div>

            <div className="card">
              <div className="card-icon">⏱️</div>
              <h3>Emergency Coverage</h3>
              <p>
                Rapid response for last-minute staffing needs, sick calls, 
                and unexpected coverage requirements.
              </p>
              <Link href="/services" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>
              Whether you're looking to hire qualified staff or join our team of 
              healthcare professionals, we're here to help.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                Request Staff
              </Link>
              <Link href="/apply" className="btn btn-secondary">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

