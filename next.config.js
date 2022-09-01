const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    ...i18n,
    localeDetection: false,
    domains: [
      {
        domain: "next-i18next.com",
        defaultLocale: "en-EN",
        locales: ["en-EN"],
      },
      {
        domain: "de.next-i18next.com",
        defaultLocale: "en-DE",
        locales: ["en-DE"],
      },
    ],
  },
};

module.exports = nextConfig;
