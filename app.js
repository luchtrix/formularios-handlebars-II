//Bloque 1: mis dependencias, lo que voy a usar

const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
var servidor = http.createServer(app);

var handlebars = require('express-handlebars');
//middleware--> body-parser
var bodyParser = require('body-parser');

//bloque 2: mis configuraciones de express

//Configuración del nombre de la aplicación
app.set("nombreApp", "Formularios-Handlebars");
//configuracion para el puerto que va a escuchar nuestro servidor
app.set("port", process.env.PORT || 3000);
//configuración para las vistas
app.set('views', path.join(__dirname, 'views'));
//Configurando nuestro motor de vistas, en este caso es handlebar
//le decimos que el main va a ser por default
app.engine('handlebars',handlebars({
	'defaultLayout': "main"
}));
//establecer el tipo de motor de vistas
app.set('view engine','handlebars');

//Bloque para los middlewares, siempre es mejor ponerlo antes de las rutas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Bloque 3: Rutas del proyecto

app.get('/', function(req,res){
	res.render('index');
})

//Bloque 4: inicializando nuestro servidor
servidor.listen(app.get('port'), function(){
	console.log("Servidor de "+app.get('nombreApp')+" inicializado en el puerto "+app.get('port'));
})