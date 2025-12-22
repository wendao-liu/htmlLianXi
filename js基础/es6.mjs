new Promise((reslove) => {
  setTimeout(() => {
    reslove();
  }, 1000);
}).then((value) => {
  console.log('Promise');
});
