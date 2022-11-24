import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native'
import React from 'react'
import SimpleGradientProgressbarView from "react-native-simple-gradient-progressbar-view";
import Colors from './Colors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const { height, width } = Dimensions.get('window');
const Progressbar = (props) => {
  //  const  ok=useSelector((state)=>state?.auth?.data)
  const ok = useSelector(state => state?.auth?.progress)
  const percent = useSelector(state => state?.auth?.percent)
  console.log(ok)

  console.log("mydata", ok)
  // const screen1=ok?.firstName!==null?0.2:null;
  // const screen2=ok?.email!==null?0.4:null;
  // const screen3=ok?.kiffs!==null?0.6:null;
  // const screen4=ok?.needSupport!==null?0.8:null;
  // const screen5=ok?.identityCard!==null?1:null;

  return (
    <View>
      <View style={styles.container}>

        <SimpleGradientProgressbarView
          style={styles.box}
          toColor="#FFBC15"
          fromColor="#001D4F"
          progress={ok}
          maskedCorners={[1, 1, 1, 1]}
          cornerRadius={Platform.OS == 'ios' ? width * 0.03 : width * 0.045}

        />


      </View>
      <Text
        style={{
          position: "absolute",
          zIndex: 10,
          color: 'white',
          fontWeight: 'bold',
          fontSize: width * 0.035,
          marginTop: -height * 0.012,
          marginLeft:width * ok/1.5||0
        }}
      >{ok*100}</Text></View>
    // width * 0.1
    // width * 0.25 
    // width * 0.4 
    // width * 0.55 
    // width * 0.7 
  )
}

export default Progressbar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: width * 0.73,
    height: height * 0.03,
    marginVertical: width * 0.025,
    borderColor: '#000000',
    // borderWidth: 1,
    // borderRadius:width* 7.0,
  },
})