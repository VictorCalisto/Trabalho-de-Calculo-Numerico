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

app.get('/:pagina.html', (req, res) => {
  const pagina = req.params.pagina;
  res.sendFile(path.join(__dirname, 'HTML', `${pagina}.html`));
});

// Definir porta do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
