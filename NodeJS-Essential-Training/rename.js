var fs = require('fs');

fs.renameSync("./lib/project-config.js", "./lib/config.json");

console.log("Config json file renamed");

fs.rename("./lib/notes.md", "./not.md", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("notes.md was moved successfully.");
    }
})