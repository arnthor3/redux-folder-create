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