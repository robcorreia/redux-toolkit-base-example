import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contador from "./reducers/contador";
import fotos from "./reducers/fotos";
import logger from "./middleware/logger";

const reducer = combineReducers({ contador, fotos });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
