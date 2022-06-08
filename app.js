const express = require("express");
const { engine } = require("express/lib/application");
const { render, json } = require("express/lib/response");
const morgan = require("morgan");
const path = require("path");
const app = express();

//PDF VENTAS-FACTURA
// const PdfPrinter = require ("pdfmake");
// const fs = require("fs");
// const fonts = require("./fonts");
// const style = require("./style");
// const {content} = require("./pdfContent");

// let docDefinition = {
//     content: content,
//     style: style
// };

// const printer = new PdfPrinter(fonts);

// let pdfDoc = printer.createPdfKitDocument(docDefinition);
// pdfDoc.pipe(fs.createReadStream("pdfs/pdfTest.pdf"));
// pdfDoc.end();
//TERMINA PDF VENTAS-PAQUETE DESISTALADO*?



app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.set('port',3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'vistas/'));

app.use(require('./rutas/rutas'));

app.listen(app.get('port'), () => {
    console.log("Se esta ultilizando el puerto",app.get('port'));
});