var a = 1;

function foo() {
  var b = 2;

  function innertFoo() {
    // var a = 2;
    if (true) {
      let a = 3;
    }
    return a + b;
  }
  return innertFoo() + a;
}
console.log(foo());
