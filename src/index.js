const express = require('express');
const morgan = require('morgan');
const app = express(); 
 

app.set('port', process.env.PORT || 4000);


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(require('./routes/users'));
app.use('/', require('./routes/users')); 

app.listen(4000,() => {
    console.log(`Iniciando el Servidor en el puerto.. ${4000}`);
});