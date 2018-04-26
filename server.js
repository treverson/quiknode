var express = require('express');
var path = require('path');
var request = require('request');
var app = express();
var _ = require('lodash');
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
createTraffic();
process.on('uncaughtException', function (err) {
    console.error('UNCAUGHT EXCEPTION: ' + err);
});
app.listen(app.get('port'), function () {
    console.log('Angular cli listening on port ' + app.get('port'));
});

function createTraffic() {
    request.get('https://quiknode.pro/api/v1/account/instances', {
        'auth': {
            'username': 'wo.dev03@gmail.com',
            'password': 'password',
            'sendImmediately': false
        }
    }, function callback(error, response, body) {
        if (!error && response.statusCode === 200) {
            var reBody = JSON.parse(body).instances;
            var headers = {"Content-Type": "application/json"};
            var count = 0 ;
            if (reBody) {
                for (var i = 0; i < reBody.length; i++) {
                    const obj = {
                        'method': 'eth_blockNumber',
                        'params': [],
                        'id': 1,
                        'jsonrpc': '2.0'
                    };
                    const configuration = reBody[i] && reBody[i].configuration;
                    if (configuration && configuration.validators &&
                        configuration.validators.http && configuration.validators.http.request) {
                        if (configuration.validators.http.request) {
                            // console.log('Validatore...', configuration.validators.http.request[0].type);
                            const validateToken = _.find(configuration.validators.http.request, function(req) {
                                return req.type === 'validateToken'
                            });
                            console.log('Validatore...10', validateToken);
                            const validateReferer = _.find(configuration.validators.http.request, function(req){
                                return req.type === 'validateReferer';
                            });
                            /* if (validateReferer) {
                             console.log('validateReferer ', validateReferer.referers[0])
                             headers  = new HttpHeaders().set('InterceptorSkipHeader', '').set('X-Alt-Referer', validateReferer.referers[0]);
                             }*/
                            console.log('Validatore...1', validateReferer);
                            if (validateToken) {
                                headers  = {'Authorization': validateToken.token,
                                    "Content-Type": "application/json"};
                            }
                            if (validateReferer && validateReferer.referers) {
                                headers  = {'X-Alt-Referer': validateReferer.referers[0],
                                    "Content-Type": "application/json"};
                            }
                        }
                    }
                    request.post({ url: "https://" + reBody[i]['name'] + ".quiknode.pro/", json: obj, headers: headers, timeout: 10000 },
                        function optionalCallback(err, httpResponse, body) {
                            console.log("err ", err);
                            count = count + 1;
                            console.log('Count..',count, "/", reBody.length);
                            if (count >= reBody.length) {
                                createTraffic();
                            }
                        })
                }

            }
        } else if (error) {
            createTraffic();
        }
    });
}
