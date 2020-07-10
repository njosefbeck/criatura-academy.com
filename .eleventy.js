const htmlmin = require("html-minifier");
const { monsterCard } = require("./shortcodes");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./_tmp/index.css");

  eleventyConfig.addPassthroughCopy({ "./_tmp/index.css": "./css/index.css" });

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  // Monster card
  eleventyConfig.addNunjucksShortcode("monsterCard", monsterCard)

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};