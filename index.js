const express = require('express');
const cors = require('cors');
const bodyParser =require('body-parser');

const app = express();
const puerto = 3005;

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', require('./src/routes/register'));
app.use('/', require('./src/routes/query'));
app.use('/', require('./src/routes/queryFilter'));


app.listen(puerto, error => {
    if (error) {
        throw error;
    }

    console.log(`Escuchando en el puerto ${puerto}`);
})