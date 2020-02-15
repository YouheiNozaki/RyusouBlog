import * as React from 'react';
import Link from 'next/link';

const Nav: React.FC = () => (
  <nav>
    <Link href="/">
      <a>HOME</a>
    </Link>
    <Link href="/posts">
      <a>BLOG</a>
    </Link>
    <Link href="/info">
      <a>INFO</a>
    </Link>
    <Link href="/contact">
      <a>CONTACT</a>
    </Link>
  </nav>
);

export default Nav;
