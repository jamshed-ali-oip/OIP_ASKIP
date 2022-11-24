import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import Colors from '../../assets/colors/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const MesScreen = () => {
  const [Page, setPage] = useState(1);

  return (
    <>
      {/* <Text
    // style={{position:"absolute"}}
    >khsfkdsga</Text> */}
      <View style={styles.container}>
        {/* {/ step slector /} */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: height * 0.02,
          }}>
          <TouchableOpacity
            // onPress={() => {
            //   setPage(1);
            // }}
            style={[
              styles.check,
              {
                backgroundColor:
                  Page == 1 || Page > 1 ? Colors.theme_color : '#b2b2b2',
              },
            ]}>
            <Text style={styles.num}>1</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.line,
              {
                borderColor:
                  Page == 2 || Page > 2 ? Colors.theme_color : '#b2b2b2',
              },
            ]}></View>
          <TouchableOpacity
            // onPress={() => {
            //   setPage(2);
            // }}
            style={[
              styles.check,
              {
                backgroundColor:
                  Page == 2 || Page > 2 ? Colors.theme_color : '#b2b2b2',
              },
            ]}>
            <Text style={styles.num}>2</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.line,
              {
                borderColor:
                  Page == 3 || Page > 3 ? Colors.theme_color : '#b2b2b2',
              },
            ]}></View>
          <TouchableOpacity
            // onPress={() => {
            //   setPage(3);
            // }}
            style={[
              styles.check,
              {
                backgroundColor:
                  Page == 3 || Page > 3 ? Colors.theme_color : '#b2b2b2',
              },
            ]}>
            <Text style={styles.num}>3</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.line,
              {
                borderColor:
                  Page == 4 || Page > 4 ? Colors.theme_color : '#b2b2b2',
              },
            ]}></View>
          <TouchableOpacity
            // onPress={() => {
            //   setPage(4);
            // }}
            style={[
              styles.check,
              {
                backgroundColor:
                  Page == 4 || Page > 4 ? Colors.theme_color : '#b2b2b2',
              },
            ]}>
            <Text style={styles.num}>4</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.line,
              {
                borderColor:
                  Page == 5 || Page > 5 ? Colors.theme_color : '#b2b2b2',
              },
            ]}></View>
          <TouchableOpacity
            // onPress={() => {
            //   setPage(5);
            // }}
            style={[
              styles.check,
              {
                backgroundColor:
                  Page == 5 || Page > 5 ? Colors.theme_color : '#b2b2b2',
              },
            ]}>
            <Text style={styles.num}>5</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {Page == 1 ? (
          <Page1 setPage={setPage} />
        ) : Page == 2 ? (
          <Page2
            setPage={setPage}
          />
        ) : Page == 3 ? (
          <Page3 setPage={setPage} />
        ) : Page == 4 ? (
          <Page4 setPage={setPage} />
        ) : Page == 5 ? (
          <Page5 setPage={setPage} />
        ) : null}
        {/* <View style={styles.cont}>
          <TouchableOpacity
           disabled={Page == 1 ? true : false}
           onPress={() => {
             setPage(Page - 1);
           }}>
            <Image
              style={styles.navimg}
              source={
                Page == 1 ? null : require('../../assets/images/prev.png')
              }
            />
          </TouchableOpacity>
         
          <TouchableOpacity
            // disabled={Page == 5 ? true : false}
            // onPress={() => {
            //   setPage(Page + 1);
            // }}
            disabled={Page == 5 ? true : false}
            onPress={() => {
              setPage(Page + 1);
            }}
            >
            <Image
              style={styles.navimg}
              source={
                Page == 5 ? null : require('../../assets/images/next.png')
              }
            />
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </>
  );
};

export default MesScreen;

const styles = StyleSheet.create({
  check: {
    // backgroundColor: 'red',
    width: width * 0.075,
    height: height * 0.04,
    borderRadius: width * 0.038,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:widsth
  },
  line: {
    width: width * 0.085,
    borderWidth: width * 0.0015,
    // borderColor:"red",
    height: 0,
    alignSelf: 'center',
  },
  container: {
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  num: {
    fontSize: width * 0.035,
    color: 'white',
    fontWeight: '600',
  },
  touch: {
    height: height * 0.055,
    borderWidth: 2,
    borderColor: '#fdbf18',
    width: width * 0.7,
    marginTop: height * 0.02,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.023,
    marginBottom: height * 0.01,
  },
  text2: {
    color: '#fdbf18',
    fontSize: width * 0.042,
    // fontWeight:'700',
    fontFamily: 'Bebas Neue Pro Bold',
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: width * 0.015,

  },
  navimg: {
    height: height * 0.045,
    width: width * 0.12,
    resizeMode: 'contain',
    marginTop: height * 0.01,
    // marginHorizontal: width * 0.05,
    // paddingHorizontal:width*0.02,
  },
});
