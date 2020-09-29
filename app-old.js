const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'application/json'})
    // res.write('Hola Mundo');

    let salida = {
        nombre: 'Henry',
        edad: 35,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
})
.listen(4000);

console.log('Escuchando el puerto 3000');