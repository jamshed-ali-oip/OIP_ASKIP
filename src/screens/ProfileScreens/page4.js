import { Dimensions, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Selector from '../../components/Selector';
import Inputs from '../../components/Inputs';
import { useDispatch, useSelector } from 'react-redux';
const { width, height } = Dimensions.get('window');
import {
  Question1,
  // Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7
} from '../../assets/dummydata/Questions.json';
import { SET_PAGE_FOUR } from '../../redux/const/const';
import { relevant, update_Fourth_Page } from '../../redux/actions/user.action';
import RelevatorSelector from '../../components/relevatorSelector';
import axios from 'axios';
import { base_URL } from '../../config/config';
import { useEffect } from 'react';

const Page4 = ({props,setPage}) => {
  const [d1, setd1] = useState();
  const [relevantData, setRelevantData] = useState();
  const dispatch = useDispatch()
  const data = [
    {
      id: 0,
      name: ' ali',
    },
    {
      id: 1,
      name: ' ahmed',
    },
    {
      id: 2,
      name: ' muhammad',
    },
  ];
  const [Q, setQ] = useState('');
  const [Q1, setQ1] = useState('');
  const [Q2, setQ2] = useState('');
  const [Q3, setQ3] = useState('');
  const [Q4, setQ4] = useState('');
  const [Q5, setQ5] = useState('');
  const [Q6, setQ6] = useState('');
  const [Q7, setQ7] = useState('');
  const fourPageData = useSelector((state) => state?.user?.data)
  const USER_DATA = useSelector((state) => state?.auth?.User)
  const revelator = useSelector((state) => state?.user)

  // useEffect(()=>{

  

  // },[USER_DATA])
  console.log("first", revelator)
  const PageFourData = (data) => (dispatch) => {
    dispatch({
      type: SET_PAGE_FOUR,
      payload: { ...fourPageData, ...data }

    })
    
  }
  const userId = useSelector((state)=>state?.auth?.credential?.User?._id)
  const savePageFourdata = () => {

    let data = {
      meetLocation: Q,
      disabledWorker: Q1.id == 2 ? false : true,
      relatedRevelateur: Q2._id,
      registeredSPE: Q3.name,
      needSupport: Q4.name,
      futurGoal: Q5.name,
      degreeLevel: Q6.name,
      professionalSituation: Q7.name
    } 
    // console.log(data)
    if (data?.meetLocation == undefined|| data?.relatedRevelateur == undefined || data?.registeredSPE == undefined || data?.needSupport == undefined || data?.futurGoal == undefined || data?.degreeLevel == undefined||data?.professionalSituation==undefined){
      return alert("Tous les champs sont obligatoires")
    }else{
      // console.log("ok")
      dispatch(update_Fourth_Page(userId,{ ...fourPageData, ...data },setPage))
      // setPage(5)
    }
    
  }
  
  const fetchData = async () =>{
    const {data} = await dispatch(relevant())
    // console.log(data,"------------------------------------------")
    setRelevantData(data)
  }
  let QuestionNo2 = relevantData?.data?.findRevelateur
  console.log(QuestionNo2,"QQQQQQQQQQQQQQQQQQQQQQQQQ")


  useEffect(() => {
   fetchData()
    },[])
  

  const relevator=()=>{
    useDispatch(relevant(userId))
  }
console.log(Q2,"kfklsafaskdgfkjefjgaskljfglkdsjaglufk")
  return (
    <ScrollView>
      <View style={{ marginTop: height * 0.01 }}>
        <View style={styles.mainview}>
          <Text style={styles.txt}>Où nous sommes-nous rencontrés ?</Text>
          <Inputs
            placeholder="Répondez ici..."
            height={height * 0.045}
            width={width * 0.925}
            heights={height * 0.05}
            value={Q}
            setvalue={setQ}
          />
        </View>
        <View style={styles.mainview}>
          <Text style={styles.txt}>Tu es un travailleur handicapé?</Text>
          <Selector
            boxheight={height * 0.045}
            boxwidth={width * 0.925}
            dropdownwidth={width * 0.92}
            placeholder={Q1.name?<Text
              style={{ color: "black" }}
            >{Q1.name}</Text>: <Text style={{ color: "#afafaf" }} > Sélécteur de genre</Text>}
            data={Question1}
            customFunction={value => setQ1(value)}
          />
        </View>
        <View style={styles.mainview}>
          <Text style={styles.txt}>Ton révélateur?</Text>
          <RelevatorSelector
            boxheight={height * 0.045}
            boxwidth={width * 0.925}
            placeholder={Q2.firstName == undefined  ?<Text  style={{ color: "#afafaf" }} > Sélécteur de genre</Text>:<Text
            style={{ color: "black" }}
            >{Q2.firstName +" "+ Q2.lastName}</Text>}
            customFunction={value => setQ2(value)}
            data={QuestionNo2}
          />
        </View>
        <View style={styles.mainview}>
          <Text style={styles.txt}>Tu es inscrit aux SPE?</Text>
          <Selector
            boxheight={height * 0.045}
            boxwidth={width * 0.925}
            dropdownwidth={width * 0.92}
            placeholder={Q3.name ?<Text
              style={{ color: "black" }}
            >{Q3.name}</Text>: <Text style={{ color: "#afafaf" }} > Sélécteur de genre</Text>}
            data={Question3}
            customFunction={value => setQ3(value)}
          />
        </View>
        <View style={styles.mainview}>
          <Text style={styles.txt}>Tu as besoin d’un acommpagnement à...?</Text>
          <Selector
            boxheight={height * 0.045}
            boxwidth={width * 0.925}
            dropdownwidth={width * 0.92}
            placeholder={Q4.name ?<Text
              style={{ color: "black" }}
            >{Q4.name}</Text>: <Text style={{ color: "#afafaf" }} > Sélécteur de genre</Text>}
            data={Question4}
            customFunction={value => setQ4(value)}
          />
        </View>
        <View style={styles.mainview}>
          <Text style={styles.txt}>Ton envie pour demain c’est...?</Text>
          <Selector
            boxheight={height * 0.045}
            boxwidth={width * 0.925}
            dropdownwidth={width * 0.92}
            placeholder={Q5.name?<Text
              style={{ color: "black" }}
            >{Q5.name}</Text>: <Text style={{ color: "#afafaf" }} > Sélécteur de genre</Text>}
            data={Question5}
            customFunction={value => setQ5(value)}
          />
        </View>
        <View style={styles.mainview}>
          <Text style={styles.txt}>Ton niveau de qualification?</Text>
          <Selector
            boxheight={height * 0.045}
            boxwidth={width * 0.925}
            dropdownwidth={width * 0.92}
            placeholder={Q6.name ?<Text
              style={{ color: "black" }}
            >{Q6.name}</Text>: <Text style={{ color: "#afafaf" }} > Sélécteur de genre</Text>}
            data={Question6}
            customFunction={value => setQ6(value)}
          />
        </View>
        <View style={styles.mainview}>
          <Text style={styles.txt}>Ta situation professionnelle?</Text>
          <Selector
            boxheight={height * 0.045}
            boxwidth={width * 0.925}
            dropdownwidth={width * 0.92}
            placeholder={Q7.name?<Text
              style={{ color: "black" }}
            >{Q7.name}</Text>: <Text style={{ color: "#afafaf" }} > Sélécteur de genre</Text>}
            data={Question7}
            customFunction={value => setQ7(value)}
          />
        </View>
        <TouchableOpacity
          onPress={() => savePageFourdata()}
          style={styles.touch}>
          <Text style={styles.text2}>Enregistrer les modifications</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Page4;

const styles = StyleSheet.create({
  txt: {
    color: 'black',
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.006,
    // fontWeight: '600',
    fontSize: width * 0.043,
    fontFamily: 'Bebas Neue Pro Bold',
  },
  mainview: {
    marginTop: height * 0.01,
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
