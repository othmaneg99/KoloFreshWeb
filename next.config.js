module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  images: {
    domains: ['th.bing.com', 'upload.wikimedia.org', 'kolofresh.ma'],
  },
};
