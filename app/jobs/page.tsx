import Link from 'next/link';

export default function Jobs() {
  const jobOpenings = [
    {
      role: 'Registered Nurse (RN)',
      type: 'Full-time / Part-time / Per-diem',
      location: 'Various locations across Ontario',
      description: 'Experienced RNs needed for long-term care, hospitals, and community settings.'
    },
    {
      role: 'Registered Practical Nurse (RPN)',
      type: 'Full-time / Part-time',
      location: 'Long-term care facilities',
      description: 'Licensed RPNs for retirement homes and nursing facilities.'
    },
    {
      role: 'Personal Support Worker (PSW)',
      type: 'Full-time / Part-time',
      location: 'LTC facilities & home care',
      description: 'Certified PSWs for personal care and support services.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Career Opportunities</h1>
        <p className="section-subtitle">
          Join our team of dedicated healthcare professionals
        </p>

        <div className="cards-grid">
          {jobOpenings.map((job, index) => (
            <div key={index} className="card">
              <h3>{job.role}</h3>
              <p style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: 'var(--bg-blue-light)', 
                borderRadius: '8px',
                display: 'inline-block',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: 'var(--primary-blue)'
              }}>
                {job.type}
              </p>
              <p style={{ color: 'var(--text-medium)', marginBottom: '1rem' }}>
                📍 <strong>Location:</strong> {job.location}
              </p>
              <p style={{ color: 'var(--text-medium)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {job.description}
              </p>
              <Link href="/apply" className="btn btn-primary" style={{ width: '100%' }}>
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        {/* General Application */}
        <div style={{ 
          marginTop: '3rem', 
          padding: '3rem', 
          background: 'var(--bg-light)', 
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
            Don't See Your Role?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-medium)', marginBottom: '1rem' }}>
            We're always looking for talented healthcare professionals. Submit your information 
            and we'll contact you when we have matching opportunities.
          </p>
          <Link href="/apply" className="btn btn-primary">
            Submit General Application
          </Link>
        </div>

        {/* Why Join */}
        <div style={{ marginTop: '4rem' }}>
          <h2 className="section-title">Why Join Viha Lily Care?</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">💰</div>
              <h3>Competitive Pay</h3>
              <p>Attractive compensation packages with benefits for full-time positions.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">📅</div>
              <h3>Flexible Scheduling</h3>
              <p>Choose shifts that work with your lifestyle and commitments.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>Professional Growth</h3>
              <p>Access to training opportunities and career advancement support.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Supportive Team</h3>
              <p>Work with a team that values your contribution and well-being.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

