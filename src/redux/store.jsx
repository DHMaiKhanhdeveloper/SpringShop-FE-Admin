import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
const intialstate = {};
function configureAppStore(preLoadedState) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: preLoadedState,
  });
  if (process.env.NODE_ENV !== "production" && module.hot) {
  }
  module.hot.accept("./rootReducer");
  store.replaceReducer(rootReducer);
  return store;
}
export default configureAppStore(intialstate);
