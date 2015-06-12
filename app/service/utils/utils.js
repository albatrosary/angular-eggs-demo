(function () {
  'use strict';
  
  /**
   * 
   * @class UtilsService
   * @constructor
   */
  function UtilsService(){
    
    
    var utilsService = {
      someMethod: function () {
        return;
      }
    };
    
    var someProperty={};


    return utilsService;
  }

  angular
    .module('demo.service.utils',[])
    .factory('UtilsService', UtilsService);

  UtilsService.$inject = [];
})();


