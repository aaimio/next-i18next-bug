module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "en-DE", "en-EN"],
  },
  fallbackLng: {
    default: ["en"],
    "en-DE": ["en"],
  },
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
