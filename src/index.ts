import express from 'express';

const app: express.Application = express();



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})