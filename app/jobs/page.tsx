import Link from 'next/link';

type JobStream = {
  id: string;
  title: string;
  availability: string;
  summary: string;
  highlights: string[];
  shiftModels: string;
};

const jobStreams: JobStream[] = [
  {
    id: 'rn',
    title: 'Registered Nurse (RN)',
    availability: 'Full-time / Part-time / Casual',
    summary: 'Acute, community, and leadership-ready nurses.',
    highlights: [
      'ICU, ER, perioperative, and medicine coverage',
      'Transitional care, community visits, and vaccination clinics',
      'Charge nurse, mentor, and team lead opportunities',
      '24/7 staffing desk for urgent deployments',
    ],
    shiftModels: 'Permanent, temporary, and casual placements with emergency coverage when shifts change.',
  },
  {
    id: 'rpn',
    title: 'Registered Practical Nurse (RPN)',
    availability: 'Full-time / Part-time / Temporary',
    summary: 'Adaptable nurses for resident-focused and clinic care.',
    highlights: [
      'Retirement and long-term care rotations',
      'Rehab, clinic, and transitional units',
      'Medication, wound, and behavioural support',
      'Block booking or vacation coverage',
    ],
    shiftModels: 'Day, evening, night, and weekend options that match your preferences.',
  },
  {
    id: 'psw',
    title: 'Personal Support Worker (PSW)',
    availability: 'Full-time / Part-time / Casual',
    summary: 'PSWs and caregivers for homes, retirement, and LTC.',
    highlights: [
      'Personal care, ADLs, and mobility support',
      'Dementia, palliative, and respite care',
      'Overnight sitters and 24/7 live-in support',
      'Family communication after each shift',
    ],
    shiftModels: 'Permanent, temporary, or casual schedules across home care, retirement, and LTC settings.',
  },
  {
    id: 'allied',
    title: 'Allied & Support Team Members',
    availability: 'Contract / Part-time / Casual',
    summary: 'Allied health and support professionals.',
    highlights: [
      'Physiotherapist and therapy assistants',
      'Dietary aide and nutrition support',
      'Caregivers, companions, and sitters',
      'Recreation, housekeeping, and medical delivery support',
      'Emergency coverage and last-minute shifts',
    ],
    shiftModels: 'Custom scheduling including surge response and short-notice coverage.',
  },
];

const perks = [
  {
    title: 'Scheduling built around you',
    copy: 'Pick permanent, temporary, or casual shifts with a 24/7 desk supporting changes and emergencies.',
  },
  {
    title: 'Clinical and safety support',
    copy: 'Site orientations, digital handbooks, and quick replacements so you are never on your own.',
  },
  {
    title: 'Reliable pay and growth',
    copy: 'Transparent rates, on-time pay, feedback loops, and leadership pathways.',
  },
];

export default function Jobs() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Join our team</p>
        <h1 className="section-title">Career Opportunities</h1>
        <p className="section-subtitle">
          RN, RPN, PSW, and allied professionals ready to deliver calm, confident care.
        </p>

        <div className="job-accordion-list">
          {jobStreams.map((stream, index) => (
            <details key={stream.id} id={stream.id} className="job-accordion" open={index === 0}>
              <summary>
                <div>
                  <h2 className="job-accordion__title">{stream.title}</h2>
                  <div className="job-accordion__meta">
                    <span className="job-accordion__badge">{stream.availability}</span>
                    <span>{stream.summary}</span>
                  </div>
                </div>
                <span className="job-accordion__chevron" aria-hidden="true">
                  ▾
                </span>
              </summary>
              <div className="job-accordion__body">
                <ul className="job-accordion__list">
                  {stream.highlights.map((item) => (
                    <li key={item}>
                      <span className="job-accordion__bullet" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="job-accordion__footer">
                  <span className="job-availability">{stream.shiftModels}</span>
                  <Link href="/apply" className="btn btn-primary">
                    Apply for {stream.title}
                  </Link>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="card" style={{ padding: '2.5rem', textAlign: 'center', marginTop: '1rem' }}>
          <h2 style={{ color: 'var(--text-dark)', marginBottom: '0.75rem' }}>Don't see your role?</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-medium)', marginBottom: '1rem' }}>
            We are always building the bench for specialized clinicians and support teams. Tell us about your skills and
            preferred schedules, and we will notify you when a match opens.
          </p>
          <Link href="/apply" className="btn btn-primary">
            Submit your application
          </Link>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h2 className="section-title">Why clinicians choose Viha Lily Care</h2>
          <div className="cards-grid">
            {perks.map((perk) => (
              <div key={perk.title} className="card">
                <h3>{perk.title}</h3>
                <p style={{ color: 'var(--text-medium)', lineHeight: '1.8' }}>{perk.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
