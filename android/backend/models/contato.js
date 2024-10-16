const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: false,
  },
  cargo: {
    type: String,
    required: false,
  },
  empresa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true,
  },
});

module.exports = mongoose.model('Contato', ContatoSchema);

