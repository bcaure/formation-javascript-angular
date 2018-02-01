# ECMAScript 2015, 2016, 2017, 2018

[http://es6-features.org](http://es6-features.org)

## Variables

`var`: la variable est définie au scope de la fonction. Le mécanisme de _hoisting_ les référence dès le début de la fonction

```js
function foo() {
  // `i` and `bar` are already referenced here
  console.log(hoistedVariable);
  console.log(undefinedVariable); // throws ReferenceError
  for (var i = 0; i < 5; ++i) {
    var hoistedVariable = 'foo';
  }
  console.log(hoistedVariable); // prints 'foo'
}
```

`let` et `const`: la variable est définie au scope du bloc

```js
function foo() {
	console.log(scopedVariable); // throws ReferenceError
  for (let i = 0; i < 5; ++i) {
    let scopedVariable = 'foo';
    const scopedConstant = 'bar';
    scopedVariable = 'baz';
    scopedConstant = 'quux'; // throws TypeError: Assignment to constant variable
  }
  console.log(scopedVariable); // throws ReferenceError
}
```

## Arrow functions

Syntaxe plus expressive pour les _closures_

```js
const array = [1, 2, 3];

array.map(function (e) { return e * 2; });         // es5
array.map(e => e * 2);                             // es6

array.map(function (e) { return { number: e }; }); // es5
array.map(e => ({ number: e }));                   // es6

array.map(function (e, i) { return e + i; });      // es5
array.map((e, i) => e + i);                        // es6

array.map(function () { return 1; });              // es5
array.map(() => 1);                                // es6

array.forEach(function(e) { console.log(e); });    // es5
array.forEach(e => { console.log(e); });           // es6
```
