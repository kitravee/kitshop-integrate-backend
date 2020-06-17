import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToprops = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

// export const CollectionsOverviewContainer = connect(mapStateToprops)(WithSpinner(CollectionsOverview))
// same as this
export const CollectionsOverviewContainer = compose(
  connect(mapStateToprops),
  WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
