import React from 'react';
import {View, Text, Image, Button, Alert, ImageBackground} from 'react-native'
import ListaPlana from './componentes/ListaPlana';
import Estilos from './estilos/Estilos';

const imgBack=`./assets/Capturar.png`
export default function App1() {
  let vexibir = true
  return (
    <View style={Estilos.container}>
      <ImageBackground
      source={require(imgBack)}
      style={Estilos.imgFundo}>
      <Text>Youtube</Text>
      <Text> www.youtube.com</Text>
      <ListaPlana/>
      </ImageBackground>
  </View>
  );
}