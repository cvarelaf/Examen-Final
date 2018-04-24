(() => {
  'use strict';
  angular
    .module('rankInn')
    .service('servicioUsuarios', servicioUsuarios);

  servicioUsuarios.$inject = ['$q', '$http', 'dataStorageFactory'];

  /**
   * Función que posee todos los métodos del servicio
   * @param {*} $log
   * @param {Peticiones asincrónicas} $http
   * @param {Factorias que se encarga de ir al local Storage} dataStorageFactory 
   */
  function servicioUsuarios($q, $http, dataStorageFactory) {

    const usuariosLocal = 'usuariosLS';

    const publicAPI = {
      addUsuario: _addUsuario,
      getUsuarios: _getUsuarios,
      addReview : _addReview,
      getReviews: _getReviews,
      getReviewsPorUsuario: _getReviewsPorUsuario,
      getInfoReviews: _getInfoReviews
    };
    return publicAPI;

    /**
     * Función que registra al usuario dentro del sistema
     * @param {Objeto de tipo Usuario} pnuevoUsuario 
     */
    function _addUsuario(pnuevoUsuario) {
      let listaUsuarios = _getUsuarios(),
        registroExitoso,
        usuarioRepetido = false;

      for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].getcedula() == pnuevoUsuario.getcedula()) {
          usuarioRepetido = true;
        }
      }

      if (usuarioRepetido === false) {
        registroExitoso = dataStorageFactory.setUserData(pnuevoUsuario);
      } else {
        registroExitoso = false;
      }

      return registroExitoso;
    }

    /**
     * Función que retorna todos los usuarios registrados dentro del sistema
     */
    function _getUsuarios() {
      let listaUsuarios = [],
          listaUsuariosBD = dataStorageFactory.getUsersData();

      listaUsuariosBD.forEach(obj => {
        let tempDate = new Date(obj.fechaNacimiento),
          objUsuarios = new Cliente(obj.cedula, obj.primerNombre, obj.segundoNombre, obj.primerApellido, obj.segundoApellido, tempDate, obj.correoElectronico, obj.contrasenna, obj.provincia, obj.canton, obj.distrito, obj.photo, obj.tipousuario);

        objUsuarios.setReviews(obj.reviews);

        listaUsuarios.push(objUsuarios);
      });

      console.log('Datos de la BD convertidos en clases');
      console.log(listaUsuarios);

      return listaUsuarios;
    }

    /**
     * Función que retorna todos las evaluaciones
     */
    function _getReviews(preview) {
      let listaReviews = [],
        listaReviewsBD = dataStorageFactory.getReviewsData();

      listaReviewsBD.forEach(obj => {
        let objReview = new Review(obj.modelo, obj.matricula, obj.marca, obj.image, obj.idCliente);

        listaReviews.push(objReview);
      });

      console.log(listaReviews);
      return listaReviews;
    }

    /**
     * Función que registra la evaluación dentro del usuario activo
     * @param {Cédula del usuario activo} pidUsuarioActivo 
     * @param {Objeto de tipo review} preview 
     */
    function _addReview(preview) {
      let listaReviews = _getReviews(),
          listaUsuarios = _getUsuarios(),
          reviewRepetido = false,
          registroValido;

      for(let i = 0; i < listaReviews.length; i++){
        if(listaReviews[i].getmatricula() == preview.getmatricula()){
          reviewRepetido = true;
        }
      }

      if (reviewRepetido == false) {
        for(let i = 0; i < listaUsuarios.length; i++){
          if(listaUsuarios[i].getcedula() == preview.getCedulaDuenno()){
            listaUsuarios[i].agregarReview(preview.getmatricula());
          }
        }
        registroValido = dataStorageFactory.setReviewData(preview);
      } else {
        registroValido = false;
      }

      return registroValido;
    }

    /**
     * Función que recibe el número de cédula del usuario activo y retorna las evaluaciones registrados para ese usuario
     * @param {Cédula del usuario activo} pidUsuarioActivo 
     */
    function _getReviewsPorUsuario(pidUsuarioActivo) {
      let listaAllReviews = _getReviews(),
        listaReviews = [];

      for (let i = 0; i < listaAllReviews.length; i++) {
        if (pidUsuarioActivo == listaAllReviews[i].getCedulaDuenno()) {
          listaReviews.push(listaAllReviews[i]);
        }
      }
      return listaReviews;
    }

    /**
     * Función que obtiene los datos de una evaluación y los retorno
     * @param {Cédula del usuario activo} pidUsuarioActivo 
     * @param {Matricula del review} previewid 
     */
    function _getInfoReviews(pidUsuarioActivo, previewid) {
      let listaReviewsPorUsuario = _getReviewsPorUsuario(pidUsuarioActivo),
        reviewActivo;

      for (let i = 0; i < listaReviewsPorUsuario.length; i++) {
        if (listaReviewsPorUsuario[i].getmatricula() == previewid) {
          reviewActivo = listaReviewsPorUsuario[i];
        }
      }

      return reviewActivo;
    }

  }
})();