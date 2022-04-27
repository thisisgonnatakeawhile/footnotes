const { DateTime } = require("luxon");
const footnotes = require('eleventy-plugin-footnotes');
const markdownIt = require("markdown-it");
const md = markdownIt({
    html: true,
    linkify: true,
  })
  .use(require('markdown-it-footnote'));

module.exports = function (eleventyConfig){
    eleventyConfig.addPlugin(footnotes, { /* … */ });
    eleventyConfig.addFilter("markdown", function (markup) {
      return md.renderInline(markup);
    });

    eleventyConfig.addPassthroughCopy('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/js/');
    // eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addCollection("orderedPost", function (collection) {
        return collection.getFilteredByTag("post").sort((a, b) => {
          return a.data.order - b.data.order;
        })
        .filter(post => !Boolean(post.data.featured));
    });

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    });
    return{
        dir:{
            input: "src",
            output: "public",
        }
    };
}
