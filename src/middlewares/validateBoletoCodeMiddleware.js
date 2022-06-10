import InvalidBarCodeError from "../exceptions/invalidBarCode.js";

import calcDVs from "../utils/calcDVs.js";
import splitBoletoString from "../utils/splitBoletoString.js";

// Middleware para fazer a validação do codigo de barras do boleto
const validateBoletoCodeMiddleware = (req, res, next) => {
  const { boletoCode } = req.params;
  
  // Transforma o codigo de barras em numero
  // Caso contenha letra retornara null
  const code = Number(boletoCode);
  const barCode = String(boletoCode);

  // Valida o se o code é null e levanta uma mensagem de erro 
  if (!code){
    throw new InvalidBarCodeError(400, "Bar code must be only numbers");
  }
  
  // Valida o tamanho do codigo de barras
  if (barCode.length !== 47){
    throw new InvalidBarCodeError(400, "Bar code must have 47 characters");
  }
  
  // Valida se o codigo da moeda é Real(9) ou outra moeda(0) 
  if (barCode[3] !== "9" && barCode[3] !== "0"){
    throw new InvalidBarCodeError(400, "Currency code must be 0 or 9");
  }

  // Separa as informações do codigo de barras
  const { DVs, barCodes } = splitBoletoString(barCode);

  // Calcula o DVs
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

  return next();
};


export default validateBoletoCodeMiddleware;
