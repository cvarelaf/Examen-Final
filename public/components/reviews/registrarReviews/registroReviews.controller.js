(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('registerReviewController', registerReviewController);

  registerReviewController.$inject = ['servicioUsuarios', 'loginService', 'imageUploadService', 'Upload','servicioHoteles'];

  function registerReviewController(servicioUsuarios, loginService, imageUploadService, Upload,servicioHoteles){

    const vm = this;
    vm.listaHoteles = servicioHoteles.getHoteles();

    console.log(vm.listaHoteles);

    const userAuth = loginService.getAuthUser();

    console.log(userAuth);

    if(userAuth == undefined){
      $state.go('inicioSesion');
    }else{
      vm.usuarioActivo = userAuth.getNombre();
    }

    vm.nuevoReview = {};

    vm.cloudObj = imageUploadService.getConfiguration();

    vm.registrarReview = (pnuevoreview, urlImagen) => {
      
      let objReviewNuevo = new Review(pnuevoreview.hotel.nombre,pnuevoreview.comida,pnuevoreview.calidadservicio,pnuevoreview.habitaciones,pnuevoreview.infraestructura,pnuevoreview.limpieza, userAuth.getcedula());

      console.log(objReviewNuevo);

      let registroExitoso = servicioUsuarios.addReview(objReviewNuevo);

      if(registroExitoso == false){
        swal({
          title: "Hubo un error",
          text: "Ha ocurrido un error, inténtelo más tarde",
          icon: "error",
          button: "Aceptar",
        });
        vm.nuevoReview = null
      }else{
        swal({
          title: "Registro exitoso",
          text: "La evaluación se ha registrado correctamente",
          icon: "success",
          button: "Aceptar",
        });
      }
    };
  }
})();