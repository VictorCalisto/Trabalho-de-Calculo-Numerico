const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'HTML')));
app.use(express.static(path.join(__dirname, 'CSS')));
app.use(express.static(path.join(__dirname, 'JS')));

app.get('/', (req, res) => {
  res.sendFile('index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'index.html'));
});

app.get('/calculadora', (req, res) => {
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
app.listen( process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
