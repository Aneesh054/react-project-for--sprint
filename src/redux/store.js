import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { UserReducer } from "./UserReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
