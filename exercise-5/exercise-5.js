function checkUsersValid(goodUsers) {
  if (!Array.isArray(goodUsers)) return false;
  goodUsers = goodUsers.map(user => JSON.stringify(user));
  return function allUsersValid(submittedUsers) {
    // Coding here
    if (!Array.isArray(submittedUsers)) return false;
    submittedUsers = submittedUsers.map(user => JSON.stringify(user));
    return submittedUsers.every(user => goodUsers.includes(user));
  };
}