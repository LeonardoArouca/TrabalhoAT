import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function HomePage({ navigation }) {
  const goToLoja = () => {
    navigation.navigate('Loja');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à nossa Loja</Text>
      <Text style={styles.description}>Encontre os melhores preços aqui.</Text>
      <TouchableOpacity style={styles.button} onPress={goToLoja}>
        <Text style={styles.buttonText}>Entrar na Loja</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue', // Cor de fundo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomePage;