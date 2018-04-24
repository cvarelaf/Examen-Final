(() => {
  'use strict';
  angular
    .module('rankInn')
    .service('servicioHoteles', servicioHoteles);

  servicioHoteles.$inject = ['$q', '$http', 'dataStorageFactory'];

  function servicioHoteles($q, $http, dataStorageFactory) {

    const hotelesLocal = 'hotelesLS';

    const publicAPI = {
      setHotel : _setHotel,
      getHoteles : _getHoteles
    };
    return publicAPI;

    /**
     * Función que registra al hotel dentro del sistema
     * @param {Objeto de tipo Hotel} pnuevoHotel 
     */
    function _setHotel(pnuevoHotel) {
      let listaHoteles = _getHoteles();
      let registroExitoso = dataStorageFactory.setHotelData(pnuevoHotel);
      return registroExitoso;
    }

    /**
     * Función que retorna todos los hoteles registrados dentro del sistema
     */
    function _getHoteles() {
      let listaHoteles = [],
          listaHotelesBD = dataStorageFactory.getHotelData();

      listaHotelesBD.forEach(obj => {
        let objHoteles = new Hotel(obj.nombre, obj.photo, obj.position, obj.provincia, obj.canton, obj.distrito, obj.direccionExacta, obj.telServicioCliente, obj.telReservaciones, obj.correoElectronico);

        listaHoteles.push(objHoteles);
        console.log('Datos de la BD convertidos en clases');
        console.log(objHoteles);
      })

      return listaHoteles;
    }


  }
})();