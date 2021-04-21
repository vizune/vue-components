const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const config = require('config');

const src = path.join(config.get('srcPath'), '/assets/copy');
const build = path.join(config.get('buildPath'), '/assets');

glob(path.resolve(src, '**/*.*'), (err, files) => {
  if ( err ) throw err;

  files.forEach(file => {
    let relative = path.relative(src, file);
    let newFile = path.resolve(build, relative);
  
    fse.copy(file, newFile, err => {
      if (err) return console.error(err)
      //console.log(`${relative} moved to ${path.relative(path.resolve(__dirname, '../../'), newFile)}`);
    });
  });
});