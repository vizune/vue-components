const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const config = require('config');

const src = path.resolve(__dirname, '../src/');
const build = path.resolve(__dirname, '../', config.get('buildPath'));

let folders = []; // Add any extra folders you'd like to clean in here


const defaults = ['assets'];
const copyPath = path.resolve(src, 'copy');

let copyFolders = fs.existsSync(copyPath) ? fs.readdirSync(copyPath) : [];

folders = new Set([].concat(defaults, copyFolders, folders).map(f => (
    path.resolve(build, f)
)));

folders.forEach(f => {
    if ( fs.existsSync(f) ) {
        fse.remove(f, err => {
        if ( err ) throw err;
        //console.log(`${path.relative(build, f)} folder cleaned!`);
        });
    }
});
