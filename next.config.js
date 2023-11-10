// next.config.js
module.exports = {
  async headers() {
    return [
      {
        // This allows inline scripts (e.g., <script>alert('XSS test');</script>)
        source: "/(.*)",
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
          },
        ],
      },
    ];
  },
};
