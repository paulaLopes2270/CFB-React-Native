import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Caixas from './componentes/Caixas';
import Estilos from './estilos/Estilos';

function dobro(n){
  return n*2
}



export default function App1() {
  let vexibir = true
  return (
    <View style={Estilos.container}>
      <Text>{dobro(2)}</Text>
      <Image
      source={{uri:'http://cfbcursos.com.br/logoCanal.png'}}
      style={Estilos.logo}/>
      <Caixas exibir={vexibir} />
      <Text style={Estilos.textoTitulo}>Youtube</Text>
      <Text style={Estilos.textoPadrao}> www.youtube.com</Text>
      {vexibir?<Text>Curso de React Native</Text>:<Text>- - -</Text>}
      {vexibir && <Text>Curso de R</Text>}
    </View>
  );
}