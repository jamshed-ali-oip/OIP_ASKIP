import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Modal,
  Platform,
} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const {width, height} = Dimensions.get('window');
const Topselector = () => {
  const [modalVisible, setModalVisible] = useState(false); 
  const [modalVisible2, setModalVisible2] = useState(false); 
  const firstName=useSelector(state => state?.auth?.User?.data?.firstName)
  const headerdata = [
    {
      id: 1,
      name: 'Mes invitations',
      notification: 1,
    },
    {
      id: 2,
      name: '"Les prochains événements',
      notification: 2,
    },
    {
      id: 3,
      name: 'Mes événements favoris',
      notification: 0,
    },
  ];
  const Inivite = () => {
    return (
      <ScrollView>
        <TouchableOpacity activeOpacity={1}>
          <ImageBackground
            imageStyle={{
              borderTopRightRadius: width * 0.08,
              borderTopLeftRadius: width * 0.08,
            }}
            style={styles.background}
            source={require('../../assets/images/rbbg.png')}>
            <View
              style={{
                width: width * 0.15,
                height: height * 0.01,
                backgroundColor: 'black',
                borderRadius: width * 0.035,
                alignSelf: 'center',
                marginTop: height * 0.01,
              }}></View>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close();
              }}>
              <Image
                style={styles.circle}
                source={require('../../assets/images/prev.png')}
              />
            </TouchableOpacity>
            <Text style={styles.mainheading}>MES INVITATIONS</Text>
            <View style={styles.selectedView}>
              <View style={styles.insideViewheading}>
                <Text style={[styles.mainheading2, {color: 'white'}]}>
                  révélateur t’invite à un événement ! {' '}
                </Text>
              </View>
              <Text style={[styles.flatlistheading2, {color: '#ffbc15'}]}>
                Nom de l’événement - Lieu 
              </Text>
              <View
                style={{flexDirection: 'row', marginBottom: height * 0.015}}>
                <Text style={[styles.flatlistdescription2, {color: 'white'}]}>
                  Catégorie de l’événement
                </Text>
                <Text
                  style={[
                    styles.flatlistdate2,
                    {color: '#ffbc15', fontFamily: 'Bebas Neue Pro Regular'},
                  ]}>
                  Lun 23 Septembre{' '}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.yellowViewselected}>
                  <Text style={styles.yellowText}>Je consulte la fiche </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=> setModalVisible(true)}
                  style={[
                    styles.acceptViewselected,
                    {marginLeft: width * 0.0085},
                  ]}>
                  <Text style={styles.acceptText}>J’accepte</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> setModalVisible2(true)}
                  style={[
                    styles.rejectViewselected,
                    {marginLeft: width * 0.0085},
                  ]}>
                  <Text style={[styles.rejectText, {color: 'white'}]}>
                    Je refuse
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.simpleView}>
              <View style={styles.insideViewheading}>
                <Text style={styles.mainheading2}>
                  révélateur t’invite à un événement ! {' '}
                </Text>
              </View>
              <Text style={styles.flatlistheading2}>
                Nom de l’événement - Lieu {' '}
              </Text>
              <View
                style={{flexDirection: 'row', marginBottom: height * 0.0075}}>
                <Text style={styles.flatlistdescription2}>
                  Catégorie de l’événement
                </Text>
                <Text style={styles.flatlistdate2}>Lun 23 Septembre </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.yellowView}>
                  <Text style={styles.yellowText}>Je consulte la fiche </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptView}>
                  <Text style={styles.acceptText}>Accepté</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.simpleView}>
              <View style={styles.insideViewheading}>
                <Text style={styles.mainheading2}>
                  révélateur t’invite à un événement ! {' '}
                </Text>
              </View>
              <Text style={styles.flatlistheading2}>
                Nom de l’événement - Lieu {' '}
              </Text>
              <View
                style={{flexDirection: 'row', marginBottom: height * 0.0075}}>
                <Text style={styles.flatlistdescription2}>
                  Catégorie de l’événement
                </Text>
                <Text style={styles.flatlistdate2}>Lun 23 Septembre </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.yellowView}>
                  <Text style={styles.yellowText}>Je consulte la fiche </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectView}>
                  <Text style={styles.rejectText}>Refusé</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.simpleView}>
              <View style={styles.insideViewheading}>
                <Text style={styles.mainheading2}>
                  révélateur t’invite à un événement ! {' '}
                </Text>
              </View>
              <Text style={styles.flatlistheading2}>
                Nom de l’événement - Lieu {' '}
              </Text>
              <View
                style={{flexDirection: 'row', marginBottom: height * 0.0075}}>
                <Text style={styles.flatlistdescription2}>
                  Catégorie de l’événement
                </Text>
                <Text style={styles.flatlistdate2}>Lun 23 Septembre </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.yellowView}>
                  <Text style={styles.yellowText}>Je consulte la fiche </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acceptView}>
                  <Text style={styles.acceptText}>Accepté</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  const refRBSheet = useRef();
  const header = (item, index) => {
    return (
      <TouchableOpacity
      style={{
        height:height*0.05,
        backgroundColor:"white",
        marginHorizontal: width * 0.02,
        justifyContent:"center",
        borderRadius:width * 0.05,
        paddingHorizontal:width*0.04,
        elevation:10,
        marginTop:height*0.02,
        marginBottom:height*0.01
      }}
      >
        <Text
        style={{ 
          fontSize: width * 0.049,
          color: '#001d4f',
           fontFamily: 'Bebas Neue Pro Bold',
 }}
        >
        {item.item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={headerdata}
        keyExtractor={item => item.id}
        renderItem={header}
      />
      <RBSheet
        ref={refRBSheet}
        height={height * 1}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
            // borderTopLeftRadius:width*0.35,
            // borderTopRightRadius:width*0.35,
            // marginBottom: 25,
          },
          draggableIcon: {
            backgroundColor: 'transparent',
            paddingHorizontal: 25,
            // marginTop:30
            // position:'absolute',
            // marginTop:60,
          },
          container: {
            borderTopLeftRadius: width * 0.08,
            borderTopRightRadius: width * 0.08,
            position: 'absolute',
            backgroundColor: 'transparent',
          },
        }}>
        <Inivite />
      </RBSheet>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.ModalView}>
              <ImageBackground
                imageStyle={{borderRadius: width * 0.08}}
                style={styles.ModalImage}
                source={require('../../assets/images/backgroundImage.png')}>
                <>
                  <Text style={styles.modalText}>
                    <Text style={{fontFamily:'Bebas Neue Pro Bold'}}> {firstName}, </Text>
                    veux-tu vraiment
                    t’inscrire à cet événement ?
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: width * 0.045,
                    }}>
                    <TouchableOpacity
                      style={styles.Butons}>
                      <Text style={styles.btn}>Oui</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.Butons}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}>
                      <Text style={styles.btn}>Non</Text>
                    </TouchableOpacity>
                  </View>
                </>
              </ImageBackground>
            </View>
          </View>
        </Modal>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.ModalView}>
              <ImageBackground
                imageStyle={{borderRadius: width * 0.08}}
                style={styles.ModalImage}
                source={require('../../assets/images/Background2.png')}>
                <>
                  <Text style={[styles.modalText, {marginTop:height*0.015, marginBottom:-height*0.015,}]}>
                    <Text style={{fontFamily:'Bebas Neue Pro Bold'}}> Prénom, </Text>
                    veux-tu vraiment
                    refuser l’invitation 
                    à cet événement ?
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: width * 0.045,
                    }}>
                    <TouchableOpacity
                      style={styles.Butons}>
                      <Text style={styles.btn}>Oui</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.Butons}
                      onPress={() => {
                        setModalVisible2(!setModalVisible2);
                      }}>
                      <Text style={styles.btn}>Non</Text>
                    </TouchableOpacity>
                  </View>
                </>
              </ImageBackground>
            </View>
          </View>
        </Modal>
    </View>
  );
};

export default Topselector;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: width * 0.08,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // marginTop: 22
  },
  ModalView: {
    width: width * 0.8,
    height: height * 0.22,
    borderRadius: width * 0.08,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // marginTop: height * 0.3,
    alignSelf: 'center',
  },
  ModalImage: {
    width: width * 0.8,
    height: height * 0.22,
    // borderRadius: width * 0.08,
    resizeMode: 'contain',
  },
  Butons: {
    width: width * 0.2,
    height: height * 0.065,
    backgroundColor: '#001d4f',
    marginTop: height * 0.028,
    marginLeft: width * 0.1,
    borderRadius: width * 0.012,
    alignSelf: 'center',
    justifyContent: 'center',
    // padding:width*0.04
  },
  btn: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: width * 0.04,
    fontFamily:'Bebas Neue Pro Bold'
  },
  modalText: {
    textAlign: 'center',
    fontSize: width * 0.055,
    lineHeight:height*0.035,
    // fontWeight: '400',
    color: '#081a4f',
    marginTop: height * 0.03,
    paddingHorizontal: width * 0.045,
    alignSelf: 'center',
    textTransform: 'uppercase',
    width: width * 0.65,
    letterSpacing: 0.5,
    fontFamily:'Bebas Neue Pro Regular'
  },
  headerView: {
    // padding:width*0.02,
    // backgroundColor:'white',
    elevation: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.11,
    borderRadius: width * 0.05,
    marginTop: height * 0.024,
    marginBottom: height * 0.008,
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
  container: {
    marginTop: height * 0.1,
    marginBottom: height * 0.1,
  },
  background: {
    width: width * 1,
    height: height * 1.3,
    // borderTopLeftRadius:width*0.08,
    // borderRadius:10
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
  // headerView: {
  //   // padding:width*0.02,
  //   // backgroundColor:'white',
  //   elevation: 8,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginLeft: width * 0.11,
  //   borderRadius: width * 0.05,
  //   marginTop: height * 0.024,
  //   marginBottom: height * 0.008,
  // },
  eventoneView: {
    width: width * 0.85,
    height: height * 0.325,
    backgroundColor: 'white',
    borderRadius: width * 0.1,
    alignSelf: 'center',
    marginTop: height * 0.03,
    elevation: 10,
  },
  mainHeading: {
    fontSize: width * 0.056,
    color: '#001d4f',
    marginLeft: width * 0.067,
    marginTop: height * 0.01,
    fontFamily: 'Bebas Neue Pro Bold',
  },
  flatlistimage: {
    width: width * 0.65,
    height: height * 0.18,
    resizeMode: 'contain',
    marginLeft: width * 0.1,
    borderRadius: width * 0.03,
    marginTop: width * 0.04,
  },
  flatlistView: {
    // backgroundColor:'red',
    // borderBottomLeftRadius:width*0.10
  },
  flatlistheading: {
    fontSize: width * 0.055,
    color: '#001d4f',
    marginLeft: width * 0.13,
    fontFamily: 'Bebas Neue Pro Bold',
    letterSpacing: 0.2,
    marginTop: height * 0.003,
  },
  flatlistdescription: {
    fontSize: width * 0.042,
    color: '#ffbc15',
    marginLeft: width * 0.14,
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
    width: width * 0.115,
    height: height * 0.055,
    // backgroundColor: '#ffbc15',
    // borderRadius: width * 0.1,
    marginTop: width * 0.037,
    marginLeft: width * 0.027,
    resizeMode: 'contain',
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
    // marginTop: height * 0.004,
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
  tag: {
    position: 'absolute',
    backgroundColor: '#ffbc15',
    padding: width * 0.003,
    width: width * 0.055,
    borderRadius:Platform.OS==='ios'?50:width*0.045,
    textAlign: 'center',
    fontSize: width * 0.035,
    fontWeight: '800',
    marginLeft: width * 0.039,
    marginTop: height * 0.015,
    color: 'black',
    alignSelf: 'flex-end',
  },
});
