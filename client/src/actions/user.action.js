import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (uid) => {
  return (dispatch) => {
    // dispatch c'est ce qu'on envoie au reducer
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
        // toute la data qu'on aura été chercher on la passe au reducer
      })
      .catch((err) => console.log(err));
  };
};
