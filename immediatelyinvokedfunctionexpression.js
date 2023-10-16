//--------------------------------------
(function () {
    console.log("A cozy nest is ready");
  })();
//--------------------------------------
/* Uma expressão de função imediatamente invocada (IIFE) é frequentemente usada para agrupar funcionalidades 
relacionadas em um único objeto ou módulo. Por exemplo, um desafio anterior definiu dois mixins:
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
} //
Podemos agrupar esses mixins em um módulo da seguinte forma:
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
Observe que você tem uma expressão de função invocada imediatamente (IIFE) que retorna um objeto motionModule. 
Este objeto retornado contém todos os comportamentos do mixin como propriedades do objeto. 
A vantagem do padrão de módulo é que todos os comportamentos de movimento podem ser 
empacotados em um único objeto que pode então ser usado por outras partes do seu código. Aqui está um exemplo usando-o:
motionModule.glideMixin(duck);
duck.glide();*/
//--------------------------------------
let funModule = (function (){
    return{
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
        };
    },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
        };
    }
}})();