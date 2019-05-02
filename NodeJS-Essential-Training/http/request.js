var https = require("https");
var fs = require("fs");

var options = {             //details about the request
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/Apollo_Belvedere",
    method: "GET"
};

var req = https.request(options, function(res){      // sent variable options to the request function. 
                                                     // once the request function started, function(res) was envoked
    var responseBody = "";

    console.log("Response from server started.");
    console.log(`Server Status: ${res.statusCode}`);
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");   // since the responsed datas are binary, so we set the encoding to UTF-8.

    res.once("data", function(chunk){ // the very first time this response raise a data event, the following callback function will fire.
        console.log(chunk);           // this will log the first chunk.
    });

    res.on("data", function(chunk){                 // for every data event
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on("end", function(){
        fs.writeFile("Apollo_Belvedere.html", responseBody, function(err){
            if(err){
                throw err;
            }
            console.log("File Downloaded");
        });
    });
});

req.on("error", function(err){
    console.log(`problem with request: ${err.message}`);
});

req.end();

