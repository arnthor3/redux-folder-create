import * as CONSTANTS from './example.constants.js';
import initialState from './example.initialState.js'
export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.EXAMPLE_ON_SUBMIT:
      return Object.assign({}, state, {});
    case CONSTANTS.EXAMPLE_ON_CLICK:
      return Object.assign({}, state, {});
    case CONSTANTS.EXAMPLE_ON_RESOLVE:
      return Object.assign({}, state, {});

    
    case CONSTANTS.EXAMPLE_ON_DONE:
      return Object.assign({}, state, {});
    case CONSTANTS.EXAMPLE_ON_ERROR:
      return Object.assign({}, state, {});
    case CONSTANTS.EXAMPLE_CLICK_BANNER:
      return Object.assign({}, state, {});
default:
      return state;
  }
}