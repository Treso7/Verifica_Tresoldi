var express = require("express");
var a = express();
var fs = require("fs");
var port = 3000;
var host = 'localhost';
a.get('/', (request, response)=>{
   response.send("<html><head><title>pagina</title></head><body><h1>Pagina principlea</h1><a href='http://localhost:3000/registrazione'>registrazione</a><a href='http://localhost:3000/login'>login</a></body>")
});
a.get('/login', (request, response)=>{
 response.send("<html><head><title>login</title></head><body><h1>login</h1><form method='get' action='menu'><input type='text', name='email'><input type='text', name='password'><input type='submit', name='manda'></form>);
});
a.get('/menu', (request, response)=>{
   var nome = request.query.email;
  var passwoood = request.query.password;
    fs.readFile("salva.json", (err, dati)=>{
        var scritte = JSON.parse(dati);
       scritte.forEach(elemento => {
           if (elemento.username == nome) {
                 if(elemento.password == passwoood) {
                     var resposta = "<html><head><title>Compito</title></head><body>"+elemento.gruppo+"<br><table>";
                         for (let i = 0; i < elemento.meat.length; i++) {
                           resposta += "<tr><td>"+elemento.meat[i]+"</td></tr>";
            }
                    resposta += "<form method='get' action='cancella'><input type='submit' value='calcella'></form></body><html>";
                       response.send(resposta);
                    }
                }
            });
    });
   
a.get('/cancella', (request, response)=>{
   fs.readFile("salva.json", (err, dati)=>{
    var scritte = JSON.parse(dati);
      scritte = "";
      fs.writeFile("salva.json", JSON.stringify(scritte), (err)=>{console.log(err);});
      reponse.send("<h1>Ho cancellato</h1>);
   });
   });
