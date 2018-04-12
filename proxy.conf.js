const PROXY_CONFIG = {
    "/api/*": {
        "target": {
            "host": "quiknode.pro",
            "protocol": "https:",
            "port": 443
        },
        "secure": false,
        "changeOrigin": true,
        "logLevel": "debug",
        "proxyTimeout": 10000,
        "onError": function (error, req, res) {
            if (error) {
                console.log('ERROR ===========> ', error);
                if (error.code === "ECONNRESET" || error.code === "ECONNREFUSED" || error.code === "ESOCKETTIMEDOUT") {
                    res.status(502).send(error);
                } else {
                    res.send(error);
                }
            }
        }
    }
};

module.exports = PROXY_CONFIG;
