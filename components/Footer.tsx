import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Viha Lily Care Inc.</h3>
            <p>Compassionate Staffing. Professional Care.</p>
            <p style={{ marginTop: '1rem' }}>
              Your trusted partner for quality nursing and healthcare staffing solutions in Ontario.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><Link href="/">Home</Link></p>
            <p><Link href="/about">About Us</Link></p>
            <p><Link href="/services">Services</Link></p>
            <p><Link href="/jobs">Jobs</Link></p>
            <p><Link href="/apply">Apply Now</Link></p>
            <p><Link href="/contact">Contact Us</Link></p>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📧 infovihalilycareinc@gmail.com</p>
            <p>📞 (647) 641-9660</p>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <p><Link href="/privacy">Privacy Policy</Link></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Viha Lily Care Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
