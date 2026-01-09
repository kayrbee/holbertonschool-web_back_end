var myObj = {};
var fooSym = Symbol('foo');
var otherSym = Symbol('bar');
myObj['foo'] = 'bar';
myObj[fooSym] = 'baz';
myObj[otherSym] = 'bing';
console.log(myObj.foo === 'bar');
console.log(myObj[fooSym] === 'baz');
console.log(myObj[otherSym] === 'bing');