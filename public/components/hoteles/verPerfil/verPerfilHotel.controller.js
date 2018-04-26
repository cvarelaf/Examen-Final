(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('verPerfilController', verPerfilController);

  verPerfilController.$inject = ['$stateParams', '$state','servicioHoteles',]

  function verPerfilController($stateParams, $state, servicioHoteles){
    let vm = this;

    let hotelParams = JSON.parse($stateParams.objTempHotel);
    vm.hotelData = hotelParams;
  };
})();