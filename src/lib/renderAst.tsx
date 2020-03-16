/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import unified from 'unified';
// @ts-ignore
import parse from 'rehype-dom-parse';
// @ts-ignore
import stringify from 'rehype-dom-stringify';
import rehypeReact from 'rehype-react';

type Props = {
  props: string;
};

const Heading: React.FC<Props> = props => (
  <h1
    css={{
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
      fontWeight: 'bold',
      textRendering: 'optimizeLegibility',
      fontSize: '2.5rem',
      lineHeight: '1.25',
    }}
    {...props}
  />
);
const Title: React.FC<Props> = props => <Heading {...props} />;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { h1: Title },
}).Compiler;

export function renderHtmlAst(htmlAst: string) {
  const tree = unified()
    .use(parse)
    .use(stringify)
    .process(htmlAst);

  return renderAst(tree);
}
