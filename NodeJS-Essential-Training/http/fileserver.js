var http = require("http");
var fs = require("fs");
var psth = require("path");

http.createServer(function(req, res){

    console.log(`${req.method} request for ${req.utl}`);

    if(req.url ==="/"){             // the request is from home page
        fs.readFile("./public/index.html", "UTF-8", function(err, html){
            res.writeHead(200, {":Content-Type": "text/html"});
        });
    }else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 File Not Found");
    }

}).listen(3000);