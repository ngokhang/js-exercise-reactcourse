function convertNumber(number) {
  // Coding here
  if (number < 0) return false;
  let temp = number;
  let result = '';
  while (temp > 0) {
    result += Math.trunc(temp % 2).toString();
    temp = Math.trunc(temp / 2);
  }

  return result.split('').reverse().join('');
}