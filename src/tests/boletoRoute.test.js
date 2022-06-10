import { describe, expect, it } from "@jest/globals";
import request from "supertest";

import app from "../app";

// Grupo de testes
describe("Boleto Route Tests", () => {

  // Teste
  it("200 OK | Boleto Test", async () => {
    // requisição da api através do app utilizando request do supertest
    const response = await request(app).get("/boleto/23793381286008380790385000063306190150000002390");

    // Compara o valor recebido em response como valor esperado
    expect(response.statusCode).toBe(200);

    // Compara estritamente o valor recebido com o valor esperado
    expect(response.body).toStrictEqual({
      "barCode": "23791901500000023903381260083807908500006330",
      "amount": "23.90",
      "expirationDate": "2022-06-13"
    })
  });

  it("200 OK | Boleto Test", async () => {
    const response = await request(app).get("/boleto/23793381286008374216769000063300190110000005000");

    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
      "barCode": "23791901100000050003381260083742166900006330",
      "amount": "50.00",
      "expirationDate": "2022-06-09"
    })
  });

  it("200 OK | Boleto Test", async () => {
    const response = await request(app).get("/boleto/21290001192110001210904475617405975870000002000");

    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
      "barCode": "21299758700000020000001121100012100447561740",
      "amount": "20.00",
      "expirationDate": "2018-07-16"
    })
  });

  it("400 BAD REQUEST | Boleto Error Test", async () => {
    const response = await request(app).get("/boleto/21290002192110001210901475617405975870000002000");
    
    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual({
      "error": "Invalid bar code",
      "message": "Invalid first code validator"
    })
  });
});