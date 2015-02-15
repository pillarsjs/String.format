/* jslint node: true */
"use strict";

require('json.decycled');

String.format = format;
String.prototype.format = function(params){
  return format(this.toString(),params);
};
function format(string,params){
  var replaced = string.replace(/\{([a-z0-9\$\_]+(?:\.[a-z0-9\-\_]+)*)\}/gmi,function(match,capture,index,all){
    var replace;
    try {
      capture = '["'+capture.split('.').join('"]["')+'"]';
      replace = eval('params'+capture);
      replace = JSON.decycled(replace).replace(/(^\"|\"$)/g,'').replace(/(\\n|\\r)/g,'\n').replace(/\\t/g,'\t');
      return replace;
    } catch(error){
      return match;
    }
  });
  return replaced;
}

/* ------------------------- *

var text = "Hello {name} {lastname}!";
var params = {
  name:'Homer',
  lastname:'Simpson'
};
console.log(text.format(params));



var text = "Hello {user.name} {user.lastname}! {msg}";
var params = {
  user:{
    name:'Homer',
    lastname:'Simpson'
  },
  msg:'How are you?'
};
console.log(text.format(params));



var text = "Option one:{0},two:{1},three:{2}.";
var params = ['start','stop','restart'];
console.log(text.format(params));



var text = "Your tags: {tags}, and your config:{config}.";
var params = {
  tags:['yellow','astronaut','donuts','ouch!'],
  config:{
    skin:'yellow',
    hair:false,
    intellectual:undefined
  }
};
console.log(text.format(params));



/* ------------------------- */