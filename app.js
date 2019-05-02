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

    var secuencia1 = 0;
    var secuencia2 = 0;
    var secuencia3 = 0;
    var secuencia4 = 0;

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

      if (item % 2 == 1) {
        contadorImpar++;
      } else {
        contadorPar++;
      }

      if (item < 9) {
        secuencia1++;
      }

      if (item > 9 && item < 20) {
        secuencia2++;
      }

      if (item > 19 && item < 30) {
        secuencia3++;
      }

      if (item > 29) {
        secuencia4++;
      }

    })
    console.log(devuelveResultados);
    /******************TIPO**********/
    // if (contadorPar > contadorImpar) {
    //   console.log("Par" + contadorPar);
    // }
    //
    // if (contadorPar < contadorImpar) {
    //   console.log("Impar" + contadorImpar);
    // }
    //
    // if (contadorPar == contadorImpar) {
    //   console.log("igual");
    // }
    /***************FIN TIPO********/

    /*************SECUENCIA********/

    // console.log(secuencia1 + " - " + secuencia2 + " - " + secuencia3 + " - " + secuencia4);

    /**********FIN SECUENCIA*******/

    contadorImpar, contadorImpra = 0;

  });

  res.send("Terminado")
})

app.listen(3000)