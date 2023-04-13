const express = require('express');
const app = express();
const path = require('path');

app.use('/HTML',express.static(path.join(__dirname, 'HTML')));
app.use('/CSS',express.static(path.join(__dirname, 'CSS')));
app.use('/JS',express.static(path.join(__dirname, 'JS')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/HTML/calculadora.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'calculadora.html'));
});

app.get('/HTML/bisseccao.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'bisseccao.html'));
});

app.get('/HTML/newton.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'newton.html'));
});

app.get('/HTML/cordas.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'cordas.html'));
});

app.get('/HTML/secante.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'secante.html'));
});

app.get('/HTML/secante.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'secante.html'));
});

// Definir porta do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
