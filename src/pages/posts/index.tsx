import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';

import Layout from '../../components/templates/Layout';
import { axiosInstance } from '../../lib/api';
import { IPost } from '../../interfaces';

type Props = {
  posts: IPost[];
};

const PostsPage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <h2>BLOG 一覧</h2>
      <div>
        {posts.map(post => (
          <React.Fragment key={post.id}>
            <Link href={`posts/${post.id}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
            {post.tags.map(tag => (
              <React.Fragment key={tag.id}>
                <span>{tag.name}</span>
              </React.Fragment>
            ))}
            <img src={post.image.url} alt="ブログのイメージ画像です" />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

PostsPage.getInitialProps = async () => {
  // const key = {
  //   headers: { 'X-API-KEY': process.env.api_key },
  // };
  const res = await axiosInstance.get(
    `https://ryusou-mtkh.microcms.io/api/v1/posts/`,
  );
  const data: IPost[] = await res.data.contents;
  return { posts: data };
};

export default withTheme(PostsPage);
