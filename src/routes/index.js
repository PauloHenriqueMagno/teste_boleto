import { Router } from "express";

import handleError from "../utils/handleError.js";

import boletoRouter from "./boleto/index.js";
import conceRouter from "./concessionaria/index.js";

const router = Router();

// Adiciona as rotas para o router 
router.use('/boleto/concessionaria/', conceRouter);
router.use('/boleto', boletoRouter);

// Recebe a mensagem de Error
router.use((err, _, res, __) => {
  handleError(err, res);
});

export default router;
