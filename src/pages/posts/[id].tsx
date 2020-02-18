import * as React from 'react';
import { NextPage } from 'next';
import { withTheme } from 'emotion-theming';
import { Heading, Tag, Image, Text } from '@chakra-ui/core';

import { axiosInstance } from '../../lib/api';
import { IPost } from '../../interfaces';

import Layout from '../../components/templates/Layout';

type Props = {
  post: IPost;
};

const PostContent: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <Heading>{post.title}</Heading>
      <div>
        {post.tags.map(tag => (
          <React.Fragment key={tag.id}>
            <Tag margin="4">{tag.name}</Tag>
          </React.Fragment>
        ))}
      </div>
      <Image src={post.image.url} rounded="lg" marginBottom="20" />
      <Text
        dangerouslySetInnerHTML={{ __html: `${post.content}` }}
        margin="6"
        letterSpacing="letterSpacings.tight"
        lineHeight="lineHeights.taller"
      ></Text>
    </Layout>
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
