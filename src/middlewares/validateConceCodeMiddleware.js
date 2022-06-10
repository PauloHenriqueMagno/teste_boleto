import InvalidBarCodeError from "../exceptions/invalidBarCode.js";

import calcDVs from "../utils/calcDVs.js";
import splitBoletoConceString from "../utils/splitBoletoConceString.js"

// Middleware para fazer a validação do codigo de barras do boleto
const validateConceCodeMiddleware = (req, res, next) => {
  const { conceCode } = req.params;
  
  // Transforma o codigo de barras em numero
  // Caso contenha letra retornara null
  const code = Number(conceCode);
  const barCode = String(conceCode);

  // Valida o se o code é null e levanta uma mensagem de erro 
  if (!code){
    throw new InvalidBarCodeError(400, "Bar code must be only numbers");
  }
  
  // Valida o tamanho do codigo de barras
  if (barCode.length != 48){
    throw new InvalidBarCodeError(400, "Bar code must have 48 characters");
  }

  // Separa as informações do codigo de barras
  const { DVs, barCodes } = splitBoletoConceString(barCode)

  // Calcula os DVs
  const resultDVs = calcDVs(barCodes);

  // Compara os DVs do codigo de barras com os DVs calculados 
  if (DVs[0] != resultDVs[0]){
    throw new InvalidBarCodeError(400, "Invalid first code validator");
  }
  if (DVs[1] != resultDVs[1]){
    throw new InvalidBarCodeError(400, "Invalid second code validator");
  }
  if (DVs[2] != resultDVs[2]){
    throw new InvalidBarCodeError(400, "Invalid third code validator");
  }
  if (DVs[3] != resultDVs[3]){
    throw new InvalidBarCodeError(400, "Invalid fourth code validator");
  }

  return next();
};

export default validateConceCodeMiddleware;
