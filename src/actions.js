/**
 * Namespaces the constant with the feature name
 * @param {string} constant
 * @param {string} namespace
 * @returns {string}
 */
const createConstant = (constant, namespace = '') => {
  if (namespace) {
    const thisConst = constant.replace(/([A-Z])/g, '_$1').toUpperCase();
    const thisNamespace = typeof namespace === 'string' ? namespace.toUpperCase() : '';
    return `${thisNamespace}_${thisConst}`;
  }
  return constant.replace(/([A-Z])/g, '_$1').toUpperCase();
};

/**
 * Creates the constants from the action array and returns it as an array of
 * objects.
 * @param {Array} arr An Array of actions
 * @param {string} namespace
 * @returns {Array} An Array of objects
 */
module.exports = ({actions, folder, namespace}) => {
  if (actions.length === 0) {
    return [];
  }
  const namespaceConstants = namespace ? folder: '';
  return actions.map(d => ({
      constant: createConstant(d, namespaceConstants),
      action: d,
    })
  );
}
