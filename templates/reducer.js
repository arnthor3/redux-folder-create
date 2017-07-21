module.exports = (
`import * as CONSTANTS from './<%= folder %>.constants.js';;
import initialState from './<%= folder %>.initialState.js';;

export default (state = initialState, action) => {
  switch (action.type) {<% actions.forEach( (action) => { %>
    case CONSTANTS.<%= action.constant%>:
      return Object.assign({}, state, {});
    <% }) %>
    default:
      return state;
  }
}
`);
