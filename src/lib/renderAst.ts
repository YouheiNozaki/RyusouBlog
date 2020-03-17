import React from 'react';
// @ts-ignore
import rehypereact from 'rehype-react';
import unified from 'unified';

// @ts-ignore
import parse from 'rehype-parse';
// @ts-ignore
import rehype2remark from 'rehype-remark';
// @ts-ignore
import stringify from 'remark-stringify';

const renderAst = new rehypereact({
  createElement: React.createElement,
}).Compiler;

export const processor = (post: string) => {
  const tree = unified()
    .use(parse)
    .use(rehype2remark)
    .use(renderAst)
    .process(post);
  return tree;
};
