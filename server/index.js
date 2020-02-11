require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {mongoose} = require('./db/mongoose')
const cors = require('cors');
const port = process.env.PORT;

const routes = require('./routes');




app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

routes(app); // las rutas es lo ultimo que tiene que cargar para que antes de se lean los req al body


// app.get('/api/:id', (req, res) =>{

//     res.send(`hola hackademy desde express index.js ${req.params.id}`)
// })

app.listen(port, err =>{

    if(err) {
        return console.log("algo anda mal:", err);
    }

    console.log(`http://localhost:${port}`);
})