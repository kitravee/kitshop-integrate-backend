import { createSelector } from "reselect";

// param is string but id is inteteger so we create collection ID MAP

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selecCollection = (collectionUrlParam) =>
  createSelector([selectCollection], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam],
    ),
  );
