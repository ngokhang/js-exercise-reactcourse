function checkUsersValid(goodUsers) {
  if (!Array.isArray(goodUsers)) return false;
  goodUsers = goodUsers.sort((a, b) => a - b);
  return function allUsersValid(submittedUsers) {
    // Coding here
    if (!Array.isArray(submittedUsers)) return false;
    return submittedUsers.every(user => {
      user = JSON.stringify(user);
      if (goodUsers.some(userGood => JSON.stringify(userGood) === user)) {
        return true; 
      }
      return false;
    })
  };
}