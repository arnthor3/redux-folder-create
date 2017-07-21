module.exports = (arr) => {
  if (!Array.isArray(arr)) {
    throw Error('Argument is not an array');
  }

  if (arr.length < 2) {
    throw Error('The arguments array is empty')
  }

  const folderIndex = arr.findIndex((i) => (i.toLowerCase && i.toLowerCase()) === '-f');
  const actionIndex = arr.findIndex((i) => (i.toLowerCase && i.toLowerCase()) === '-a');

  if (folderIndex < 0) {
    throw Error('need -f option to be set');
  }

  let actions = [];
  let folder = '';

  if (actionIndex > 0) {
    let actionTo = actionIndex > folderIndex ? arr.length : folderIndex;
    folder = arr[folderIndex + 1];
    actions = require('./actions')(arr.slice(actionIndex + 1, actionTo));
  } else if (typeof arr[folderIndex + 1] !== undefined) {
    folder = arr[folderIndex + 1];
  }

  return {
    projectPath: arr[1],
    folder,
    actions,
  };
}
