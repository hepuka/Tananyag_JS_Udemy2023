function mergeArrays(arr1, arr2) {
  let arr = [...arr1, ...arr2].sort((a, b) => a - b);

  return Array.from(new Set([...arr]));

  // return Array.from(new Set([...arr1, ...arr2].sort((a, b) => a - b)));
}

console.log(mergeArrays([1, 3, 5], [1, 2, 3, 4]));
