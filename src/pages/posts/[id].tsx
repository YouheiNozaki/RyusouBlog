import * as React from 'react';
import { NextPage } from 'next';
import {
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
} from 'react-share';
import { withTheme } from 'emotion-theming';
import { Heading, Tag, Image, Flex, Box } from '@chakra-ui/core';

import { axiosInstance } from '../../lib/api';
import { IPost } from '../../interfaces';

import Layout from '../../components/templates/Layout';
import HeadComponent from '../../components/templates/Head';

type Props = {
  post: IPost;
};

const PostContent: NextPage<Props> = ({ post }) => {
  return (
    <>
      <HeadComponent
        title={post.title}
        description={post.content}
        keyword={post.title}
        image={post.image.url}
        url={`https://ryusou-blog.now.sh/posts/${post.id}`}
      />
      <Layout>
        <Heading fontSize={{ sm: '3xl' }} margin={2} marginLeft={4}>
          {post.title}
        </Heading>
        <div>
          {post.tags.map(tag => (
            <React.Fragment key={tag.id}>
              <Tag marginLeft={6} marginTop={1} size={'sm'}>
                {tag.name}
              </Tag>
            </React.Fragment>
          ))}
        </div>
        <Image
          src={post.image.url}
          rounded="lg"
          margin={4}
          marginBottom={[10, 20, 20, 20]}
        />
        <Flex margin="6">
          <div dangerouslySetInnerHTML={{ __html: `${post.content}` }}></div>
        </Flex>
        <Flex
          margin={6}
          justify-content={'right'}
          position="fixed"
          right={2}
          bottom={2}
        >
          <Box margin={2}>
            <TwitterShareButton
              title={post.title}
              url={`https://ryusou-mtkh.now.sh/posts/${post.id}`}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </Box>
          <Box margin={2}>
            <FacebookShareButton
              quote={post.title}
              url={`https://ryusou-blog.now.sh/posts/${post.id}`}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </Box>
          <Box margin={2}>
            <LineShareButton
              title={post.title}
              url={`https://ryusou-blog.now.sh/posts/${post.id}`}
            >
              <LineIcon size={32} round />
            </LineShareButton>
          </Box>
        </Flex>
      </Layout>
    </>
  );
};

PostContent.getInitialProps = async context => {
  const { id } = context.query;
  const res = await axiosInstance.get(
    `https://ryusou-mtkh.microcms.io/api/v1/posts/${id}`,
  );
  const post: IPost = await res.data;
  return { post };
};

export default withTheme(PostContent);
