# Teste Boleto
API para pegar informações do codigo de barras.

<br>

## **Rotas**

Está API possui duas rotas:

**Boleto Bancario**:
```
/boleto/<codigo_do_boleto>
```

**Boleto Concessionaria**:
```
/boleto/concessionaria/<codigo_do_boleto>
```

<br>

## **Utilizando a aplicação**
Caso ainda não tenha NodeJs instalado, baixe através desse link: https://nodejs.org/pt-br/

Para iniciar o projeto é necessário instalar os pacotes usados na aplicação, para isso utilize o comando abaixo:

```
npm install
```

<br>

Após instalar os pacotes, inicie o projeto utilizando o comando abaixo:

```
npm start
```

<br>

Para rodar os testes da aplicação, utilize o comando abaixo:

```
npm test
```

<br>

## **Variaveis de ambiente**

Caso queria rodar a aplicação em outra porta, crie o arquivo .env e insira a porta em que gostaria rodar a API, como no exemplo abaixo:
```
// Arquivo .env

PORT=3000
```
