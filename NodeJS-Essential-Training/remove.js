var fs = require("fs");

try{
    fs.unlinkSync("./lib/config.json");
} catch(err) {
    console.log(err);
}

fs.unlink("notes.md", function(err){
    if(err){
        console.log("notes.md removed.");
    }
});
