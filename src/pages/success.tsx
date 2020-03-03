import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { Image, Flex } from '@chakra-ui/core';

import Layout from '../components/templates/Layout';
import HeadComponent from '../components/templates/Head';
import { ShareButton } from '../components/molecules/ShareButton';

const SuccessPage: React.FC = () => (
  <>
    <HeadComponent
      title={'RyusouBlog'}
      description={'お問い合わせ完了ページです'}
      keyword={'Home'}
      image={'./hero.png'}
      url={'https://ryusou-blog.now.sh/success'}
    />
    <Layout>
      <Flex position="relative" margin="0 auto">
        <Image
          src="/hukidashi.png"
          width={[56, 56, 56, 56]}
          height={[64, 64, 64, 64]}
          position="absolute"
        />
        <Image
          src="/ryusou2.png"
          width={[48, 48, 48, 48]}
          height={[64, 64, 64, 64]}
          position="relative"
          left="24"
          top="24"
        />
      </Flex>
      <ShareButton
        title={'りゅーそうくんが出てきたよ'}
        url={`https://ryusou-mtkh.now.sh/success`}
      />
    </Layout>
  </>
);

export default withTheme(SuccessPage);
