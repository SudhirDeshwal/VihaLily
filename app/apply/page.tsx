'use client';

import { useState, FormEvent, useEffect } from 'react';

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

  // Simple anti-bot: honeypot + required checkbox + time-to-submit
  const [botField, setBotField] = useState('');
  const [humanCheck, setHumanCheck] = useState(false);
  const [humanError, setHumanError] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  useEffect(() => { setStartTime(Date.now()); }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const elapsed = Date.now() - startTime;
    if (!humanCheck) {
      setLoading(false);
      setHumanError(true);
      setStatus({ type: 'error', message: 'Please confirm you are not a robot.' });
      return;
    }

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: typeof window !== 'undefined' ? window.location.href : '',
          hp: botField,
          t: elapsed,
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Application submitted successfully! We will contact you soon via email or phone.'
        });

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

        setHumanCheck(false);
        setHumanError(false);
        setBotField('');
        setStartTime(Date.now());

        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const info = await response.json().catch(() => null as any);
        const details = info?.message || info?.body || info?.details || '';
        const statusText = info?.status || response.status;
        if (response.status === 400) setHumanError(true);
        setStatus({
          type: 'error',
          message: `Failed to submit application (status ${statusText}). ${details ? String(details).slice(0, 300) : 'Please try again.'}`
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
                placeholder="(647) 641-9660"
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
                placeholder="Please paste your resume here which should include your experience, certifications, or any other relevant information."
              />
            </div>

            {/* Honeypot field (should remain empty) */}
            <div style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Pseudo reCAPTCHA-style box */}
            <div className="form-group" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
              <div
                role="group"
                aria-label="Human verification"
                style={{
                  border: `1px solid ${humanError ? '#d93025' : 'rgba(0,0,0,0.15)'}`,
                  borderRadius: 6,
                  background: '#fff',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                  padding: '12px 14px',
                  maxWidth: 390,
                  display: 'grid',
                  gridTemplateColumns: '24px 1fr 70px',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                {humanError && (
                  <div style={{ gridColumn: '1 / -1', color: '#d93025', fontSize: 12, marginBottom: 6 }}>
                    Verification required. Check the checkbox.
                  </div>
                )}
                <input
                  aria-label="I am not a robot"
                  type="checkbox"
                  checked={humanCheck}
                  onChange={(e) => { setHumanCheck(e.target.checked); if (e.target.checked) setHumanError(false); }}
                  required
                  style={{ width: 20, height: 20 }}
                />
                <div style={{ fontSize: 14, color: 'var(--text, #111827)' }}>
                  I'm not a robot
                </div>
                <div style={{ justifySelf: 'end', textAlign: 'right' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#4285F4', color: '#fff', fontSize: 14, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>r</div>
                  <div style={{ fontSize: 10, color: '#6b7280' }}>reCAPTCHA
                    <div>Privacy • Terms</div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ width: '100%', fontSize: '1.125rem', padding: '1rem' }}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>

            {/* Removed privacy policy reference as requested */}
          </form>
        </div>
      </div>
    </section>
  );
}

