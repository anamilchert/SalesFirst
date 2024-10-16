const mongoose = require('mongoose');

const EmpresaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  setor: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
  },
  contatos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contato',
  }],
});

module.exports = mongoose.model('Empresa', EmpresaSchema);
