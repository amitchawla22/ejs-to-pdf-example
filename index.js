var ejs = require('./utils/ejs');
var pdf = require('./utils/pdf');
var moment = require('moment');
var data = require('./data/data.json');

ejs.toHTML('./templates/index.ejs', data).then(function (html) {
    var options = { format: 'Letter' };
    var output = './data/out/pdf_' + moment().format('YYYYMMDDHHmmSS') + '.pdf'

    pdf.toPDF(html, options, output).then(function (response) {
        console.log("PDF file successfully written");
        console.log(response);
    }, function (error) {
        console.error(error);
    });
}, function (error) {
   console.error(error);
});