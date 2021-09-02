## Introduction to Babel

---

## What Is Babel?


Babel is java script transpiler. It takes a javascript code and transpile it to another (older) version of javascript.


Babel can also transpile typescript and react❗


> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

*https://babeljs.io/docs/en/*

---

## Why Do We Need Babel?


When we writing a client side code
- to use newest `js` features
- tu use typescript
- to use react

---

## What Can Babel Do?


- transform syntax
- polyfill

---

## How Babel Is Build?


Babel is build out of 
- plugins
- presets


### Plugins
Are just javascript functions


Order of plugins execution from configuration file is left to right


### Presets
Are sets of functions


Transpilation is just execution of following plugins and presets on source code


Order of presets execution from configuration file is right to left


### Options
Plugins and presets can be configurable via options

---

## How To Use Babel?


Install babel packages
- `@babel/core`
- `@babel/cli`


Install plugins and presets. For example `@babel/preset-env`


Add to project `babel.config.json`

---

## Example of Syntax Transformation

---

## Example of Polyfill

---