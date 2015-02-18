var test = require('unit.js');
require("../index.js");

describe("String.format Library ",function(){ 
  describe("---",function(){ 
    it("Unit Test for diferent hard values",function(){     
      function text(params){
         var t = "Hello {name} {lastname}!";
         return t.format(params);
      }
     
      test
        .value(text({name:'Homer', lastname:'Simpson'}))
          .is('Hello Homer Simpson!')
        .value(text({name:'12341234', lastname:'5'}))
          .is('Hello 12341234 5!')
        .value(text({name:'%', lastname:'$)%$($$%·($)·'}))
          .is('Hello % $)%$($$%·($)·!')
        .value(text({name:4, lastname:1}))
          .is('Hello 4 1!')
        .value(text({name:'hola', lastname:'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         '}))
          .is('Hello hola                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          !')
        .value(text({name:undefined, lastname:undefined}))
          .is('Hello {name} {lastname}!')
        .value(text({name:'----------!!!!!!!!!!!!!!!!!!!/////////////////////', lastname:'----------!!!!!!!!!!!!!!!!!!!/////////////////////'}))
          .is('Hello ----------!!!!!!!!!!!!!!!!!!!///////////////////// ----------!!!!!!!!!!!!!!!!!!!/////////////////////!')
     })

    it("Unit Test for {} ",function(){

      var a = "Hola [{0}]";
      var b = "Hola {0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}{0}";
      var c = "Hola {{{{{{{{{{{{0}";
      var d = "Hola {0}}}}}}}}}}}}}}}}}}";
      var e = "Hola {{{{{{{{{{{{{{{{{{{0}}}}}}}}}}}}}}}}}}}";

       test
        .value(a.format(['tu']))
          .is('Hola [tu]')
        .value(b.format(['tu']))
          .is('Hola tutututututututututututututututututututu')
        .value(c.format(['tu']))
          .is('Hola {{{{{{{{{{{tu')
        .value(d.format(['tu']))
          .is('Hola tu}}}}}}}}}}}}}}}}}')
        .value(d.format(['tu']))
          .is('Hola tu}}}}}}}}}}}}}}}}}')
    })    
  })
});