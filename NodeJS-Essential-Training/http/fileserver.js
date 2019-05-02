var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req, res){
    // log the information of the request. 
    console.log(`${req.method} request for ${req.url}`);    

    if(req.url ==="/"){             // the request is from home page
        fs.readFile("./public/index.html", "UTF-8", function(err, html){    // response with the contents from index.html
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match(/.css$/)){

        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});

        fileStream.pipe(res);
    
    }else if(req.url.match(/.jpg$/)){

        var imgPath = path.join(__dirname, 'public', req.url);
        var imgStream = fs.createReadStream(imgPath);

        res.writeHead(200, {"Content-TYpe": "image/jpeg"});

        imgStream.pipe(res);
    
    }else{          // if the request is not from home page:
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 File Not Found");
    }

}).listen(3000);

console.log("File server is running on port 3000");