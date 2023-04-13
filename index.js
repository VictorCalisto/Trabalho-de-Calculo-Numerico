const express = require('express');
const app = express();
const path = require('path');

// Definir caminhos para arquivos estáticos
app.use(express.static(path.join(__dirname, 'HTML')));
app.use(express.static(path.join(__dirname, 'CSS')));
app.use(express.static(path.join(__dirname, 'JS')));

// Definir rota para o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Definir porta do servidor
app.listen( process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
