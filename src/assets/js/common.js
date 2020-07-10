export function assign(obj1 = {}, obj2 = {}) {
    for (let value in obj1) {
        obj1[value] = obj2[value] == "0" ? obj2[value] : obj2[value] ? obj2[value] : "";
    }
    return obj1;
}

export function permuteArr(arr, oldIndex, newIndex) {
    let oldData = arr[oldIndex];
    arr.splice(oldIndex, 1);
    arr.splice(newIndex - 1, 0, oldData);
    return arr;
}
