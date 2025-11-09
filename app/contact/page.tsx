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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const info = await response.json().catch(() => null as any);
        const details = info?.message || info?.body || info?.details || info?.post?.body || '';
        const statusText = info?.status || info?.post?.status || info?.get?.status || response.status;
        setStatus({
          type: 'error',
          message: `Failed to send message (status ${statusText}). ${details ? String(details).slice(0, 300) : 'Please try again.'}`
        });
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
            <div className="contact-icon" aria-hidden="true">📧</div>
            <h3>Email Us</h3>
            <p>info@vihalilycare.ca</p>
          </div>

          <div className="contact-item">
            <div className="contact-icon" aria-hidden="true">📞</div>
            <h3>Call Us</h3>
            <p>(647) 641-9660</p>
            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: 'var(--text-light)' }}>
              Monday - Friday: 8:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Map removed by request */}

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
