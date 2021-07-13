import React from 'react';
import {View, Text, Image, Button, Alert} from 'react-native';
import ListaPlana from './componentes/ListaPlana';
import Estilos from './estilos/Estilos';

export default function App1() {
  let vexibir = true
  return (
    <View style={Estilos.container}>
      <Text>Youtube</Text>
      <Text> www.youtube.com</Text>
      <ListaPlana/>
  </View>
  );
}