import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,

} from 'react-native';
import React, {useState} from 'react';
import Inputs from '../../components/Inputs';
import FormInput from '../../components/Forminput';
import {SignupBtn, Loginbtn} from '../../components/BTNS';
import { useSelector,useDispatch } from 'react-redux';
import {Delete_User} from "../../redux/actions/user.action"
import { SceneMap } from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');

const CPage1 = ({page,setPage,navigationState}) => {
  const [eye, seteye] = useState(true);
  const [eye2, seteye2] = useState(true);
  const [eye3, seteye3] = useState(true);
  const id = useSelector(state => state?.auth?.credential?.User?._id);
  const token = useSelector(state => state?.auth?.credential?.token);
  const credentialemail=useSelector(state => state?.auth?.credential?.User?.email)
  const email=useSelector(state => state?.auth?.User?.data?.email)
  const userData=useSelector(state => state?.auth?.User)
  console.log("page1 email",email)
 const dispatch=useDispatch()
  const delete_User=()=>{
dispatch(Delete_User(id,token))
  }
  

  console.log(page)
  const consultdata=()=>{
    if(email ||credentialemail ){
    setPage(7)
    }else{
      Alert.alert(
        "Attention",
        "L'e-mail n'existe pas, mettez d'abord à jour votre profil",
        [
          {
            text: "d'accord",
             onPress: () => setPage(1),
            style: "cancel",
          },
        
        ],
       
      );
    }
  }

  return (

    <View>

      <Text style={styles.heading}>
        Votre mot de passe doit contenir 4 chiffres
      </Text>
      <View>
        <FormInput
          title="Mot de passe actuel"
          placeholder="****"
          type="numeric"
          contentype={'password'}
          security={eye}
          maxletter={4}
        />
        <TouchableOpacity
          style={styles.eye}
          onPress={() => {
            seteye(!eye);
          }}>
          <Image
            source={
              eye == true
                ? require('../../assets/images/Eyeoff.png')
                : require('../../assets/images/openeye.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
           setPage(2)
          }}>
          <Text style={styles.textline}>
            Mot de passe oublié ? Je le réinitialise
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FormInput
          title="Nouveau mot de passe "
          placeholder="****"
          type="numeric"
          contentype={'password'}
          security={eye2}
          maxletter={4}
        />
        <TouchableOpacity
          style={styles.eye}
          onPress={() => {
            seteye2(!eye2);
          }}>
          <Image
            source={
              eye2 == true
                ? require('../../assets/images/Eyeoff.png')
                : require('../../assets/images/openeye.png')
            }
          />
        </TouchableOpacity>
      </View>
      <View>
        <FormInput
          title="Confirmation du nouveau mot de passe "
          placeholder="****"
          type="numeric"
          contentype={'password'}
          security={eye3}
          maxletter={4}
        />
        <TouchableOpacity
          style={styles.eye}
          onPress={() => {
            seteye3(!eye3);
          }}>
          <Image
            source={
              eye3 == true
                ? require('../../assets/images/Eyeoff.png')
                : require('../../assets/images/openeye.png')
            }
          />
        </TouchableOpacity>
      </View>
      <Loginbtn title={'Confirmer'} />
      <SignupBtn link={()=>consultdata()} title={'Télécharger mes données'} />
      <SignupBtn
      // link={()=>{delete_User()}}
            link={()=>{setPage(10)}}
       title={'Supprimer mon compte'} />
    </View>
  );
};

export default CPage1;

const styles = StyleSheet.create({
  textline: {
    // fontSize: width * 0.032,
    textDecorationLine: 'underline',
    marginTop: height * 0.01,
    marginLeft: width * 0.12,
    fontFamily: 'Bebas Neue Pro Regular',
    fontSize: width * 0.035,
    color:"#afafaf"
  },
  heading: {
    // fontSize: width * 0.035,
    textAlign: 'center',
    marginTop: height * 0.015,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Bebas Neue Pro Regular',
    fontSize: width * 0.043,
    marginBottom: height * 0.015,
  },
  eye: {
    position: 'absolute',
    marginTop: height * 0.06,
    marginLeft: width * 0.8,
    // alignItems:"center"
  },
});
