const Meeting = require('../models/reunioes');


exports.getMeetingsByDate = async (req, res) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ message: 'A data é obrigatória para buscar reuniões.' });
  }

  try {
    const meetings = await Meeting.find({ date });
    console.log('Reuniões encontradas:', meetings);
    if (meetings.length === 0) {
      return res.status(404).json({ message: 'Nenhuma reunião encontrada para a data fornecida.' });
    }
    res.status(200).json(meetings);
  } catch (error) {
    console.error('Erro ao buscar reuniões:', error);
    res.status(500).json({ message: 'Erro interno do servidor ao buscar reuniões.' });
  }
};


exports.createMeeting = async (req, res) => {
  const { title, date, time } = req.body;


  if (!title || !date || !time) {
    return res.status(400).json({ message: 'Título, data e horário são obrigatórios.' });
  }

  try {
    const newMeeting = new Meeting({ title, date, time });
    await newMeeting.save();
    res.status(201).json({
      message: 'Reunião criada com sucesso.',
      meeting: newMeeting,
    });
  } catch (error) {
    console.error('Erro ao criar reunião:', error);
    res.status(500).json({ message: 'Erro interno do servidor ao criar reunião.' });
  }
};