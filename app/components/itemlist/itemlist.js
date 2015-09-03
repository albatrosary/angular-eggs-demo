/**
 * ItemList Components module.
 *
 * @module Sample.components.itemlist
 */
(function () {
  'use strict';

  angular
    .module('Sample.components.itemlist', [])
    .controller('ItemListController', ItemListController);

  ItemListController.$inject = [];

  /**
   * ItemListController
   *
   * @class ItemListController
   * @constructor
   */
  function ItemListController() {
    console.log('ItemListController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  ItemListController.prototype.activate = function() {
    console.log('ItemListController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
