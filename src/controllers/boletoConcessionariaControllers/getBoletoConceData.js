import formatBarCode from "../../utils/formatBarCode.js"
import splitBoletoConceString from "../../utils/splitBoletoConceString.js"

const getBoletoConceData = (req, res) => {
  const { conceCode } = req.params;
  
  // Identifica o codigo do boleto como string
  const barCode = String(conceCode);

  // Retirar a primeira e segunda parte do codigo do boleto
  const firstPart = barCode.slice(0, 12)
  const secondPart = barCode.slice(12, 24);

  const value = parseFloat(firstPart.slice(4, 11) + secondPart.slice(0, 2));

  const cents = parseFloat(secondPart.slice(2, 4)) / 100;

  // Fixa o valor para duas casas após a virgula e transforma em string
  const amount = String((value + cents).toFixed(2));

  // Recebe as partes do codigo de barras sem os DVs em um array e junta tudo em uma string
  const formattedBarCode = splitBoletoConceString(barCode)["barCodes"].join("")

  return res.status(200).json({
    barCode: formattedBarCode,
    amount: amount
  });
};

export default getBoletoConceData;
