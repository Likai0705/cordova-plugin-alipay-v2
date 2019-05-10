var exec = require('cordova/exec');

exports.payment = function(payInfo, success, error) {
    exec(success, error, "alipay", "payment", [payInfo]);
};

exports.login = function(loginInfo, success, error) {
    exec(success, error, "alipay", "login", [loginInfo]);
};
