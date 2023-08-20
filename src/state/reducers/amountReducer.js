const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'buy':
      return state - action.payload;
    case 'refund':
      return state + action.payload;
    default:
      return state;
  }
};

export default reducer