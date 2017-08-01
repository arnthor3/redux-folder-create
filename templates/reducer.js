const reducer = {}

reducer.imports = (folder) => (
  `import * as CONSTANTS from './${folder}.constants.js';\nimport initialState from './${folder}.initialState.js'\n`
)

reducer.cases = (constant) => (
`    case CONSTANTS.${constant}:
      return Object.assign({}, state, {});\n`
);

reducer.functionBody = (constants) => (
`export default (state = initialState, action) => {
  switch (action.type) {
${constants.map(reducer.cases).join('')}
    default:
      return state;
  }
}`
)

reducer.fullBody = (folder, constants) => (
  `${reducer.imports(folder)}${reducer.functionBody(constants)}`
)

reducer.partial = (constants) => (
  constants.map(reducer.cases).join('')
);

module.exports = reducer;
