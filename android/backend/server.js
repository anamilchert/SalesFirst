const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const dbURI = '';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado!'))
    .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

app.get('/', (req, res) => {
    res.send('API Ssles First'); 
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); 
});

