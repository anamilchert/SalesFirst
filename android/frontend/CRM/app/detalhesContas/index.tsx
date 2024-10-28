import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalhesContaScreen({ route }) {
  const { contaId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Conta</Text>
      <Text>ID: {contaId}</Text>
      {/* Outras informações da conta podem ser exibidas aqui */}
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
});