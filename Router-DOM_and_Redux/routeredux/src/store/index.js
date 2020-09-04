import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";

import history from "../routes/history";

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  connectRouter(history)(() => {}),
  applyMiddleware(...middlewares)
);

export default store;
