const fs = require('fs');

module.exports = function(tp) {
    let dir = tp.app.vault.adapter.basePath + "/Sessions/";
    let filenames = fs.readdirSync(dir);

    let max = -1;
    for (const filename of filenames) {
        const match = /^[sS]ession\s*(\d+)/.exec(filename);
        if (!match) {
            continue;
        }

        const num = parseInt(match[1], 10);
        if (num > max) {
            max = num;
        }
    }

    return max + 1;
}
