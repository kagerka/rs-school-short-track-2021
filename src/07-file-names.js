/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const n = names;
  const arr = [];
  const a = [];
  let num = 0;
  for (let i = 0; i < n.length; i++) {
    if (i === 0) {
      arr.push(n[i]);
      a.push(n[i]);
    }
    if (i > 0) {
      if (n[i] === a[a.lastIndexOf(n[i])]) {
        num = a.filter((item) => (item === n[i])).length;
        arr.push(`${n[i]}(${num})`);
        a.push(n[i]);
      } else if (n[i] === arr[arr.lastIndexOf(n[i])]) {
        num = arr.filter((item) => (item === n[i])).length;
        arr.push(`${n[i]}(${num})`);
        a.push(n[i]);
      } else {
        arr.push(n[i]);
        a.push(n[i]);
      }
    }
  }
  return arr;
}

module.exports = renameFiles;
