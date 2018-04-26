(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('verPerfilController', verPerfilController);

  verPerfilController.$inject = ['servicioHoteles','$stateParams', '$state']

  function verPerfilController($http, $stateParams, $state, servicioHoteles){
    let hotelParams = JSON.parse($stateParams.objTempUser);
    vm.listaHoteles = servicioHoteles.getInfoHoteles(hotelParams);
  };
})();