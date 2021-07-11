import React from 'react';
import {View} from 'react-native';

export default function (props) {
  return (
    <View
      style={{
        width:'100%',
        height:300,
        flexDirection:'column',
        justifyContent:'center',
      }}>
      {props.exibir ? (
        <View style={{flex: 1}}>
          <View style={{ height: 50, backgroundColor: '#00f', alignSelf:'stretch'}}></View>
          <View
            style={{height:50, backgroundColor: '#d95454', alignSelf:'stretch'}}></View>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View
            style={{width: 50, height: 50, backgroundColor: '#c1d954'}}></View>
        </View>
      )}
    </View>
  );
}
