(() => {
  angular
  .module('rankInn')
  .controller('listarBuscarHotelesController', listarBuscarHotelesController);

  listarBuscarHotelesController.$inject = ['$stateParams', '$state','servicioHoteles'];

  function listarBuscarHotelesController($stateParams, $state, servicioHoteles){
    const vm = this;

    vm.listaHoteles = listarHoteles();
    listarHoteles();

    function listarHoteles(){
      vm.listaHoteles = servicioHoteles.getHoteles();
    }

    vm.modificar = (pHotel) => {
      console.log('Hotel Seleccionado');
      console.log(pHotel);
      $state.go('main.editarHoteles', { objTempHotel: JSON.stringify(pHotel) })
    }

    vm.verPerfil = (pHotel) => {
      console.log('Hotel Seleccionado');
      console.log(pHotel);
      $state.go('main.verPerfilHotel', { objTempHotel: JSON.stringify(pHotel) })
    }

    vm.desactivar = (pHotel) => {
      let eliminar = swal({
          title: '¿Eliminar Hotel?',
          body: 'Este será borrado de la Base de Datos',
          buttons: ['Cancelar', 'Continuar'],
          icon: 'info'
      }).then((confirmacion) => {
          if(confirmacion){
              servicioHoteles.deleteHotel(pHotel);
              $state.reload();
          }
      });
}
  }
})();