var fs = require('fs')

var data = {
    namg: 'Bob'
}

fs.writeFile('data_2.json', JSON.stringify(data), (err) => {
    console.log('write finished', err)
})