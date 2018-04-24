(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('listReviewController', listReviewController);

  listReviewController.$inject = ['$http', '$state', '$stateParams', 'servicioUsuarios', 'loginService'];

  function listReviewController($http, $state, $stateParams, servicioUsuarios, loginService){

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