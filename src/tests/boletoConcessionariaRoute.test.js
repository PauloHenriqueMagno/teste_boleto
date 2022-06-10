import { describe, expect, it } from "@jest/globals";
import request from "supertest";

import app from '../app';

describe('Boleto Concessionaria Route Tests', () => {
  it("First Boleto Test", async () => {
    const response = await request(app).get('/boleto/concessionaria/826300000005582900971497820194861713823144210627');

    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
      "barCode": "82630000000582900971498201948617182314421062",
      "amount": "58.29"
    })
  });
  
});