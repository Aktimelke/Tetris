const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('C:\\Users\\NIGERS\\Desktop\\tetris'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});