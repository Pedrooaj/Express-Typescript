import express from 'express';
const port: number = 3000;
import { Request, Response } from 'express';
const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

