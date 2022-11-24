
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions
} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
const {height, width} = Dimensions.get('window');

const WalletScreens = () => {

  return (
    <View
    style={styles.container}
    >
      <Image
      style={styles.coming}
      source={require("../../assets/images/comingsoon.png")}
      />      
    </View>
  )
}

export default WalletScreens

const styles = StyleSheet.create({
  coming:{
    height:height*0.45,
    resizeMode:"contain"
  },
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})