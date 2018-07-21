import { types } from '../actions/app';

const initialState = {
  apps: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.APP_INIT_SUCCESS:
      return {
        ...state,
        apps: action.payload,
      };
    default:
      return state;
  }
};

