var express = require('express')
var app = express()
var fs = require('fs');
const readline = require("readline");
var resultadosFinalProcesado = [];
var bodyParser = require('body-parser')

app.get('/operacion/:opcion', function(req, res) {

  var resultadosOrden;;

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

    resultadosOrden = 'a';
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
    if (req.params.opcion == 1) {
      // console.log(devuelveResultados);
      asigna(devuelveResultados)

    }
    /******************TIPO**********/
    if (req.params.opcion == 2) {
      if (contadorPar > contadorImpar) {
        console.log("Par" + contadorPar);
      }

      if (contadorPar < contadorImpar) {
        console.log("Impar" + contadorImpar);
      }

      if (contadorPar == contadorImpar) {
        console.log("igual");

      }
    }
    /***************FIN TIPO********/

    /*************SECUENCIA********/

    if (req.params.opcion == 3) {
      console.log(secuencia1 + " - " + secuencia2 + " - " + secuencia3 + " - " + secuencia4);
    }

    /**********FIN SECUENCIA*******/
    contadorImpar, contadorImpra = 0;

  });

  var ver = [];
  async function asigna(data) {
    ver.push(data)
  }


  setTimeout(() => {
    console.log(ver[0]);
    res.send(ver);

  }, 1000)







})


app.listen(3000)