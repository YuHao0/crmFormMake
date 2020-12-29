export function assign(param = {}) {
  let obj = {};
  for (let key in param) {
    if (param[key] !== "" && param[key] !== null && param[key] !== undefined) {
      obj[key] = param[key];
    }
  }
  return obj;
}

export function permuteArr(arr, oldIndex, newIndex) {
  let oldData = arr[oldIndex];
  arr.splice(oldIndex, 1);
  arr.splice(newIndex - 1, 0, oldData);
  return arr;
}
