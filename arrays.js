var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elem) {
  newArray = [elem, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  destNewArray = arr.unshift(elem);
  return destNewArray;
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}