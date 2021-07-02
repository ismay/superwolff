/* eslint-disable import/no-extraneous-dependencies */

const { withSentryConfig } = require("@sentry/nextjs");
const { RelativeCiAgentWebpackPlugin } = require("@relative-ci/agent");

const webpack = (config, options) => {
  const isEnabled = process.env.ANALYZE_BUNDLE === "enabled";
  const { isServer } = options;

  // Only analyze the client bundle
  const shouldAnalyze = !isServer && isEnabled;

  if (shouldAnalyze) {
    config.plugins.push(new RelativeCiAgentWebpackPlugin());
  }

  return config;
};

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(
  {
    images: {
      domains: ["media.graphcms.com"],
    },
    reactStrictMode: true,
    webpack,
  },
  SentryWebpackPluginOptions
);
