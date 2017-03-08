import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

// TODO: Incomplete. Come back to this.
const errorReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [];
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
  }
};

export default errorReducer;
