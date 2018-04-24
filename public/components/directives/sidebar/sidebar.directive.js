(() => {
  'use strict';
  angular
  .module('rankInn')
  .directive('menuLateral', menuLateral);

  menuLateral.$inject = ['loginService'];

  function menuLateral(loginService){

    let sidebarController = function () {  
      let userAuth = loginService.getAuthUser();
      let vms = this;
      vms.userInfo = userAuth.getRol();
    };

      let sidebar = {
        templateUrl: '/components/directives/sidebar/sidebar.view.html',
        restrict: 'EA',
        controller: sidebarController,
        controllerAs: 'vms',
      };

    return sidebar;
  };
})();