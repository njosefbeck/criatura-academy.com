const htmlmin = require('html-minifier');
const {
  monsterCard,
  equipCard,
  item,
  itemCard,
  card,
  craftableEquipCard,
  enchantCard,
  tipCard
} = require("./shortcodes");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./_tmp/index.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/index.css": "./css/index.css" });
  eleventyConfig.addPassthroughCopy({ "./js/lang-toggle.js": "./js/lang-toggle.js" });

  eleventyConfig.addShortcode("version", () => String(Date.now()));

  eleventyConfig.addNunjucksShortcode("monsterCard", monsterCard)
  eleventyConfig.addPairedNunjucksShortcode("equipCard", equipCard)
  eleventyConfig.addPairedNunjucksShortcode("craftableEquipCard", craftableEquipCard)
  eleventyConfig.addPairedNunjucksShortcode("enchantCard", enchantCard)
  eleventyConfig.addPairedNunjucksShortcode("itemCard", itemCard)
  eleventyConfig.addNunjucksShortcode("item", item)
  eleventyConfig.addPairedNunjucksShortcode("card", card)
  eleventyConfig.addPairedNunjucksShortcode("tipCard", tipCard)

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if( outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
};