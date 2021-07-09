import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import C1 from './componentes/comp1';

export default function App1() {
  return (
    <View style={estilos.container}>
      <C1 curso="Rect Native" cor="#ff0" />
      <C1 curso="c++" cor="#f0f" />
      <C1 curso="Javascript" cor="#0ff" />
      <C1 curso="Rect Native" cor="#000" />
      <Text style={estilos.txt2}>Youtube</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt2: {
    color: '#f500d4',
    fontSize: 35,
  },
});
