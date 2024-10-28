import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const empresas = [
  { id: '1', nome: 'Empresa A' },
  { id: '2', nome: 'Empresa B' },
  { id: '3', nome: 'Empresa C' },
];

export default function ContasScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contas</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push('/cadastroContas')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
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
  addButton: {
    backgroundColor: '#007BFF',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
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