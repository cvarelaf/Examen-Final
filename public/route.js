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
        url: '/registerCar',
        templateUrl: './components/reviews/registrarReviews/registroReviews.view.html',
        data:{
          pageTitle: 'Registrar review | Rank Inn'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/reviews/registrarReviews/registroReviews.controller.js');
          }]
        },
        controller: 'registerCarController',
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
        controller: 'listCarController',
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
      });

      $urlRouterProvider.otherwise('/');
  };
})();