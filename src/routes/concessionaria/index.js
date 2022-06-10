import { Router } from "express";
import getBoletoConceData from "../../controllers/boletoConcessionariaControllers/getBoletoConceData.js";
import validateConceCodeMiddleware from "../../middlewares/validateConceCodeMiddleware.js";

const conceRouter = Router();

conceRouter.get('/:conceCode', validateConceCodeMiddleware, getBoletoConceData);

export default conceRouter;