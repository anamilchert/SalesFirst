import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChecklistScreen() {
  const router = useRouter();

  const [tasks, setTasks] = useState([
    { id: '1', text: 'Reunião com o cliente', completed: false },
    { id: '2', text: 'Enviar proposta', completed: false },
    { id: '3', text: 'Revisar documento de requisitos', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checklist de Tarefas</Text>
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTask(item.id)}>
            <View style={styles.taskContainer}>
              <Text style={[styles.taskText, item.completed && styles.completedText]}>
                {item.completed ? '✅ ' : '⬜ '} {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

    <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              title="Acessar Calendário de Reuniões"
              onPress={() => router.push('/calendario')}
            />
            <View style={{ height: 16 }} /> 
            <Button
              title="Acessar Contas"
              onPress={() => router.push('/contas')}
            />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  buttonContainer: {
    marginTop: 16,
  },
});