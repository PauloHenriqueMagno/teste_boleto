const formatBarCode = (barCode) => {
  let codeBar = ''
  
  // AAABCCCCCXDDDDDDDDDDYEEEEEEEEEEZKUUUUVVVVVVVVVV
  // AAABKUUUUVVVVVVVVVVCCCCDDDDDDDDDDEEEEEEEEEE

  // AAAB - 
  codeBar += barCode.slice(0, 4);
  
  // K
  codeBar += barCode.slice(-15, -14);
  
  // UUUU VVVVVVVVVV
  codeBar += barCode.slice(-14);
  
  // C CCCC
  codeBar += barCode.slice(4, 9);

  // DDDDD DDDDD
  codeBar += barCode.slice(10, 20);
  
  // EEEEE EEEEE
  codeBar += barCode.slice(21, 31);

  return codeBar;
}

export default formatBarCode;