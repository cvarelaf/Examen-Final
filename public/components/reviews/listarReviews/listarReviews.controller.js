(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('listCarController', listCarController);

  listCarController.$inject = ['$http', '$state', '$stateParams', 'servicioUsuarios', 'loginService'];

  function listCarController($http, $state, $stateParams, servicioUsuarios, loginService){

    const vm = this;

    const userAuth = loginService.getAuthUser();

    if(userAuth == undefined){
      $state.go('inicioSesion');
    }else{
      vm.usuarioActivo = userAuth.getNombre();
    };

    vm.listaReviews = servicioUsuarios.getReviewsPorUsuario(userAuth.getcedula());

  };
})();