import express from "express";
import { ReqbodyGet, ReqbodyPost } from "./controllers/RequisiçãoBody";
import { ReqParamsGet } from "./controllers/RequisiçãoParams";
import { ReqQueryPost } from "./controllers/RequisiçãoQuery";

const routes = express.Router();

// Controller de Requisição req.body com Post e Get...
routes.get('/', ReqbodyGet);
routes.post('/', ReqbodyPost);

// Controller de Requisição req.parms com Get...
routes.get("/teste/:id?/:parametros?", ReqParamsGet)

// Controller de requisição req.query com Get...
routes.get('/consulta/', ReqQueryPost);

export default routes;