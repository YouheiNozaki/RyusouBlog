import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { Image, Flex } from '@chakra-ui/core';

import Layout from '../components/templates/Layout';

const SuccessPage: React.FC = () => (
  <Layout>
    <Flex position="relative" margin="0 auto">
      <Image src="/hukidashi.png" width="64" height="64" position="absolute" />
      <Image
        src="/ryusou2.png"
        width="56"
        height="60"
        position="relative"
        left="32"
        top="16"
      />
    </Flex>
  </Layout>
);

export default withTheme(SuccessPage);
