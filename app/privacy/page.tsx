export default function Privacy() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Privacy Policy</h1>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ 
            fontSize: '1.125rem', 
            color: 'var(--text-medium)', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Last updated: November 2025
          </p>

          <div style={{ 
            background: 'var(--bg-light)', 
            padding: '3rem', 
            borderRadius: '16px',
            lineHeight: '1.8'
          }}>
            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', fontSize: '1.75rem' }}>
              Your Privacy Matters
            </h2>
            <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              At Viha Lily Care Inc., we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you interact 
              with our website and services.
            </p>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Information We Collect
            </h3>
            <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              When you submit forms on our website (job applications, contact inquiries, or staffing requests), 
              we collect the following types of information:
            </p>
            <ul style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Professional information (credentials, work experience, certifications)</li>
              <li>Employment-related information (availability, position interests, resume details)</li>
              <li>Any additional information you voluntarily provide</li>
            </ul>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
              How We Use Your Information
            </h3>
            <p style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
              We use the information you provide solely for the following purposes:
            </p>
            <ul style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
              <li>To respond to your inquiries and requests</li>
              <li>To process job applications and match candidates with opportunities</li>
              <li>To contact you regarding employment opportunities</li>
              <li>To improve our services and communication</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Data Protection
            </h3>
            <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              We take appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. Your data is stored securely and is only accessed 
              by authorized personnel for legitimate business purposes.
            </p>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Sharing Your Information
            </h3>
            <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
              <li>With healthcare facilities that are seeking qualified staff (with your consent)</li>
              <li>When required by law or to comply with legal processes</li>
              <li>To protect our rights, property, or safety</li>
            </ul>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Your Rights
            </h3>
            <p style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
              You have the right to:
            </p>
            <ul style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', paddingLeft: '2rem' }}>
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent at any time (where applicable)</li>
            </ul>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Contact Us About Privacy
            </h3>
            <p style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              If you have any questions or concerns about our Privacy Policy or how we handle your personal 
              information, please contact us:
            </p>
            <p style={{ color: 'var(--text-dark)', fontWeight: '600' }}>
              Viha Lily Care Inc.<br />
              Email: infovihalilycareinc@gmail.com<br />
              Phone: (647) 641-9660<br />
              Location: Brampton, Ontario
            </p>

            <h3 style={{ color: 'var(--text-dark)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Changes to This Policy
            </h3>
            <p style={{ color: 'var(--text-dark)' }}>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

