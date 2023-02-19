const { DateTime } = require('luxon');
const fs = require('fs');
const pluginNavigation = require('@11ty/eleventy-navigation');
const { EleventyI18nPlugin } = require('@11ty/eleventy');
const i18next = require ('i18next');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const _ = require('lodash');
const semver_sort = require('semver').sort;
const lunr = require('lunr');

  /**
   * Initialize i18next for translations. This has to happen outside of the
   * config function, or it'll run every time the project rebuilds, causing
   * i18next to spit out re-initialization errors.
   */
i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: JSON.parse(fs.readFileSync('en/translations.json', 'utf-8')),
    },
    da: {
      translation: JSON.parse(fs.readFileSync('da/translations.json', 'utf-8')),
    },
  },
  returnObjects: true,
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  // Basic i18n maintains a lang data value that we can use to determine the
  // current locale.
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'en',

    errorMode: 'strict',
  });

  /**
   * Add an event handler to rebuild translations before compilation. This is
   * triggered during watch, for example, and ensures that updated text
   * translations are present. Without this event handler, you have to restart
   * the eleventy watcher every time you update a translation file.
   */
  eleventyConfig.on('eleventy.before', () => {
    console.debug('eleventy.before: i18n refresh');

    i18next.addResourceBundle(
      'en',
      'translation',
      JSON.parse(fs.readFileSync('en/translations.json', 'utf-8')),
      false,
      true,
    );

    i18next.addResourceBundle(
      'da',
      'translation',
      JSON.parse(fs.readFileSync('da/translations.json', 'utf-8')),
      false,
      true,
    );
  });

  // Ensures the input object is an array. If it already is an array, it is
  // passed back as-is. If not, it is returned as a single-item array.
  eleventyConfig.addFilter('asArray', (obj) => {
    console.debug('asArray', obj);
    // If nothing is passed in, return an empty array instead of an array
    // containing a useless value.
    if (obj === null || obj === undefined) return [];
    
    return Array.isArray(obj) ? obj : [obj];
  });

  /**
   * Translation filter. Will automatically try to pick up the current language
   * as presented by the EleventyI18nPlugin plugin.
   * Note: it is *necessary* for this to be a "fat" function, not an arrow 
   * function, since its execution depends on the presence of the "this"
   * variable, which is not set with an arrow function.
   * Example use: "{{ 'hello_world' | t }}"
   */
  eleventyConfig.addFilter('t', function(key, ns) {
    return i18next.t(key, {
      lng: this.ctx.page.lang,
      ns,
    });
  });

  /**
   * Translation filter. Will automatically try to pick up the current language
   * as presented by the EleventyI18nPlugin plugin.
   * Note: it is *necessary* for this to be a "fat" function, not an arrow 
   * function, since its execution depends on the presence of the "this"
   * variable, which is not set with an arrow function.
   * Example use: "{% t 'hello_world' %}"
   */
  eleventyConfig.addShortcode('t', function(key, ns) {
    return i18next.t(key, {
      lng: this.ctx.page.lang,
      ns,
    });
  });

  /**
   * Short-hand for getting the translated title of a WCAG identifier. Input
   * shoud be the WCAG identifier as-is (i.e. "1.4.1", "1.1.1", etc).
   */
  eleventyConfig.addFilter('wcagt', function(wcag) {
    return i18next.t(`wcag.successCriteria.${wcag.replaceAll('.', '_')}.title`, {
      lng: this.ctx.lang,
    });
  });

  eleventyConfig.addFilter('replaceAll', (str, search, replace) => str.replaceAll(search, replace));

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addWatchTarget('./_includes/sass');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-LL-dd');
  });

  /**
   * Returns an array of unique entries found at `path` for each page in
   * `collection`. If the path leads to an array, it will be flattened before
   * checking for unique values.
   */
  eleventyConfig.addFilter('unique', (collection, path) => {
    // Method: use flatMap (map and then flatten resulting arrays) to retrieve
    // only the part of the page object that's interesting. Then insert it into
    // a set to guarantee uniqueness, and convert to a final array of values.
    return Array.from(
      new Set(collection.flatMap(page => _.get(page, path)))
    ).filter(value => value !== null && value !== undefined);
  });

  /**
   * Filters an array-like, comparing the value found at the end of `path` with
   * `value`, and only returning the items for which the comparison returns
   * true.
   */
  eleventyConfig.addFilter('pathFilter', (collection, path, value) => {
    const vals = collection.filter(el => _.get(el, path) == value);
    // console.debug('pathFilter', path, value, vals, collection);
    return vals;
  });

  /**
   * Sorts an array-like of elements using semantic versioning. This ensure that
   * version-like strings like WCAG criteria are sorted as expected.
   * An alphanumeric sort of "1.4.3" and "1.4.11" would (incorrectly) yield
   * ["1.4.11", "1.4.3"] while semver.sort instead yields ["1.4.3", "1.4.11"].
   */
  eleventyConfig.addFilter('semver_sort', (arraylike) => semver_sort(Array.from(arraylike)));

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addCollection('tagList', require('./_11ty/getTagList'));
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('admin');

  // Copy lunr client file to output directory.
  eleventyConfig.addPassthroughCopy({
    'node_modules/lunr/lunr.min.js': 'js/lunr.min.js',
  });

  eleventyConfig.addPassthroughCopy({
    'node_modules/jquery/dist/jquery.min.js': 'js/jquery.min.js',
  });

  eleventyConfig.addPassthroughCopy({
    'node_modules/bootstrap/dist/js/bootstrap.min.js': 'js/bootstrap.min.js',
  });

  eleventyConfig.addPassthroughCopy({
    'node_modules/bootstrap-icons/font/bootstrap-icons.css': 'css/bootstrap-icons.css',
  });

  eleventyConfig.addPassthroughCopy({
    'node_modules/bootstrap-icons/font/fonts': 'css/fonts',
  });

  eleventyConfig.addCollection("learnCards", function (collection) {
    return collection.getAll().filter((item) => item.data.learncard);
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: false,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#',
  });
  eleventyConfig.setLibrary('md', markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid', '11ty.js'],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',

    // These are all optional, defaults are shown:
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
