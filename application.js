const express = require('express');
const app = express();
const port = 4000;
const os = require('os');
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.send('Bienvenue ! Le serveur fonctionne ! ');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

// Gestionnaire d'erreurs global
process.on('uncaughtException', (err) => {
  console.error(`Une erreur non capturée s'est produite : ${err.message}`);
  process.exit(1); // 1 signifie une sortie avec une erreur
});

os.networkInterfaces()['ens18'][0].address

 console.log(`Serveur est en écoute sur      
                ${os.networkInterfaces()['ens18'][0].address}:${port}`);

//middleware 
app.use(bodyParser.json()); // décode le body d'une requête

app.post('/', (req, res) => {
  const donneesDuCorps = req.body;
  console.log(donneesDuCorps);
  res.send('Données reçues et traitées !');
});
