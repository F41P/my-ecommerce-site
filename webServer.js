var http = require('http');
const url = require('url');
var fs = require('fs')
const path = require('path')

const server = http.createServer(function (req, res) {
    //var q = url.parse(req.url, true);
    //var fileName

    let filePath = '.' + req.url;
    if(filePath === "./")filePath = "./index.html";

    const path = require('path')
        const extname = path.extname(filePath);
        let contentType = "text/html";
        if(extname === ".css") contentType = "text/css";
        if(extname === ".xml") contentType = "text/xml";
        if(extname === ".js") contentType = "application/js";

    fs.readFile(filePath, function(err, htmldoc){
        if(err){
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end("404: File Not Found!!!!")
        }
        res.writeHead(200, {'Content-Type': contentType});
        var q = url.parse(req.url, true).query;
        var txt = q.fname + ' ' + q.lname
        res.write(htmldoc)
        res.end();
    });
  
});

server.listen(8080);