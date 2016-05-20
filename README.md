# String.format
![license](https://img.shields.io/badge/license-MIT-blue.svg ) [![Build Status](https://img.shields.io/travis/pillarsjs/String.format/master.svg)](https://travis-ci.org/pillarsjs/String.format) [![npm version](https://img.shields.io/npm/v/string.format.svg)](https://www.npmjs.com/package/string.format) [![Github release](https://img.shields.io/github/release/bifuer/String.format.svg)](https://github.com/pillarsjs/String.format) [![npm downloads](https://img.shields.io/npm/dm/string.format.svg)](https://www.npmjs.com/package/string.format)

Languages:[[EN](#),[ES](#stringformat-es)]

Add to [JS String.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) `.format()` method which accepts as parameter an object or an array with values to be substituted in the string, based on a pattern.

> String.format uses [JSON.decycled](https://github.com/pillarsjs/JSON.decycled) for show Objects as String without circular references errors and some related problems.

> For Date object format you can use [Date.format](https://github.com/pillarsjs/Date.format)

[npm](https://www.npmjs.com/package/string.format)

```javascript
require('string.format');
```

```javascript
var text = "Hello {name} {lastname}!";
var params = {
  name:'Homer',
  lastname:'Simpson'
};
console.log("01 -- " + text.format(params));
//>> 01 -- Hello Homer Simpson!
```

```javascript
var text = "Hello {user.name} {user.lastname}! {msg}";
var params = {
  user:{
    name:'Homer',
    lastname:'Simpson'
  },
  msg:'How are you?'
};
console.log("02 -- " + text.format(params));
//>>  02 -- Hello Homer Simpson! How are you?
```

```javascript
var text = "Option one:{0},two:{1},three:{2}.";
var params = ['start','stop','restart'];
console.log("03 -- " + text.format(params));
//>> 03 -- Option one:start,two:stop,three:restart.
```

```javascript
var text = "Your tags: {tags}, and your config:{config}.";
var params = {
  tags:['yellow','astronaut','donuts','ouch!'],
  config:{
    skin:'yellow',
    hair:false,
    intellectual:undefined
  }
};
console.log("04 -- " + text.format(params));
//>>  04 -- Your tags: ["yellow","astronaut","donuts","ouch!"], and your config:{"skin":"yellow","hair":false}.
```

##Example
+ [Example Code - jsfiddle.net](http://jsfiddle.net/lilxelo/4drosf9p/)

## Licence
MIT

---

## String.format (es)

Añade a [String.prototype de JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) el método `.format()` que acepta como parámetro un objeto o un array con valores que serán sustituidos en el string en base a un patrón de sustitución.

> String.format utiliza [JSON.decycled](https://github.com/pillarsjs/JSON.decycled) para monstar objetos como strings sin errores de referencia circular y otros problemas relacionados.

> Para ampliar las funciones de String.format en el caso de objetos Date puede resultarte util [Date.format](https://github.com/pillarsjs/Date.format)

[npm](https://www.npmjs.com/package/string.format)

## Licencia
MIT
