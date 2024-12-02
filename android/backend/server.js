const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarioRoutes');
const empresaRoutes = require('./routes/empresaRoutes');
const contatoRoutes = require('./routes/contatoRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');
const reunioesRoutes = require('./routes/reunioesRoutes')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const dbURI = 'mongodb://localhost:27017/SalesFirst';

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api/contatos', contatoRoutes);
app.use('/api/tarefas', tarefaRoutes);
app.use('/api/reunioes', reunioesRoutes);


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado!'))
    .catch(error => console.error('Erro ao conectar ao MongoDB:', error));

app.get('/', (res) => {
    res.send('API Sales First'); 
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); 
});

