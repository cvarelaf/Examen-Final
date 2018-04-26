(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('verPerfilController', verPerfilController);

  verPerfilController.$inject = ['$http','$stateParams', '$state','servicioHoteles',]

  function verPerfilController($http, $stateParams, $state, servicioHoteles){
    let vm = this;
    vm.hotelData = {};

    let hotelParams = JSON.parse($stateParams.objTempUser);

    vm.hotelData = hotelParams;
  };
})();