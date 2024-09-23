import express from 'express';

const App = () => {
    const app: express.Application = express();


    app.get('/', (req, res) => {
        res.send('Hello World');
    })

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}

export default App;