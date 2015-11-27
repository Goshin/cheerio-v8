/**
 * Export cheerio (with )
 */

cheerio = require('./lib/cheerio');

/*
  Export the version
*/

cheerio.version = require('./package').version;
