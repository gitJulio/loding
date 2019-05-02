var express = require('express')
var app = express()
var fs = require('fs');
const readline = require("readline");
var resultadosOrden = [];

app.get('/', function(req, res) {


  // fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log('error: ', err);
  //   } else {
  //     res.send(data)
  //   }
  // });


  NOMBRE_ARCHIVO = "archivo.txt";

  let lector = readline.createInterface({
    input: fs.createReadStream(NOMBRE_ARCHIVO)
  });

  lector.on("line", linea => {
    resultadosOrden.push(linea)
  });
  console.log(resultadosOrden);
  res.send(resultadosOrden)
})

app.listen(3000)