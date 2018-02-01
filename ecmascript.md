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
