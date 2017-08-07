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
  const namespaceIndex = arr.findIndex((i) => (i.toLowerCase && i.toLowerCase()) === '-c');

  if (namespaceIndex > -1) {
    const arr1 = arr.slice(0, namespaceIndex);
    const arr2 = arr.slice(namespaceIndex + 1, arr.length);
    arr = [...arr1, ...arr2];
  }

  if (folderIndex < 0 && actionIndex < 0) {
    throw Error('need -f or -a option to be set');
  }

  if (actionIndex > 0 && folderIndex < 0) {
    return {
      actions: arr.slice(actionIndex + 1, arr.length),
      folder: '',
      namespace: namespaceIndex !== -1
    };
  }

  if (actionIndex > 0) {
    let actionTo = actionIndex > folderIndex ? arr.length : folderIndex;
    return {
      folder: arr[folderIndex + 1],
      actions: arr.slice(actionIndex + 1, actionTo),
      namespace: namespaceIndex !== -1
    };
  }

  if (typeof arr[folderIndex + 1] !== undefined) {
    return {
      folder: arr[folderIndex + 1],
      namespace: namespaceIndex !== -1
    }
  }
}
