import * as React from 'react';
import { NextPage } from 'next';
import { withTheme } from 'emotion-theming';
import { Heading, Text, Image, Flex } from '@chakra-ui/core';

import Layout from '../components/templates/Layout';
import HeadComponent from '../components/templates/Head';
import { ShareButton } from '../components/molecules/ShareButton';
import { TechBoxList } from '../components/molecules/TechBoxList';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <HeadComponent
        title={'RyusouBlog'}
        description={`りゅーそうの技術ブログへようこそ！  このブログは現役の社会科教員でもあるりゅーそうがエンジニアとしての技術を発信するブログです。私は現在教員として働きながら、教育現場のIT化を目指して勉強しています。`}
        keyword={'Home'}
        image={'./hero.png'}
        url={'https://ryusou-blog.now.sh'}
      />
      <Heading
        marginTop="4"
        marginLeft="2"
        marginRight="2"
        marginBottom="10"
        letterSpacing="tight"
      >
        Welcome to Ryusou's blog
      </Heading>
      <Flex display={{ md: 'flex' }}>
        <Text
          lineHeight="2"
          marginLeft="4"
          marginBottom="4"
          fontSize={['sm', 'md', 'md', 'md']}
        >
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
          marginTop={[5, 5, 0, 0]}
          marginRight={[0, 5, 5, 5]}
          marginLeft={[20, 20, 5, 5]}
          marginBottom="10"
          rounded="full"
        />
      </Flex>
      <Heading marginBottom="10" marginLeft="2">
        Ryusou's Tech Stack
      </Heading>
      <TechBoxList />
      <Text fontSize="xl" fontWeight="bold" marginLeft="4">
        and more...!!
      </Text>
      <ShareButton
        title={'りゅーそうブログトップページ'}
        url={`https://ryusou-mtkh.now.sh/`}
      />
    </Layout>
  );
};

export default withTheme(IndexPage);
