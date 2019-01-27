const initialState = {
  lang: 'en',
};

export default function appData(state = initialState, action) {
  switch (action.type) {
    case 'DATA_UPDATE_LANG':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}
