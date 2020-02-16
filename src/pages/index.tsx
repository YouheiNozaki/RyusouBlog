import * as React from 'react';
import { NextPage } from 'next';
import { withTheme } from 'emotion-theming';

import Layout from '../components/Layout';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <h1>Welcome to Ryusou's blog</h1>
    </Layout>
  );
};

export default withTheme(IndexPage);
