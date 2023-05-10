import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
      return state;
  }
};

// stateUpdater
export default userReducer;
