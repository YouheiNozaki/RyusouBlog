import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import axios from 'axios';

import Layout from '../../components/Layout';

import { Post } from '../../interfaces';

type Props = {
  posts: Post[];
};

const BlogsPage: NextPage<Props> = ({ posts }) => {
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

BlogsPage.getInitialProps = async () => {
  const key = {
    headers: { 'X-API-KEY': '' },
  };
  const res = await axios.get(
    `https://ryusou-mtkh.microcms.io/api/v1/posts/`,
    key,
  );
  const data: Post[] = await res.data.contents;
  return { posts: data };
};

export default BlogsPage;
