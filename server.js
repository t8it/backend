// Import express
var express = require('express')

//Import Body Parser
var bodyParser = require('body-parser');

var cors = require('cors');
 
// Initialize the server express
var app = express();

//Bloque de código para que habilite el cor
//otro bloque 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.use(cors())

//conectar BD
//var urlBD = 'mongodb://localhost/test';
//var urlBD = "mongodb+srv://test:test1234@cluster0-apezn.mongodb.net/Agenda?retryWrites=true";
/*
//opciones conexion
var opts = {useNewUrlParser : true, connectTimeoutMS:20000};
//importo driver
var mongoose = require('mongoose');
//Pruebo conexion
mongoose.connect(urlBD,opts).then
(
    () => {
            console.log("Conectado!!");
          }, //se conecto
    err => { 
            console.log("ERROR:" + err); 
           } //manejo error
);
*/

// Import router
var apiRoutes = require("./api-routes")

// Todo lo que recibe la app se tratara como json
app.use(bodyParser.urlencoded(
{
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('T8kit Backend Application'));

// Use Api routes in the App
app.use('/t8kit-back', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
      console.log("Running RestHub on port " + port);
});
