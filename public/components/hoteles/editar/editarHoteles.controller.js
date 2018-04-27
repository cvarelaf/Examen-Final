(() => {
  'use strict';
  angular
    .module('rankInn')
    .controller('editarHotelesController', editarHotelesController);

    editarHotelesController.$inject = ['$stateParams', '$state', '$http','imageUploadService', 'servicioHoteles', 'Upload','dataStorageFactory','NgMap'];

  function editarHotelesController($stateParams, $state, $http, imageUploadService, servicioHoteles, Upload, dataStorageFactory, NgMap) {

    let vm = this;

    vm.nuevoHotelData = {};

    let hotelParams = JSON.parse($stateParams.objTempHotel);
    let hotelSeleccionado = Object.assign(new Hotel(), hotelParams);

    vm.nuevoHotelData.nombre = hotelSeleccionado.nombre;
    vm.nuevoHotelData.photo = hotelSeleccionado.photo;
    vm.nuevoHotelData.position = hotelSeleccionado.position;
    vm.nuevoHotelData.provincia = hotelSeleccionado.provincia;
    vm.nuevoHotelData.canton = hotelSeleccionado.canton;
    vm.nuevoHotelData.distrito = hotelSeleccionado.distrito;
    vm.nuevoHotelData.direccionExacta = hotelSeleccionado.direccionExacta;
    vm.nuevoHotelData.telServicioCliente = hotelSeleccionado.telServicioCliente;
    vm.nuevoHotelData.telReservaciones = hotelSeleccionado.telReservaciones;
    vm.nuevoHotelData.correoElectronicoCs = hotelSeleccionado.correoElectronicoCs;
    vm.nuevoHotelData.correoElectronicoRsvp = hotelSeleccionado.correoElectronicoRsvp;

    console.log(vm.nuevoHotelData);

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

    vm.onDragEnd = ($event) =>{
      let position =[$event.latLng.lat(), $event.latLng.lng()];
      vm.coords=position.toString();
      console.log('Coordenadas');
      console.log(vm.coords);
    };

    vm.updateDataHotel = (pupdatehotel,urlImagen) => {
      let objNuevoHotel = new Hotel(pupdatehotel.nombre,urlImagen,vm.coords,pupdatehotel.provincia.name,pupdatehotel.canton.name,pupdatehotel.distrito.name,pupdatehotel.direccionExacta,pupdatehotel.telServicioCliente,pupdatehotel.telReservaciones,pupdatehotel.correoElectronicoCs,pupdatehotel.correoElectronicoRsvp);

      console.log('Prueba Cambios Hotel');
      console.log(objNuevoHotel);

      let registroExitoso = servicioHoteles.updateHotel(objNuevoHotel);

      if(registroExitoso == true){
        swal({
          title: "Registro exitoso",
          text: "La edición de datos se ha registrado correctamente",
          icon: "success",
          button: "Aceptar",
        });
        vm.nuevoHotelData = null
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