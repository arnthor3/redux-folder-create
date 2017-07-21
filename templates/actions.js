module.exports = (
`import * as CONSTANTS from './<%= folder %>.constants.js';
<% if (actions && actions.length > 0) { %> <% actions.forEach((item) => { %>
export const <%= item.action %> = () => ({
  type: CONSTANTS.<%= item.constant %>,
  value: '',
});
  <% }) %><% } %>`
);

