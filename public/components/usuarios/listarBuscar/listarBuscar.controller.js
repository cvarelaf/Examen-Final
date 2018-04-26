(() => {
  angular
  .module('rankInn')
  .controller('listarBuscarUsuariosController', listarBuscarUsuariosController);

  listarBuscarUsuariosController.$inject = ['$stateParams', '$state','servicioUsuarios'];

  function listarBuscarUsuariosController($stateParams, $state, servicioUsuarios){
    const vm = this;

    vm.listaUsuarios = listarUsuarios();
    listarUsuarios();

    function listarUsuarios(){
      vm.listaUsuarios = servicioUsuarios.getUsuarios();
    }

    vm.modificar = (pUsuario) => {
      console.log('Usuario Seleccionado');
      console.log(pUsuario);
      $state.go('main.editarUsuarios', { objTempUser: JSON.stringify(pUsuario) })
    }
  }
})();