import React from 'react';
import {View} from 'react-native';

export default function (props) {
  return (
    <View style={{width: '100%', flexDirection:'row'}}>
      <View style={{width: 50, height: 50, backgroundColor: '#00f'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: '#d95454'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: '#c1d954'}}></View>
    </View>
  );
}
