const express = require('express');
const app = express();
const path = require('path');


// configurar o Express.js para servir o arquivo "index.html" na raiz do aplicativo
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// iniciar o servidor HTTP na porta 3000
app.listen(process.env.PORT || 3000);
