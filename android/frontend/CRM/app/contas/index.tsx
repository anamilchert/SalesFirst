import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const empresas = [
  { id: '1', nome: 'Empresa A' },
  { id: '2', nome: 'Empresa B' },
  { id: '3', nome: 'Empresa C' },
];

export default function ContasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contas</Text>
      <FlatList
        data={empresas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nome}</Text>
          </View>
        )}
      />
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
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});