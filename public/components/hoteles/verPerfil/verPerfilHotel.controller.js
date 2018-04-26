(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('verPerfilController', verPerfilController);

  verPerfilController.$inject = ['$http','servicioHoteles','$stateParams', '$state']

  function verPerfilController($http, $stateParams, $state, servicioHoteles){
    vm.listaHoteles = JSON.parse($stateParams.objTempHotel);
  };
})();