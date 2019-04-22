import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import saga from "redux-saga";
import thunk from "redux-thunk";
// reducers
import marketList from "./marketList/reducer";

const rootReducer = combineReducers({
  marketList
});

// configureStore
const configureStore = () => {
  const middlewares = [thunk];

  // logger, works only in development environments
  if (process.env.NODE_ENV !== "production") {
    middlewares.push();
  }

  // redux devtool
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );

  const store = createStore(rootReducer, enhancer);

  return store;
};

export default configureStore;
