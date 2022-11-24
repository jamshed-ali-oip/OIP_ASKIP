import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Searcher from '../../components/Searcher';
import RBSheet from 'react-native-raw-bottom-sheet';
import QRCode from 'react-native-qrcode-svg';
import Topselector from './Topselector';
import { useSelector } from 'react-redux';
const {width, height} = Dimensions.get('window');

const HomeScreens = () => {
  // const [textInput, setTextInput] = useState('');
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);


  const dekhnaData = useSelector((state)=>state)
  const firstName=useSelector(state => state?.auth?.User?.data?.lastName)
  const userdataFname=useSelector(state => state?.auth?.credential?.User?.lastName)
  console.log("dekhnaData",dekhnaData)
  const eventone = [
    {
      id: 1,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
    {
      id: 2,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
    {
      id: 3,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
    {
      id: 4,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
    {
      id: 5,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
  ];
  const eventtwo = [
    {
      id: 1,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
    {
      id: 2,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
    {
      id: 3,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
    {
      id: 4,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
    {
      id: 5,
      title: 'Nom de l’événement - Lieu',
      description: 'Catégorie de l’événement',
      date: 'Lun 23 Septembre',
      image: require('../../assets/images/backgroundImage.png'),
    },
  ];

  const RawBottomSheet = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: height,
          borderTopRightRadius:width*0.035, 
          borderTopLeftRadius:width*0.035, 
        }}>
        <Image
          style={[
            styles.rawBottomImage,
            {
              borderTopLeftRadius: width * 0.035,
              borderTopRightRadius: width * 0.035,
            },
          ]}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-8BMYPMaG5gJvpEN7YsY3nGPk5hNTnOeCTxvFaEk2Q&s',
          }}
        />
        <View
          style={{
            width: width * 0.15,
            height: height * 0.01,
            backgroundColor: 'white',
            borderRadius: width * 0.035,
            alignSelf: 'center',
            marginTop: height * 0.01,
            position: 'absolute',
          }}></View>
        <View style={styles.rawBottomFirstView}>
          <Text style={styles.rawBottomTitle}> NOM DE L’ÉVÉNEMENT</Text>
          <Text style={styles.rawBottomshortTitle}>avec REVELATEU</Text>
        </View>
        <View style={styles.rawBottomSecondView}>
          <Text style={styles.rawBottomdescription}>setting description</Text>
          <Text style={styles.rawBottomdateandtime}>
            23/10/2022 de 1400 hours
          </Text>
        </View>
        <View style={styles.rawBottomThirdView}>
          <Image
            style={styles.rawBottomtinyImage}
            source={require('../../assets/images/locLogo.png')}
          />
          <Text style={styles.rawBottomlocation}>
            90 Boulevard Marius Vivier Merle, 69003 LYON
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={true}>
          <TouchableOpacity activeOpacity={1}>
          <Text style={styles.rawBottomMainDescription}>
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            facilisis nunc. Nulla quis eros aliquet, condimentum erat quis,
            tincidunt ante. Vivamus faucibus vitae urna ut pellentesque.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Ut convallis eleifend nibh a rutrum. orem
            ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            facilisis nunc. Nulla quis eros aliquet, orem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras vel facilisis nunc. Nulla quis
            eros aliquet,orem ipsum dolor sit amet, consectetur adipiscing elit.
            Cras vel facilisis nunc. Nulla quis eros aliquet,orem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras vel facilisis nunc.
            Nulla quis eros aliquet',
          </Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          style={styles.rawBottomButon}
          >
          <Text style={styles.rawBottomButtonText}>Je m’inscris !</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const eventonefunc = item => {
    return (
      <>
        <View style={styles.flatlistView}>
          <ImageBackground
            imageStyle={{borderRadius: width * 0.03}}
            style={styles.flatlistimage}
            source={item.item.image}>
            <TouchableOpacity
              style={styles.QRView}
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text style={styles.QRText}>Mon QR Code</Text>
            </TouchableOpacity>
          </ImageBackground>
          <TouchableOpacity
            onPress={() => {
              refRBSheet2.current.open();
            }}>
            <Text style={styles.flatlistheading}> {item.item.title} </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.flatlistdescription}>
              {item.item.description}{' '}
            </Text>
            <Text style={styles.flatlistdate}>{item.item.date} </Text>
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.QRModalView}>
            <View style={styles.QRModalInnerView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <QRCode size={170} value="https://outsourceinpakistan.com/" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    );
  };
  const eventtwofunc = item => {
    return (
      <>
        <View style={styles.flatlistView}>
          <ImageBackground
            imageStyle={{borderRadius: width * 0.03}}
            style={styles.flatlistimage}
            source={item.item.image}>
            <TouchableOpacity
              style={styles.QRView}
              onPress={() => {
                setModalVisible2(true);
              }}>
              <Text style={styles.QRText}>Mon QR Code</Text>
            </TouchableOpacity>
          </ImageBackground>
          <TouchableOpacity onPress={()=> { refRBSheet2.current.open()}}>
            <Text style={styles.flatlistheading}> {item.item.title} </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.flatlistdescription}>
              {item.item.description}{' '}
            </Text>
            <Text style={styles.flatlistdate}>{item.item.date} </Text>
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.QRModalView}>
            <View style={styles.QRModalInnerView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible2(false);
                }}>
                <QRCode size={170} value="https://outsourceinpakistan.com/" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </>
    );
  };
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/images/homebg.png')}
        style={styles.background}>
        <View style={styles.viewone}>
          <Image
            style={styles.img}
            source={require('../../assets/images/hifi.png')}
          />
          <Text style={styles.mainText}>Bienvenue,{firstName||userdataFname} !</Text>
        </View>
        <View style={styles.viewtwo}>
          <Text style={styles.simpleText}>
            N’oublie pas de
            <Text> </Text>
            <Text
              style={{
                color: '#ffbc15',
                fontFamily: 'Bebas Neue Pro Bold',
                letterSpacing: 0.8,
              }}>
              compléter ton profil
            </Text>
            <Text> </Text>!
          </Text>
        </View>
        {/* {/ seracher  /} */}
        <Searcher />

        <Topselector />
        <View style={styles.eventoneView}>
          <Text style={styles.mainHeading}> Mes billets d'événements</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={eventone}
            keyExtractor={item => item.id}
            renderItem={eventonefunc}
          />
        </View>
        <View style={styles.eventoneView}>
          <Text style={styles.mainHeading}>Mon historique d’événements</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={eventtwo}
            keyExtractor={item => item.id}
            renderItem={eventtwofunc}
          />
        </View>
      </ImageBackground>
      <View>
        <RBSheet
          ref={refRBSheet2}
          height={height * 0.95}
          closeOnDragDown={true}
          closeOnPressMask={false}
          // dragFromTopOnly={false}

          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            draggableIcon: {
              backgroundColor: 'transparent',
              paddingHorizontal: 25,
            },
            container: {
              borderTopLeftRadius: width * 0.08,
              borderTopRightRadius: width * 0.08,
              // position:'absolute',
              backgroundColor: 'transparent',
            },
          }}>
          <RawBottomSheet />
        </RBSheet>
      </View>
    </ScrollView>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.1,
    marginBottom: height * 0.1,
  },
  background: {
    width: width,
    height: height * 1.04,
    resizeMode: 'contain',
  },
  img: {
    width: width * 0.09,
    height: height * 0.049,
    marginRight: width * 0.02,
  },
  mainText: {
    fontSize: width * 0.065,
    color: '#001d4f',
    textTransform: 'uppercase',
    fontFamily: 'Bebas Neue Pro Bold',
  },
  viewone: {
    // backgroundColor:'white',
    // width:width*0.7,
    // height:height*0.08,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.1,
    marginTop: height * 0.058,
  },
  simpleText: {
    fontSize: width * 0.048,
    color: '#000000',
    fontFamily: 'Bebas Neue Pro Regular',
    letterSpacing: 0.25,
  },
  viewtwo: {
    // backgroundColor:'white',
    // width:width*0.7,
    // height:height*0.08,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.21,
  },
  searcherView: {
    width: width * 0.82,
    alignSelf: 'center',
    height: height * 0.05,
    // backgroundColor:'white',
    borderWidth: 1,
    borderColor: '#001d4f',
    borderRadius: width * 0.05,
    marginTop: height * 0.02,
    justifyContent: 'center',
  },
  imgtwo: {
    width: width * 0.047,
    height: height * 0.055,
    resizeMode: 'contain',
    marginLeft: width * 0.028,
  },
  txtinput: {
    width: width * 0.6,
    height: height * 0.05,
    // borderWidth:1,
    // borderColor:'red',
    position: 'absolute',
    alignSelf: 'center',
  },
  headerView: {
    // padding:width*0.02,
    // backgroundColor:'white',
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.11,
    borderRadius: width * 0.05,
    marginTop: height * 0.024,
    marginBottom: height * 0.008,
  },
  eventoneView: {
    width: width * 0.85,
    height: height * 0.325,
    backgroundColor: 'white',
    borderRadius: width * 0.1,
    alignSelf: 'center',
    marginTop: height * 0.03,
    elevation: 10,
    paddingHorizontal: width * 0.035,
  },
  mainHeading: {
    fontSize: width * 0.056,
    color: '#001d4f',
    marginLeft: width * 0.025,
    marginTop: height * 0.01,
    fontFamily: 'Bebas Neue Pro Bold',
  },
  flatlistimage: {
    width: width * 0.65,
    height: height * 0.18,
    resizeMode: 'contain',
    marginLeft: width * 0.037,
    borderRadius: width * 0.03,
    marginTop: width * 0.04,
  },
  flatlistView: {
    // backgroundColor:'red',
    // borderBottomLeftRadius:width*0.10
    // paddingHorizontal:width*0.01
    // width:width*0.75,
  },
  flatlistheading: {
    fontSize: width * 0.055,
    color: '#001d4f',
    marginLeft: width * 0.065,
    fontFamily: 'Bebas Neue Pro Bold',
    letterSpacing: 0.2,
    marginTop: height * 0.003,
  },
  flatlistdescription: {
    fontSize: width * 0.042,
    color: '#ffbc15',
    marginLeft: width * 0.075,
    fontFamily: 'Bebas Neue Pro Regular',
  },
  flatlistdate: {
    fontSize: width * 0.04,
    color: '#001d4f',
    marginLeft: width * 0.02,
    fontFamily: 'Bebas Neue Pro Regular',
    marginTop: height * 0.004,
  },
  headerText: {
    paddingHorizontal: width * 0.08,
    paddingVertical: height * 0.008,
    fontSize: width * 0.049,
    color: '#001d4f',
    backgroundColor: 'white',
    borderRadius: width * 0.1,
    fontFamily: 'Bebas Neue Pro Bold',
    letterSpacing: 0.3,
  },
  QRView: {
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: height * 0.01,
    marginLeft: width * 0.015,
    borderRadius: width * 0.031,
  },
  QRText: {
    fontSize: width * 0.042,
    fontFamily: 'Bebas Neue Pro Bold',
    color: '#ffbc15',
    paddingHorizontal: width * 0.037,
    borderRadius: width * 0.1,
    paddingVertical: height * 0.0057,
  },
  circle: {
    width: width * 0.125,
    height: height * 0.065,
    // backgroundColor: '#ffbc15',
    // borderRadius: width * 0.1,
    marginTop: width * 0.037,
    marginLeft: width * 0.027,
  },
  mainheading: {
    fontSize: width * 0.072,
    color: '#001d4f',
    // alignSelf:'center',
    marginLeft: width * 0.161,
    // fontWeight: 'bold',
    marginBottom: height * 0.045,
    marginTop: height * 0.013,
    fontFamily: 'Bebas Neue Pro Bold',
  },
  selectedView: {
    width: width * 0.8,
    height: height * 0.215,
    backgroundColor: '#001d4f',
    borderRadius: width * 0.06,
    alignSelf: 'center',
    elevation: 10,
  },
  simpleView: {
    width: width * 0.8,
    height: height * 0.2,
    backgroundColor: 'white',
    borderRadius: width * 0.06,
    alignSelf: 'center',
    marginTop: height * 0.035,
    elevation: 10,
  },
  yellowView: {
    width: width * 0.47,
    height: height * 0.04,
    backgroundColor: '#ffbc15',
    borderRadius: width * 0.15,
    marginLeft: width * 0.055,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptView: {
    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: '#00b453',
    borderRadius: width * 0.15,
    marginLeft: width * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rejectView: {
    width: width * 0.2,
    height: height * 0.04,
    borderRadius: width * 0.15,
    marginLeft: width * 0.03,
    borderWidth: 1,
    borderColor: '#ef0b0b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowViewselected: {
    width: width * 0.3,
    height: height * 0.04,
    backgroundColor: '#ffbc15',
    borderRadius: width * 0.15,
    marginLeft: width * 0.045,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptViewselected: {
    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: '#00b453',
    borderRadius: width * 0.15,
    marginLeft: width * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rejectViewselected: {
    width: width * 0.2,
    height: height * 0.04,
    borderRadius: width * 0.15,
    marginLeft: width * 0.03,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainheading2: {
    fontSize: width * 0.049,
    color: '#001d4f',
    fontFamily: 'Bebas Neue Pro Bold',
    letterSpacing: 0.2,
    marginLeft: width * 0.055,
    textTransform: 'uppercase',
  },
  insideViewheading: {
    marginVertical: height * 0.02,
  },
  flatlistheading2: {
    fontSize: width * 0.055,
    color: '#001d4f',
    marginLeft: width * 0.055,
    fontFamily: 'Bebas Neue Pro Bold',
    letterSpacing: 0.2,
    marginTop: height * 0.003,
  },
  flatlistdescription2: {
    fontSize: width * 0.042,
    color: '#ffbc15',
    marginLeft: width * 0.055,
    fontFamily: 'Bebas Neue Pro Regular',
  },
  flatlistdate2: {
    fontSize: width * 0.037,
    color: '#001d4f',
    marginLeft: width * 0.05,
    fontFamily: 'Bebas Neue Pro Regular',
    marginTop: height * 0.004,
  },
  yellowText: {
    fontSize: width * 0.035,
    color: 'white',
    fontFamily: 'Bebas Neue Pro Bold',
  },
  acceptText: {
    fontSize: width * 0.035,
    fontFamily: 'Bebas Neue Pro Bold',
    color: 'white',
  },
  rejectText: {
    fontSize: width * 0.035,
    color: '#ef0b0b',
    fontFamily: 'Bebas Neue Pro Bold',
  },
  QRModalView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
  },
  QRModalInnerView: {
    width: width * 0.5,
    height: height * 0.25,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rawBottomImage: {
    width: width * 1,
    height: height * 0.4,
  },
  rawBottomTitle: {
    // fontSize: width * 0.06,
    color: '#081a4f',
    // fontWeight: 'bold',
    marginTop: height * 0.012,
    fontFamily: 'Bebas Neue Pro Bold',
    fontSize: width * 0.06,
    // paddingHorizontal:width*0.017,
    textAlign: 'center',
    letterSpacing: 0.4,
  },
  rawBottomshortTitle: {
    // fontSize: width * 0.05,
    color: '#081a4f',
    marginTop: 10,
    // fontStyle: 'italic',
    fontFamily: 'Bebas Neue Pro Italic',
    fontSize: width * 0.058,
  },
  rawBottomFirstView: {
    flexDirection: 'row',
    // justifyContent:'space-around',
    // paddingHorizontal: width*0.01,
    // justifyContent: 'center',
    marginLeft: width * 0.05,
  },
  rawBottomdescription: {
    color: '#fdd76e',
    // fontSize: width * 0.037,
    fontSize: width * 0.048,
    fontFamily: 'Bebas Neue Pro Regular',
  },
  rawBottomdateandtime: {
    color: '#42547b',
    fontSize: width * 0.04,
    // paddingHorizontal: 3,
    fontSize: width * 0.05,
    fontFamily: 'Bebas Neue Pro Regular',
    marginLeft: width * 0.012,
  },
  rawBottomSecondView: {
    flexDirection: 'row',
    marginLeft: width * 0.05,
  },
  rawBottomlocation: {
    color: '#fdd460',
    // fontSize: width * 0.045,
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    // paddingHorizontal: 10,
    fontSize: width * 0.05,
    fontFamily: 'Bebas Neue Pro Bold Italic',
    marginLeft: width * 0.015,
  },
  rawBottomtinyImage: {
    width: width * 0.05,
    height: height * 0.03,
    resizeMode:'contain', 
  },
  rawBottomThirdView: {
    flexDirection: 'row',
    // paddingHorizontal: 8,
    marginVertical: height * 0.015,
    marginLeft: width * 0.05,
  },
  rawBottomMainDescription: {
    color: '#9f9f9f',
    // paddingHorizontal: 8,
    fontSize: width * 0.052,
    fontFamily: 'Bebas Neue Pro Book',
    marginLeft: width * 0.05,
    letterSpacing: 0.25,
    marginRight: width * 0.07,
  },
  rawBottomButon: {
    backgroundColor: '#081a4f',
    alignContent: 'center',
    justifyContent: 'center',
    width: width * 0.6,
    borderRadius: width * 0.028,
    alignSelf: 'center',
    // margin: width * 0.22,
    marginBottom: height * 0.115,
    marginTop: height * 0.005,
    height: height * 0.06,
    // height:height*0.0,
  },
  rawBottomButtonText: {
    color: 'white',
    // padding: 14,
    fontSize: width * 0.048,
    letterSpacing: 0.15,
    textAlign: 'center',
    fontFamily: 'Bebas Neue Pro Bold',
  },
});
