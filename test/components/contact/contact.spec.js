(function(){
  'use strict';

  describe('Controller: ContactController', function () {

    beforeEach(module('demo.contact'));

    var ContactController;

    beforeEach(inject(function ($controller) {
      ContactController = $controller('ContactController');
    }));

    describe('ContactController',function(){
      it('Test Case 1', function () {
        ContactController.activate();
        expect(ContactController.case1).toEqual(20);
      });

      it('Test Case 2', function () {
        ContactController.activate();
        expect(ContactController.case2).toEqual(10);
      });
    });
  });
})();