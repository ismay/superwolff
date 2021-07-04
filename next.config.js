/* eslint-disable import/no-extraneous-dependencies */
const PacktrackerPlugin = require("@packtracker/webpack-plugin");

const webpack = (config, options) => {
  const isClient = !options.isServer;

  if (process.env.VERCEL && isClient) {
    config.plugins.push(
      new PacktrackerPlugin({
        branch: process.env.VERCEL_GIT_COMMIT_REF,
        commit: process.env.VERCEL_GIT_COMMIT_SHA,
        fail_build: true,
        message: process.env.VERCEL_GIT_COMMIT_MESSAGE,
        project_token: process.env.PACKTRACKER_TOKEN,
        upload: true,
      })
    );
  }

  return config;
};

module.exports = {
  images: {
    domains: ["media.graphcms.com"],
  },
  reactStrictMode: true,
  webpack,
};
