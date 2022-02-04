var express = require("express");
var a = express();
var fs = require("fs");
var port = 3000;
var host = 'localhost';

a.get('/login', (request, response)=>{
   var nome = request.query.email;
  var passwoood = request.query.password;
    fs.readFile("salva.json", (err, dati)=>{
        var scritte = JSON.parse(dati);
       scritte.forEach(elemento => {
           if (elemento.nome == nome) {
                 if(elemento.password == passwoood) {
                       response.json({status : "ok"});
                    } else {
                       response.json({status : "no ok"});
                    }
                } else {
                   response.json({status : "no ok"});
                }
            });
    });
   
a.get('/cancella', (request, response)=>{
   fs.readFile("salva.json", (err, dati)=>{
    var scritte = JSON.parse(dati);
      scritte = "";
      fs.writeFile("salva.json", JSON.stringify(scritte), (err)=>{response.json({cancellato : "no ok"});});
      response.json({cancellato : "ok"});
   });
   });
