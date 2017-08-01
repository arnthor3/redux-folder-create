const actions = {};

actions.import = (folder) => (
  `import * as CONSTANTS from './${folder}.constants.js';\n`
);

actions.body = ({ action, constant}) => (
`export const ${action} = () => ({\n  type: CONSTANTS.${constant},\n  value: '',\n});\n`
)

actions.createActions = (argsActions) => (
  argsActions.map(d => actions.body(d)).join('')
);

actions.fullBody = (folder, argsActions) => (
  `${actions.import(folder)}\n${actions.createActions(argsActions)}`
);

module.exports = actions;

