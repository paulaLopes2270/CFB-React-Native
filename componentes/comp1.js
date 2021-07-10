import React from 'react';
import {Text} from 'react-native';
import Estilos from '../estilos/Estilos';

export default function (props) {
  return (
    <Text style={Estilos.textoCursos}>CFB Cursos - Curso de {props.curso}</Text>
  );
}
