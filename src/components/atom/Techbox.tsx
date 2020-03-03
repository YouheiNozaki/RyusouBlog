import React from 'react';
import { Box, Text, Image } from '@chakra-ui/core';

type Props = {
  name: string;
  url: string;
  alt: string;
};

const TechBox: React.FC<Props> = props => (
  <Box width="32" height="32" borderWidth="1px" bg="white" rounded="lg">
    <Text
      color="black"
      fontSize={['sm', 'md', 'lg', 'xl']}
      fontWeight="bold"
      textAlign="center"
      margin="2"
    >
      {props.name}
    </Text>
    <Image
      src={`/${props.url}.png`}
      alt={props.alt}
      margin="0 auto"
      marginBottom="2"
    />
  </Box>
);

export default TechBox;
