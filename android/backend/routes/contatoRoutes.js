const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contatoController');

router.post('/', contatoController.criarContato);
router.get('/', contatoController.obterContatos);
router.get('/:id', contatoController.obterContatoPorId);
router.put('/:id', contatoController.atualizarContato);
router.delete('/:id', contatoController.deletarContato);

module.exports = router;