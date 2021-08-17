import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
