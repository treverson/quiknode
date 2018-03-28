var express = require('express');
var path = require('path');
var request = require('request');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.all("/api/*", function (req, res) {
    console.log(req.method + ' ' + req.url);
    req.headers.host = 'quiknode.pro:443';
    req.pipe(request({
        url: 'https://quiknode.pro:443' + req.url,
        qs: req.query,
        method: req.method,
        timeout: 30000
    }, function (error, response, body) {
        if (error) {
            console.log('ERROR ===========> ', error);
            if (error.code === "ECONNRESET" || error.code === "ECONNREFUSED" || error.code === "ESOCKETTIMEDOUT") {
                res.status(502).send(error);
            } else {
                res.send(error);
            }
        }
    })).pipe(res);
});
process.on('uncaughtException', function (err) {
    console.error('UNCAUGHT EXCEPTION: ' + err);
});
app.listen(app.get('port'), function () {
    console.log('Angular cli listening on port ' + app.get('port'));
});
