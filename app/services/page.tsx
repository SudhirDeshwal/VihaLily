import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: '🏥',
      title: 'Long-Term Care Staffing',
      description: 'Experienced and qualified staff for nursing homes, retirement communities, and long-term care facilities wherever support is needed.',
      details: [
        'Registered Nurses (RN)',
        'Registered Practical Nurses (RPN)',
        'Personal Support Workers (PSW)',
        '24/7 staffing availability',
        'Weekend and holiday coverage',
        'Ongoing training and support'
      ]
    },
    {
      icon: '🧑‍⚕️',
      title: 'Hospital Support Staff',
      description: 'Qualified healthcare professionals for hospital units, emergency departments, intensive care, and specialty departments.',
      details: [
        'Critical care nurses',
        'Medical-surgical staff',
        'Emergency department coverage',
        'Operating room support',
        'Float pool staffing',
        'Per-diem and contract options'
      ]
    },
    {
      icon: '🏡',
      title: 'Home & Community Care',
      description: 'Compassionate in-home care services for patients who need assistance in their homes and community settings.',
      details: [
        'Personal support services',
        'Medication management',
        'Post-surgical care',
        'Chronic disease management',
        'Companion care',
        'Respite services'
      ]
    },
    {
      icon: '⏱️',
      title: 'Emergency Coverage / Last-Minute Staffing',
      description: 'Rapid response team for unexpected staffing needs, sick calls, and urgent coverage requirements.',
      details: [
        'Same-day availability',
        'On-call nursing staff',
        'Backup coverage planning',
        'Flexible scheduling',
        'Quick response times',
        'Reliable professionals'
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">
          Comprehensive healthcare staffing solutions for facilities in every community we serve
        </p>

        {services.map((service, index) => (
          <div key={index} className="service-detail">
            <div style={{ display: 'flex', alignItems: 'start', gap: '2rem', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '4rem', lineHeight: 1 }}>{service.icon}</div>
              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
            
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>What We Offer:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {service.details.map((detail, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: 'var(--text-medium)'
                }}>
                  <span style={{ color: 'var(--primary-blue)' }}>✓</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/contact" className="btn btn-primary">
                Hire Now
              </Link>
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div style={{ 
          marginTop: '4rem', 
          padding: '3rem', 
          background: 'var(--bg-blue-light)', 
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
            Need Staffing Solutions?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-medium)', marginBottom: '2rem' }}>
            Contact us to discuss your staffing needs. We'll work with you to find the perfect 
            healthcare professionals for your facility.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

