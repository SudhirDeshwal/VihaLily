"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/logo/CarE.png';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/contact', label: 'Contact' },
];

const MENU_ID = 'primary-navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

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
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
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
