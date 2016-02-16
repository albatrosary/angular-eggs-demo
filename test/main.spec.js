(function() {
  'use strict';

  describe('Controller: AppController', function () {

    beforeEach(module('Sample'));
    beforeEach(module('ngComponentRouter'));

    var AppController;

    beforeEach(inject(function ($controller) {
      AppController = $controller('AppController');
    }));
  });
})();
