import { UserActionTypes } from "./user.types";

// reducer
const INITIAL_STATE = {
  currentUser: null,
};

// action = {type:"", payload:""}
const userReducer = (state = INITIAL_STATE, action) => {
  // in case of action type match
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    // ##every single reducer gets every single action that ever gets fired,
    // ##even if those action are not related to this reducer
    default:
      return state;
  }
};

export default userReducer;
