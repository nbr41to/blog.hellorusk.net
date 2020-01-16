import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionTypes, ModeType } from "./types";

const persistConfig = {
  key: "HelloRuskMode",
  storage
};

const lightMode: ModeType = {
  isDarkMode: false,
  textcolor: "#000000",
  backgroundcolor: "#FFFFFF",
  linkcolor: "#1529DC"
};

const darkMode: ModeType = {
  isDarkMode: true,
  textcolor: "#FFFFFF",
  backgroundcolor: "rgb(21, 32, 43)", // Twitter Lite Color
  linkcolor: "rgb(29, 181, 262)"
};

const reducer = (state: ModeType = darkMode, action: ActionTypes) => {
  switch (action.type) {
    case "DARKMODE":
      return darkMode;
    case "WHITEMODE":
      return lightMode;
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
