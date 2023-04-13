module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.addWatchTarget("./src/assets/");

  return {
    dir: {
      input: "src",
    },
    "dataTemplateEngine": "njk",
    "markdownTemplateEngine": "njk",
    htmlTemplateEngine: "njk"
  }
};