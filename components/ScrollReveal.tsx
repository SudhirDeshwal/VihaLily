"use client";

import { useEffect } from 'react';

const selectors = [
  '.highlight-card',
  '.service-tile',
  '.card',
  '.talent-card',
  '.talent-tags li',
  '.hero-frame',
  '.hero-glasscard',
  '.hero-stats li',
  '.job-accordion',
  '.detail-card',
  '.pill',
  '.partner-tags li',
  '.nav-dropdown__item',
  '.logo-card',
  '.cta-panel',
];

export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selectors.join(',')));

    elements.forEach((el) => {
      el.classList.add('scroll-reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return null;
}
