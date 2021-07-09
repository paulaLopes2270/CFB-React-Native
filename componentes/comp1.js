import React from 'react';
import {StyleSheet, Text} from 'react-native';


export default function (props) {
  let cor=props.cor;
  return (
    <Text style={(estilos.txt1, {color: cor})}>
      CFB Cursos - Curso de {props.curso}
    </Text>
  );
}

const estilos = StyleSheet.create({
  txt1: {
    // color: '#f00',
    fontSize: 20,
  },
});
