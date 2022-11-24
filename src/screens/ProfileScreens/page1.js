import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Inputs from '../../components/Inputs';
import Colors from '../../assets/colors/Colors';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { SET_PAGE_ONE } from '../../redux/const/const';
import { update_First_Page } from '../../redux/actions/user.action';

let { width, height } = Dimensions.get('window');
const Page1 = ({ setPage }) => {
  const USER_DATA = useSelector((state) => state?.auth?.User)
  console.log(USER_DATA)

  const [firstName, setFirstName] = useState()
  const [lastName, setlastName] = useState()
  const [phone, setPhone] = useState("")
  const dispatch = useDispatch()


  // useEffect(() => {
  //   if (USER_DATA) {
  //     setFirstName(USER_DATA?.firstName)
  //     setlastName(USER_DATA?.lastName)
  //     setPhone(0 + USER_DATA?.phone)
  //   } else {
  //     setFirstName()
  //     setlastName()
  //     setPhone()
  //   }

  // }, [USER_DATA])


  const userId = useSelector((state) => state?.auth?.credential?.User?._id)
  // const USER_DATA=useSelector((state)=>state?.auth?.User?.data)
  // console.log("USER_DATAUSER_DATAUSER_DATAUSER_DATA",USER_DATA)
  const setPageOneData = () => {
    let data = {
      firstName,
      lastName,
      phone: phone?.slice(1),
    }
    if (firstName === undefined || lastName === undefined || phone === undefined) {
      return alert("Tous les champs sont obligatoires")
    }
    else {
      dispatch(update_First_Page(userId, data, setPage))
    }
  }
  return (
    <View style={{ marginTop: height * 0.015 }}>
      <Text style={styles.text}>Ton prénom</Text>
      <Inputs
        placeholder="Laurent"
        height={height * 0.055}
        width={width * 0.79}
        setvalue={setFirstName}
        value={firstName}
      />
      <Text style={styles.text}>Ton nom</Text>
      <Inputs
        placeholder="Durant"
        height={height * 0.055}
        width={width * 0.79}
        setvalue={setlastName}
        value={lastName}
      />
      <Text style={styles.text}>Ton num’</Text>
      <Inputs
        placeholder="06.06.06.06.06"
        height={height * 0.055}
        width={width * 0.79}
        type="numeric"
        setvalue={setPhone}
        value={phone}
        maxletter={10}
      />
      <TouchableOpacity

        onPress={() => setPageOneData()}

        style={styles.touch}>
        <Text style={styles.text2}>Enregistrer les modifications</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1;

const styles = StyleSheet.create({
  text: {
    fontSize: width * 0.045,
    // fontWeight: '700',
    color: 'black',
    marginLeft: width * 0.1,
    marginVertical: height * 0.005,
    fontFamily: 'Bebas Neue Pro Bold',
  }, text2: {
    color: '#fdbf18',
    fontSize: width * 0.035,
    fontWeight: '700',
  }, touch: {
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
