import express from 'express';
import { Request, Response } from 'express';


const app: express.Application = express();




app.use(
    express.urlencoded({
        extended: true
    })
)

// Exemplo de requisição com query
// req.query Ex: localhost:3000/teste/?nome=Pedro&Idade=18

app.get('/consulta/',(req: Request,res: Response) => {
    // ( req ) Request --> Dados enviados pelo cliente
    let cpf = req.query['cpf'];
    
    // ( res ) Response --> Dados enviados para o cliente
    res.send("Retorno consula: CPF = " + cpf);
});



// Requisição com params funciona como um objeto com base na url...
// Exemplo localhost/teste/123/123

app.get("/teste/:id?/:parametros?", (req: Request, res: Response) => {
    console.log(req.params);
    res.send(req.params)
})


// Exemplo Post com Get

app.get('/form', (req: Request, res: Response) => {
    res.send(`
    <form action="/form" method="POST">
    Nome do cliente: <input type="text" name="nome" />
    <button>Enviar</button>
    </form>    
    `)
});

app.post('/form', (req: Request, res:Response) => {
    console.log(req.body);
    res.send(`Recebi seu valor: ${req.body.nome}`);
    
})




app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

