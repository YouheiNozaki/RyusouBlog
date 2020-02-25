import React from 'react';
import { NextPage } from 'next';
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
import HeadComponent from '../../components/templates/Head';
import Layout from '../../components/templates/Layout';
import { axiosInstance } from '../../lib/api';
import { Post } from '../../types';

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
        url={'https://ryusou-blog.now.sh/posts'}
      />
      <Layout>
        <Heading margin="5">Ryusou Tech Blog</Heading>
        <Grid display={{ sm: 'grid' }} templateColumns="repeat(2, 1fr)" gap={4}>
          {posts.map(post => (
            <React.Fragment key={post.id}>
              <Link href={`posts/${post.id}`}>
                <ChakraLink href={`posts/${post.id}`}>
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
                      {post.tags.map(tag => (
                        <React.Fragment key={tag.id}>
                          <Tag
                            variantColor="gray"
                            position="absolute"
                            color="gray.900"
                          >
                            {tag.name}
                          </Tag>
                        </React.Fragment>
                      ))}
                      <Image
                        src={post.image.url}
                        alt="ブログのイメージ画像です"
                        rounded="lg"
                        order={1}
                      />
                      <Text as="i" margin={2} color="gray.600" order={3}>
                        <Moment format="YYYY/MM/DD HH:mm">{post.day}</Moment>
                      </Text>
                      <Text
                        dangerouslySetInnerHTML={{ __html: `${post.content}` }}
                        color="gray.500"
                        isTruncated
                        lineHeight="tight"
                        maxHeight="24"
                        margin={2}
                        order={4}
                      ></Text>
                    </Flex>
                  </Box>
                </ChakraLink>
              </Link>
            </React.Fragment>
          ))}
        </Grid>
      </Layout>
    </>
  );
};

PostsPage.getInitialProps = async () => {
  const res = await axiosInstance.get(
    `https://ryusou-mtkh.microcms.io/api/v1/posts/`,
  );
  const data: Post[] = await res.data.contents;
  return { posts: data };
};

export default withTheme(PostsPage);
