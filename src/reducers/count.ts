import { count_actions_type } from "../actions/count";

export type count_state_type = {
  value: number;
};

const initial_state = { value: 0 };

export function count_reducer(
  state: count_state_type = initial_state,
  action: count_actions_type
) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return { value: state.value };
  }
}
