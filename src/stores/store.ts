import { createStore } from "redux";
import { root_reducer } from "../reducers/root";

export const store = createStore(root_reducer, {});
