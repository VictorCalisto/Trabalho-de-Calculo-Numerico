const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/HTML/calculadora', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'calculadora.html'));
});

app.get('/bisseccao', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'bisseccao.html'));
});

app.get('/newton', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'newton.html'));
});

app.get('/cordas', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'cordas.html'));
});

app.get('/secante', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'secante.html'));
});

// Definir porta do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
