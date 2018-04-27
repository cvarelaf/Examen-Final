(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('verPerfilController', verPerfilController);

  verPerfilController.$inject = ['$stateParams', '$state','servicioHoteles',NgMap]

  function verPerfilController($stateParams, $state, servicioHoteles, NgMap){
    let vm = this;

    let hotelParams = JSON.parse($stateParams.objTempHotel);
    vm.hotelData = hotelParams;
  };
})();