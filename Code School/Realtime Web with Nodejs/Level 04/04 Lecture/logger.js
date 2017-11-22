var warn = function (message) {
    console.log("Warning: " + message);
};

var info = function (message) {
    console.log("Info: " + message);
};

var error = function (message) {
    console.log("Error: " + message);
};

// 01
exports.info = info;
// 02
exports.warn = warn;
// 03
exports.error = error;