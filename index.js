/* Deep Flatten an Object with Nested Arrays

Write a function to deeply flatten an object, including arrays and objects as nested properties. */
 
const obj = {
  a: {
    b: {
      c: 1,
      d: [2, 3],
    },
    e: 4,
  },
  f: [5, 6]
};

const deepFlatten = (obj, parentKey = '', res = {}) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const propKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        deepFlatten(obj[key], propKey, res);
      } else {
        res[propKey] = obj[key];
      }
    }
  }
  return res;
};
 
console.log(deepFlatten(obj)); 
// Output: { 'a.b.c': 1, 'a.b.d': [2, 3], 'a.e': 4, 'f': [5, 6] }
