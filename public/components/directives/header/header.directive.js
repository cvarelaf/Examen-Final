(() => {
  'use strict';
  angular
  .module('rankInn')
  .directive('navegacionPrincipal', navegacionPrincipal);
  
  function navegacionPrincipal(){
    const navegacion = {
      templateUrl: '/components/directives/header/header.view.html',
      restrict: 'EA' //E = Etiqueta, A = Atributo, C = Comentario, M.
    };

    return navegacion;
  }
})();