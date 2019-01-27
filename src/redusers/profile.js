const initialState = {};

export default function profileData(state = initialState, action) {
  switch (action.type) {
    case 'PROFILE_UPDATE':
      return {
        ...state,
        userName: action.payload.userName,
        gender: action.payload.gender,
        weight: action.payload.weight,
      };
    default:
      return state;
  }
}
