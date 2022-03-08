import { count_actions_type, count_action_names } from "../actions/count";

export type count_state_type = {
  value: number;
};

const initial_state = { value: 0 };

export function count_reducer(
  state: count_state_type = initial_state,
  action: count_actions_type
) {
  switch (action.type) {
    case count_action_names.increment:
      return { value: state.value + 1 };
    case count_action_names.decrement:
      return { value: state.value - 1 };
    default:
      return { value: state.value };
  }
}
