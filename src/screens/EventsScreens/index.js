import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import DatePicker from 'react-native-modern-datepicker';
import { it } from 'node:test';
import D_Apicker from './DatePicker';
import Inputs from "../../components/Inputs"
import { useSelector } from 'react-redux';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EventsScreens = () => {
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const [data, setdata] = useState();
  const [data2, setdata2] = useState(1);
  const [input, SetInput] = useState('');
  const [ShowModal, SetShowModal] = useState(false);
  const [modalsec, Setmodalsec] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const dekhnaData = useSelector((state)=>state)
  console.log("dekhnaData",dekhnaData)
  console.log('first', data2);
  const Lowerdata = [
    {
      id: 1,
      image:
        'https://media.istockphoto.com/photos/esport-rgb-mouse-and-keyboard-picture-id1189620964?k=20&m=1189620964&s=612x612&w=0&h=cY-yQ88vKu0Vd8KPPdkUH4zcC8g90pTQdIlyHdL0HJ0=',
      participants: ' 38 Participants',
      title: ' NOM DE L’ÉVÉNEMENT',
      description: ' setting  description ',
      date: ' Lun 23 semptembre',
      mainDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel facilisis nunc. Nulla quis eros aliquet, condimentum erat quis, tincidunt ante. Vivamus faucibus vitae urna ut pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh a rutrum. orem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel facilisis nunc. Nulla quis eros aliquet, orem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel facilisis nunc. Nulla quis eros aliquet,orem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel facilisis nunc. Nulla quis eros aliquet,orem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel facilisis nunc. Nulla quis eros aliquet',
      Location: '90 Boulevard Marius Vivier Merle, 69003 LYON',
      Dateandtime: '23/10/2022 de 1400 hours',
      shortTitle: ' avec REVELATEU',
    },
    {
      id: 2,
      image:
        'https://media.istockphoto.com/photos/esport-rgb-mouse-and-keyboard-picture-id1189620964?k=20&m=1189620964&s=612x612&w=0&h=cY-yQ88vKu0Vd8KPPdkUH4zcC8g90pTQdIlyHdL0HJ0=',
      participants: ' 38 Participants',
      title: ' title 2',
      description: ' 123 description',
      date: ' Lun 23 semptembre ',
      mainDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel facilisis nunc. Nulla quis eros aliquet, condimentum erat quis, tincidunt ante. Vivamus faucibus vitae urna ut pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh a rutrum. ',
      Location: 'NOM DE L’ÉVÉNEMENT ',
      Dateandtime: '23/10/2022 de 1400 hours',
      shortTitle: ' avec REVELATEU',
    },
    {
      id: 3,
      image:
        'https://media.istockphoto.com/photos/esport-rgb-mouse-and-keyboard-picture-id1189620964?k=20&m=1189620964&s=612x612&w=0&h=cY-yQ88vKu0Vd8KPPdkUH4zcC8g90pTQdIlyHdL0HJ0=',
      participants: ' 38 Participants',
      title: ' title 3',
      description: ' 123 description',
      date: ' Lun 23 semptembre',
      mainDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel facilisis nunc. Nulla quis eros aliquet, condimentum erat quis, tincidunt ante. Vivamus faucibus vitae urna ut pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut convallis eleifend nibh a rutrum. ',
      Location: 'NOM DE L’ÉVÉNEMENT ',
      Dateandtime: '23/10/2022 de 1400 hours',
      shortTitle: ' avec REVELATEU',
    },
  ];
  const localisationData = [
    {
      id: 1,
      name: 'Lyon',
    },
    {
      id: 2,
      name: 'Marseille',
    },
  ];
  const Upperdata = [
    {
      id: 1,
      heading: ' E-sport',
    },
    {
      id: 2,
      heading: ' Expression de soi',
    },
    {
      id: 3,
      heading: 'Sport',
    },
    {
      id: 4,
      heading: 'Masterclass influence',
    },
  ];

  const Filter = () => {
    const [items, setitems] = useState(1);
    return (
      <View>
        <Text style={styles.heading}>Filtres</Text>
        <Text style={styles.rbdate}> Date </Text>
        <View style={styles.pickerview}>
          <D_Apicker />
          {/* <DatePicker
           isGregorian={true}
            locale="fr-be"
            
            options={{
              
              backgroundColor: '#081a4f',
              textHeaderColor: '#b3b3b3',
              textDefaultColor: '#F6E7C1',
              selectedTextColor: '#fff',
              mainColor: '#F4722B',
              textSecondaryColor: '#D6C7A1',
              borderColor: 'rgba(122, 146, 165, 0.1)',
              
            }}
            onSelectedChange={date => setSelectedDate(date)}
            mode="calendar"
            style={styles.datepicker}
          /> */}
        </View>
        <Text style={styles.rbtext}> LOCALISATION</Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: width * 0.12,
            marginVertical: height * 0.015,
          }}>
          {localisationData.map(item => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: width * 0.1,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setitems(item.id);
                  }}>
                  <Image
                    style={styles.img}
                    source={
                      item.id == items
                        ? require('../../assets/images/selectedcircle.png')
                        : require('../../assets/images/circle.png')
                    }
                  />
                </TouchableOpacity>
                <Text style={styles.buttontext}>{item.name}</Text>
              </View>
            );
          })}
        </View>
        <TouchableOpacity style={styles.rbbtn}>
          <Text style={styles.rbtntext}>Confirmer</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const RawBottomSheet = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: height,
          borderTopRightRadius: width * 0.035,
          borderTopLeftRadius: width * 0.035,
        }}>
        <Image
          style={[
            styles.rawBottomImage,
            {
              borderTopLeftRadius: width * 0.035,
              borderTopRightRadius: width * 0.035,
            },
          ]}
          source={{ uri: data.item.image }}
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
          <Text style={styles.rawBottomTitle}>{data.item.title}</Text>
          <Text style={styles.rawBottomshortTitle}>{data.item.shortTitle}</Text>
        </View>
        <View style={styles.rawBottomSecondView}>
          <Text style={styles.rawBottomdescription}>
            {data.item.description}
          </Text>
          <Text style={styles.rawBottomdateandtime}>
            {data.item.Dateandtime}
          </Text>
        </View>
        <View style={styles.rawBottomThirdView}>
          <Image
            style={styles.rawBottomtinyImage}
            source={require('../../assets/images/locLogo.png')}
          />
          <Text style={styles.rawBottomlocation}>{data.item.Location}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.rawBottomMainDescription}>
              {data.item.mainDescription}
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          style={styles.rawBottomButon}
          onPress={() => {
            SetShowModal(true);
          }}>
          <Text style={styles.rawBottomButtonText}>Je m’inscris !</Text>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={ShowModal}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.rawBottomModalView}>
              <ImageBackground
                imageStyle={{ borderRadius: width * 0.08 }}
                style={styles.rawBottomModalImage}
                source={
                  modalsec == false
                    ? require('../../assets/images/backgroundImage.png')
                    : require('../../assets/images/Background2.png')
                }>
                {modalsec == false ? (
                  <>
                    <Text style={styles.modalText}>
                      <Text style={{ fontFamily: 'Bebas Neue Pro Bold', fontSize: width * 0.048 }}> Prénom, </Text>
                      veux-tu vraiment t’inscrire a cet événement en présentiel
                      ?
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingHorizontal: width * 0.045,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          Setmodalsec(true);
                        }}
                        style={styles.rawBottomButons}>
                        <Text style={styles.btn}>Oui</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.rawBottomButons}
                        onPress={() => {
                          SetShowModal(false);
                        }}>
                        <Text style={styles.btn}>Non</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                ) : (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        style={styles.scndmodalimage}
                        source={require('../../assets/images/alert.png')}
                      />
                      <Text style={styles.scndmodaltext2}>
                        ATTENTION,
                        <Text> </Text>
                        <Text
                          style={[styles.scndmodaltext2, { fontFamily: 'Bebas Neue Pro Bold' }]}>
                          prénom !
                        </Text>
                      </Text>
                    </View>
                    <Text style={styles.scndmodaltext}>
                      n’oublie pas de venir avec une
                      <Text> </Text>
                      <Text
                        style={{
                          fontFamily: 'Bebas Neue Pro Bold',
                          fontSize: width * 0.043,
                        }}>
                        autorisation parentale manuscrite
                      </Text>
                      <Text> </Text>
                      le jour de l’événement. ELLE TE SERA DEMANDée lors de ton
                      arrivée.
                    </Text>
                    <TouchableOpacity
                      style={styles.scndmodalbtn}
                      onPress={() => {
                        Setmodalsec(false);
                        SetShowModal(false);

                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontFamily: 'Bebas Neue Pro Bold',
                          fontSize: width * 0.038,
                        }}>
                        {' '}
                        Ok !{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </ImageBackground>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const LowerRender = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          setdata(item), refRBSheet.current.open();
        }}>
        <ImageBackground
          imageStyle={{ borderRadius: width * 0.06 }}
          style={styles.LowerRenderimage}
          source={{ uri: item.item.image }}>
          <View style={styles.LowerRenderfirstview}>
            <Text style={styles.participanttext}>
              {' '}
              {item.item.participants}{' '}
            </Text>
          </View>
          <View style={styles.LowerRendersecondview}>
            <Text style={styles.flatlistheading}> {item.item.title} </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.flatlistdescription}>
                {item.item.description}{' '}
              </Text>
              <Text style={styles.flatlistdate}>{item.item.date} </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const UpperRender = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          setdata2(item.item.id);
        }}
        style={[
          styles.UpperRenderView,
          {
            backgroundColor: item.item.id == data2 ? '#081a4f' : 'transparent',
          },
        ]}>
        <Text
          style={[
            styles.UpperRenderText,
            { color: item.item.id == data2 ? 'white' : '#081a4f' },
          ]}>
          {item.item.heading}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={styles.upperViewMainImage}
          source={require('../../assets/images/backgroundImage.png')}
        >
         
        
          <View
            style={{
              borderWidth: 2,
              height: height * 0.05,
              width: width * 0.8,
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: width * 0.05,
              marginTop: height * 0.05,
              // backgroundColor:"red"
              borderColor:"#081a4f"

            }}
          >
            <Image
              style={styles.tinyimages}
              source={require('../../assets/images/searchlogo.png')}
            />
            <TextInput
              placeholder='Rechercher'
              placeholderTextColor="#081a4f"
              style={{
                // backgroundColor: "red", 
                height: height * 0.048,
                width: width * 0.58,
                alignSelf: "center"

              }}
            />
            <TouchableOpacity
              onPress={() => { refRBSheet2.current.open() }}>
              <Image
                style={styles.tinyimages}
                source={require('../../assets/images/filterLogo.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={Upperdata}
            keyExtractor={item => item.id}
            renderItem={UpperRender}
          />
        </View>
        </ImageBackground>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
          }}>
          <RBSheet
            ref={refRBSheet2}
            height={height * 0.85}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(0, 0, 0, 0.24)',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
              container: {
                borderTopEndRadius: width * 0.035,
                borderTopStartRadius: width * 0.035,
              },
            }}>
            <Filter />
          </RBSheet>
        </View>

       
      </View>
      <ScrollView>
        <View style={{ marginBottom: height * 0.25 }}>
          <FlatList
            scrollEnabled={true}
            data={Lowerdata}
            keyExtractor={item => item.id}
            renderItem={LowerRender}
          />
        </View>
      </ScrollView>
      <View>
        <RBSheet
          ref={refRBSheet}
          height={height * 0.95}
          closeOnDragDown={true}
          closeOnPressMask={false}
          // dragFromTopOnly={false}

          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
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
    </SafeAreaView>
  );
};

export default EventsScreens;

const styles = StyleSheet.create({
  buttontext: {
    fontSize: width * 0.05,
    fontFamily: 'Bebas Neue Pro Bold',
    color: '#081a4f',
    marginLeft: width * 0.01,
  },
  img: {
    width: width * 0.069,
    height: height * 0.035,
    resizeMode: 'contain',

    borderRadius: 100,
  },
  rbtntext: {
    fontSize: width * 0.035,
    color: 'white',
  },
  pickerview: {
    height: height * 0.45,
  },
  rbbtn: {
    width: width * 0.75,
    height: height * 0.05,
    backgroundColor: '#081a4f',
    alignSelf: 'center',
    borderRadius: width * 0.04,
    marginTop: height * 0.017,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rbdate: {
    color: '#081a4f',
    fontSize: width * 0.06,
    textTransform: 'uppercase',
    marginLeft: width * 0.052,
    // fontWeight: 'bold',
    marginBottom: height * 0.017,
    fontFamily: 'Bebas Neue Pro Bold',
    marginVertical: height * 0.015,
  },
  rbtext: {
    color: '#081a4f',
    fontSize: width * 0.06,
    textTransform: 'uppercase',
    marginLeft: width * 0.052,
    // fontWeight: 'bold',
    fontFamily: 'Bebas Neue Pro Bold',
  },
  datepicker: {
    borderRadius: width * 0.03,
    width: width * 0.68,
    height: height * 0.32,
    alignSelf: 'center',
    // marginTop: height * 0.05,
  },
  opacity: {
    opacity: 0.5,
  },
  upperViewMainImage: {
    width: width * 1,
    height: height * 0.25,
    // paddingTop: height * 0.05
    // opacity: 0.7,
  },
  firstView: {
    width: width * 0.85,
    height: height * 0.06,
    borderWidth: 1,
    borderRadius: width * 0.055,
    alignSelf: 'center',
    marginTop: height * 0.06,
    marginHorizontal: width * 0.025,
    // backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    position: 'absolute',
    alignContent: 'center',
    paddingRight: width * 0.035,
    // justifyContent:'center'
  },
  txtinput: {
    width: width * 0.6,
    height: height * 0.06,
    margin: -12,
    color: 'black',
  },
  UpperRenderView: {
    width: width / 2,
    height: height * 0.065,
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: width * 0.025,
    marginVertical: height * 0.065,
    alignContent: 'center',
    justifyContent: 'center',

    // backgroundColor:colorView ? 'blue': null,
    // position:'absolute',
  },
  UpperRenderText: {
    // fontSize: width * 0.055,
    textAlign: 'center',
    // justifyContent:'center'
    color: '#1b2c5d',
    // fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center',
    padding: 8,
    fontFamily: 'Bebas Neue Pro Bold',
    fontSize: width * 0.055,
    // fontFamily:'Bebas Neue Pro Italic'
  },
  LowerRenderimage: {
    width: width * 0.85,
    height: height * 0.34,
    alignSelf: 'center',
    margin: width * 0.05,
    borderRadius: width * 0.035,
    resizeMode: 'stretch',
    elevation: 20,
  },
  LowerRenderfirstview: {
    // width: width * 0.4,
    // height: height * 0.05,
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: width * 0.04,
    marginLeft: width * 0.07,
    marginTop: height * 0.015,
    justifyContent: 'center',
    padding: width * 0.02,
  },
  tinyimages: {
    width: width * 0.05,
    height: height * 0.025,
    // justifyContent: 'center',
    // alignSelf:'center',
    // flex:1
  },
  LowerRendersecondview: {
    width: width * 0.725,
    height: height * 0.08,
    position: 'absolute',
    backgroundColor: 'white',
    marginTop: height * 0.247,
    alignSelf: 'center',
    borderRadius: width * 0.039,
  },
  heading: {
    // fontSize: width * 0.055,
    color: '#081a4f',
    paddingHorizontal: width * 0.028,
    // fontWeight: 'bold',
    marginTop: height * 0.01,
    textAlign: 'center',
    textTransform: 'uppercase',
    // marginBottom: height * 0.02,
    fontFamily: 'Bebas Neue Pro Bold',
    fontSize: width * 0.064,
  },
  description: {
    // fontSize: width * 0.042,
    color: '#fdd668',
    paddingHorizontal: 10,
    // fontFamily: 'Bebas Neue Pro Bold'
    fontFamily: 'Bebas Neue Pro Regular',
    fontSize: width * 0.048,
  },
  date: {
    // fontSize: width * 0.04,
    color: '#aab4c4',
    paddingHorizontal: width * 0.01,
    paddingTop: height * 0.01,
    fontFamily: 'Bebas Neue Pro Regular',
    fontSize: width * 0.048,
  },
  UpperRenderViewSet: {
    position: 'absolute',
    padding: 15,
    marginTop: 50,
  },
  participanttext: {
    // fontWeight: 'bold',
    color: '#1b2c5d',
    textAlign: 'center',
    // fontSize: width * 0.035,
    fontFamily: 'Bebas Neue Pro Bold',
    fontSize: width * 0.035,
  },
  onTouchViewColor: {
    width: width * 0.42,
    height: height * 0.08,
    borderWidth: 1,
    borderRadius: 25,
    margin: 8,
    backgroundColor: '#1b2c5d',
    // position:'absolute',
  },
  onTouchTextColor: {
    fontSize: width * 0.08,
    textAlign: 'center',
    // justifyContent:'center'
    color: 'white',
    fontWeight: 'bold',
    padding: 8,
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
    resizeMode: 'contain',
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
  rawBottomModalImage: {
    width: width * 0.8,
    height: height * 0.22,
    // borderRadius: width * 0.08,
    resizeMode: 'contain',
  },
  rawBottomModalView: {
    width: width * 0.8,
    height: height * 0.22,
    borderRadius: width * 0.08,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // marginTop: height * 0.3,
    alignSelf: 'center',
  },
  rawBottomButons: {
    width: width * 0.2,
    height: height * 0.065,
    backgroundColor: '#081a4f',
    marginTop: height * 0.025,
    marginLeft: width * 0.1,
    borderRadius: width * 0.018,
    alignSelf: 'center',
    justifyContent: 'center',
    // padding:width*0.04
  },
  btn: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: width * 0.04,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: width * 0.08,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // marginTop: 22
  },
  modalText: {
    textAlign: 'center',
    // fontSize: width * 0.045,
    // fontWeight: '400',
    color: '#081a4f',
    marginTop: height * 0.02,
    width: width * 0.65,
    // paddingHorizontal: width * 0.045,
    alignSelf: 'center',
    textTransform: 'uppercase',
    width: width * 0.7,
    // letterSpacing: -1,
    fontFamily: 'Bebas Neue Bold Regular',
    fontSize: width * 0.045,
  },
  scndmodalbtn: {
    width: width * 0.15,
    height: height * 0.05,
    backgroundColor: '#081a4f',
    borderRadius: width * 0.02,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.01,
  },
  scndmodalimage: {
    width: width * 0.073,
    height: height * 0.052,
    marginRight: -width * 0.02,
  },
  scndmodaltext: {
    fontSize: width * 0.045,
    textTransform: 'uppercase',
    // paddingHorizontal: width * 0.01,
    width: width * 0.7,
    alignSelf: 'center',
    // marginBottom: height * 0.0,
    color: '#081a4f',
    textAlign: 'center',
    fontFamily: 'Bebas Neue Pro Regular',
    fontSize: width * 0.048,
    lineHeight: height * 0.03
  },
  scndmodaltext2: {
    textTransform: 'uppercase',
    color: '#081a4f',
    fontFamily: 'Bebas Neue Pro Regular',
    fontSize: width * 0.052,
    marginTop: height * 0.01,
  },
  flatlistheading: {
    marginTop: height * 0.05,
    fontSize: width * 0.055,
    color: '#001d4f',
    marginLeft: width * 0.022,
    fontFamily: 'Bebas Neue Pro Bold',
    letterSpacing: 0.2,
    marginTop: height * 0.007,
  },
  flatlistdescription: {
    fontSize: width * 0.042,
    color: '#ffbc15',
    marginLeft: width * 0.0325,
    fontFamily: 'Bebas Neue Pro Regular',
  },
  flatlistdate: {
    fontSize: width * 0.04,
    color: '#001d4f',
    marginLeft: width * 0.02,
    fontFamily: 'Bebas Neue Pro Regular',
    // marginTop: height * 0.0005,
  },
});