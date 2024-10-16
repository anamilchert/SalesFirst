const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.post('/', tarefaController.criarTarefa);
router.get('/', tarefaController.obterTarefas);
router.get('/:id', tarefaController.obterTarefaPorId);
router.put('/:id', tarefaController.atualizarTarefa);
router.delete('/:id', tarefaController.deletarTarefa);

module.exports = router;