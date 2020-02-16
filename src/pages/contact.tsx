import * as React from 'react';
import { withTheme } from 'emotion-theming';

import Layout from '../components/Layout';

const ContactPage: React.FC = () => (
  <Layout>
    <h1>Contact</h1>
  </Layout>
);

export default withTheme(ContactPage);
