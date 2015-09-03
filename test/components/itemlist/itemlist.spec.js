(function() {
  'use strict';

  describe('Controller: ItemListController', function() {

    beforeEach(module('Sample.components.itemlist'));

    var ItemListController;

    beforeEach(inject(function($controller) {
      ItemListController = $controller('ItemListController');
    }));

    describe('ItemListController', function() {
      it('Test Case', function() {
        ItemListController.activate();
      });
    });
  });
})();
