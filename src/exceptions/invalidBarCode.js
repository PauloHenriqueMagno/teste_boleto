// Classe de Error para mensagem de error de codigo de barras invalido
class InvalidBarCodeError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = {
      "error": "Invalid bar code",
      "message": message
    }
  }
}

export default InvalidBarCodeError