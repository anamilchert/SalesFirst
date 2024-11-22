import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function DetalhesContaScreen({ route }) {
  const { contaId } = route.params;
  const [conta, setConta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContaDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/empresas/${contaId}`); 
        if (!response.ok) {
          throw new Error('Erro ao buscar os detalhes da conta');
        }
        const data = await response.json();
        setConta(data);
      } catch (error) {
        console.error('Erro ao buscar detalhes da conta:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContaDetails();
  }, [contaId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!conta) {
    return (
      <View style={styles.container}>
        <Text>Conta não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Conta</Text>
      <Text>ID: {conta._id}</Text>
      <Text>Nome: {conta.nome}</Text>
      <Text>CNPJ: {conta.cnpj}</Text>
      <Text>Setor: {conta.setor}</Text>
      <Text>Endereço: {conta.endereco}</Text>
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