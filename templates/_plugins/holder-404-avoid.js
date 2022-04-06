var cheerio = require('cheerio');

module.exports = function(params, callback) {
    'use strict';

    // load current page content
    var $ = cheerio.load(params.content);
    params.content = $.html();
    callback();
};

module.exports.options = {
  stage: 'render:post:page'
};