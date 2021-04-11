import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import withSpinner from "../components/spinner";
import Spinner from "../components/spinner/Spinner";

import { fetchCollection } from "../redux/shop/shopActions";
import {
  selectCollections,
  selectIsFetching,
} from "../redux/shop/shopSelectors";

const ShopContainer = lazy(() => import("../containers/ShopContainer"));
const Category = lazy(() => import("../components/category"));

function Shop({ match, isFetching, fetchCollectionAsync, collections }) {
  useEffect(() => {
    fetchCollectionAsync();
  }, [fetchCollectionAsync]);
  const ShopContainerWithSpinner = withSpinner(ShopContainer);
  const CategoryWithSpinner = withSpinner(Category);

  return (
    <Suspense fallback={<Spinner />}>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <ShopContainerWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CategoryWithSpinner isLoading={!collections} {...props} />
        )}
      />
    </Suspense>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionAsync: () => dispatch(fetchCollection()),
  };
};
const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  collections: selectCollections,
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
