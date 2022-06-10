const splitBoletoString = (barCode, type) => {
  const barCodes = [
    barCode.slice(0, 9),
    barCode.slice(10, 20),
    barCode.slice(21, 31)
  ]
  const DVs = [
    barCode.slice(9, 10),
    barCode.slice(20, 21),
    barCode.slice(31, 32)
  ]

  return { "DVs": DVs, "barCodes": barCodes };
};

export default splitBoletoString;
