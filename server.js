const express = require('express');
const path = require('path');
const app = express();
var httpProxy = require('http-proxy');
const https = require('https')
var apiProxy = httpProxy.createProxyServer();

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.all("/api/*", function(req, res){
    apiProxy.web(req, res, {
        target: 'https://quiknode.pro',
        agent: https.globalAgent,
        headers: {
            host: 'quiknode.pro'
        } });
});
app.listen(app.get('port'), function () {
    console.log('Angular cli listening on port ' + app.get('port'));
});
