import React from 'react';
import unified from 'unified';
import rehypereact from 'rehype-react';

const renderAst = new rehypereact({
  createElement: React.createElement,
}).Compiler;
