let array = [1, 2, 3, 3, 2, 3, 3, 5, 6, 7, 7, 7, 4, 4];

function convertArrayToObject(array) {
  if (!Array.isArray(array) || array.length === 0) return false;

  return array.reduce((pre, curr) => {
    if (pre[curr]) {
      pre[curr]++;
    } else {
      pre[curr] = 1;
    }
    // pre[curr] = ++pre[curr] || 1;
    return pre;
  }, {});
};

console.log(convertArrayToObject(array));