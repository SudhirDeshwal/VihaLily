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
      <div className="nav-container">
        <Link href="/" className="logo-only" aria-label="Viha Lily Care Inc." onClick={closeMenu}>
          <Image
            src={Logo}
            alt="Viha Lily Care Inc."
            width={72}
            height={72}
            className="logo-img"
            priority
          />
          <span className="sr-only">Viha Lily Care Inc.</span>
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
            <li>
              <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
                Hire Our Staff
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
