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
  }
})();