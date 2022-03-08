export type count_actions_type = { type: "INCREMENT" } | { type: "DECREMENT" };
export type count_action_creators_type = {
  increment: () => {
    type: string;
  };
  decrement: () => {
    type: string;
  };
};

export const count_action_creators = {
  increment: increment,
  decrement: decrement,
};

function increment() {
  return { type: "INCREMENT" };
}

function decrement() {
  return { type: "DECREMENT" };
}
