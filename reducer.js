module.exports = (path) => (
`import * as CONSTANTS from './${path}.constants.js';
import initialState from './${path}.initialState.js';

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}`
)

