const Meeting = require('../models/reunioes');


const getMeetingsByDate = async (req, res) => {
  const { date } = req.query;

  try {
    const meetings = await Meeting.find({ date });
    res.status(200).json(meetings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar reuniões.' });
  }
};

const createMeeting = async (req, res) => {
  const { title, date, time } = req.body;

  try {
    const newMeeting = new Meeting({ title, date, time });
    await newMeeting.save();
    res.status(201).json(newMeeting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar reunião.' });
  }
};

module.exports = {
  getMeetingsByDate,
  createMeeting,
};