/**
 * Creates the constants from the action array and returns it as an array of
 * objects.
 * @param {Array} arr An Array of actions
 * @returns {Array} An Array of objects
 */
module.exports = (arr = []) => {
  if (arr.length === 0) {
    return [];
  }
  return arr.map(d => ({
      constant: d.replace(/([A-Z])/g, '_$1').toUpperCase(),
      action: d,
    })
  );
}