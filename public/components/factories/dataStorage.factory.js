(() => {
  'use strict';
  angular
    .module('rankInn')
    .factory('dataStorageFactory', dataStorageFactory);

  dataStorageFactory.$inject = ['$q', '$log', '$http'];

  function dataStorageFactory($q, $log, $http) {

    const localAPI = {
      getUsersData: _getUsersData,
      setUserData: _setUserData,
      getReviewsData: _getReviewsData,
      setReviewData: _setReviewData,
      getHotelData: _getHotelData,
      setHotelData: _setHotelData,
      setSession: _setSession,
      closeSession: _closeSession,
      getSession: _getSession
    };
    return localAPI;

    /**
     * Funcion que obtiene los datos de los usuarios del back end y los retorna
     */
    function _getUsersData() {
      let listaUsuarios = [];

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/get_all_users',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      peticion.done((usuarios) => {
        console.log('Datos que vienen desde la base de datos')
        console.log(usuarios);
        listaUsuarios = usuarios;
      });
      peticion.fail(() => {
        listaUsuarios = [];
        console.log('Ocurrió un error');
      });

      return listaUsuarios;
    }

    function _setUserData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'cedula': data.cedula,
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'fechaNacimiento': data.fechaNacimiento,
          'correoElectronico': data.correoElectronico,
          'contrasenna': data.contrasenna,
          'provincia': data.provincia,
          'canton': data.canton,
          'distrito': data.distrito,
          'photo': data.photo,
          'tipousuario': data.tipousuario,
          'reviews': data.reviews
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    function _updateUserData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/update_users',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'cedula': data.cedula,
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'fechaNacimiento': data.fechaNacimiento,
          'correoElectronico': data.correoElectronico,
          'contrasenna': data.contrasenna,
          'provincia': data.provincia,
          'canton': data.canton,
          'distrito': data.distrito,
          'photo': data.photo,
          'tipousuario': data.tipousuario,
          'reviews': data.reviews
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    /**
     * Funcion que obtiene los datos de las evaluaciones del back end y los retorna
     * @param {Objeto Review} pobjreview
     */
    function _getReviewsData(pobjreview) {
      let listaReviews = [];

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/get_all_reviews',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

        }
      });

      peticion.done((datos) => {
        listaReviews = datos;
        console.log('Petición realizada con éxito');
      });
      peticion.fail(() => {
        listaReviews = [];
        console.log('Ocurrió un error');
      });

      return listaReviews;
    }

    /**
     * Esta funcion envia como peticion los datos de la evaluación para ser guardados en la base de datos
     * @param {Objeto de tipo review} pnuevoreview 
     */
    function _setReviewData(pnuevoreview) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_review',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          modelo: pnuevoreview.modelo,
          matricula: pnuevoreview.matricula,
          marca: pnuevoreview.marca,
          image: pnuevoreview.image,
          idCliente: pnuevoreview.idCliente
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    /**
     * Función que almacena las credenciales dentro del session Storage
     * @param {Credenciales} value 
     */
    function _setSession(value) {
      let response = true;
      sessionStorage.setItem('session', JSON.stringify(value));
      return response;
    }

    /**
     * Función que elimina los datos de la sesión activa
     */
    function _closeSession() {
      let response = true;
      sessionStorage.removeItem('session');
      return response;
    };

    /**
     * Función que retorna los datos almacenados dentro del sessionStorage
     */
    function _getSession() {
      let sessionActive = JSON.parse(sessionStorage.getItem('session'));

      return sessionActive;
    }


        /**
     * Funcion que obtiene los datos de los hoteles del back end y los retorna
     */
    function _getHotelData() {
      let listaHoteles = [];

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/get_all_hotels',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });

      peticion.done((hoteles) => {
        console.log('Datos que vienen desde la base de datos')
        console.log(hoteles);
        listaHoteles = hoteles;
      });
      peticion.fail(() => {
        listaHoteles = [];
        console.log('Ocurrió un error');
      });

      return listaHoteles;
    }

    function _setHotelData(data) {
      let response;

      let peticion = $.ajax({
        url: 'http://localhost:4000/api/save_hotel',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'nombre' : data.nombre,
          'photo' : data.photo,
          'position' : data.position,
          'provincia' : data.provincia,
          'canton' : data.canton,
          'distrito' : data.distrito,
          'direccionExacta' : data.direccionExacta,
          'telServicioCliente' : data.telServicioCliente,
          'telReservaciones' : data.telReservaciones,
          'correoElectronico' : data.correoElectronico
        }
      });

      peticion.done((datos) => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      peticion.fail((error) => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

  }
})();