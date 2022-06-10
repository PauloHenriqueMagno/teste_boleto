import formatBarCode from "../../utils/formatBarCode.js"

const getBoletoData = (req, res) => {
  const { boletoCode } = req.params;
  
  // Identifica o codigo do boleto como string
  const barCode = String(boletoCode);

  // Retirar os 10 ultimos digitos do codigo de barras
  const amountString = barCode.slice(-10);

  // Formatar o valor para numero e mover o ponto em duas casas
  const amountFormated = Number(amountString) / 100;

  // Fixa o valor para duas casas após a virgula e transforma em string
  const amount = String(amountFormated.toFixed(2));


  // Data inicial
  const date = new Date("July 3 2000");

  // Adiciona os dias do fator vencimento
  date.setDate(date.getDay() + Number(barCode.slice(-14, -10)) - 1000 + 2);

  // Separa o dia, mês e ano em um array
  const expirationDateArray = date.toLocaleDateString("pt-br").split("/");

  // Inverte o array e junta o conteudo separando com "-"
  const expirationDate = expirationDateArray.reverse().join("-");

  return res.status(200).json({
    barCode: formatBarCode(barCode),
    amount: amount,
    expirationDate: expirationDate,
  });
};

export default getBoletoData;
