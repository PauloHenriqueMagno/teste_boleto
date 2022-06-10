import { Router } from "express";
import getBoletoData from "../../controllers/boletoBancarioControllers/getBoletoData.js";
import validateBoletoCodeMiddleware from "../../middlewares/validateBoletoCodeMiddleware.js";

const boletoRouter = Router();

boletoRouter.get('/:boletoCode', validateBoletoCodeMiddleware, getBoletoData)

export default boletoRouter;