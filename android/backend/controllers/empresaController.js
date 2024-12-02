const Empresa = require('../models/empresa');
const Tarefa = require('../models/tarefa');


exports.criarEmpresa = async (req, res) => {
  try {

    const empresa = new Empresa(req.body);
    await empresa.save();


    const tarefasAutomáticas = [
      {
        descricao: 'Cadastrar um contato da conta',
        usuario: req.body.usuarioId, 
        empresa: empresa._id,
        status: 'PENDENTE', 
      },
      {
        descricao: 'Adicionar o contato no LinkedIn',
        usuario: req.body.usuarioId, 
        empresa: empresa._id,
        status: 'PENDENTE',
      },
      {
        descricao: 'Tentar contato via e-mail',
        usuario: req.body.usuarioId,
        empresa: empresa._id,
        status: 'PENDENTE',
      },
      {
        descricao: 'Tentar marcar reunião',
        usuario: req.body.usuarioId,
        empresa: empresa._id,
        status: 'PENDENTE',
      },
    ];


    await Tarefa.insertMany(tarefasAutomáticas);


    res.status(201).send(empresa);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.obterEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.find();
    res.status(200).send(empresas);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.obterEmpresaPorId = async (req, res) => {
  try {
    const empresa = await Empresa.findById(req.params.id);
    if (!empresa) {
      return res.status(404).send();
    }
    res.status(200).send(empresa);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.atualizarEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!empresa) {
      return res.status(404).send();
    }
    res.status(200).send(empresa);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletarEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findByIdAndDelete(req.params.id);
    if (!empresa) {
      return res.status(404).send();
    }
    res.status(200).send(empresa);
  } catch (error) {
    res.status(500).send(error);
  }
};