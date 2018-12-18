var fs = require('fs');

//fs.readdir('/Users/aaronyang', (err,data) => {
//    console.log(data);
//});

var data = {
    name: 'Bob'
};

fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log('Saved!');
});