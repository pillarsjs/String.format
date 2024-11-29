require('./index');

var text = "Hello {name} {lastname}!";
var params = {
  name1:'Homer',
  lastname:'Simpson'
};
console.log("01 -- " + text.format(params));