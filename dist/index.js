"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({
    extended: true
}));
// Exemplo de requisição com query
// req.query Ex: localhost:3000/teste/?nome=Pedro&Idade=18
app.get('/consulta/', (req, res) => {
    // ( req ) Request --> Dados enviados pelo cliente
    let cpf = req.query['cpf'];
    // ( res ) Response --> Dados enviados para o cliente
    res.send("Retorno consula: CPF = " + cpf);
});
// Requisição com params funciona como um objeto com base na url...
// Exemplo localhost/teste/123/123
app.get("/teste/:id?/:parametros?", (req, res) => {
    console.log(req.params);
    res.send(req.params);
});
app.get('/', (req, res) => {
    res.send("Express com Typescript");
});
// Exemplo Post com Get
app.get('/form', (req, res) => {
    res.send(`
    <form action="/form" method="POST">
    Nome do cliente: <input type="text" name="nome" />
    <button>Enviar</button>
    </form>    
    `);
});
app.post('/form', (req, res) => {
    console.log(req.body);
    res.send(`Recebi seu valor: ${req.body.nome}`);
});
// lembrando de usar err?: pois o erro pode ou não vir
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Servidor ligado na porta ${port}`);
    }
});
