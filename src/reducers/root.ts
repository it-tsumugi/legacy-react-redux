import { combineReducers } from "redux";
import { count_reducer } from "./count";

interface IState {
  count: { value: number };
}

const application_reducer = combineReducers<IState>({
  count: count_reducer,
});

export function root_reducer(state?: IState, action?: any) {
  return application_reducer(state, action);
}
