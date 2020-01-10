const express = require('express');
const app = express();
const port = 3000;

app.get('/api/:id', (req, res) =>{

    res.send(`hola hackademy desde express index.js ${req.params.id}`)
})

app.listen(port, err =>{

    if(err) {
        return console.log("algo anda mal:", err);
    }

    console.log(`http://localhost:${port}`);
})