'use client';

import { useState, FormEvent } from 'react';

export default function Apply() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
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
            message: 'Form is not yet configured. Please contact infovihalilycareinc@gmail.com directly, or set up Formspree (see SETUP.md).'
          });
          console.log('Form submission data:', formData);
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
          _subject: `Job Application from ${formData.firstName} ${formData.lastName}`,
          _replyto: formData.email,
          _format: 'plain',
        }),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Application submitted successfully! We will contact you soon via email or phone.' 
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          role: '',
          experience: '',
          availability: '',
          message: '',
        });
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStatus({ type: 'error', message: 'Failed to submit application. Please try again.' });
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
        <h1 className="section-title">Apply Now</h1>
        <p className="section-subtitle">
          Join our team of healthcare professionals. Submit your information below and we'll contact you.
        </p>

        <div className="form-container">
          {status && (
            <div className={`alert alert-${status.type}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div className="form-group">
                <label htmlFor="firstName">
                  First Name <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
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
              <label htmlFor="phone">
                Phone Number <span className="form-required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(905) 555-0000"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">
                Position of Interest <span className="form-required">*</span>
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="">Select a position</option>
                <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                <option value="Registered Practical Nurse (RPN)">Registered Practical Nurse (RPN)</option>
                <option value="Personal Support Worker (PSW)">Personal Support Worker (PSW)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience">
                Years of Experience <span className="form-required">*</span>
              </label>
              <select
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleInputChange}
              >
                <option value="">Select experience</option>
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="6-10 years">6-10 years</option>
                <option value="10+ years">10+ years</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="availability">
                Availability <span className="form-required">*</span>
              </label>
              <select
                id="availability"
                name="availability"
                required
                value={formData.availability}
                onChange={handleInputChange}
              >
                <option value="">Select availability</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Per-diem">Per-diem</option>
                <option value="Weekend Only">Weekend Only</option>
                <option value="Night Shift">Night Shift</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about yourself, your experience, certifications, or any questions you have..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>

            <p style={{ 
              marginTop: '1rem', 
              textAlign: 'center', 
              color: 'var(--text-light)', 
              fontSize: '0.875rem' 
            }}>
              By submitting this form, you agree to our <a href="/privacy" style={{ color: 'var(--primary-blue)' }}>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

