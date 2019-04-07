const fs = require('fs');
const path = require('path');

async function renameFile(dir) {
    let files = await fs.readdirSync(dir);
    for(let f of files) {
        let dirPath = path.join(dir, f);
        if(fs.statSync(dirPath).isDirectory())
            renameFile('./' + dirPath);
    }
    files
        .filter(file => file.match(/^.*\.js$/))
        .forEach(file => {
            const filePath = path.join(dir, file);
            const newFilePath = path.join(dir, file.replace(/^.*\.js$/, file.substr(0, file.lastIndexOf(".")) + ".mjs"));

            fs.renameSync(filePath, newFilePath);
        });
};

renameFile('./lib');