import * as React from 'react';
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
} from '@chakra-ui/core';
import Layout from '../../components/templates/Layout';
import { axiosInstance } from '../../lib/api';
import { IPost } from '../../interfaces';

type Props = {
  posts: IPost[];
};

const PostsPage: NextPage<Props> = ({ posts }) => {
  return (
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
                  <Heading
                    as="h5"
                    size="md"
                    margin={2}
                    paddingBottom={2}
                    fontWeight="bold"
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
                  />
                  <Text
                    dangerouslySetInnerHTML={{ __html: `${post.content}` }}
                    color="gray.500"
                    isTruncated
                    lineHeight="tight"
                    maxHeight="24"
                    margin={2}
                  ></Text>
                </Box>
              </ChakraLink>
            </Link>
          </React.Fragment>
        ))}
      </Grid>
    </Layout>
  );
};

PostsPage.getInitialProps = async () => {
  const res = await axiosInstance.get(
    `https://ryusou-mtkh.microcms.io/api/v1/posts/`,
  );
  const data: IPost[] = await res.data.contents;
  return { posts: data };
};

export default withTheme(PostsPage);
