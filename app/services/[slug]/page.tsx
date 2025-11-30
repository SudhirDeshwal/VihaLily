import Link from 'next/link';
import { notFound } from 'next/navigation';

type ServicePage = {
  badge: string;
  title: string;
  summary: string;
  metaTags: string[];
  pillars: string[];
  sections: Array<{
    heading: string;
    bullets: string[];
  }>;
  outcomes: string[];
  responseNote: string;
};

const servicePages: Record<string, ServicePage> = {
  'home-care': {
    badge: 'HC',
    title: 'Home Care for Older Adults',
    summary: 'Personal care, companionship, and safety programs that keep loved ones confident at home.',
    metaTags: ['Permanent', 'Temporary', 'Casual / Live-in'],
    pillars: [
      'Safety-focused personal care and ADL support',
      'Trusted caregivers matched to language and culture',
      'Flexible scheduling for respite, nights, and live-in',
      'Family updates after every visit',
    ],
    sections: [
      {
        heading: 'Care we provide',
        bullets: [
          'Bathing, grooming, dressing, and continence support',
          'Medication reminders and wellness check-ins',
          'Mobility support, transfers, and fall prevention',
          'Meal prep, light housekeeping, and errands',
          'Companionship visits and cognitive engagement',
          'Overnight respite, sitters, and live-in care',
        ],
      },
      {
        heading: 'How we staff',
        bullets: [
          'Permanent, temporary, or casual coverage based on family needs',
          'Consistent caregivers to build trust and reduce turnover',
          '24/7 desk for last-minute changes and rapid replacements',
        ],
      },
      {
        heading: 'Safety & assurance',
        bullets: [
          'Screened, insured, and trained caregivers with site orientation',
          'Family communication and shift notes after each visit',
          'Escalation pathways if health needs change',
        ],
      },
    ],
    outcomes: [
      'Loved ones stay safe, confident, and connected at home',
      'Families get reliable respite and communication they can trust',
      'Reduced hospital readmissions through proactive monitoring',
    ],
    responseNote: 'Average response time for new home care starts: under 24 hours.',
  },
  'rn-rpn': {
    badge: 'RN',
    title: 'RN & RPN Staffing Services',
    summary: 'Clinical nurses tailored to your acuity, culture, and protocols for hospital, community, and LTC settings.',
    metaTags: ['24/7 coverage', 'Emergency bench', 'Leadership-ready'],
    pillars: [
      'Acuity-matched RN and RPN teams',
      'Leadership, charge, and mentorship support',
      'EMR-ready documentation and compliance',
      'Block booking and surge response',
    ],
    sections: [
      {
        heading: 'Where we deploy',
        bullets: [
          'Hospitals, transitional care, and community programs',
          'Retirement and long-term care wings needing stabilization',
          'Vaccination clinics, outreach, and community visits',
        ],
      },
      {
        heading: 'Why teams choose us',
        bullets: [
          '24/7 staffing desk with emergency coverage and last-minute backups',
          'Block booking, surge teams, and leadership-ready nurses',
          'EMR-ready documentation, compliance, and onboarding packets',
        ],
      },
      {
        heading: 'Staffing model',
        bullets: [
          'Permanent, temporary, or casual shifts matched to your roster',
          'Night, weekend, and holiday coverage',
          'Rapid replacements to keep census plans on track',
        ],
      },
    ],
    outcomes: [
      'Stabilized units with leadership visibility and clear reporting',
      'Faster onboarding with EMR-ready clinicians and checklists',
      'Reduced overtime and burnout through reliable float and surge teams',
    ],
    responseNote: 'Emergency response available; standard deployments within 24–72 hours.',
  },
  psw: {
    badge: 'PS',
    title: 'PSW & Personal Care Teams',
    summary: 'Relationship-driven PSWs, caregivers, and companions for homes, retirement communities, and LTC.',
    metaTags: ['Continuity first', 'Respite & nights', 'Family updates'],
    pillars: [
      'Continuity and trust with dedicated caregivers',
      'Dementia, palliative, and behaviour support',
      'Night, weekend, and respite coverage including live-in',
      'Shift notes and family communication built-in',
    ],
    sections: [
      {
        heading: 'Support we deliver',
        bullets: [
          'ADLs, feeding assistance, and mobility support',
          'Dementia, palliative, and behavioural support',
          'Respite, overnight sitters, and live-in care',
          'Family communication and shift notes after every visit',
        ],
      },
      {
        heading: 'Staffing model',
        bullets: [
          'Permanent, temporary, and casual options to stabilize teams',
          'Coverage for weekends, holidays, and last-minute call-outs',
          'Trusted caregivers who build continuity and rapport',
        ],
      },
      {
        heading: 'Assurance',
        bullets: [
          'Screened, insured, and coached PSWs for each environment',
          'Onboarding packets and safety protocols for every site',
          'Escalation pathways to RN/RPN leadership when needs change',
        ],
      },
    ],
    outcomes: [
      'Residents and families experience consistent, calm care',
      'Reduced agency churn through continuity-focused scheduling',
      'Better sleep and safety for families with overnight and respite options',
    ],
    responseNote: 'Coverage available for same-day urgent needs and planned rotations.',
  },
  retirement: {
    badge: 'LT',
    title: 'Retirement & Long-Term staffing',
    summary: 'Stabilize wings and households with compassionate nursing and care teams who prioritize resident experience.',
    metaTags: ['Permanent', 'Temporary', 'Casual / Block booking'],
    pillars: [
      'Household continuity and family-first communication',
      'RN/RPN/PSW mixes tuned to behaviours and meds',
      'Restorative, wound, and dementia programs',
      'Float pools and leadership support to steady wings',
    ],
    sections: [
      {
        heading: 'What we cover',
        bullets: [
          'RN, RPN, PSW, and allied teams for resident-focused care',
          'Medication, wound care, restorative, and behaviour support',
          'Family updates, bilingual support, and household continuity',
        ],
      },
      {
        heading: 'Staffing model',
        bullets: [
          'Permanent, temporary, or casual rosters to match census',
          'Block bookings and float pools to reduce agency churn',
          '24/7 desk for emergency coverage and last-minute staffing',
        ],
      },
      {
        heading: 'Partner experience',
        bullets: [
          'Leadership-ready nurses for charge and mentorship',
          'Onboarding packets and safety protocols for each site',
          'Reporting that keeps operators and families informed',
        ],
      },
    ],
    outcomes: [
      'Stabilized wings with predictable staffing and lower churn',
      'Families feel connected through regular updates and continuity',
      'Improved compliance and audit readiness with credentialed teams',
    ],
    responseNote: 'Block bookings available; surge and emergency support on-demand.',
  },
  'staffing-models': {
    badge: '24',
    title: '24/7 Coverage & Emergency Staffing',
    summary: 'Rapid deployment for call-outs, surge events, and multi-site coverage with reporting you can trust.',
    metaTags: ['Emergency coverage', 'Last-minute staffing', 'Multi-site ready'],
    pillars: [
      'Always-on staffing desk with live updates',
      'Emergency coverage and call-out bench',
      'Surge teams for outbreaks and seasonal peaks',
      'Client-ready reporting and feedback loops',
    ],
    sections: [
      {
        heading: 'How we respond',
        bullets: [
          'Emergency coverage and last-minute staffing bench',
          'Surge teams for outbreaks, seasonal peaks, and new unit openings',
          'Multi-site scheduling, float pools, and block booking options',
        ],
      },
      {
        heading: 'Staffing model',
        bullets: [
          'Permanent, temporary, or casual models aligned to your protocols',
          'Live updates, shift feedback loops, and client-ready reporting',
          'Rapid replacements with orientation packets for every deployment',
        ],
      },
      {
        heading: 'Assurance',
        bullets: [
          'Credentialed, screened clinicians with site-specific onboarding',
          'Escalation pathways to leadership for high-acuity events',
          'Post-shift reporting and KPI tracking for partners',
        ],
      },
    ],
    outcomes: [
      'Call-outs covered quickly without sacrificing quality or fit',
      'Leadership stays informed through live updates and shift reports',
      'Multi-site operators get consistent coverage with less admin overhead',
    ],
    responseNote: 'Emergency coverage desk available 24/7; deployments within hours.',
  },
};

export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const page = servicePages[params.slug];

  if (!page) {
    return notFound();
  }

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h1 className="section-title">{page.title}</h1>

        <div className="detail-hero" style={{ marginTop: '1rem' }}>
          <div className="detail-meta">
            <span className="service-chip" aria-hidden="true">
              {page.badge}
            </span>
            {page.metaTags.map((tag) => (
              <span key={tag} className="detail-tag">
                {tag}
              </span>
            ))}
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
          {page.sections.map((section) => (
            <div key={section.heading} style={{ marginBottom: '1.25rem' }}>
              <p className="service-detail__eyebrow">{section.heading}</p>
              <ul className="service-detail__list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className="service-detail__bullet" aria-hidden="true" />
                    <span>{bullet}</span>
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

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-medium)', marginBottom: '0.75rem' }}>{page.responseNote}</p>
            <Link href="/contact" className="btn btn-primary">
              Request staffing support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
