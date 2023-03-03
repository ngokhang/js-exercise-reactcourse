function repeatString(string, num) {
  // Coding here
  if (!string || !num) {
    return;
  }
  // let result = '';
  // for (let i = 0; i < num; i++) {
  //   result += string;
  // }

  let a = Array.from(Array(num).keys());
  // a.forEach(() => {
  //   result += string;
  // })
  const res = a.reduce((pre, curr) => {
    return pre += string;
  }, '')
  return res;
}

console.log(repeatString('hey', 3));
