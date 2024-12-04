import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarioScreen() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingsByDate, setMeetingsByDate] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchMeetings = async (date) => {
    try {
      const response = await fetch(`http://localhost:5000/api/reunioes?date=${date}`);
      if (response.ok) {
        const data = await response.json();
        setMeetingsByDate((prev) => ({ ...prev, [date]: data }));
      } else {
        throw new Error('Erro ao buscar reuniões');
      }
    } catch (error) {
      console.error('Erro ao buscar reuniões:', error);
      Alert.alert('Erro', 'Não foi possível carregar as reuniões.');
    }
  };

  const handleDayPress = (day) => {
    const selected = day.dateString;
    setSelectedDate(selected);

    if (!meetingsByDate[selected]) {
      fetchMeetings(selected);
    }
  };

  const handleAddMeeting = async () => {
    if (!meetingTitle || !meetingTime) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    const newMeeting = { title: meetingTitle, date: selectedDate, time: meetingTime };

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/reunioes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMeeting),
      });

      if (response.ok) {
        const savedMeeting = await response.json();

        setMeetingsByDate((prev) => ({
          ...prev,
          [selectedDate]: [...(prev[selectedDate] || []), savedMeeting],
        }));

        setMeetingTitle('');
        setMeetingTime('');
        Alert.alert('Sucesso', 'Reunião marcada com sucesso.');
      } else {
        throw new Error('Erro ao salvar reunião');
      }
    } catch (error) {
      console.error('Erro ao salvar reunião:', error);
      Alert.alert('Erro', 'Não foi possível salvar a reunião.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={'2024-12-02'}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
        onDayPress={handleDayPress}
        monthFormat={'yyyy MM'}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        showWeekNumbers={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
      />

      {selectedDate && (
        <View style={styles.detailsContainer}>
          <Text style={styles.selectedDateText}>
            Data selecionada: {selectedDate}
          </Text>
          <Text style={styles.meetingsTitle}>Reuniões marcadas:</Text>
          <FlatList
            data={meetingsByDate[selectedDate] || []}
            keyExtractor={(item, index) => `${item.title}-${index}`}
            renderItem={({ item }) => (
              <Text style={styles.meetingItem}>
                {item.time} - {item.title}
              </Text>
            )}
          />

          <Text style={styles.addMeetingTitle}>Cadastrar reunião:</Text>
          <TextInput
            style={styles.input}
            placeholder="Título da reunião"
            value={meetingTitle}
            onChangeText={setMeetingTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Horário (ex: 14:00)"
            value={meetingTime}
            onChangeText={setMeetingTime}
          />
          <Button
            title={loading ? 'Salvando...' : 'Adicionar reunião'}
            onPress={handleAddMeeting}
            disabled={loading}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  detailsContainer: {
    marginTop: 20,
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  meetingsTitle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  meetingItem: {
    fontSize: 14,
    color: '#333',
  },
  addMeetingTitle: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});