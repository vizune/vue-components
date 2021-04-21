const colors = require('colors');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const glob = require('glob');
const svgSpriter = require('svg-sprite');
const config = require('config');

const src = path.resolve(__dirname, config.get('srcPath'));
const srcIcons = path.join(src, "assets/icons");
const build = path.resolve(__dirname, '../', config.get('buildPath'));
const buildIcons = path.join(build, "assets/icons");

const svgoConfig = {
  plugins: [
    { rootAttributes: { xmlns: "http://www.w3.org/2000/svg" } },
    { sortAttrs: true },
    { removeTitle: false },
    { removeViewBox: false },
    { removeDesc: true },
    { removeDimensions: true },
    { transformsWithOnePath: true },
    { convertStyleToAttrs: true },
    { removeStyleElement: true }
  ]
};

const spriter = new svgSpriter({
  dest: buildIcons,
  log: 'info',
  shape: {
    transform: [{ svgo: svgoConfig }]
  },
  svg: svgoConfig,
  mode: {
    symbol: {
      css: true,
      inline: true,
      dest: "",
      prefix: ".icon-%s",
      sprite: "_icons.svg",
    }
  }
});

glob(path.resolve(srcIcons, '**/*.svg'), (err, result) => {
  if (err) throw err;

  result.forEach(file => {
    let name = path.relative(srcIcons, file);
    spriter.add(file, name, fs.readFileSync(file));
    //console.log(colors.bold("Adding icon:"), colors.green(name))
  });

  spriter.compile((error, result) => {
    for (let mode in result) {
      for (let resource in result[mode]) {
        mkdirp.sync(path.dirname(result[mode][resource].path));
        fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
      }
    }
  });
});
