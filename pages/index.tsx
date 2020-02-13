import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <>
      <h1>Hello Next.js</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  );
};

export default IndexPage;
