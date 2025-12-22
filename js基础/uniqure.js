const uniqure = (arr) => {
  var unique = {};
  arr.forEach(function (a) {
    unique[JSON.stringify(a)] = 1;
  });
  console.log({ unique });
  arr = Object.keys(unique).map(function (u) {
    return JSON.parse(u);
  });
  return arr;
};
console.log(
  uniqure([
    {},
    {},
    1,
    2,
    3,
    3,
    { a: 1 },
    { a: 1 },
    { c: function () {} },
    { c: function a() {} },
  ]),
);
