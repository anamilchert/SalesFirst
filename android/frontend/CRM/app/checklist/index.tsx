import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChecklistScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checklist de Tarefas</Text>
      <Text>✅ Tarefa 1</Text>
      <Text>✅ Tarefa 2</Text>
      <Text>✅ Tarefa 3</Text>
      <Button
        title="Calendário de Reuniões"
        onPress={() => router.push('/calendario')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});
