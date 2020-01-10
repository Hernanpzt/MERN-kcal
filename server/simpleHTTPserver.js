const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log("TCL: requestHandler -> request", request.url);
    response.end("hola hackademy again aaaaaaaaa server!");
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
    if(err) {
        return console.log("algo malo esta pasando:", err);
    }
    console.log(`el servidor esta corriend obajo el puerto ${port}`);
})
