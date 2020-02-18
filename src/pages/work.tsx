import * as React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { withTheme } from 'emotion-theming';
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

const WorkPage: React.FC = () => (
  <Layout>
    <Heading as="h1" size="xl" marginBottom="10">
      Introduce Ryusou's Product and Speech
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
              <Text fontWeight="bold">「はじめてのUniversal JavaScript」</Text>
            </ChakraLink>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Layout>
);

export default withTheme(WorkPage);
