import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  listaProdutos: {
    // flex:1,
    fontSize:10,
    
  },
  item:{
    flexDirection:'row',
    height:60,
    width:`100%`,
    backgroundColor:`#ef8afe`, 
    marginVertical:9,
    alignItems:'center',
    justifyContent:'center',
    
  },

  imgFundo:{
    flex:1,
    resizeMode:'cover',
    width:'100%'

  }
})