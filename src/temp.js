import glob from 'glob-promise';
import fs from 'fs/promises';

const paths = await glob('**')

paths.forEach(async path => {
    if (path.includes('node_modules')) return
    const stats = await fs.stat(path)
    if (stats.isDirectory()) return console.log(path)
})
