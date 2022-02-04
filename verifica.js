var express = require("express");
var a = express();
var fs = require("fs");
var port = 3000;
var host = 'localhost';

a.get('/login', (request, response)=>{
   var nome = request.query.email;
   var password = request.query.password;
   fs.readFile("salva.json", (err, dati)=>{
        var scritte = JSON.parse(dati);
        scritte.forEach(elemento => {
           if (elemento.nome == nome) {
                 if(elemento.password == password) {
                       response.json({status : "ok"});
                    } else {
                       response.json({status : "no ok"});
                    }
                } else {
                   response.json({status : "no ok"});
                }
            });
   });
});
   
a.get('/registra', (request, response)=>{
   var gruppo = request.query.gruppo;
   var nome = request.query.nome;
   fs.readFile("salva.json", (err, dati)=>{
        var scritte = JSON.parse(dati);
        for (var i = 0; i < scritte.length; i++) {
            if(scritte[i].nome == nome) {
               scritte[i].gruppo = gruppo;
               response.json({status : "ok"});
            }
        }
      fs.writeFile("salva.json", JSON.stringify(scritte), (err)=>{
         response.json({cancellato : "no ok"});
      });
   });
});
   
a.get('/cancella', (request, response)=>{
   fs.readFile("salva.json", (err, dati)=>{
      var scritte = JSON.parse(dati);
      var dacancellare = request.query.nome;
      for (var i = 0; i < scritte.length; i++) {
            if(scritte[i].nome == dacancellare) {
               delete scritte[i]
               response.json({status : "ok"});
            }
        }
      fs.writeFile("salva.json", JSON.stringify(scritte), (err)=>{
         response.json({cancellato : "no ok"});
      });
   });
});
