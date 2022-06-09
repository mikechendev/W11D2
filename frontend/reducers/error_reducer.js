import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const errorReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      // nextState = Object.assign({}, action.errors);
      // return nextState;
      return action.errors;
    case CLEAR_ERRORS:
      // delete nextState[action.errors];
      // return nextState;
      return state;
    default:
      return state;
  }
};

export default errorReducer;
