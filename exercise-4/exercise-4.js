function leapYears(year) {
  // Coding here
  if (year < 0) return false;
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      return true;
    } else if (year % 400 === 0) {
      return true;
    }
  }

  return false;
}