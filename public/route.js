(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data:{
          pageTitle: 'Rank Inn'
        }
      })

      .state('registroUsuarios', {
        url: '/registerUser',
        templateUrl: './components/usuarios/registroUsuarios/registroUsuarios.view.html',
        data:{
          pageTitle: 'Registro de usuarios | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/registroUsuarios/registroUsuarios.controller.js')
          }]
        },
        controller: 'registerUserController',
        controllerAs: 'vm'
      })

      .state('main.registroUsuarios', {
        url: '/registerUser',
        templateUrl: './components/usuarios/registroUsuarios/main.registroUsuarios.view.html',
        data:{
          pageTitle: 'Registro de usuarios | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/registroUsuarios/registroUsuarios.controller.js')
          }]
        },
        controller: 'registerUserController',
        controllerAs: 'vm'
      })

      .state('main.listarUsuarios', {
        url: '/viewUsers',
        templateUrl: './components/usuarios/listarBuscar/listarBuscarUsuarios.vista.html',
        data:{
          pageTitle: 'Lista de Usuarios | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/listarBuscar/listarBuscar.controller.js');
          }]
        },
        controller: 'listarBuscarUsuariosController',
        controllerAs: 'vm'
      })

      .state('main.registroHoteles', {
        url: '/registerHotel',
        templateUrl: './components/hoteles/registroHoteles/registroHoteles.view.html',
        data:{
          pageTitle: 'Registro de Hoteles | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/registroHoteles/registroHoteles.controller.js')
          }]
        },
        controller: 'registerHotelController',
        controllerAs: 'vm'
      })

      .state('main.listarHoteles', {
        url: '/viewHotels',
        templateUrl: './components/hoteles/listarBuscar/listarBuscarHoteles.vista.html',
        data:{
          pageTitle: 'Lista de Hoteles | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/listarBuscar/listarBuscarHoteles.controller.js');
          }]
        },
        controller: 'listarBuscarHotelesController',
        controllerAs: 'vm'
      })

      .state('main.editarHoteles', {
        url: '/editHotel',
        templateUrl: './components/hoteles/editar/editarHoteles.vista.html',
        data:{
          pageTitle: 'Editar Hotel | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/editar/editarHoteles.controller.js');
          }]
        },
        controller: 'editarHotelesController',
        controllerAs: 'vm'
      })

      .state('inicioSesion', {
        url: '/login',
        templateUrl: './components/inicioSesion/inicioSesion.view.html',
        data:{
          pageTitle: 'Inicio de Sesión | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/inicioSesion/inicioSesion.controller.js')
          }]
        },
        controller: 'loginController',
        controllerAs: 'vm'
      })

      .state('main', {
        url: '/main',
        templateUrl: './components/main/main.view.html',
        data:{
          pageTitle: 'Inicio | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/main/main.controller.js')
          }]
        },
        controller: 'mainController',
        controllerAs: 'vm'
      })
      
      .state('main.registroReviews', {
        url: '/registerReview',
        templateUrl: './components/reviews/registrarReviews/registroReviews.view.html',
        data:{
          pageTitle: 'Registrar review | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/reviews/registrarReviews/registroReviews.controller.js');
          }]
        },
        controller: 'registerReviewController',
        controllerAs: 'vm'
      })
      
      .state('main.listarReviews', {
        url: '/viewReviews',
        templateUrl: './components/reviews/listarReviews/listarReviews.view.html',
        data:{
          pageTitle: 'Lista de reviews | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/reviews/listarReviews/listarReviews.controller.js');
          }]
        },
        controller: 'listReviewController',
        controllerAs: 'vm'
      })

      .state('main.verPerfil', {
        url: '/viewProfile',
        templateUrl: './components/usuarios/verPerfil/verPerfil.view.html',
        data:{
          pageTitle: 'Reviews | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/verPerfil/verPerfil.controller.js');
          }]
        },
        controller: 'verPerfilController',
        controllerAs: 'vm'
      })

      .state('main.verPerfilHotel', {
        url: '/viewProfileHotel',
        templateUrl: './components/hoteles/verPerfil/verPerfilHotel.view.html',
        data:{
          pageTitle: 'Reviews | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/verPerfil/verPerfilHotel.controller.js');
          }]
        },
        controller: 'verPerfilController',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/');
  };
})();