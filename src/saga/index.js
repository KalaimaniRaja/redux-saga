import { counterSaga } from "../actions";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([counterSaga()]);
}
       