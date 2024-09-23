import express from 'express';
import { Request, Response } from "express"
const port: number = 3000;
const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
})

app.get('/consulta/',(req: Request,res: Response) => {
    // ( req ) Request --> Dados enviados pelo cliente
    let cpf = req.query['cpf'];
    
    // ( res ) Response --> Dados enviados para o cliente
    res.send("Retorno consula: CPF = " + cpf);
});


// lembrando de usar err?: pois o erro pode ou não vir
app.listen(port, function(err?: Error){
    if(err){
        console.log(err);
    }else{
        console.log(`Servidor ligado na porta ${port}`);
    }
});

