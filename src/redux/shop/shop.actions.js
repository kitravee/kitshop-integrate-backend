import ShopActionTypes from "./shop.types";
// action is function
// this is ude
export const updateCollections = (item) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: item,
});
