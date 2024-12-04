import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CadastroContasScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [setor, setSetor] = useState('');
  const [endereco, setEndereco] = useState('');


  const handleCadastro = async () => {
    try {

      const response = await fetch('http://localhost:5000/api/empresas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          cnpj,
          setor,
          endereco,
        }),
      });


      const data = await response.json();
      if (response.ok) {
        console.log("Cadastro realizado com sucesso!");

        router.push(`/detalhesContas/index/${data._id}`);
      } else {
        console.error('Erro ao cadastrar a conta:', data);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Empresa"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
      />
      <TextInput
        style={styles.input}
        placeholder="Setor"
        value={setor}
        onChangeText={setSetor}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      <Button title="Cadastrar" onPress={handleCadastro} />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});