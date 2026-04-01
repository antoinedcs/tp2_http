const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Bienvenue ! Le serveur fonctionne ! ');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});