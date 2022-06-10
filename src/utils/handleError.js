// Trata os errors e envia como resposta
const handleError = (err, res) => {
  const { statusCode, message } = err;

  return res.status(statusCode).json(message);
};

export default handleError;