import { notFound } from 'next/navigation';

type AboutPage = {
  badge: string;
  title: string;
  summary: string;
  pillars: string[];
  paragraphs: string[];
  sections: Array<{
    heading: string;
    bullets: string[];
  }>;
  outcomes: string[];
};

const aboutPages: Record<string, AboutPage> = {
  mission: {
    badge: 'MS',
    title: 'Our Mission & Story',
    summary: 'We exist to bridge skilled clinicians and caregivers with families and facilities that need reliable, human-first support.',
    pillars: [
      'Relationship-first, culturally aware care',
      'Clinical governance and mentorship',
      'Rapid deployment and 24/7 support',
      'Clear communication with families and leaders',
    ],
    paragraphs: [
      'Viha Lily Care was founded to ensure every site and family can access credentialed, compassionate clinicians when they need them most.',
      'We serve hospitals, long-term care homes, retirement residences, and community programs with balanced teams that pair warmth with clinical excellence.',
      'Our mission is simple: deliver staffing that elevates patient outcomes, builds trust with families, and supports the professional growth of every team member.',
    ],
    sections: [
      {
        heading: 'How we deliver',
        bullets: [
          'Structured intake that aligns to your census, acuity, language, and cultural needs.',
          'Curated rosters with balanced RN, RPN, PSW, allied, and leadership support.',
          'Mentorship and coaching for clinicians, plus family communication in every shift.',
          '24/7 staffing desk that solves call-outs, emergencies, and surge deployments.',
        ],
      },
      {
        heading: 'Where we operate',
        bullets: [
          'Hospitals, transitional care, and community programs',
          'Retirement and long-term care homes',
          'Home care and respite for older adults',
          'Outreach clinics, vaccination sites, and wellness events',
        ],
      },
    ],
    outcomes: [
      'Consistent, calm care experiences for patients and families',
      'Staffing plans that stabilize units and reduce churn',
      'Leadership visibility through shift feedback and reporting',
      'Teams that reflect community languages and cultures',
    ],
  },
  quality: {
    badge: 'QC',
    title: 'Quality & Compliance',
    summary: 'Every deployment pairs rigorous screening with on-the-ground support so clinicians arrive prepared and families feel confident.',
    pillars: [
      'End-to-end credential verification',
      'Safety, infection prevention, and onboarding',
      'Digital documentation and reporting',
      'Rapid replacements and escalation pathways',
    ],
    paragraphs: [
      'Every clinician and caregiver completes background screening, credential verification, vaccination tracking, and site-specific orientation before they arrive on shift.',
      'We maintain digital credential vaults, WSIB coverage, and standardized handbooks to ensure policy alignment for each site and family we support.',
      'Our 24/7 staffing desk pairs compliance with real-time support—from last-minute replacements to shift feedback loops that keep leadership and families informed.',
    ],
    sections: [
      {
        heading: 'Compliance program',
        bullets: [
          'Background checks, references, immunization, and license verification for every clinician.',
          'Role-specific checklists for RN, RPN, PSW, allied, and leadership placements.',
          'Digital credential vaults with expiry alerts and documentation sharing.',
          'Mandatory orientation to site policies, EMR workflows, and safety protocols.',
        ],
      },
      {
        heading: 'Safety & continuity',
        bullets: [
          'Infection prevention, PPE readiness, and incident escalation pathways.',
          'Backup staffing bench for urgent replacements within hours.',
          'Shift feedback loops that surface risks early and keep families informed.',
          'Client-ready reports with attendance, coverage, and quality notes.',
        ],
      },
    ],
    outcomes: [
      'Teams that arrive prepared, credentialed, and aligned to your protocols',
      'Reduced onboarding time for new staff and faster adoption of site workflows',
      'Lower risk through proactive monitoring of credentials and training',
      'Transparent reporting that builds trust with leadership and families',
    ],
  },
};

export default function AboutDetail({
  params,
}: {
  params: { slug: string };
}) {
  const page = aboutPages[params.slug];

  if (!page) {
    return notFound();
  }

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">About</p>
        <h1 className="section-title">{page.title}</h1>

        <div className="detail-hero" style={{ marginTop: '1rem' }}>
          <div className="detail-meta">
            <span className="service-chip" aria-hidden="true">
              {page.badge}
            </span>
            <span className="detail-tag">Human-first staffing</span>
            <span className="detail-tag">Trusted by families & facilities</span>
          </div>
          <h2 style={{ color: 'var(--text-dark)' }}>{page.summary}</h2>
          <div className="pill-grid">
            {page.pillars.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="service-detail" style={{ marginTop: '1.25rem' }}>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
            {page.paragraphs.map((text) => (
              <p key={text} style={{ color: 'var(--text-medium)', lineHeight: 1.8 }}>
                {text}
              </p>
            ))}
          </div>

          {page.sections.map((section) => (
            <div key={section.heading} style={{ marginBottom: '1rem' }}>
              <p className="service-detail__eyebrow">{section.heading}</p>
              <ul className="service-detail__list">
                {section.bullets.map((item) => (
                  <li key={item}>
                    <span className="service-detail__bullet" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="detail-grid" style={{ marginTop: '1.25rem' }}>
            {page.outcomes.map((item) => (
              <div key={item} className="detail-card">
                <h3>Outcome</h3>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
