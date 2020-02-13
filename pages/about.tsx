import * as React from 'react';
import Link from 'next/link';

const AboutPage: React.FC = () => (
  <>
    <h1>About</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export default AboutPage;
