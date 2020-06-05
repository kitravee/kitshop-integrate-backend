import { UserActionTypes } from "./user.types";
// action is function
// this is ude
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
