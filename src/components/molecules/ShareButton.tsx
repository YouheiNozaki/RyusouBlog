import React from 'react';
import {
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
} from 'react-share';
import { Flex, Box } from '@chakra-ui/core';

type Props = {
  title: string;
  url: string;
};

export const ShareButton: React.FC<Props> = props => (
  <Flex
    margin={6}
    justify-content={'right'}
    position="fixed"
    left={2}
    bottom={2}
  >
    <Box margin={2}>
      <TwitterShareButton
        title={props.title}
        via="ryusou_mtkh"
        url={props.url}
        hashtags={['RyusouBlog']}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </Box>
    <Box margin={2}>
      <FacebookShareButton quote={props.title} url={props.url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </Box>
    <Box margin={2}>
      <LineShareButton title={props.title} url={props.url}>
        <LineIcon size={32} round />
      </LineShareButton>
    </Box>
  </Flex>
);
