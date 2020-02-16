import * as React from 'react';
import { withTheme } from 'emotion-theming';

import Layout from '../components/Layout';

const WorkPage: React.FC = () => (
  <Layout>
    <h1>WORK</h1>
  </Layout>
);

export default withTheme(WorkPage);
