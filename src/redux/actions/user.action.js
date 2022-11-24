import axios from "axios";
import { Alert } from "react-native";
import { base_URL, base_URL_Muhib } from "../../config/config";
import { LOG_IN, REGISTER, FORGET_PASSWORD, SEND_OTP, LOG_OUT, ID_CARD_IMAGE, FORGET_INNER_PASSWORD, GET_KIFFS_DATA, CONSULT_DATA, RELEVENT, DATA_EMPTY, SET_PAGE_ONE, SET_PAGE_TWO, SET_PAGE_THREE, SET_PAGE_FOUR, PROFILE_IMAGE } from "../const/const";


export const userLogin = (data, setLoading, setError) => async (dispatch) => {
  try {
    setLoading(true)
    const response = await axios.post(`${base_URL}/user/login`, data)
    console.log(response)
    if (response?.data?.data?.success) {
      setLoading(false)
      dispatch({
        type: LOG_IN,
        payload: response?.data?.data
      })
    }
  }
  catch (error) {
    setLoading(false)
    setError(true)
    console.log(error)
  }
};


export const registerUser = (data, setLoading2, setError2, refRBSheet, refRBSheet2) => async (dispatch) => {
  //  console.log("register",data)
  try {
    setLoading2(true)
    const response = await axios.post(`${base_URL}/user/register`, data)
    console.log("register",response)
    if (response?.data?.data?.success) {
      refRBSheet.current.open()
      refRBSheet2.current.close()
      setLoading2(false)
    }
  }
  catch (error) {
    setLoading2(false)
    setError2(true)
    console.log(error)
  }
};

export const forget_Password = (data, setM2, setM3) => async (dispatch) => {
  try {
    const response = await axios.post(`${base_URL}/user/sendotp`, data)
    // console.log(response.data,"khjgjhgkgkjgkg")
    if (response?.data?.data?.success) {
      setM2(false)
      setM3(true)
      dispatch({
        type: SEND_OTP,
        payload: data
      })
    }
  }
  catch (error) {
    console.log(error)
  }
};


export const forget_Inner_Password = (data, setPage) => async (dispatch) => {
  try {
    const response = await axios.post(`${base_URL}/user/sendotp`, data)
    // console.log(response.data)
    if (response?.data?.data?.success) {
      setPage(4)
      dispatch({
        type: FORGET_INNER_PASSWORD,
        payload: data
      })
    }
  }
  catch (error) {
    console.log(error)
  }
};



export const userVerifyInfo = (data, setpasswordSet) => async () => {
  console.log("canhbdkjbs csbkj xm ckjs sck b",data)
  try {
    const response = await axios.post(`${base_URL}/user/verfi`, data)
    console.log(response.data)
    if (response?.data) {
      setpasswordSet(true)
    }
  }
  catch (error) {
    console.log(error)
  }
};
export const Inner_userVerifyInfo = (data, setPage) => async () => {
  try {
    const response = await axios.post(`${base_URL}/user/verfi`, data)
    // console.log(response.data)
    if (response) {
      setPage(5)
    }
  }
  catch (error) {
    console.log(error)
  }
};
export const password_Reset = (data, refRBSheet3) => async () => {
  console.log("passwerd change",data)

  try {
    const response = await axios.post(`${base_URL}/user/confirmpass`, data)
    console.log("messsg yahan dikha bhai chitooooo",response)
    if (response) {
      // console.log("SUCCESSS")
      // (response?.data?.data?.success)
      refRBSheet3.current.close()
    }
  }
  catch (error) {
    console.log("erorrrrrrrrrrr", error)
  }
};
export const Inner_password_Reset = (data, setPage) => async () => {
  try {
    const response = await axios.post(`${base_URL}/user/confirmpass`, data)
    if (response?.data?.data?.success) {
      setPage(6)
    }
  }
  catch (error) {
    console.log("erorrrrrrrrrrr", error)
  }
};
export const imageUpload = (data) => async (dispatch) => {

  var bodyFormData = new FormData();
  bodyFormData.append('filePush', {
    uri: data.uri,
    type: data.type,
    name: data.fileName

  });

  axios.post(`${base_URL}/uploadImage`, bodyFormData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((response) => {
      console.log(response)
      dispatch(
        {
          type: ID_CARD_IMAGE,
          payload: response.data
        }
      )
    })
    .catch(err => {
      console.log("errr", err.response)
    })

};
export const profileImage = (data) => async (dispatch) => {

  var bodyFormData = new FormData();
  bodyFormData.append('filePush', {
    uri: data.uri,
    type: data.type,
    name: data.fileName

  });

  axios.post(`${base_URL}/uploadImage`, bodyFormData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then((response) => {
      console.log(response)
      dispatch(
        {
          type: PROFILE_IMAGE,
          payload: response.data
        }
      )
    })
    .catch(err => {
      console.log("errr profile image", err.response)
    })

};


export const Delete_User = (id, token) => async (dispatch) => {

  try {
    const response = await axios.delete(`${base_URL}/user/${id}`

    )
    if (response?.data?.data?.success) {
      dispatch({
        type: LOG_OUT
      })

    }
  }
  catch (error) {
    console.log("deleting", error)
  }
};


export const getKiffsData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${base_URL}/kiff`)
    if (data?.data?.success) {
      dispatch({
        type: GET_KIFFS_DATA,
        payload: data?.data?.kiffData
      })
    }
  }
  catch (error) {
    console.log("", error)
  }
};

export const profileUpdate = (data, userId, setPage) => async (dispatch) => {
  try {
    const response = await axios.put(`${base_URL}/user/${userId}`, data)
    console.log(response?.data?.data)
    // console.log(response)
    if (response?.data?.data) {
      // console.log("dispatch here",(response))
      Alert.alert(
        "Toutes nos félicitations",
        "Le profil a été mis à jour",
        [
          {
            text: "D'accord",
            onPress: () => setPage(1),
            style: "cancel",
          },
        ],
      );
      dispatch({
        type: CONSULT_DATA,
        payload: response?.data?.data,
      })
      dispatch({
        type: "EMPTY_BAR"
      })
    }
  }
  catch (error) {
    console.log(error)

  }
};


export const update_First_Page = (userId, body, setPage) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${base_URL}/user/${userId}`, body)
    console.log(data.data.data)
    if (data?.data?.success) {
      setPage(2)
      dispatch({
        type: SET_PAGE_ONE,
        payload: data.data.data,
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export const update_Second_Page = (userId, body, setPage) => async (dispatch) => {
  console.log(body)
  try {
    const { data } = await axios.put(`${base_URL}/user/${userId}`, body)
    console.log(data)
    if (data?.data?.success) {
      setPage(3)
      dispatch({
        type: SET_PAGE_TWO,
        payload: data.data.data,
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export const update_Third_Page = (userId, body, setPage) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${base_URL}/user/${userId}`, body)
    console.log(data)
    if (data?.data?.success) {
      setPage(4)
      dispatch({
        type: SET_PAGE_THREE,
        payload: data.data.data,
      })
    }
  } catch (error) {
    console.log(error);
  }
}

export const update_Fourth_Page = (userId, body, setPage) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${base_URL}/user/${userId}`, body)
    console.log(data)
    if (data?.data?.success) {
      setPage(5)
      dispatch({
        type: SET_PAGE_FOUR,
        payload: data.data.data,
      })
    }
  } catch (error) {
    console.log(error);
  }
}


export const relevant = () => async (dispatch) => {
  try {
    const response = await axios.get(`${base_URL}/revelateur`)
    // console.log("revelaothfklasgk ",response)
    return response
    // if (data?.data?.success){
    //   console.log(response)
    //    dispatch({
    //      type:RELEVENT,
    //     payload:data?.data?.relevant
    //    })
    // }
  }
  catch (error) {
    console.log("", error)
  }
};

export const Download_verify = (data, setPage, set_Inco_Password) => async (dispatch) => {


  try {
    const response = await axios.post(`${base_URL}/user/consult`, data)
    // console.log(response)
    if (response?.data) {
      console.log(response)
      setPage(9)

    }
  }
  catch (error) {
    console.log("erorrrrrrrrrrr", error)
    set_Inco_Password(true)
  }
};

export const Send_link = (data, setPage) => async (dispatch) => {
  console.log("y data", data)
  try {
    const response = await axios.post(`${base_URL}/user/emaillink`, data)
    // console.log(response)
    if (response?.data) {
      console.log("yahan aja andr", response)
      // setPage(1)
      Alert.alert(
        "Toutes nos félicitations",
        "E-mail envoyé avec succès",
        [
          {
            text: "D'accord",
            onPress: () => setPage(1),
            style: "cancel",
          },

        ],

      );
    }
  }
  catch (error) {
    console.log("erorrrrrrrrrrr", error)
  }
};


// export const getData = (token) => async (dispatch) => {
//     try{
//       const response = await axios.get(`https://www.zeltatech.com/api/v1/bucket/blogs/62e8cc206ce2141f5510d1ff`,{},{
//         headers: {
//           Authorization: 'Bearer ' + token //the token is a variable which holds the token
//         }
//       })
//       if (response.data){
//         dispatch({
//           type:"GET_DATA",
//           payload:response.data.data
//         })
//       }
//     }
//     catch(error){
//       console.log(error)
//     }
//   };