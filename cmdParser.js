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
  const update = false;

  if (folderIndex < 0 && actionIndex < 0) {
    throw Error('need -f or -a option to be set');
  }

  let actions = [];
  let folder = '';

  if (actionIndex > 0 && folderIndex < 0) {
    update = true;
    const currPath = process.cwd().split('/');
    folder = currPath[currPath.length - 1];
    actions = require('./actions')(arr.slice(actionIndex + 1, actionTo), folder);
  } else if (actionIndex > 0) {
    let actionTo = actionIndex > folderIndex ? arr.length : folderIndex;
    folder = arr[folderIndex + 1];
    actions = require('./actions')(arr.slice(actionIndex + 1, actionTo), folder);
  } else if (typeof arr[folderIndex + 1] !== undefined) {
    folder = arr[folderIndex + 1];
  }

  return {
    projectPath: arr[1],
    folder,
    actions,
    update,
  };
}
