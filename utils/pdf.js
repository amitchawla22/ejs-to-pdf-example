var Promise = require('bluebird');
var pdf = require('html-pdf');

function toPDF (html, options,  output) {
    return new Promise(function (resolve, reject) {
        pdf.create(html, options).toFile(output, function(error, response) {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        });
    });
}

module.exports = {
    toPDF: toPDF
}