import express from 'express';
import routes from "./routes"

const app: express.Application = express();

app.use(express.urlencoded({extended: true}), routes)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

