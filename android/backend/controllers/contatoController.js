const Contato = require('../models/contato');

exports.criarContato = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.save();
    res.status(201).send(contato);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.obterContatos = async (res) => {
  try {
    const contatos = await Contato.find();
    res.status(200).send(contatos);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.obterContatoPorId = async (req, res) => {
  try {
    const contato = await Contato.findById(req.params.id);
    if (!contato) {
      return res.status(404).send();
    }
    res.status(200).send(contato);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.atualizarContato = async (req, res) => {
  try {
    const contato = await Contato.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contato) {
      return res.status(404).send();
    }
    res.status(200).send(contato);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletarContato = async (req, res) => {
  try {
    const contato = await Contato.findByIdAndDelete(req.params.id);
    if (!contato) {
      return res.status(404).send();
    }
    res.status(200).send(contato);
  } catch (error) {
    res.status(500).send(error);
  }
};
