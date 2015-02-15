# String.format
Añade a [String.prototype de JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) el método `.format()`. [npm](https://www.npmjs.com/package/string.format)

Él método `String.prototype.format()` permite reemplazar en un **string** las variables pasadas como parámetro. Se reemplazan las variables encerradas entre llaves `{}`, con las siguientes posibilidades en la cadena de texto:
+ Números entre llaves: {1}, {2}
+ Variables entre llaves: {name}, {lastname}
+ Objetos entre llaves: {user.name}, {user.lastname}


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
+ [jsfiddle.net](http://jsfiddle.net/lilxelo/4drosf9p/)


##Licence
MIT
