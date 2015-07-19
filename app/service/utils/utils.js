(function () {
  'use strict';

  angular
    .module('demo.service.utils', [])
    .factory('UtilsService', UtilsService);

  UtilsService.$inject = [];

  /**
   *
   * @class UtilsService
   * @constructor
   */
  function UtilsService() {

    var utilsService = {
      someMethod: function () {
        return;
      }
    };

    var someProperty = {};

    return utilsService;
  }

})();
