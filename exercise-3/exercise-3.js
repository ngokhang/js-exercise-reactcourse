function removeFromArray(array, deleteItem) {
  // Coding here
  if (!Array.isArray(array) || !deleteItem) return false;
  array.splice(array.indexOf(deleteItem), 1);
  return array;
}

