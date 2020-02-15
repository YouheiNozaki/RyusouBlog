import * as React from 'react';
import { NextPage } from 'next';
import { axiosInstance } from '../../lib/api';
import { IPost } from '../../interfaces';

import Layout from '../../components/Layout';

type Props = {
  post: IPost;
};

const PostContent: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div>
        {post.tags.map(tag => (
          <React.Fragment key={tag.id}>
            <span>{tag.name}</span>
          </React.Fragment>
        ))}
      </div>
      <img src={post.image.url} />
      <div dangerouslySetInnerHTML={{ __html: `${post.content}` }}></div>
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

export default PostContent;
