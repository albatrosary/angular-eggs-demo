(function() {
  'use strict';

  angular.module('demo.mock.service.utils', [])
    .factory('UtilsService', UtilsService);

  function UtilsService() {

    var mockData = {
      $valid: true
    };

    var someSpy = jasmine.createSpy().and.returnValue({
      then: function(cb) {
        cb(mockData);
        return {
          catch: function() {
            /* Default Case Not Exeption; */
          }
        };
      }
    });

    return {
      some: someSpy,
      mockData: mockData
    };
  }

})();
