const mongoose = require('mongoose');
const TaskStatus = require('../utils/taskStatus'); 

const TarefaSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  empresa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(TaskStatus),
    default: TaskStatus.PENDENTE,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model('Tarefa', TarefaSchema);
