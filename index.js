const express = require('express');
const app = express();


// configurar o Express.js para servir o arquivo "index.html" na raiz do aplicativo
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// iniciar o servidor HTTP na porta 3000
app.listen(process.env.PORT || 3000);
