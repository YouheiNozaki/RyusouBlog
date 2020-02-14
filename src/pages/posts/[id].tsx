import * as React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
// import MarkdownIt from 'markdown-it';

import { IPost } from '../../interfaces';

type Props = {
  post: IPost;
};

// const md = new MarkdownIt({
//   html: true,
// });

const PostContent: NextPage<Props> = ({ post }) => {
  return (
    <div>
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
    </div>
  );
};

PostContent.getInitialProps = async context => {
  const { id } = context.query;
  console.log(id);
  const key = {
    headers: { 'X-API-KEY': process.env.api_key },
  };

  const res = await axios.get(
    `https://ryusou-mtkh.microcms.io/api/v1/posts/${id}`,
    key,
  );

  const post: IPost = await res.data;

  return { post };
};

export default PostContent;
