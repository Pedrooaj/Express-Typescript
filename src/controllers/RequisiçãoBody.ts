import { Response, Request } from "express"

// Exemplo Post com Get com req.body
const ReqbodyGet = (req: Request, res: Response) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome" />
    <button>Enviar</button>
    </form>    
    `)
}

const ReqbodyPost = (req: Request, res: Response) => {
    console.log(req.body);
    res.send(`Recebi seu valor: ${req.body.nome}`);
}

export { ReqbodyGet, ReqbodyPost };