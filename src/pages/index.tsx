import * as React from 'react';
import { NextPage } from 'next';
import { withTheme } from 'emotion-theming';
import { Heading, Text } from '@chakra-ui/core';

import Layout from '../components/templates/Layout';
import TechBoxList from '../components/molecules/TechBoxList';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Heading marginBottom="10">Welcome to Ryusou's blog!!</Heading>
      <Text marginBottom="4">りゅーそうの技術ブログへようこそ！</Text>
      <Text marginBottom="10">
        このブログは現役の社会科教員でもあるりゅーそうがエンジニアとしての技術を発信するブログです。
      </Text>
      <Heading marginBottom="10">Ryusou's Tech Stack</Heading>
      <TechBoxList />
    </Layout>
  );
};

export default withTheme(IndexPage);
