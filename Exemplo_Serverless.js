var http = require('http'),
    fs = require('fs');

/*http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(8080);*/


fs.readFile('C:\\Users\\Felps\\Documents\\VsCode Projects\\Login-with-preloader\\login.html', function(err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(8080);
});

fs.readFile('C:\\Users\\Felps\\Documents\\VsCode Projects\\Login-with-preloader\\loading.html', function(err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {
            "Content-Type": "text/html"
        });
        response.write(html);
        response.end();
    }).listen(8180);
});

fs.readFile('C:\\Users\\Felps\\Documents\\VsCode Projects\\Login-with-preloader\\loren Ipsum.html', function(err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {
            "Content-Type": "text/html"
        });
        response.write(html);
        response.end();
    }).listen(8280);
});