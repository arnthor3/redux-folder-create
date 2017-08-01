const path = require('path');
/**
 * @param {array} arr - the arguments array
 * @return {object}
 */
module.exports = (arr) => {
  if (!Array.isArray(arr)) {
    throw Error('Argument is not an array');
  }

  if (arr.length < 2) {
    throw Error('The arguments array is empty')
  }

  const folderIndex = arr.findIndex((i) => (i.toLowerCase && i.toLowerCase()) === '-f');
  const actionIndex = arr.findIndex((i) => (i.toLowerCase && i.toLowerCase()) === '-a');
  let update = false;

  if (folderIndex < 0 && actionIndex < 0) {
    throw Error('need -f or -a option to be set');
  }

  if (actionIndex > 0 && folderIndex < 0) {
    return {
      actions: arr.slice(actionIndex + 1, arr.length),
      folder: '',
    };
  }

  if (actionIndex > 0) {
    let actionTo = actionIndex > folderIndex ? arr.length : folderIndex;
    return {
      folder: arr[folderIndex + 1],
      actions: arr.slice(actionIndex + 1, actionTo),
    };
  }

  if (typeof arr[folderIndex + 1] !== undefined) {
    return {
      folder: arr[folderIndex + 1],
    }
  }
}
