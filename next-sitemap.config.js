/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://iphurts.tech",
  generateRobotsTxt: true // (optional)
  // ...other options
};
