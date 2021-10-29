import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "../../reducers";

const StoreWrapper = ({ children, initialState = {} }) => {
  const store = createStore(reducer, initialState);
  return <Provider store={store}>{children}</Provider>;
};

export default StoreWrapper;
