(function () {
  'use strict';
  
  /**
   * 
   * @class UtilsService
   * @constructor
   */
  function UtilsService(){
    
    var someProperty={};

    var utilsService = {
      someMethod: function () {
        return;
      }
    };
    return utilsService;
  }

  angular.module('demo.service.utils',[])
    .factory('UtilsService', UtilsService);

  UtilsService.$inject = [];
})();


