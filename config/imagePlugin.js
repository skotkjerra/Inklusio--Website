const Image = require("@11ty/eleventy-img");

module.exports = {
  asyncImage: async function(src, alt, sizes) {
    let metadata = await Image(src, {
      widths: [400, 800, 1200],
      formats: ["png", "jpeg"],
      outputDir: '_site/assets/images',
      urlPath: '/assets/images',
    });
    
    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  }
};