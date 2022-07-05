const express = require("express");
const app = express();

app.get("/", function(req, resp) {
    resp.send("Sistema de Cadastro - GW");
})

app.get("/produto", function(req, resp) {
    resp.send("Produto");
})

app.get("/contato", function(req, resp) {
    resp.send("Contato");
})

app.get("/dados/:nome/: cargo", function(req, resp) {
    resp.send("<hi>Prezado(a), bom dia!. " + req.params.nome + "</h1><h2>Responsável pelo cargo: " + req.params.cargo + "</h2>");
})

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
var path = require('path');
app.set('views', path.join(__dirname, '/view/'));

var consign = require('consign');
consign().include('controller/routes', ).into(app);

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8081, function() {
    console.log("Servidor funcionando na url http://localhost: 8081");
});