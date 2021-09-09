## Introduction to Babel

https://babeljs.io/docs/en/

---

## What Is Babel?


Babel is java script transpiler. It takes a JavaScript code and transpile it to another (older) version of JavaScript.


Babel can also transpile TypeScript and React❗


> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

*https://babeljs.io/docs/en/*

---

## What Babel Is Not?


Babel is not a bundler❗

---

## Why Do We Need Babel?


When we are writing a client side code
<ul>
  <li class="fragment">to use newest JavaScript features</li>
  <li class="fragment">to use TypeScript</li>
  <li class="fragment">to use React</li>
</ul>

---

## What Can Babel Do?


<ul>
  <li>transform syntax</li>
  <li class="fragment">polyfill</li>
</ul>

---

## How Babel Work?


Babel is build out of 
<ul>
  <li class="fragment">plugins</li>
  <li class="fragment">presets</li>
</ul>


### Plugins
Are just JavaScript functions.


Order of plugins execution from configuration file is left to right.


### Presets
Are sets of functions.


Order of presets execution from configuration file is right to left.


Transpilation is just execution of following plugins and presets on source code.


### Options
Plugins and presets can be configurable via options.

---

## How To Use Babel?


Install babel packages
<ul>
  <li class="fragment"><code>@babel/core</code></li>
  <li class="fragment"><code>@babel/cli</code></li>
</ul>


Install plugins and presets. For example `@babel/preset-env`.


Add `babel.config.json` to the project.

---

## How to configure Babel?


<ul>
  <li><code>babel.config.json</code> file - for monorepo (working directory as root)</li>
  <li class="fragment"><code>.babelrc.json</code> files - 
  usually use in multi project build (separate file for each subproject directory)</li>
  <li class="fragment"><code>package.json</code> (`babel` key) file</li>
</ul>

---

## Plugins Example
https://github.com/mkmsobieraj/introduction-to-babel-examples/tree/i-plugins-example

---

## Presets Example
https://github.com/mkmsobieraj/introduction-to-babel-examples/tree/ii-presets-example

---

## Typescript With Babel Example
https://github.com/mkmsobieraj/introduction-to-babel-examples/tree/iii-typescript-with-babel-example