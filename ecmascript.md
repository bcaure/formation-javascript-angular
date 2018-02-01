# ECMAScript 2015, 2016, 2017, 2018

[http://es6-features.org](http://es6-features.org)

## Variables

`var`: la variable est définie au scope de la fonction. Le mécanisme de _hoisting_ les référence dès le début de la fonction

```js
function foo() {
  // `hoistedVariable` is already referenced here
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

## Classes

## Template literals

## Arrow functions

Syntaxe plus expressive pour les _closures_

```js
const array = [1, 2, 3];

// es5
array.map(function (e, i) { return e + i; });
// es6
array.map((e, i) => e + i);

// es5
array.map(function (e) { return e * 2; });
// es6 omit parameter parenthesis when there is only one parameter
array.map(e => e * 2);

// es5
array.map(function (e) { return { number: e }; });
// es6 enclose returned object in parenthesis
array.map(e => ({ number: e }));

// es5
array.map(function () { return 1; });
// es6
array.map(() => 1);

// es5
array.forEach(function(e) {
  if (e % 2 === 0) {
    console.log(e);
  }
});
// es6
array.forEach(e => {
  if (e % 2 === 0) {
    console.log(e);
  }
});
```

## Parameters

## Property shorthand

## Destructuring
