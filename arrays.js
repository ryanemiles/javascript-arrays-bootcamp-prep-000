var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, elem) {
  var newArray = [elem, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  var destNewArray = arr.unshift(elem);
  return destNewArray;
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  var revArray = arr.shift();
  return revArray;
}

function removeElementFromBeginningOfArray(arr) {
  var newArray = arr.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  var newArray = arr.pop();
  return newArray;
}

function removeElementFromEndOfArray(arr) {
  var newArray = arr.slice(0, arr.length - 1);
  return newArray;
}
