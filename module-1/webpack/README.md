# webpack

## Setting up webpack

```shell
yarn add --dev webpack
```

```json
"scripts": {
  "build": "webpack"
}
```

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
```

```js
console.log('Hello, world!');
```

```shell
yarn build
```

```shell
node dist/bundle.js
```

```shell
yarn build -p
```

## Setting up webpack-dev-server

```shell
yarn add --dev webpack-dev-server
```

```json
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack"
}
```

```shell
yarn start
```

Dev server started at [http://localhost:8080](http://localhost:8080)

## An HTML page

```shell
yarn add --dev html-webpack-plugin
```

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin()]
};
```

> Check devtools console
> Check devtools Element inspection, see `bundle.js`

```js
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Oh</title>
</head>
<body>
  <h1>Hi</h1>
</body>
</html>
```

```js
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    title: 'App app of Ice and Fire',
  }),
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <h1><%= htmlWebpackPlugin.options.title %></h1>
</body>
</html>
```

## Modules

```
function add(a, b) {
  return a + b;
}

export {
  add,
};

export default add;
```

```
import { add as namedAdd } from './awesome-lib';
import add from './awesome-lib';

console.log(add(1, 2));
console.log(namedAdd(1, 2));
```

## Sourcemaps

```js
function boom() {
  const character = {
    name: 'Jon Snow',
    titles: ['Lord Commander of the Night\'s Watch', 'King in the North']
  };

  return character.tit1es.join(' ');
}
```

> Check Chrome DevTools

[https://webpack.js.org/configuration/devtool/](https://webpack.js.org/configuration/devtool/)

```js
  devtool: 'source-map',
```

> Breakpoints, eval, etc
