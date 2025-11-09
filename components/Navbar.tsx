import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link href="/" className="logo">
          <Image
            src="/logo"
            alt="Viha Lily Care Inc. logo"
            width={28}
            height={28}
            className="logo-img"
            priority
          />
          <span>Viha Lily Care Inc.</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/jobs">Jobs</Link></li>
       
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/contact" className="btn btn-primary">Hire Our Staff</Link></li>
        </ul>
      </div>
    </nav>
  );
}

