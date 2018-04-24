(() => {
  'use strict';
  angular
  .module('rankInn')
  .service('imageUploadService', imageUploadService);

  imageUploadService.$inject = ['$http'];

  function imageUploadService($http){
    const cloudObj = {
      url:'https://api.cloudinary.com/v1_1/dlcm7xovh/image/upload',
      data:{
        upload_preset: 'Dele_Viaje',
        tags:'Any',
        context:'photo=test'
      }
    };

    const uploadAPI = {
      getConfiguration : _getConfiguration
    };
    return uploadAPI;

    function _getConfiguration() {
      return cloudObj;
    }
  };
})();