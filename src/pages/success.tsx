import * as React from 'react';
import { withTheme } from 'emotion-theming';

import Layout from '../components/templates/Layout';

const SuccessPage: React.FC = () => (
  <Layout>
    <div>Success</div>
  </Layout>
);

export default withTheme(SuccessPage);
