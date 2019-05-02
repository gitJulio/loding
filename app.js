var express = require('express')
var app = express()
var fs = require('fs');
const readline = require("readline");
var resultadosFinalProcesado = [];

app.get('/', function(req, res) {
  var resultadosOrden = [];

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
    var devuelveResultados = '';
    var contador = 0;
    var contadorPar = 0;
    var contadorImpar = 0;
    var arrayResultado = linea.split("-").map(String);
    var ordenArray = [];

    function comparar(a, b) {
      return a - b;
    }

    arrayResultado.sort(comparar);

    arrayResultado.forEach(item => {

      contador++;
      if (contador == 1) {
        devuelveResultados = devuelveResultados + item;
      } else {
        devuelveResultados = devuelveResultados + '-' + item;
      }

      if (item % 2) {
        contadorImpar++;
      } else {
        contadorPar++;
      }

    })
    // console.log(devuelveResultados);
    if (contadorPar > contadorImpar) {
      console.log("Par" + contadorPar);
    } else {
      console.log("Impar" + contadorImpar);
    }

    if (contadorPar == contadorImpar) {
      console.log("igual");
    }


  });

  res.send("Terminado")
})

app.listen(3000)