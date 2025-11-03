import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link href="/" className="logo">
          Viha Lily Care Inc.
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/jobs">Jobs</Link></li>
          <li><Link href="/apply">Apply</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/contact" className="btn btn-primary">Hire Our Staff</Link></li>
        </ul>
      </div>
    </nav>
  );
}

