const jss = require('jss').default;
const preset = require('jss-preset-default').default;
const fs = require('fs-extra');
const themes = require('./build/index').default;

/**
 * Walk recursively over a directory to return all files as an array
 * @param dir
 * @returns {Array}
 */
const walk = function(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(walk(file));
    } else {
      /* Is a file */
      results.push(file);
    }
  });
  return results;
};

const environment = process.env.NODE_ENV;
const options = preset();
if (environment === 'production') {
  options.id = { minify: true };
}
jss.setup(options);

const srcDir = 'build';
const buildDir = `build`;

// Global themes. For used for development purposes
const THEMES = {};

Object.keys(themes).forEach(themeId => {
  console.info(`Building ${themeId}`);

  const styles = walk(`${srcDir}/${themeId}/styles`).filter(f => f.endsWith('.js'));
  styles.forEach(styleFile => {
    const style = require(`./${styleFile}`).default;
    const sheet = jss.createStyleSheet(style);

    const outputPath = styleFile.replace(srcDir, buildDir).replace('.js', '');
    fs.outputFileSync(`${outputPath  }.json`, JSON.stringify(sheet.classes, null, 2));
    fs.outputFileSync(`${outputPath  }.css`, sheet.toString());
  });
});

fs.outputFileSync(`${buildDir}/themes.json`, JSON.stringify(THEMES, null, 2));


