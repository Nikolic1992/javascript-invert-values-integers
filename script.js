const invert = (array) => array.map((num) => (num === 0 ? 0 : -num));

console.log(invert([1, 2, 3, 4, 5])); //  ([-1, -2, -3, -4, -5])
console.log(invert([1, -2, 3, -4, 5])); //  ([-1, 2, -3, 4, -5])
console.log(invert([])); //  ([])
