import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CadastroContasScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [setor, setSetor] = useState('');
  const [endereco, setEndereco] = useState('');
  const [errors, setErrors] = useState({});
  const handleCadastro = async () => {
    const newErrors = {};
  
    // Validação dos campos obrigatórios
    if (!nome) newErrors.nome = 'É necessário preencher este campo.';
    if (!cnpj) newErrors.cnpj = 'É necessário preencher este campo.';
    if (!setor) newErrors.setor = 'É necessário preencher este campo.';
    if (!endereco) newErrors.endereco = 'É necessário preencher este campo.';
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) return;
  
    const dadosCadastro = { nome, cnpj, setor, endereco };
  
    try {
      console.log('Enviando dados:', dadosCadastro);
  
      const response = await fetch('http://localhost:5000/api/empresas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosCadastro),
      });
  
      console.log('Status da resposta:', response.status);
  
      const data = await response.json();
      console.log('Dados retornados:', data);
  
      if (response.ok) {
        console.log('Cadastro realizado com sucesso!');
        router.push(`/contas`);
      } else {
        console.error('Erro retornado pelo servidor:', data);
        alert(`Erro: ${data.message || 'Não foi possível cadastrar a conta.'}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao se conectar com o servidor. Tente novamente.');
    }
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Conta</Text>


      {errors.nome && <Text style={styles.error}>{errors.nome}</Text>}
      <TextInput
        style={[styles.input, errors.nome && styles.inputError]}
        placeholder="Nome da Empresa"
        value={nome}
        onChangeText={(text) => {
          setNome(text);
          if (errors.nome) setErrors((prev) => ({ ...prev, nome: '' }));
        }}
      />


      {errors.cnpj && <Text style={styles.error}>{errors.cnpj}</Text>}
      <TextInput
        style={[styles.input, errors.cnpj && styles.inputError]}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={(text) => {
          setCnpj(text);
          if (errors.cnpj) setErrors((prev) => ({ ...prev, cnpj: '' })); 
        }}
      />

      {errors.setor && <Text style={styles.error}>{errors.setor}</Text>}
      <TextInput
        style={[styles.input, errors.setor && styles.inputError]}
        placeholder="Setor"
        value={setor}
        onChangeText={(text) => {
          setSetor(text);
          if (errors.setor) setErrors((prev) => ({ ...prev, setor: '' }));
        }}
      />

      {errors.endereco && <Text style={styles.error}>{errors.endereco}</Text>}
      <TextInput
        style={[styles.input, errors.endereco && styles.inputError]}
        placeholder="Endereço"
        value={endereco}
        onChangeText={(text) => {
          setEndereco(text);
          if (errors.endereco) setErrors((prev) => ({ ...prev, endereco: '' }));
        }}
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
    borderRadius: 4,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 4,
  },
});