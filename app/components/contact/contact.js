/**
 *
 *
 * @deprecated
 * @module components/contact
 */
(function () {
  'use strict';

  angular
    .module('demo.contact', [])
    .controller('ContactController', ContactController);

  ContactController.$inject = [];

  /**
   * ContactController
   *
   * @class ContactController
   * @constructor
   */
  function ContactController() {
    console.log('ContactController Constructor');
  }

  /**
   * Public method, assigned to prototype
   */
  ContactController.prototype.activate = function () {
    vm = this;
    vm.case1 = 20;
    someMethod();
  };

  /**
   * Static property
   */

  /**
   * Static method, assigned to class
   */

  /**
   * Private property
   */

  var vm;

  /**
   * Private Method
   */
  var someMethod = function () {
    vm.case2 = 10;
  };
})();
