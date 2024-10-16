const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

router.post('/', empresaController.criarEmpresa);
router.get('/', empresaController.obterEmpresas);
router.get('/:id', empresaController.obterEmpresaPorId);
router.put('/:id', empresaController.atualizarEmpresa);
router.delete('/:id', empresaController.deletarEmpresa);

module.exports = router;