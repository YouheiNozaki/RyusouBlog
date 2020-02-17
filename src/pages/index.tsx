import * as React from 'react';
import { NextPage } from 'next';
import { withTheme } from 'emotion-theming';
import { Heading, Text, Image, Flex } from '@chakra-ui/core';

import Layout from '../components/templates/Layout';
import TechBoxList from '../components/molecules/TechBoxList';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Heading marginBottom="10">Welcome to Ryusou's blog!!</Heading>
      <Flex>
        <Text marginLeft="4">
          りゅーそうの技術ブログへようこそ！
          <br />
          <br />
          このブログは現役の社会科教員でもあるりゅーそうがエンジニアとしての技術を発信するブログです。
          <br />
          私は現在教員として働きながら、教育現場のIT化を目指して勉強しています。
        </Text>
        <Image
          src="/ryusou.png"
          width="48"
          marginRight="5"
          marginLeft="5"
          marginBottom="5"
          rounded="full"
        />
      </Flex>
      <Heading marginBottom="10">Ryusou's Tech Stack</Heading>
      <TechBoxList />
      <Text fontSize="xl" fontWeight="bold">
        and more...!!
      </Text>
    </Layout>
  );
};

export default withTheme(IndexPage);
