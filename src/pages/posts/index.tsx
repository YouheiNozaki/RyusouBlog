import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';
import { Heading, Tag, Grid, Link as ChakraLink } from '@chakra-ui/core';
import Layout from '../../components/templates/Layout';
import { axiosInstance } from '../../lib/api';
import { IPost } from '../../interfaces';

type Props = {
  posts: IPost[];
};

const PostsPage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <Heading margin="5">BLOG 一覧</Heading>
      <div>
        <Grid gridTemplateRows="">
          {posts.map(post => (
            <React.Fragment key={post.id}>
              <Link href={`posts/${post.id}`}>
                <ChakraLink href={`posts/${post.id}`}>
                  <Heading as="h5" size="md" margin="2">
                    {post.title}
                  </Heading>
                </ChakraLink>
              </Link>
              {post.tags.map(tag => (
                <React.Fragment key={tag.id}>
                  <Tag variantColor="teal">{tag.name}</Tag>
                </React.Fragment>
              ))}
              <img src={post.image.url} alt="ブログのイメージ画像です" />
            </React.Fragment>
          ))}
        </Grid>
      </div>
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
