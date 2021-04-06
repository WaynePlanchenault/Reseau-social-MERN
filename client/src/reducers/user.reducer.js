import {
  GET_USER,
  UPDATE_BIO,
  UPLOAD_PICTURE,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state, //on récupère le state actuel, on ne l'écrase pas
        picture: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    case FOLLOW_USER:
      return {
        ...state,
        following: [action.payload.idToFollow, ...state.following],
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(
          (id) => id !== action.pauload.idToUnfollow
        ),
      };
    default:
      return state;
  }
}
