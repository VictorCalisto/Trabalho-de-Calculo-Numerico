const express = require('express');
const path = require('path');
const app = express();

// configurar o Express.js para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// configurar o Express.js para servir o arquivo "index.html" na raiz do aplicativo
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// iniciar o servidor HTTP na porta 3000
app.listen(process.env.PORT || 3000);
