const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const videosRoutes = (require('./routes/index'));

//numero de servidor local 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//peticiones-funciones
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'sql3.freemysqlhosting.net',
    user:'sql3334963',
    password: 'lRxedSAaBM',
    database:'sql3334963'
}, 'single'));
//archivos 
app.use(express.static(path.join(__dirname,'public')));
//rutas
app.use('/', videosRoutes);
//prueba servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
