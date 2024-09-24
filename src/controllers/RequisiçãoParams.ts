import { Request, Response } from "express";


// Requisição com req.params funciona como um objeto com base na url...
// Exemplo localhost:3000/teste/123/123

export const ReqParamsGet = (req: Request, res: Response) => {
    console.log(req.params);
    res.send(req.params)
}