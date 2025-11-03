'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'; // Replace with your actual Formspree form ID

    try {
      // If form ID is not configured, show helpful message
      if (FORMSPREE_FORM_ID === 'YOUR_FORM_ID') {
        setTimeout(() => {
          setLoading(false);
          setStatus({
            type: 'error',
            message: 'Form is not yet configured. Please email infovihalilycareinc@gmail.com directly, or set up Formspree (see SETUP.md).'
          });
          console.log('Contact form submission data:', formData);
        }, 1000);
        return;
      }

      // Using Formspree for form submission
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: formData.subject,
          _replyto: formData.email,
          _format: 'plain',
        }),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! We will get back to you soon.' 
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">
          Have questions? Need staffing solutions? We'd love to hear from you.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <h3>Email Us</h3>
            <p>infovihalilycareinc@gmail.com</p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p>(647) 641-9660</p>
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: 'var(--text-light)' }}>
              Monday - Friday: 8:00 AM - 6:00 PM
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p>Brampton, Ontario</p>
          </div>
        </div>

        {/* Optional: Add Google Maps embed */}
        {false && (
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.6787295953235!2d-79.75838768450249!3d43.65322627912166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3461e8f5e6ed%3A0x4a2f5f0e7e5c8c8c!2sBrampton%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}

        <div className="form-container">
          {status && (
            <div className={`alert alert-${status.type}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Your Name <span className="form-required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="form-required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(647) 641-9660"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject <span className="form-required">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Staffing Request">Staffing Request</option>
                <option value="Quote Request">Quote Request</option>
                <option value="Job Opportunities">Job Opportunities</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="form-required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            <p style={{ 
              marginTop: '1rem', 
              textAlign: 'center', 
              color: 'var(--text-light)', 
              fontSize: '0.875rem' 
            }}>
              We typically respond within 24-48 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

