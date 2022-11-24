import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Inputs from '../../components/Inputs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PAGE_FIVE } from '../../redux/const/const';
import { ImagePicker, launchImageLibrary } from 'react-native-image-picker';
const { width, height } = Dimensions.get('window');
import { imageUpload, profileUpdate } from "../../redux/actions/user.action"
import { useEffect } from 'react';

const Page5 = ({ setPage }) => {

  const [IdCardNo, setIdCardNo] = useState();
  const [imagename, setimageName] = useState("")
  const profileData = useSelector((state) => state?.auth?.profileData?.data)
  const profileData2 = useSelector((state) => state?.auth?.profileData?.data)
  console.log("lll", profileData);
  const USER_DATA = useSelector((state) => state?.auth?.User)
// useEffect(()=>{
// if(USER_DATA){
//   setIdCardNo(USER_DATA?.identityCardNumber)
// }else{
//   setIdCardNo()
// }
// },[USER_DATA])

  const dispatch = useDispatch()

  // const fivePageData = useSelector((state) => state?.auth?.User)
  const fivePageData = useSelector((state) => state?.user?.data)

  console.log(fivePageData, "fivePageData fivePageData fivePageData")

  const userId = useSelector((state) => state?.auth?.credential?.User?._id)
 
  const SavePageFivedata = () => {
    let idcard = 'id card aiga';
    let data = {
      identityCardNumber: IdCardNo,
      identityCard: profileData,
    };

    let allProfileData = {
      ...fivePageData,
      ...data,
 
    }

    if (data?.identityCardNumber == undefined) {
      return alert("Tous les champs sont obligatoires")
    } else {


      delete allProfileData._id
      dispatch(profileUpdate(allProfileData, userId, setPage))
    }
  };
  const onFromPickerImage = () => {
    var options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    launchImageLibrary(options, (response) => {

      if (response) {
        dispatch(imageUpload(response.assets[0]))
        console.log("func", imageUpload)
        setimageName(response.assets[0].type)
        console.log("datadtadtatta", response)

      }
    });
  }

  return (
    <View>
      <View style={styles.mainview}>
        <Text style={styles.txt}>Importe ta carte d’identité juste ici :</Text>
        <TouchableOpacity
          onPress={() => onFromPickerImage()}
          style={styles.btn}>
          <Text style={styles.text}> {profileData2?"Image" + profileData2:"Importer un fichier..."  }</Text>
          <Image
            style={styles.img}
            source={require('../../assets/images/download.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mainview}>
        <Text style={styles.txt}>
          ...ou bien rentre manuellement ton numéro d’identité juste là !
        </Text>
        <Inputs
          placeholder="Lorem Ipsum..."
          height={height * 0.045}
          width={width * 0.925}
          heights={height * 0.05}
          type="numeric"
          setvalue={setIdCardNo}
          value={IdCardNo}
        />
      </View>
      <TouchableOpacity
        onPress={() => SavePageFivedata()}
        style={styles.touch}>
        <Text style={styles.text2}>Enregistrer les modifications</Text>
      </TouchableOpacity>
      <View style={{ height: height * 0.096 }}></View>
    </View>
  );
};

export default Page5;

const styles = StyleSheet.create({
  txt: {
    color: 'black',
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.006,
    fontSize: width * 0.043,
    fontFamily: 'Bebas Neue Pro Bold',
    letterSpacing: 0.1,
  },
  mainview: {
    marginTop: height * 0.026,
  },
  btn: {
    width: width * 0.925,
    height: height * 0.045,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: width * 0.011,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.01,
    alignItems: 'center',
    borderColor: '#bfc5d2',
  },
  img: {
    width: width * 0.035,
    height: height * 0.035,
    resizeMode: 'contain',
    tintColor: '#909090',
  },
  text: {
    color: '#909090',
    fontSize: width * 0.035,
  },
  text2: {
    color: '#fdbf18',
    fontSize: width * 0.035,
    fontWeight: '700',
  },
  touch: {
    height: height * 0.05,
    borderWidth: 2,
    borderColor: '#fdbf18',
    width: width * 0.65,
    marginTop: height * 0.02,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.009,
  },
});
