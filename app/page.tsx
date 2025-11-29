/**
 * Animated home experience for Viha Lily Care.
 * Adds scroll-triggered reveals and ambient hero motion without external dependencies.
 */
'use client';

import { useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';

import heroImageCommand from './pics/Gemini_Generated_Image_rvmwtnrvmwtnrvmw.png';
import heroImageSupport from './pics/Gemini_Generated_Image_rvmwtnrvmwtnrvmw (1).png';
import heroImageICU from './pics/Gemini_Generated_Image_sx518tsx518tsx51.png';

import serviceHospital from './pics/Gemini_Generated_Image_5w7bch5w7bch5w7b.png';
import serviceLTC from './pics/Gemini_Generated_Image_8ww05q8ww05q8ww0.png';
import serviceHome from './pics/Gemini_Generated_Image_9vwj4l9vwj4l9vwj.png';

import talentRNImg from './pics/Gemini_Generated_Image_lpkbq0lpkbq0lpkb.png';
import talentRPNImg from './pics/Gemini_Generated_Image_ohkjjxohkjjxohkj.png';
import talentPSWImg from './pics/Gemini_Generated_Image_1kb3ja1kb3ja1kb3.png';
import talentAlliedImg from './pics/Gemini_Generated_Image_wsowawwsowawwsow.png';

const heroPills = [
  { label: 'Rapid deployment', meta: 'Average fill in 24 hours' },
  { label: 'Clinical QA', meta: 'Screened by nurse educators' },
  { label: 'Live shift visibility', meta: 'Family-ready updates' },
];

const heroImages: Array<{ src: StaticImageData; alt: string }> = [
  {
    src: heroImageCommand,
    alt: 'ICU and ER nurses coordinating patient vitals at the unit',
  },
  {
    src: heroImageSupport,
    alt: 'Hospital command team monitoring live census and acuity',
  },
  {
    src: heroImageICU,
    alt: 'Care team walking together through a hospital corridor',
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
  image: StaticImageData;
}> = [
  {
    title: 'Hospital + acute units',
    description: 'Critical care, medicine, ER, and perioperative nurses with adaptable contracts.',
    bullets: ['Float pools and surge teams', 'RN, RPN, and specialty pairings', 'Night and weekend coverage'],
    image: serviceHospital,
  },
  {
    title: 'Long-term and retirement',
    description: 'Warm, continuity-focused staffing for resident-centred care.',
    bullets: ['Medication and wound care experts', 'Behavioural support PSWs', 'Consistent family updates'],
    image: serviceLTC,
  },
  {
    title: 'Home and community',
    description: 'Compassionate in-home clinicians for transitional, respite, and palliative journeys.',
    bullets: ['RN care coordination', 'Personal care and ADL support', 'Chronic and post-op programs'],
    image: serviceHome,
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
  image: StaticImageData;
}> = [
  {
    title: 'Registered Nurses (RN)',
    description: 'ICU, ER, medicine, perioperative, and leadership-ready professionals for complex deployments.',
    tags: ['ICU and ER', 'Med-surg', 'Charge support'],
    image: talentRNImg,
  },
  {
    title: 'Registered Practical Nurses (RPN)',
    description: 'Versatile nurses who bridge acute, rehab, and community programs with consistent bedside care.',
    tags: ['Rehab', 'Transitional care', 'Vaccination clinics'],
    image: talentRPNImg,
  },
  {
    title: 'Personal Support Workers (PSW)',
    description: 'Relationship-driven caregivers for ADLs, dementia support, respite care, and family coaching.',
    tags: ['Memory care', 'Respite', 'Palliative'],
    image: talentPSWImg,
  },
  {
    title: 'Allied, PCA, and Dietary',
    description: 'Patient care aides, recreation, therapy, dietary teams, medical delivery and cleaners who keep every shift moving.',
    tags: ['Patient care aides', 'Recreation therapy', 'Dietary services'],
    image: talentAlliedImg,
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
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroImages.length);
    }, 4800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <section className="hero hero--immersive">
        <div className="hero-ambient" aria-hidden="true">
          <span className="orb orb--one" />
          <span className="orb orb--two" />
          <span className="orb orb--three" />
        </div>

        <div className="container hero-grid">
          <div className="hero-copy scroll-reveal" style={{ transitionDelay: '0.05s' }}>
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

            <div className="hero-badges">
              <ul className="hero-stats">
                {heroStats.map((stat, index) => (
                  <li
                    key={stat.label}
                    className="scroll-reveal"
                    style={{ transitionDelay: `${index * 0.08 + 0.12}s` }}
                  >
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>

              <ul className="hero-pillstrip scroll-reveal" style={{ transitionDelay: '0.18s' }}>
                {heroPills.map((pill) => (
                  <li key={pill.label} className="hero-pill">
                    <span>{pill.label}</span>
                    <small>{pill.meta}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hero-media scroll-reveal" aria-hidden="true" style={{ transitionDelay: '0.18s' }}>
            <div className="hero-slider" role="region" aria-label="Featured care moments">
              {heroImages.map((image, index) => (
                <figure key={image.alt} className={`hero-slide ${index === slideIndex ? 'is-active' : ''}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="hero-slide__img"
                    sizes="(max-width: 768px) 95vw, 520px"
                    quality={100}
                    placeholder="empty"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    unoptimized
                    priority={index === 0}
                  />
                </figure>
              ))}
              <div className="hero-slider__dots" role="tablist" aria-label="Select hero image">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={slideIndex === index}
                    aria-label={`Show slide ${index + 1}`}
                    className={`hero-dot ${slideIndex === index ? 'is-active' : ''}`}
                    onClick={() => setSlideIndex(index)}
                  />
                ))}
              </div>
            </div>
            <div className="hero-secondary scroll-reveal" style={{ transitionDelay: '0.22s' }}>
              <div className="hero-sparkline">
                <div>
                  <p className="eyebrow">Live shift visibility</p>
                  <h3>Staffed teams stay connected with families and clinical leads.</h3>
                  <p className="hero-lead hero-lead--sub">
                    Automated updates, digital handbooks, and rapid replacements when you need them.
                  </p>
                </div>
                <div className="hero-sparkline__meter" aria-hidden="true">
                  <span style={{ width: '86%' }} />
                </div>
              </div>

              <div className="hero-glasscard">
                <p className="eyebrow">Rapid deployment</p>
                <h3>Staffed an entire LTC wing in 36 hours.</h3>
                <p>18-clinician team blending dementia, wound care, restorative programs, and bilingual support.</p>
              </div>
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
            {highlightCards.map((card, index) => (
              <article
                key={card.title}
                className="highlight-card scroll-reveal"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
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
            {serviceShowcase.map((service, index) => (
              <article
                key={service.title}
                className="service-tile scroll-reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={service.image.width}
                    height={service.image.height}
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
              {partnerTags.map((tag, index) => (
                <li key={tag} className="scroll-reveal" style={{ transitionDelay: `${index * 0.06 + 0.12}s` }}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <ul className="care-steps">
            {careSteps.map((step, index) => (
              <li
                key={step.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${index * 0.1 + 0.08}s` }}
              >
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
            {talentSpotlight.map((talent, index) => (
              <article
                key={talent.title}
                className="talent-card scroll-reveal"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="talent-card__image">
                  <Image
                    src={talent.image}
                    alt={talent.title}
                    width={talent.image.width}
                    height={talent.image.height}
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
          <div className="logo-card scroll-reveal" style={{ transitionDelay: '0.12s' }}>
            <p className="eyebrow">Trusted by care partners</p>
            <h2>Partner-ready for any care environment.</h2>
            <div className="logo-cloud">
              {partnerTags.map((tag, index) => (
                <span key={tag} className="scroll-reveal" style={{ transitionDelay: `${index * 0.05 + 0.12}s` }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel scroll-reveal" style={{ transitionDelay: '0.1s' }}>
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
