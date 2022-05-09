const express = require("express");
const { engine } = require("express/lib/application");
const { render } = require("express/lib/response");
const morgan = require("morgan");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname,'public')));
app.set('port',3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'vistas/'));

app.use(require('./rutas/rutas'));

app.listen(app.get('port'), () => {
    console.log("Se esta ultilizando el puerto",app.get('port'));
});