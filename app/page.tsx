import Link from 'next/link';
import Image from 'next/image';

const heroImages: Array<{ src: string; alt: string; width: number; height: number }> = [
  {
    src: '/pics/Gemini_Generated_Image_1bastu1bastu1bas.png',
    alt: 'Hospital RN team reviewing patient vitals',
    width: 900,
    height: 600,
  },
  {
    src: '/pics/Gemini_Generated_Image_rvpn9srvpn9srvpn.png',
    alt: 'Personal support worker with an elder resident',
    width: 720,
    height: 900,
  },
  {
    src: '/pics/Gemini_Generated_Image_k5m59qk5m59qk5m5.png',
    alt: 'Nurse providing an in-home visit with family present',
    width: 720,
    height: 900,
  },
];

const heroStats = [
  { value: 'RN / RPN', label: 'Acute and transitional units' },
  { value: 'PSW & PCA', label: 'Home and long-term care' },
  { value: 'Allied & Dietary', label: 'Therapy, aides and other support teams' },
];

const highlightCards = [
  {
    icon: 'pulse',
    title: 'Clinical excellence',
    copy: 'Curated RNs, RPNs, PSWs, and allied clinicians balanced for acuity, language, and bedside manner.',
    footer: 'Daily skills validation and onboarding.',
  },
  {
    icon: 'shield',
    title: 'Compliance ready',
    copy: 'Full background checks, immunization tracking, WSIB coverage, and digital credential vaults.',
    footer: 'Fully Compliance -aligned processes.',
  },
  {
    icon: 'clock',
    title: '24/7 staffing desk',
    copy: 'Live coordination team that solves last-minute call-outs, block bookings, and surge events.',
    footer: 'Available 24/7 for urgent needs.',
  },
  {
    icon: 'spark',
    title: 'Human + tech',
    copy: 'Modern scheduling, shift feedback loops, and on-device workflows keep teams aligned with families.',
    footer: 'Auto custom reports for clients after each shift.',
  },
];

const serviceShowcase: Array<{
  title: string;
  description: string;
  bullets: string[];
  image: string;
  width: number;
  height: number;
}> = [
  {
    title: 'Hospital + acute units',
    description: 'Critical care, medicine, ER, and perioperative nurses with adaptable contracts.',
    bullets: ['Float pools and surge teams', 'RN, RPN, and specialty pairings', 'Night and weekend coverage'],
    image: '/pics/Gemini_Generated_Image_5w7bch5w7bch5w7b.png',
    width: 1200,
    height: 800,
  },
  {
    title: 'Long-term and retirement',
    description: 'Warm, continuity-focused staffing for resident-centred care.',
    bullets: ['Medication and wound care experts', 'Behavioural support PSWs', 'Consistent family updates'],
    image: '/pics/Gemini_Generated_Image_8ww05q8ww05q8ww0.png',
    width: 1200,
    height: 800,
  },
  {
    title: 'Home and community',
    description: 'Compassionate in-home clinicians for transitional, respite, and palliative journeys.',
    bullets: ['RN care coordination', 'Personal care and ADL support', 'Chronic and post-op programs'],
    image: '/pics/Gemini_Generated_Image_9vwj4l9vwj4l9vwj.png',
    width: 1200,
    height: 800,
  },
];

const careSteps = [
  {
    step: '01',
    title: 'Listen and scope',
    copy: 'Joint intake covering census forecasts, acuity mix, and site protocols.',
  },
  {
    step: '02',
    title: 'Curate the roster',
    copy: 'We surface clinicians with aligned skills, languages, and availability.',
  },
  {
    step: '03',
    title: 'Deploy and support',
    copy: 'Onboarding packets, digital handbooks, and rapid standby replacements.',
  },
];

const talentSpotlight: Array<{
  title: string;
  description: string;
  tags: string[];
  image: string;
  width: number;
  height: number;
}> = [
  {
    title: 'Registered Nurses (RN)',
    description: 'ICU, ER, medicine, perioperative, and leadership-ready professionals for complex deployments.',
    tags: ['ICU and ER', 'Med-surg', 'Charge support'],
    image: '/pics/Gemini_Generated_Image_lpkbq0lpkbq0lpkb.png',
    width: 900,
    height: 620,
  },
  {
    title: 'Registered Practical Nurses (RPN)',
    description: 'Versatile nurses who bridge acute, rehab, and community programs with consistent bedside care.',
    tags: ['Rehab', 'Transitional care', 'Vaccination clinics'],
    image: '/pics/Gemini_Generated_Image_ohkjjxohkjjxohkj.png',
    width: 900,
    height: 620,
  },
  {
    title: 'Personal Support Workers (PSW)',
    description: 'Relationship-driven caregivers for ADLs, dementia support, respite care, and family coaching.',
    tags: ['Memory care', 'Respite', 'Palliative'],
    image: '/pics/Gemini_Generated_Image_1kb3ja1kb3ja1kb3.png',
    width: 900,
    height: 620,
  },
  {
    title: 'Allied, PCA, and Dietary',
    description: 'Patient care aides, recreation, therapy, dietary teams, medical delivery and cleaners who keep every shift moving.',
    tags: ['Patient care aides', 'Recreation therapy', 'Dietary services'],
    image: '/pics/Gemini_Generated_Image_wsowawwsowawwsow.png',
    width: 900,
    height: 620,
  },
];

const partnerTags = [
  'Hospitals and health systems',
  'Long-term and retirement',
  'Community clinics',
  'Home care networks',
  'Rehab and specialty centres',
];

const iconMap: Record<string, JSX.Element> = {
  pulse: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M4 12h3l2-6 4 12 2-6h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 3l7 3v5a10 10 0 01-7 9 10 10 0 01-7-9V6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path
        d="M12 2v4m0 12v4m10-8h-4M6 12H2m15.07-6.93l-2.83 2.83M7.76 16.24l-2.83 2.83m0-14.14l2.83 2.83m9.48 9.48l2.83 2.83"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      <section className="hero hero--immersive">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Healthcare staffing network</p>
            <h1>
              Hire RN, RPN, PSW, and allied teams
              <span>ready for hospitals, long-term care, and in-home support.</span>
            </h1>
            <p className="hero-lead">
              Viha Lily Care deploys credentialed nurses, PSWs, and allied health talent who are ready for complex
              caseloads, EMR adoption, and family communication on-site or in-home.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Request clinicians
              </Link>
              <Link href="/apply" className="btn btn-outline">
                Join the network
              </Link>
            </div>
            <ul className="hero-stats">
              {heroStats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-media" aria-hidden="true">
            <div className="hero-mosaic">
              {heroImages.map((image, index) => (
                <figure key={image.alt} className={`hero-frame hero-frame--${index + 1}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 768px) 80vw, 35vw"
                    priority={index === 0}
                  />
                </figure>
              ))}
            </div>
            <div className="hero-glasscard">
              <p className="eyebrow">Rapid deployment</p>
              <h3>Staffed an entire LTC wing in 36 hours.</h3>
              <p>18-clinician team blending dementia, wound care, restorative programs, and bilingual support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlights">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Why partners choose us</p>
            <h2>Human-first staffing built for today&apos;s acuity.</h2>
          </div>
          <div className="highlight-grid">
            {highlightCards.map((card) => (
              <article key={card.title} className="highlight-card">
                <span className="icon-circle">{iconMap[card.icon]}</span>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <small>{card.footer}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-showcase">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Adaptable programs</p>
            <h2>Precision-matched clinicians for every setting.</h2>
            <p className="section-subtitle">
              From emergency call-outs to multi-site rollouts, we pair relational caregivers with modern workflows.
            </p>
          </div>
          <div className="service-grid">
            {serviceShowcase.map((service) => (
              <article key={service.title} className="service-tile">
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={service.width}
                    height={service.height}
                    sizes="(max-width: 768px) 100vw, 32vw"
                  />
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href="/services" className="service-link">
                    Explore coverage &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section care-insights">
        <div className="container care-grid">
          <div>
            <p className="eyebrow">How it works</p>
            <h2>Connected care that families can feel.</h2>
            <p className="section-subtitle">
              Every deployment includes site orientation, digital playbooks, and real-time shift feedback loops.
            </p>
            <ul className="partner-tags">
              {partnerTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <ul className="care-steps">
            {careSteps.map((step) => (
              <li key={step.title}>
                <span>{step.step}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section talent-spotlight">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Staffing clarity</p>
            <h2>Hire RN, RPN, PSW, PCA, and allied professionals on demand.</h2>
          </div>
          <div className="talent-grid">
            {talentSpotlight.map((talent) => (
              <article key={talent.title} className="talent-card">
                <div className="talent-card__image">
                  <Image
                    src={talent.image}
                    alt={talent.title}
                    width={talent.width}
                    height={talent.height}
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>
                <div className="talent-card__body">
                  <h3>{talent.title}</h3>
                  <p>{talent.description}</p>
                  <ul className="talent-tags">
                    {talent.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section logo-section">
        <div className="container">
          <div className="logo-card">
            <p className="eyebrow">Trusted by care partners</p>
            <h2>Partner-ready for any care environment.</h2>
            <div className="logo-cloud">
              {partnerTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Let's collaborate</p>
              <h2>Ready to elevate staffing, retention, and patient satisfaction?</h2>
              <p>Share your census goals and coverage gaps and we will build a plan that delivers memorable care.</p>
            </div>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">
                Book a care consult
              </Link>
              <Link href="/apply" className="btn btn-outline">
                Join as a clinician
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
