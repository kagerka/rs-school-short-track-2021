/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = [];
  let result;
  for (let i = 0; i < n.length; i++) {
    if (n[i].match(/[0-9]/) || n[i].match(/[A-F]/) || n[i].match(/-/)) {
      arr.push(n[i]);
    }
  }
  arr = arr.join('');
  if (arr === n) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

module.exports = isMAC48Address;
