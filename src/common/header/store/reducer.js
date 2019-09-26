const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  const { type } = action;
  switch (type) {
    case "changeInputFocus":
      const { status } = action;
      // state.focused = !status
      return {
        focused: !status
      };
    default:
      break;
  }
  // console.log(state)
  return state;
};
