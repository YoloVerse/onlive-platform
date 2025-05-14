const fs = require('fs');

module.exports = function () {
    if (!fs.existsSync(`./uploads`)) fs.mkdirSync('./uploads');
}