import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Estilos from '../estilos/Estilos';

const produtos = [
  {
    id: '001',
    desc: ['Mouse', '25.00'],
  },
  {
    id: '002',
    desc: ['Teclado', '50.00'],
  },

  {
    id: '003',
    desc: ['Monitor', '430.00'],
  },
];

export default function () {
  return <View style={Estilos.container} >
    <FlatList style={Estilos.listaProdutos}
    data={produtos}
    keyExtractor={item=>item.id}
    renderItem={({item})=><View style={Estilos.item}><Text>Descrição:{item.desc[0]} - Valor: {item.desc[1]}</Text></View>}
    />
  </View>;
}
