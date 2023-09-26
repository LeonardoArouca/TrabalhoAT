import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import infoVoos from './InfoVoo'; // Importe as informações de voo do arquivo InfoVoo.js

function Voo({ evento }) {
  // Função para obter informações de voo com base no evento selecionado
  const getInformacoesVoo = () => {
    return infoVoos.find((voo) => voo.eventoId === evento.id);
  };

  const informacoesVoo = getInformacoesVoo();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações de Voo</Text>
      <Text style={styles.info}>
        Aeroporto de Partida: {informacoesVoo.aeroportoPartida}
      </Text>
      <Text style={styles.info}>
        Aeroporto de Chegada: {informacoesVoo.aeroportoChegada}
      </Text>
      <Text style={styles.info}>Data do Voo: {informacoesVoo.dataVoo}</Text>
      <Text style={styles.info}>
        Horário de Partida: {informacoesVoo.horarioPartida}
      </Text>
      <Text style={styles.info}>
        Horário de Chegada: {informacoesVoo.horarioChegada}
      </Text>
      <Text style={styles.info}>
        Preço do Voo: R$ {informacoesVoo.precoVoo.toFixed(2)}
      </Text>
    </View>
  );
}

function Detalhes({ evento }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: evento.imagem }} style={styles.imagemEvento} />
      <Text style={styles.title}>Detalhes do Evento</Text>
      <Text style={styles.eventNome}>{evento.nome}</Text>
      <Text style={styles.description}>Descrição: {evento.descricao}</Text>
      <Text style={styles.info}>Local: {evento.local}</Text>
      <Text style={styles.info}>Data: {evento.data}</Text>
      <Text style={styles.info}>Preço: R$ {evento.preco}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function DetalhesDoEvento({ route }) {
  const { evento } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Detalhes">
        {() => <Detalhes evento={evento} />}
      </Tab.Screen>
      <Tab.Screen name="Voo">{() => <Voo evento={evento} />}</Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  eventNome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  imagemEvento: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
});

export default DetalhesDoEvento;
