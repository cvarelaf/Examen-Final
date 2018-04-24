(() => {
  'use strict';
  angular
  .module('rankInn')
  .controller('registerHotelController', registerHotelController);

  registerHotelController.$inject = ['$http','imageUploadService', 'servicioHoteles', 'Upload','dataStorageFactory'];

  function registerHotelController($http, imageUploadService, servicioHoteles, Upload, dataStorageFactory){
    const vm = this;

    vm.nuevoHotel = {};
    vm.listaHoteles = listarHoteles();
    listarHoteles();

    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then( (success) => {
      vm.provincias = success.data;
    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pidProvincia) => {
      vm.cantones = $http({
        method: 'GET',
        url: './sources/data/cantones.json'
      }).then((success) => {
        let cantones = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidProvincia == success.data[i].idProvincia) {
            cantones.push(success.data[i]);
          }
        }
        vm.cantones = cantones;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.rellenarDistrito = (pidCanton) => {
      vm.distritos = $http({
        method: 'GET',
        url: './sources/data/distritos.json'
      }).then((success) => {
        let distritos = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidCanton == success.data[i].idCanton) {
            distritos.push(success.data[i]);
          }
        }
        vm.distritos = distritos;
      }, (error) => {
        console.log("Ocurrió un error " + error.data);
      });
    }

    vm.cloudObj = imageUploadService.getConfiguration();

    vm.preRegistrarHotel = (pnuevoHotel) => {
      vm.cloudObj.data.file = pnuevoHotel.photo[0];
      Upload.upload(vm.cloudObj).success((data) =>{
        vm.registrarHotel(pnuevoHotel, data.url);
     });
    }

    vm.registrarHotel = (pnuevoHotel, urlImagen) => {
      let objNuevoHotel = new Hotel(pnuevoHotel.nombre,pnuevoHotel.photo,pnuevoHotel.position,pnuevoHotel.provincia,pnuevoHotel.canton,pnuevoHotel.distrito,pnuevoHotel.direccionExacta,pnuevoHotel.telServicioCliente,pnuevoHotel.telReservaciones,pnuevoHotel.correoElectronico);

      let registroExitoso = servicioHoteles.setHotel(objNuevoHotel);

      swal({
        title: "Registro exitoso",
        text: registroExitoso,
        button: "Aceptar",
      }).then((value) => {
        vm.nuevoHotel = null;
      });
    }

    function listarHoteles(){
      vm.listaHoteles = servicioHoteles.getHoteles();
    }

  }

})();