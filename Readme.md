#Cheerio-V8

Cheerio for the general JavaScript contexts like V8 engine.

##Usage

Import and run the given `/output/cherrio-v8.js` or `/output/cherrio-v8.min.js` in advance.

```js
var $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
//=> <h2 class="title welcome">Hello there!</h2>
```

##Build

The JS library file is built from the official Cheerio repository, with the modified lodash library.

###Clone the repository.
```shell
$ git clone https://github.com/cheeriojs/cheerio.git
```

###Install the dependencies
```shell
$ cd cheerio & npm install
```

###Modify the lodash
To fit the environment without `Window` context object, remove the context references in the `runInContext` function of `node_modules/lodash/index.js`.

You can see the change details in `node_modules/lodash/index.js.diff`.

###Export the cheerio
To export cheerio as a global variable, change the `/index.js` to something like this:
```js
/**
 * Export cheerio (with )
 */

cheerio = require('./lib/cheerio');

/*
  Export the version
*/

cheerio.version = require('./package').version;

```

###Bundle
To generate a single js file, run:
```shell
$ mkdir output
$ browserify index.js -o output/cheerio-v8.js
```
You need to get browserify installed in advance.

###Compress
To compress the generated bundle file, run:
```shell
$ uglifyjs output/cheerio-v8.js -m -o output/cheerio-v8.min.js
```
You need to get uglify-js installed in advance.