import UserActionTypes from "./user.types";

// reducer
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

// action = {type:"", payload:""}
const userReducer = (state = INITIAL_STATE, action) => {
  // in case of action type match
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    // ##every single reducer gets every single action that ever gets fired,
    // ##even if those action are not related to this reducer
    default:
      return state;
  }
};

export default userReducer;
