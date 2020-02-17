import React from 'react';
import { Box, Text, Image } from '@chakra-ui/core';

type Props = {
  name: string;
  url: string;
};

const TechBox: React.FC<Props> = props => (
  <Box maxWidth="32" maxHeight="32" borderWidth="1px" bg="white" rounded="lg">
    <Text fontSize="xl" fontWeight="bold" textAlign="center" margin="2">
      {props.name}
    </Text>
    <Image src={`/${props.url}.png`} margin="0 auto" marginBottom="2" />
  </Box>
);

export default TechBox;
