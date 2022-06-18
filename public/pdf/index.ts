import pdf from 'html-pdf';

const content = `
<h1>MIRANDO SI ME FUNCIONA LOS PDFS POR MILESIMA VEZ :c</h1>
<p>Generando un PDF con un HTML sencillo</p>
`;

pdf.create(content).toFile('./1-html-pdf.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
});