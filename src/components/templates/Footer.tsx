import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { Link as ChakraLink, Flex, Heading } from '@chakra-ui/core';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      paddingTop="6"
      paddingBottom="6"
      backgroundColor="gray.50"
    >
      <Heading as="h2" size="md" marginBottom="6">
        Follow me!
      </Heading>
      <Flex marginBottom="6">
        <ChakraLink href="https://twitter.com/ryusou_mtkh" alt="">
          <FaTwitter size="32" />
        </ChakraLink>
        <ChakraLink
          href="https://github.com/YouheiNozaki"
          alt=""
          marginLeft="4"
        >
          <FaGithub size="32" />
        </ChakraLink>
      </Flex>
      <div>
        <p>
          <small>&copy;Ryusou</small>
        </p>
      </div>
    </Flex>
  </footer>
);

export default withTheme(Footer);
