require('dotenv').config();

module.exports = {
  env: {
    api_key: process.env.API_KEY,
    x_api_key: process.env.X_API_KEY,
  },
};
