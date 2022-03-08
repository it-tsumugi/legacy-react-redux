export type count_actions_type = { type: "INCREMENT" } | { type: "DECREMENT" };
type count_action_type = { type: string };

export type count_action_creators_type = {
  increment: () => count_action_type;
  decrement: () => count_action_type;
};

export enum count_action_names {
  increment = "INCREMENT",
  decrement = "DECREMENT",
}

export const count_action_creators = {
  increment: increment,
  decrement: decrement,
};

function increment() {
  return { type: count_action_names.increment };
}

function decrement() {
  return { type: count_action_names.decrement };
}
