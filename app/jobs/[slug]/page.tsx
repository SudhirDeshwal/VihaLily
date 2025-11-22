import Link from 'next/link';
import { notFound } from 'next/navigation';

type JobPage = {
  badge: string;
  title: string;
  summary: string;
  metaTags: string[];
  pillars: string[];
  highlights: string[];
  shiftModels: string[];
  perks: string[];
  qualities: string[];
};

const jobPages: Record<string, JobPage> = {
  rn: {
    badge: 'RN',
    title: 'Registered Nurse (RN) Roles',
    summary: 'ICU, ER, perioperative, med-surg, and community RNs ready for complex deployments with leadership support.',
    metaTags: ['Full-time', 'Part-time', 'Casual / Surge'],
    pillars: [
      'Acuity-matched placements with charge and mentorship options',
      'EMR-ready clinicians with documentation and reporting',
      '24/7 staffing desk for last-minute coverage',
      'Growth pathways into leadership and specialty roles',
    ],
    highlights: [
      'Critical care, ER, perioperative, and medicine readiness',
      'Transitional care, community visits, vaccination clinics, and outreach',
      'Charge, mentor, and team lead opportunities across units',
      'Clinical collaboration with RPN and PSW teams to balance acuity',
    ],
    shiftModels: [
      'Permanent placements with growth pathways',
      'Temporary block booking for units and surge events',
      'Casual and emergency coverage when shifts change',
    ],
    perks: [
      'Supportive leadership, coaching, and peer mentorship',
      'Reliable scheduling with transparent rates and on-time pay',
      'Professional development and cross-training opportunities',
    ],
    qualities: [
      'Confident with high-acuity workflows and collaboration',
      'Communicates clearly with families and interdisciplinary teams',
      'Comfortable with fast-paced change and EMR adoption',
    ],
  },
  rpn: {
    badge: 'RPN',
    title: 'Registered Practical Nurse (RPN) Roles',
    summary: 'Versatile RPNs for retirement, LTC, clinics, and transitional programs that value continuity and calm care.',
    metaTags: ['Full-time', 'Part-time', 'Temporary'],
    pillars: [
      'Resident-focused care with medication and wound support',
      'Behavioural, restorative, and clinic rotations',
      'Float pool, block booking, and vacation coverage options',
      'Coaching and leadership pathways for emerging leaders',
    ],
    highlights: [
      'Medication, wound care, restorative, and behavioural support',
      'Rehab, clinic, and transitional care rotations',
      'Retirement home and LTC households that value continuity',
      'Block booking or vacation coverage to steady teams',
    ],
    shiftModels: [
      'Permanent, temporary, or casual scheduling',
      'Day, evening, night, and weekend options',
      'Emergency coverage and last-minute staffing bench',
    ],
    perks: [
      'Stable schedules with options that fit your lifestyle',
      'Team that values communication, coaching, and safety',
      'Exposure to multiple care environments to broaden skills',
    ],
    qualities: [
      'Resident-first mindset with calm bedside presence',
      'Detail-oriented with medication and documentation',
      'Collaborative partner to RN, PSW, and allied teams',
    ],
  },
  psw: {
    badge: 'PSW',
    title: 'PSW & Caregiver Roles',
    summary: 'Relationship-driven PSWs for home care, retirement, and LTC—with continuity, night support, and family updates.',
    metaTags: ['Full-time', 'Part-time', 'Casual / Overnight'],
    pillars: [
      'Continuity-focused schedules for residents and families',
      'Dementia, palliative, and behaviour support',
      'Overnight, weekend, and respite coverage including live-in',
      'Shift notes and family communication baked in',
    ],
    highlights: [
      'ADLs, mobility, feeding, and safety checks',
      'Dementia, palliative, and respite programs',
      'Overnight sitters, live-in, and weekend coverage',
      'Family communication and shift notes after each visit',
    ],
    shiftModels: [
      'Permanent, temporary, or casual options',
      'Home care, retirement, and LTC placements',
      '24/7 and last-minute coverage for client needs',
    ],
    perks: [
      'Predictable schedules where possible, plus premium shifts',
      'Supportive leadership that values your feedback and safety',
      'Training refreshers and growth into specialized programs',
    ],
    qualities: [
      'Compassionate and dependable with a calm presence',
      'Attentive to detail and infection prevention practices',
      'Builds trust quickly with residents, families, and staff',
    ],
  },
  allied: {
    badge: 'Allied',
    title: 'Allied & Support Team Roles',
    summary: 'Physiotherapy, dietary, recreation, caregivers, and support staff who keep every shift moving.',
    metaTags: ['Contract', 'Part-time', 'Casual / Surge'],
    pillars: [
      'Therapy, dietary, recreation, and support roles covered',
      'Multi-site float pools and block booking availability',
      'Emergency coverage and last-minute staffing bench',
      'Clear reporting and communication on every shift',
    ],
    highlights: [
      'Physiotherapists and therapy assistants',
      'Dietary aide and nutrition support teams',
      'Recreation, housekeeping, and medical delivery support',
      'Caregivers, companions, and sitters for home and facility care',
    ],
    shiftModels: [
      'Contract, part-time, or casual assignments',
      'Emergency coverage and last-minute staffing',
      'Multi-site support with float pools and block booking',
    ],
    perks: [
      'Varied environments with supportive onboarding',
      'Reliable scheduling and transparent assignments',
      'Opportunities to cross-train and expand your scope',
    ],
    qualities: [
      'Collaborative teammate who communicates clearly',
      'Detail-oriented with safety and customer service focus',
      'Adaptable to different sites and family needs',
    ],
  },
};

export default function JobRolePage({
  params,
}: {
  params: { slug: string };
}) {
  const page = jobPages[params.slug];

  if (!page) {
    return notFound();
  }

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Join our team</p>
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
          <div style={{ marginBottom: '1.25rem' }}>
            <p className="service-detail__eyebrow">What you&apos;ll do</p>
            <ul className="job-accordion__list">
              {page.highlights.map((item) => (
                <li key={item}>
                  <span className="job-accordion__bullet" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <p className="service-detail__eyebrow">How we schedule</p>
            <ul className="job-accordion__list">
              {page.shiftModels.map((item) => (
                <li key={item}>
                  <span className="job-accordion__bullet" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-grid" style={{ marginTop: '1rem' }}>
            <div className="detail-card">
              <h3>What you&apos;ll love</h3>
              <ul className="job-accordion__list" style={{ marginTop: '0.5rem' }}>
                {page.perks.map((item) => (
                  <li key={item}>
                    <span className="job-accordion__bullet" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="detail-card">
              <h3>Who thrives here</h3>
              <ul className="job-accordion__list" style={{ marginTop: '0.5rem' }}>
                {page.qualities.map((item) => (
                  <li key={item}>
                    <span className="job-accordion__bullet" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/apply" className="btn btn-primary">
              Apply for {page.title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
