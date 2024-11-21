const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
  distDir: 'dist',
  output: 'export',  // Add this to enable static HTML export
  images: {
    unoptimized: true  // Required for static export
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    return config;
  },
  env: {
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    REACT_APP_PAYPAL_CLIENT_ID: process.env.REACT_APP_PAYPAL_CLIENT_ID
  },
}));