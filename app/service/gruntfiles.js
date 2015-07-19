(function () {
  'use strict';

  angular
    .module('demo.service.gruntfiles', [
      'ngResource'
    ])
    .factory('GruntfilesService', GruntfilesService);

  GruntfilesService.$inject = ['$resource'];

  /**
   *
   * @class GruntfilesService
   * @constructor
   */
  function GruntfilesService($resource) {

    var gruntfiles = $resource('/api/gruntfiles',
      {

        /**
         * @memberof RegisterService
         */
        query:  {
          method:'GET',
          isArray: true,
          transformResponse : function (data) {
            return angular.fromJson(data);
          }
        }
      }
    );

    return gruntfiles;
  }

})();
