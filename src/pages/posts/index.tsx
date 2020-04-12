import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';
import {
  Heading,
  Tag,
  Link as ChakraLink,
  Box,
  Image,
  Text,
  Grid,
  Flex,
} from '@chakra-ui/core';
import Moment from 'react-moment';

import fetch from 'isomorphic-unfetch';

import HeadComponent from '../../components/templates/Head';
import Layout from '../../components/templates/Layout';
import { ShareButton } from '../../components/molecules/ShareButton';

import { Post } from '../../types/index';
import { MICROCMS_ENDPOINT } from '../../constants';

type Props = {
  posts: Post[];
};

const PostsPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <HeadComponent
        title={'RyusouBlog'}
        description={'Ryusouのブログ一覧ページ'}
        keyword={'BLOG'}
        image={'./hero.png'}
        url={`https://ryusou-blog.now.sh/posts`}
      />
      <Layout>
        <Heading margin="5">Ryusou Tech Blog</Heading>
        <Grid display={{ sm: 'grid' }} templateColumns="repeat(2, 1fr)" gap={4}>
          {posts.map(post => (
            <React.Fragment key={post.id}>
              <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <ChakraLink>
                  <Box
                    p={[2, 4, 4, 4]}
                    width={['xs', 'sm', 'sm', 'sm']}
                    maxHeight={'md'}
                    rounded="lg"
                    borderWidth="2px"
                    margin={4}
                  >
                    <Flex direction="column">
                      <Heading
                        isTruncated
                        as="h5"
                        size="md"
                        margin={2}
                        fontWeight="bold"
                        order={2}
                      >
                        {post.title}
                      </Heading>
                      <Image
                        src={post.image.url}
                        alt="ブログのイメージ画像です"
                        rounded="lg"
                        order={1}
                      />
                      <Flex order={3}>
                        {post.tags.map(tag => (
                          <React.Fragment key={tag.id}>
                            <Tag
                              variantColor="gray"
                              color="gray.900"
                              marginLeft={1}
                            >
                              {tag.name}
                            </Tag>
                          </React.Fragment>
                        ))}
                      </Flex>
                      <Text as="i" margin={2} color="gray.600" order={4}>
                        <Moment format="YYYY/MM/DD HH:mm">{post.day}</Moment>
                      </Text>
                      <Text
                        color="gray.500"
                        isTruncated
                        lineHeight="tight"
                        maxHeight="24"
                        margin={2}
                        order={5}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${post.content}`,
                          }}
                        ></div>
                      </Text>
                    </Flex>
                  </Box>
                </ChakraLink>
              </Link>
            </React.Fragment>
          ))}
        </Grid>
        <ShareButton
          title={'りゅーそうブログ一覧ページ'}
          url={`https://ryusou-mtkh.now.sh/posts/`}
        />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(MICROCMS_ENDPOINT + '/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': `${process.env.api_key}`,
    },
  });

  const data = await res.json();
  return { props: { posts: data.contents } };
};

export default withTheme(PostsPage);
