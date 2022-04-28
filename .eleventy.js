const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Create our custom markdown-it instance.
  const md = markdownIt({
    html: true,
    linkify: true,
  }).use(require("markdown-it-footnote"));

  // Overwrite the built-in Markdown library with our custom instance.
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js/");

  eleventyConfig.addCollection("orderedPost", function (collection) {
    return collection
      .getFilteredByTag("post")
      .sort((a, b) => {
        return a.data.order - b.data.order;
      })
      .filter((post) => !Boolean(post.data.featured));
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
