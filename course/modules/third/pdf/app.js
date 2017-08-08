const pdf = require('pdfkit');
const fs = require('fs');

var myDoc = new pdf;

myDoc.pipe(fs.createWriteStream('node.pdf'));
myDoc.font('Times-Roman')
     .fontSize(48)
     .text('Nodejs Pdf document', 100, 100);
myDoc.end();
