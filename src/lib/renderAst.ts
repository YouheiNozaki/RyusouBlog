import React from 'react';
import unified from 'unified';
// @ts-ignore
import parse from 'rehype-parse';
// @ts-ignore
import stringify from 'rehype-stringify';

import rehypereact from 'rehype-react';

const renderAst = new rehypereact({
  createElement: React.createElement,
}).Compiler;

export const processor = (post: string) => {
  const tree = unified()
    .use(parse)
    .use(stringify)
    .process(post);
  return renderAst(tree);
};
