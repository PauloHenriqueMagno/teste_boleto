import dotenv from "dotenv";

import app from "./app.js"

dotenv.config()

// Port que o servidor ira rodar por padrão está como 8080
// Para alterar é necessario colocar a variavel de ambiente PORT
// no arquivo .env como ngo exemplo do arquivo .env.example
const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
})