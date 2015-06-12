/**
 * 
 *
 * @deprecated 
 * @module components/contact
 */
(function () {
  'use strict';

  angular.module('demo.contact', [])
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
})();
