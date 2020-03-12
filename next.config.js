const axios = require('axios');
require('dotenv').config();

module.exports = {
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/contact': { page: '/contact' },
      '/work': { page: '/work' },
      '/success': { page: '/success' },
    };

    const key = {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.API_KEY,
      },
    };

    const res = await axios.get(
      `https://ryusou-mtkh.microcms.io/api/v1/posts/`,
      key,
    );
    const data = await res.data.contents;

    data.forEach(post => {
      paths[`/posts/${post.id}`] = {
        page: '/posts/[id]',
        query: { id: post.id },
      };
    });
    return paths;
  },
  env: {
    api_key: process.env.API_KEY,
    x_api_key: process.env.X_API_KEY,
  },
};
