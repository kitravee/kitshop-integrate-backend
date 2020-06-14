import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

// Now collection overview not work because we do Data normalization, so we will convert Obj -> Arr
export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
);

// Data normalization [] => {}
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null,
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
);

//!!{} = true !!false = false when notload return true so wraploading is render else

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections,
);
