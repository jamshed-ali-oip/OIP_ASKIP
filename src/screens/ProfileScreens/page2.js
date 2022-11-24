import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Inputs from '../../components/Inputs';
import Selector from '../../components/Selector';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Colors from '../../components/Colors';
const { height, width } = Dimensions.get('window');
import { Gender, Austre } from '../../assets/dummydata/Questions.json';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PAGE_TWO } from '../../redux/const/const';
import { update_Second_Page } from '../../redux/actions/user.action';
import { useEffect } from 'react';

const Page2 = ({ setPage }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [Select, setSelect] = useState('');
  const [Austre1, setAustre1] = useState('');
  const [email, setemail] = useState();
  const [postal, setpostal] = useState();
  const [Address, setAddress] = useState();
  const [color, setColor] = useState(false);

  const dispatch = useDispatch()
  const secondPageData = useSelector((state) => state?.user?.data)
  const USER_DATA = useSelector((state) => state?.auth?.User)
  console.log("dgfs tarekhhhhhh", date)
  // const storeData = (data) => (dispatch) => {
  //   dispatch({
  //     type: SET_PAGE_TWO,
  //     payload: { ...secondPageData, ...data }
  //   })
  // }
  // useEffect(() => {
  //   if (USER_DATA) {
  //     setemail(USER_DATA?.email)
  //     setpostal(USER_DATA?.zipCode)
  //     setAddress(USER_DATA?.postalAddress)

  //   }
  // }, [USER_DATA])

  const userId = useSelector((state) => state?.auth?.credential?.User?._id)


  const setPageTwoData = () => {
    let data = {
      birthDate: date,
      gender: Austre1 ? Austre1.name : Select.name,
      email,
      zipCode: Number(postal),
      postalAddress: Address
    }


    if (data?.postalAddress === undefined || data?.email === undefined || data?.gender === undefined || data?.zipCode === undefined) {
      return alert("Tous les champs sont obligatoires")
    }
    else {
      // console.log(data, userId)
      dispatch(update_Second_Page(userId, { ...secondPageData, ...data }, setPage));
      // setPage(3)
    }
  }


  return (
    <ScrollView>
      <View style={{ marginTop: height * 0.025 }}>
        <View style={Styles.barline}>
          <Text style={Styles.text}>Ton genre</Text>
          <View>
            <Selector
              boxheight={height * 0.042}
              boxwidth={width * 0.5}
              dropdownwidth={width * 0.5}
              placeholder={Select.name?<Text
                style={{ color: "black" }}
              >{Select.name}</Text>: <Text> Sélécteur de genre</Text>}
              data={Gender}
              customFunction={value => setSelect(value)}
            />
            {Select.id == 3 ? (
              <View style={{ marginTop: height * 0.005 }}>
                <Selector
                  boxheight={height * 0.042}
                  boxwidth={width * 0.5}
                  dropdownwidth={width * 0.5}
                  placeholder={Austre1.name?<Text
                    style={{ color: "black" }}
                  >{Austre1.name}</Text>: <Text style={{ color: "#afafaf" }} > Sélécteur de genre</Text>}
                  data={Austre}
                  customFunction={value => setAustre1(value)}
                />
              </View>
            ) : null}
          </View>

        </View>
        <View style={Styles.barline}>
          <Text style={Styles.text}>Ton mail</Text>
          <Inputs
            placeholder="Tapez votre mail ici"
            height={height * 0.045}
            width={width * 0.5}
            heights={height * 0.05}
            setvalue={setemail}
            value={email}
          // onFocus={()=>{alert("email")}}jamshed
          />
        </View>
        <View style={Styles.barline}>
          <Text style={Styles.text}>Ta date de naissance</Text>

          <TouchableOpacity
            style={{
              height: height * 0.05,
              width: width * 0.5,
              borderWidth: 2,
              borderColor: '#e3e6eb',
              borderRadius: width * 0.015,
              padding: width * 0.014,
            }}
            onPress={() => {
              setOpen(true);
            }}>
            <Text style={{ fontSize: width * 0.035, color:color?"black": '#b0b0b0' }}>
              {moment(date).format('DD/MM/YYYY')}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={open}
            date={date}
            locale={'fr'}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setColor(true)
            }}
            confirmText="Confirmer"
            cancelText="Annuler"
            mode="date"
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <View style={Styles.barline}>
          <Text style={Styles.text}>Ton adresse</Text>
          <Inputs
            placeholder="Rue et numéro"
            height={height * 0.045}
            width={width * 0.5}
            heights={height * 0.05}
            setvalue={setAddress}
            value={Address}
          />
        </View>
        <View style={Styles.barline}>
          <Text style={[Styles.text, { marginLeft: -width * 0.35 }]}>
            Ton code postal
          </Text>
          <Inputs
            placeholder="69000"
            height={height * 0.045}
            width={width * 0.17}
            heights={height * 0.05}
            type="numeric"
            maxletter={5}
            setvalue={setpostal}
            value={postal}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => setPageTwoData()}

        style={Styles.touch}>
        <Text style={Styles.text2}>Enregistrer les modifications</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Page2;

const Styles = StyleSheet.create({
  barline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.005,
  },
  text: {
    fontSize: width * 0.046,
    color: 'black',
    width: width * 0.4,
    marginLeft: width * 0.001,
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
