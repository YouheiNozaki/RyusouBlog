import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link as ChakraLink,
  Flex,
} from '@chakra-ui/core';

import Layout from '../components/templates/Layout';
import HeadComponent from '../components/templates/Head';

const WorkPage: React.FC = () => (
  <>
    <HeadComponent
      title={'RyusouBlog'}
      description={'RYUSOUのProductの紹介ページです'}
      keyword={'Home'}
      image={'./hero.png'}
      url={'https://ryusou-blog.now.sh/success'}
    />

    <Layout>
      <Heading
        as="h1"
        fontSize={['xl', '2xl', '3xl', '3xl']}
        marginTop={'10'}
        marginBottom="10"
        letterSpacing="tight"
      >
        Introduction products and speeches
      </Heading>
      <Tabs size="lg" variant="enclosed" variantColor="teal" isFitted>
        <TabList mb="10">
          <Tab fontWeight="bold">Product</Tab>
          <Tab fontWeight="bold">Speech</Tab>
        </TabList>

        <TabPanels>
          <TabPanel margin="4">COMING SOON!!</TabPanel>
          <TabPanel>
            <Text margin="4">2019/12/7 [We are JavaScripters! 3周年記念]</Text>
            <Flex marginLeft="8">
              <FaExternalLinkAlt />
              <ChakraLink href="https://speakerdeck.com/nozaki/hazimetefalseuniversal-javascript">
                <Text fontWeight="bold">
                  「はじめてのUniversal JavaScript」
                </Text>
              </ChakraLink>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  </>
);

export default withTheme(WorkPage);
