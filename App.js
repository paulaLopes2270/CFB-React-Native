import React from 'react';
import {View, Text} from 'react-native';
import Caixas from './componentes/Caixas';
import Estilos from './estilos/Estilos';

export default function App1() {
  return (
    <View style={Estilos.container}>
      <Caixas />
      <Text style={Estilos.textoTitulo}>Youtube</Text>
      <Text style={Estilos.textoPadrao}> www.youtube.com</Text>
    </View>
  );
}
