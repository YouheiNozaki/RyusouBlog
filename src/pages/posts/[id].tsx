import React from 'react';
import { NextPage } from 'next';

import Moment from 'react-moment';
import { withTheme } from 'emotion-theming';
import { Heading, Tag, Image, Flex, Box, Text } from '@chakra-ui/core';

import { axiosInstance } from '../../lib/api';
import { processor } from '../../lib/renderAst';
import { Post } from '../../types';

import Layout from '../../components/templates/Layout';
import HeadComponent from '../../components/templates/Head';
import { ShareButton } from '../../components/molecules/ShareButton';

type Props = {
  post: Post;
};

const PostContent: NextPage<Props> = ({ post }) => {
  return (
    <React.Fragment>
      <HeadComponent
        title={post.title}
        description={post.title}
        keyword={post.title}
        image={post.image.url}
        url={`https://ryusou-blog.now.sh/posts/${post.id}`}
      />
      <Layout>
        <Flex direction="column" maxWidth="container.md">
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
          <Text as="i" marginLeft={6} marginTop={1} color="gray.600">
            <Moment format="YYYY/MM/DD HH:mm">{post.day}</Moment>
          </Text>
          <Image
            src={post.image.url}
            rounded="lg"
            margin={4}
            marginBottom={[10, 20, 20, 20]}
          />
          <Box margin={8}>{processor(post.content)}</Box>
        </Flex>
        <ShareButton
          title={post.title}
          url={`https://ryusou-mtkh.now.sh/posts/${post.id}`}
        />
      </Layout>
    </React.Fragment>
  );
};

PostContent.getInitialProps = async context => {
  const { id } = context.query;
  const res = await axiosInstance.get(
    `https://ryusou-mtkh.microcms.io/api/v1/posts/${id}`,
  );
  const post: Post = await res.data;
  return { post };
};

export default withTheme(PostContent);
