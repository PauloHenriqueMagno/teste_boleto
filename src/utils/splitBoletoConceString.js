const splitBoletoConceString = (barCode) => {

  // Separa as 4 partes sem o DVs
  const barCodes = [
    barCode.slice(0, 11),
    barCode.slice(12, 23),
    barCode.slice(24, 35),
    barCode.slice(36, 47)
  ]

  const DVs = [
    barCode.slice(11, 12),
    barCode.slice(23, 24),
    barCode.slice(35, 36),
    barCode.slice(47, 48)
  ]

  return { "DVs": DVs, "barCodes": barCodes };
};

export default splitBoletoConceString;
