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
 *
 * @param {string} folder
 * @param {boolean} namespace
 * @param {boolean} partial
 */
const getNamespace = (folder, namespace, partial) => {
  if (namespace) {
    return '';
  }

  if (!partial) {
    return folder;
  }
  const f = folder.split('/');
  return f[f.length - 1];
};

/**
 * Creates the constants from the action array and returns it as an array of
 * objects.
 * @param {Array} arr An Array of actions
 * @param {string} namespace
 * @returns {Array} An Array of objects
 */
module.exports = ({actions, folder, namespace, partial}) => {
  if (actions.length === 0) {
    return [];
  }
  const namespaceConstants = getNamespace(folder, namespace, partial);
  console.log(namespaceConstants);
  return actions.map(d => ({
      constant: createConstant(d, namespaceConstants),
      action: d,
    })
  );
}
