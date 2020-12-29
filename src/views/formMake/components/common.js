export function assign(param = {}) {
  let obj = {};
  for (let key in param) {
    if (param[key] !== "" && param[key] !== null && param[key] !== undefined) {
      obj[key] = param[key];
    }
  }
  return obj;
}
