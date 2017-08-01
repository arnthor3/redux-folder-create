import * as CONSTANTS from './example.constants.js';;
import initialState from './example.initialState.js';;

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ON_SUBMIT:
      return Object.assign({}, state, {});
    case CONSTANTS.ON_CLICK:
      return Object.assign({}, state, {});
    case CONSTANTS.ON_RESOLVE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
