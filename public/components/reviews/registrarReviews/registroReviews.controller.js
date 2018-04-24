(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('registerCarController', registerCarController);

  registerCarController.$inject = ['servicioUsuarios', 'loginService', 'imageUploadService', 'Upload'];

  function registerCarController(servicioUsuarios, loginService, imageUploadService, Upload){

    const vm = this;

    const userAuth = loginService.getAuthUser();

    console.log(userAuth);

    if(userAuth == undefined){
      $state.go('inicioSesion');
    }else{
      vm.usuarioActivo = userAuth.getNombre();
    }

    vm.nuevoReview = {};

    vm.cloudObj = imageUploadService.getConfiguration();

    vm.preRegistrarReview = (pnuevoReview) => {
      vm.cloudObj.data.file = pnuevoReview.photo[0];
      Upload.upload(vm.cloudObj).success((data) =>{
        vm.registrarReview(pnuevoReview, data.url);
     });
    }

    vm.registrarReview = (pnuevoreview, urlImagen) => {
      
      let objReviewNuevo = new Review(pnuevoreview.modelo, pnuevoreview.matricula, pnuevoreview.marca, urlImagen, userAuth.getcedula());

      console.log(objReviewNuevo);

      let registroExitoso = servicioUsuarios.addReview(objReviewNuevo);

      if(registroExitoso == false){
        swal({
          title: "Registro exitoso",
          text: "La evaluación se ha registrado correctamente",
          icon: "success",
          button: "Aceptar",
        });
        vm.nuevoReview = null
      }else{
        swal({
          title: "Hubo un error",
          text: "Ha ocurrido un error, inténtelo más tarde",
          icon: "error",
          button: "Aceptar",
        });
      }
    };
  }
})();