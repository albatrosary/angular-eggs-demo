(function(){
  'use strict';

  describe('Controller: AboutController', function () {

    beforeEach(module('demo.about'));
    beforeEach(module('demo.mock.service.gruntfiles'));

    var AboutController;

    beforeEach(inject(function ($controller) {
      AboutController = $controller('AboutController');
    }));

    describe('AboutController',function(){
      it('Get Grunt List', function () {
        AboutController.activate();
        expect(AboutController.list[0].name).toEqual('connect-history-api-fallback');
      });
    });
  });
})();