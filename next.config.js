module.exports = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
