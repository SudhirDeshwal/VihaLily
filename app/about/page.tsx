export default function About() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">About Viha Lily Care Inc.</h1>
        
        {/* Company Story */}
        <div style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
          <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', fontSize: '2rem' }}>
            Our Story
          </h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-medium)', marginBottom: '1.5rem' }}>
            Founded in Ontario, Viha Lily Care Inc. was established with a singular mission: 
            to bridge the gap between skilled healthcare professionals and facilities in need 
            of qualified staff.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-medium)', marginBottom: '1.5rem' }}>
            We serve long-term care facilities, hospitals, retirement homes, and community 
            care organizations across Ontario, providing reliable, compassionate, and 
            professional nursing staff whenever and wherever they're needed.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-medium)' }}>
            Our commitment to excellence and personalized service has made us a trusted partner 
            in Ontario's healthcare community.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
          <h2 style={{ color: 'var(--primary-blue)', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>
            Our Mission
          </h2>
          <p style={{ 
            fontSize: '1.5rem', 
            lineHeight: '1.8', 
            color: 'var(--text-dark)', 
            textAlign: 'center',
            fontStyle: 'italic',
            fontWeight: '500',
            padding: '2rem',
            background: 'var(--bg-light)',
            borderRadius: '16px'
          }}>
            To provide exceptional healthcare staffing solutions that ensure quality patient care 
            while supporting the professional growth of our team members.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
          <h2 style={{ color: 'var(--primary-blue)', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>
            Our Vision
          </h2>
          <p style={{ 
            fontSize: '1.5rem', 
            lineHeight: '1.8', 
            color: 'var(--text-dark)', 
            textAlign: 'center',
            fontStyle: 'italic',
            fontWeight: '500',
            padding: '2rem',
            background: 'var(--bg-light)',
            borderRadius: '16px'
          }}>
            To be Ontario's leading healthcare staffing agency, recognized for excellence in 
            service, reliability, and the professional development of healthcare workers.
          </p>
        </div>

        {/* Core Values */}
        <div style={{ marginTop: '4rem' }}>
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>
                We approach every interaction with empathy, kindness, and genuine care for 
                patients and healthcare workers alike.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty, transparency, and the highest ethical 
                standards in all our relationships.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>
                We continuously strive for excellence in service delivery, staff training, 
                and patient care outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h2 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>
            Join Our Team
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-medium)', marginBottom: '2rem' }}>
            If you share our values and are passionate about healthcare, we'd love to hear from you.
          </p>
          <a href="/apply" className="btn btn-primary">Apply Now</a>
        </div>
      </div>
    </section>
  );
}

