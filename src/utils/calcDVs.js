const calcDVs = (barCode, type = "byTen") => {
  // Multiplicadores
  const multipliers = {
    "byTen": [2,1],
    "byEleven": [2,3,4,5,6,7,8,9],
  }

  // Calcular o resto do valor dividido pelo divisor
  const getRest = (value, divisor) => {
    while(value > 0){
      value -= divisor
    };
    return -value
  };

  // Multiplica cada numero pelo seu devido multiplicador
  // em ordem da direita para esquerda e
  // retorna uma lista dos DVs em ordem
  const getDAC = (list, multiplier, divisorValue) => list.map((code) => {
    let multiplierIndex = 0
    let total = 0;

    // Faz a multiplicação começando da ultima posição
    for(let index = code.length - 1; index >= 0; index--){
      let values = String(Number(code[index]) * multiplier[multiplierIndex]).split("");

      // Verifica se o valor possui duas casas
      // Caso sim soma os dois numeros
      // Caso não adiciona o valor ao valor total
      total = total + (values.length == 2 ?
        Number(values[0]) + Number(values[1]) : Number(values[0])
      )
      
      // Se o index do multiplicador for o ultimo retorna ao primeiro
      // Se não for o ultimo avança para o proximo multiplicador
      multiplierIndex = multiplierIndex !== (multiplier.length - 1) ? multiplierIndex + 1 : 0; 
    };
    
    // Retorna a diferença do resto e o divisor
    return getRest(total, divisorValue)
  });

  // Condicional para o valor type
  switch(type){
    // retornar o calculo do modulo 10 para o valor "byTen"
    case "byTen":
      return getDAC(barCode, multipliers["byTen"], 10);
      
    // retornar o calculo do modulo 11 para o valor "byEleven"
    case "byEleven":
      return getDAC(barCode, multipliers["byEleven"], 11);

    default:
      return [] 
  }
};

export default calcDVs;
