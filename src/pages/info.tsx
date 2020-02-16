import * as React from 'react';
import { withTheme } from 'emotion-theming';

import Layout from '../components/Layout';

const InfoPage: React.FC = () => (
  <Layout>
    <h1>Info</h1>
  </Layout>
);

export default withTheme(InfoPage);
