const INITIAL_STATE = [
  { id: 1, text: "Fazer Mate" },
  { id: 2, text: "Comer mingau" }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
