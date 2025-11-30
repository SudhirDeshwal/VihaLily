import Link from 'next/link';

type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
};

const services: Service[] = [
  {
    id: 'home-care',
    icon: 'HC',
    title: 'Home care for older adults',
    description: 'Personal care, companionship, and respite that keep loved ones safe and independent at home.',
    details: [
      'Personal care, bathing, grooming, and dressing support',
      'Medication reminders and wellness check-ins',
      'Mobility support, transfers, and fall prevention',
      'Meal prep, light housekeeping, and errands',
      'Companionship visits and cognitive engagement',
      'Overnight respite and caregiver relief',
    ],
  },
  {
    id: 'rn-rpn',
    icon: 'RN',
    title: 'RN & RPN staffing services',
    description: 'Hospital, community, and specialty nurses matched to acuity and culture.',
    details: [
      '24/7 staffing desk and rapid deployment for urgent needs',
      'Emergency coverage and last-minute staffing bench',
      'ICU, ER, OR, medicine, and transitional care experience',
      'Charge nurse, leadership, and mentoring support',
      'Permanent, temporary, or casual nurses aligned to your roster',
      'Onboarding packets, EMR-ready documentation, and full compliance',
    ],
  },
  {
    id: 'psw',
    icon: 'PS',
    title: 'PSW & personal care teams',
    description: 'Relationship-driven PSWs, caregivers, and companions for homes, retirement, and LTC.',
    details: [
      'ADL and personal care, feeding, and mobility assistance',
      'Dementia, palliative, and behaviour support',
      'Night, weekend, and respite coverage including live-in options',
      'Consistent staff for continuity and trust with families',
      'Family updates and shift notes after every visit',
      'Wellness, safety, and infection-prevention practices',
    ],
  },
  {
    id: 'retirement',
    icon: 'LT',
    title: 'Retirement & Long-Term staffing',
    description: 'Stable, compassionate staffing for retirement residences and long-term care homes.',
    details: [
      'Retirement home and long-term care staffing solutions',
      'Permanent, temporary, or casual coverage based on census',
      'Block booking to stabilize wings and households',
      'Restorative, wound, and medication management programs',
      'Bilingual and culturally aligned clinicians and caregivers',
      'Leadership support, coaching, and family communication',
    ],
  },
  {
    id: 'staffing-models',
    icon: '24',
    title: '24/7 coverage and surge response',
    description: 'An always-on staffing desk for planned surges and unexpected call-outs.',
    details: [
      'Rapid deployment bench for call-outs and sick coverage',
      'Emergency coverage / last-minute staffing with live updates',
      'Multi-site scheduling, float pools, and block booking',
      'Custom reporting and shift feedback loops for clients',
      'Onboarding packets tailored to your site protocols',
      'Escalation pathways and leadership briefings every step of the way',
    ],
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Staffing built around people</p>
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">
          RN, RPN, PSW, and allied teams customized to your census, acuity, and culture—whether you need 24/7 coverage,
          emergency deployment, or a permanent roster.
        </p>

        {services.map((service) => (
          <div key={service.id} id={service.id} className="service-detail">
            <div className="service-detail__header">
              <span className="service-chip" aria-hidden="true">
                {service.icon}
              </span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>

            <p className="service-detail__eyebrow">What we deliver</p>
            <ul className="service-detail__list">
              {service.details.map((detail) => (
                <li key={detail}>
                  <span className="service-detail__bullet" aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/contact" className="btn btn-primary">
                Hire now
              </Link>
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: '4rem',
            padding: '3rem',
            background: 'var(--bg-blue-light)',
            borderRadius: '16px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Need staffing solutions?</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-medium)', marginBottom: '2rem' }}>
            Tell us about your 24/7 coverage goals, emergency coverage needs, or permanent roster plans and we will
            build a staffing model that fits your timelines.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
