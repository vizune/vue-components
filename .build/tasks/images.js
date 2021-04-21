const colors = require('colors');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const prettyBytes = require('pretty-bytes');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

const config = require('config');
const src = path.join(config.get('srcPath'), '/assets/images');
const build = path.join(config.get('buildPath'), '/assets/images');

const imgPattern = '*.{jpg,jpeg,png,svg}';
const imageminOpt = [
  imageminJpegtran(),
  imageminPngquant({
    quality: [0.75, 0.85]
  }),
  imageminSvgo({
    plugins: [
      { removeTitle: false },
      { removeViewBox: false },
      { removeDesc: true },
      { transformsWithOnePath: true },
      { convertStyleToAttrs: true },
      { removeStyleElement: false }
    ]
  }),
];

glob(src + "\\**\\*\\", (err, folders) => {
  if ( err ) throw err;

  folders.forEach(folder => {
    minifyImages(path.relative(src, folder));
  })
})

function minifyImages(folder) {
  // Windows issues - need to replace backslashes with forward slashes
  // PR currently pending in imagemin github with fix for this
  // For now replacing characters using regex
  var source = path.resolve(src, folder, imgPattern).replace(/\\/g, "/");
  var output = path.resolve(build, folder).replace(/\\/g, "/");

  //imagemin([source], output, imageminOpt).then(logSuccess);

  (async () => {
    const files = await imagemin([source], {
      destination: output,
      plugins: imageminOpt
    })
  
    //console.log(files);
  });
}

function logSuccess(files) {
  // Output savings
  for ( let file of files ) {
    const name = path.relative(build, file.path);
    const original = fs.statSync(path.resolve(src, name));
    const optimal = fs.statSync(file.path);
    const saved = original.size - optimal.size;
    const percent = original.size > 0 ? ( saved / original.size ) * 100 : 0;
    const savedMsg = `saved ${prettyBytes(saved)} - ${percent.toFixed(1).replace(/\.0$/, '')}%`;
    const msg = saved > 0 ? savedMsg : 'already optimised';

    //console.log(`${name}: ${msg}`);
    //console.log(colors.grey(name) + ": " + colors.bold(msg))
  }
}
