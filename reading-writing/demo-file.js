var fs = require('fs')

fs.readdir('/Users/aaronyang', (err, data) => {
    console.log(data);
})