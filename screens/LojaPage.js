import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const eventos = [
  {
    id: 1,
    local: 'Copacabana',
    descricao: 'Música eletrônica e open bar!',
    nome: 'Bahamas Festival',
    preco: 'R$90,00',
    data: '10/09/2023',
    imagem: 'https://diariodorio.com/wp-content/uploads/2022/05/unnamed-1-1.png',
  },
  {
    id: 2,
    nome: 'Panelinha',
    local: 'Barra',
    preco: 'R$90,00',
    descricao: 'Samba e Pagode open bar a partir de 18:30',
    data: '15/09/2023',
    imagem: 'https://s2-oglobo.glbimg.com/-jf7CHzzEPD_uaXwIA6mXj_0sUw=/0x0:1125x827/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/J/B/DzMGmRQ2ajbhfc0j5sOA/3.glbimg.com-v1-auth-0ae9f161c1ff459593599b7ffa1a1292-images-escenic-2021-12-2-10-1638451204128.jpeg',
  },
  {
    id: 3,
    local: 'Bahia',
    descricao: 'Roda cultural de rima',
    preco: 'R$90,00',
    nome: 'Aldeia',
    data: '10/09/2023',
    imagem:'https://agenciauva.files.wordpress.com/2013/11/ok.jpg',
  },
  {
    id: 4,
    local: 'Rio de Janeiro',
    descricao: 'Música a noite toda, até as 5:00 da manhã',
    preco: 'R$90,00',
    nome: 'Atlas Festival',
    data: '19/09/2023',
    imagem:'https://s2.glbimg.com/1tPdBwywljGKl24KGeYu7H6RGu0=/top/e.glbimg.com/og/ed/f/original/2021/11/25/festivais10.png',
  
  },
  {
    id: 5,
    local: 'Maracanã',
    descricao: 'Jogo do Flamengo',
    preco: 'R$90,00',
    nome: 'Flamengo Maracanã',
    data: '04/09/2023',
    imagem:'https://mercadodofutebol.com/wp-content/uploads/2021/05/51188163958_54d36c02d8_c.jpg',
  },
];

function LojaPage({ navigation }) {
  const navigateToDetalhes = (evento) => {
    navigation.navigate('DetalhesDoEvento', { evento });
  };

  const renderEvento = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetalhes(item)} style={styles.evento}>
      <Text style={styles.eventoNome}>{item.nome}</Text>
      <Text>Data: {item.data}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos Disponíveis</Text>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderEvento}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'lightgreen', // Cor de fundo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  evento: {
    backgroundColor: 'white',
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventoNome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
});

export default LojaPage;
