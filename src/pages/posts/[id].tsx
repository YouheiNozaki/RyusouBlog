import React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import Moment from 'react-moment';
import Highlight from 'react-highlight';
import { withTheme } from 'emotion-theming';
import { Heading, Tag, Image, Flex, Box, Text } from '@chakra-ui/core';

import { renderMarkdown } from '../../lib/renderMarkdown';
import { markedOption, markedRender } from '../../lib/marked';
import { Post } from '../../types/index';
import { MICROCMS_ENDPOINT } from '../../constants';

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
          <Box margin={8}>
            <Highlight innerHTML={true}>
              {markedOption(renderMarkdown(post.content), {
                renderer: markedRender(),
              })}
            </Highlight>
          </Box>
        </Flex>
        <ShareButton
          title={post.title}
          url={`https://ryusou-mtkh.now.sh/posts/${post.id}`}
        />
      </Layout>
    </React.Fragment>
  );
};

export const getStaticPath: GetStaticPaths = async () => {
  const res = await fetch(`${MICROCMS_ENDPOINT}` + '/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': `${process.env.API_KEY}`,
    },
  });

  // Todo：anyを消す
  const posts = await res.json();

  const paths = posts.contents.map((post: { id: string }) => {
    `posts/${post.id}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const res = await fetch(`${MICROCMS_ENDPOINT}` + '/posts/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': `${process.env.API_KEY}`,
    },
  });
  const post = await res.json();

  return {
    props: {
      post: post,
    },
  };
};

export default withTheme(PostContent);
