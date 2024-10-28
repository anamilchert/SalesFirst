import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CompanyRegistration() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [sector, setSector] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    const newCompany = { name, cnpj, sector, address };
    router.push('/contas');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Empresa</Text>
      <TextInput placeholder="Nome" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="CNPJ" style={styles.input} value={cnpj} onChangeText={setCnpj} />
      <TextInput placeholder="Setor" style={styles.input} value={sector} onChangeText={setSector} />
      <TextInput placeholder="Endereço" style={styles.input} value={address} onChangeText={setAddress} />
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});