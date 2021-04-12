/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  let arr1 = [];
  const arr2 = [];
  const result = {};
  let domain = '';
  const count = 1;

  for (let i = 0; i < domains.length; i++) {
    arr[i] = domains[i].split('.');
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = (arr[i].length - 1); j >= 0; --j) {
      arr1.push(`.${arr[i][j]}`);
    }
    arr2[i] = arr1;
    arr1 = [];
  }

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
      domain += arr2[i][j];
      if (domain in result) {
        result[domain] = count + 1;
      } else {
        result[domain] = count;
      }
    }
    domain = '';
  }
  return result;
}
module.exports = getDNSStats;
