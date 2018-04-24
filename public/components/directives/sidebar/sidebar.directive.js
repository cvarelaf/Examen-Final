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

      var dropdown = document.getElementsByClassName("dropdown-btn");
      var i;
  
      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
        });
      } 
      
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