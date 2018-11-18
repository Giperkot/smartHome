
// We need this to build our post string
/*
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

// import {doSyncRequest} from "../src/api";

exports.initBackendStub = function(app) {
    app.get('/api/public/login', (req, res) => {

        /!*let responseStr = doSyncRequest({
            url: "/api/public/login",
            method: "GET",
            contentType: "application/json",
        });

        res.json(JSON.parse(responseStr));*!/
    });

    app.get('/api/stations/:id', (req, res) => {
        const id = req.params.id;
        const info = data[id];
        const details = cache[id] || (cache[id] = generateDetails(info));

        res.json({ ...info, ...details });

        return {};
    });
};



function PostCode(codestring) {
    // Build the post string from an object
    var post_data = querystring.stringify({
        'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
        'output_format': 'json',
        'output_info': 'compiled_code',
        'warning_level' : 'QUIET',
        'js_code' : codestring
    });

    // An object of options to indicate where to post to
    var post_options = {
        host: 'localhost',
        port: '8080',
        path: '/api/public/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(post_data)
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(post_data);
    post_req.end();

}*/
