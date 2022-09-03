// 루트 리듀서를 만듬
import { combineReducers } from "redux";
import users, { usersSaga } from "./users";
import { all } from "redux-saga/effects";

export function* rootSaga() {
    yield all([usersSaga]);
}
  
const rootReducer = combineReducers({ users });
  
export default rootReducer;