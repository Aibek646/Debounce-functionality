var debounce = function (fn, t) {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const t = 150;
let start = Date.now();

const log = (...inputs) => {
  console.log([Date.now() - start, inputs]);
};
const dLog = debounce(log, t);

setTimeout(() => {
  dLog([1, 2]);
}, 50);

setTimeout(() => {
  dLog([3, 4]);
}, 300);

setTimeout(() => {
  dLog([5, 6]);
}, 300);
