"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/logo/CarE.png';

type NavLink = {
  label: string;
  href: string;
  description?: string;
};

type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
};

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About',
    description: 'Who we are and how we care',
    children: [
      {
        label: 'Our story & mission',
        href: '/about/mission',
        description: 'Relationship-first care standards and leadership.',
      },
      {
        label: 'Home care for older adults',
        href: '/services/home-care',
        description: 'Personal care, companionship, and safety checks.',
      },
      {
        label: 'Quality and compliance',
        href: '/about/quality',
        description: 'Screening, training, and credential management.',
      },
    ],
  },
  {
    href: '/services',
    label: 'Services',
    description: 'Staffing programs tailored to each client',
    children: [
      {
        label: 'RN & RPN staffing services',
        href: '/services/rn-rpn',
        description: 'Hospital, community, and specialty coverage matched to acuity.',
      },
      {
        label: 'PSW & personal care teams',
        href: '/services/psw',
        description: 'ADLs, respite, dementia, and in-home support.',
      },
      {
        label: 'Retirement & long-term care',
        href: '/services/retirement',
        description: 'Stabilize wings with permanent, temporary, or casual options.',
      },
      {
        label: '24/7 & emergency coverage desk',
        href: '/services/staffing-models',
        description: 'Last-minute staffing, block bookings, and surge response.',
      },
    ],
  },
  {
    href: '/jobs',
    label: 'Jobs',
    description: 'Join our clinical and allied teams',
    children: [
      {
        label: 'RN opportunities',
        href: '/jobs/rn',
        description: 'ICU, ER, med-surg, community, and leadership.',
      },
      {
        label: 'RPN roles',
        href: '/jobs/rpn',
        description: 'Transitional, clinic, and retirement settings.',
      },
      {
        label: 'PSW & caregiver roles',
        href: '/jobs/psw',
        description: 'Home care, dementia, respite, and night support.',
      },
      {
        label: 'Allied & support teams',
        href: '/jobs/allied',
        description: 'Physiotherapy, dietary aide, recreation, and couriers.',
      },
    ],
  },
  { href: '/contact', label: 'Contact' },
];

const MENU_ID = 'primary-navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  const toggleMenu = () =>
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        clearCloseTimer();
        setOpenDropdown(null);
      }
      return next;
    });

  const closeMenu = () => {
    setIsMenuOpen(false);
    clearCloseTimer();
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    clearCloseTimer();
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handleMouseEnter = (label: string) => {
    clearCloseTimer();
    setOpenDropdown(label);
  };

  return (
    <header className="site-header">
      <div className="nav-ribbon" role="status">
        <p>
          <span className="nav-ribbon__item">
            <span className="nav-ribbon__icon" aria-hidden="true">
              24
            </span>
            Available 24/7 for hospitals, long-term care, and in-home support
          </span>
          <span className="nav-ribbon__divider" aria-hidden="true" />
          <span className="nav-ribbon__item">
            <span className="nav-ribbon__icon" aria-hidden="true">
              📞
            </span>
            <a href="tel:+16476419660" className="nav-ribbon__link">
              (647) 641-9660
            </a>
          </span>
          <span className="nav-ribbon__divider" aria-hidden="true" />
          <span className="nav-ribbon__item">
            <span className="nav-ribbon__icon" aria-hidden="true">
              ✉
            </span>
            <a href="mailto:info@vihalilycare.ca" className="nav-ribbon__link">
              info@vihalilycare.ca
            </a>
          </span>
        </p>
      </div>

      <div className="nav-container">
        <Link
          href="/"
          className="logo-only"
          aria-label="Viha Lily Care Inc."
          onClick={closeMenu}
        >
          <Image
            src={Logo}
            alt="Viha Lily Care Inc."
            width={68}
            height={68}
            className="logo-img"
            priority
          />
          <span className="logo-wordmark">
            <strong>Viha Lily Care Inc.</strong>
            <span>Modern healthcare staffing</span>
          </span>
          <span className="logo-mobile-text">
            <strong>Viha Lily Care Inc.</strong>
            <small>Modern healthcare staffing</small>
          </span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls={MENU_ID}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <nav aria-label="Primary navigation">
          <ul id={MENU_ID} className={`nav-links ${isMenuOpen ? 'nav-links--open' : ''}`}>
            {navItems.map((item) => {
              const isOpen = openDropdown === item.label;
              const dropdownId = `menu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

              return (
                <li
                  key={item.href}
                  className={item.children ? 'nav-item nav-item--with-children' : 'nav-item'}
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={() => item.children && scheduleCloseDropdown()}
                >
                  {item.children ? (
                    <>
                      <div className="nav-link-with-caret">
                        <Link href={item.href} onClick={closeMenu}>
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          className={`nav-dropdown-toggle ${isOpen ? 'is-open' : ''}`}
                          aria-expanded={isOpen}
                          aria-controls={dropdownId}
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            toggleDropdown(item.label);
                          }}
                        >
                          <span aria-hidden="true">▾</span>
                          <span className="sr-only">Toggle {item.label} menu</span>
                        </button>
                      </div>
                      <div
                        id={dropdownId}
                        className={`nav-dropdown ${isOpen ? 'is-open' : ''}`}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={scheduleCloseDropdown}
                      >
                        {item.description && <p className="nav-dropdown__eyebrow">{item.description}</p>}
                        <div className="nav-dropdown__grid">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="nav-dropdown__item"
                              onClick={closeMenu}
                            >
                              <span className="nav-dropdown__label">{child.label}</span>
                              {child.description && <small>{child.description}</small>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
            <li className="nav-links__cta">
              <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
                Hire Our Staff
              </Link>
            </li>
            <li className="nav-links__cta nav-links__cta--secondary">
              <Link href="/apply" className="btn btn-outline" onClick={closeMenu}>
                Join Our Team
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
