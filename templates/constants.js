module.exports = (
`<% actions.forEach((item) => { %>export const <%= item.constant %> = '<%= item.constant%>';
<% }) %>
`);
