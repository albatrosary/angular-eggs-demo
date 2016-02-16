/**
 * Home Components module.
 *
 * @module Sample.components.home
 */
(function () {
  'use strict';

  angular
    .module('Sample.components.home', [])
    .component('home', {
      controller: Controller,
      templateUrl: 'components/home/home.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [];

  var ctrl;

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller() {
    console.log('Home Controller Constructor');
    ctrl = this;
    ctrl.name = 'Home';
  }

  function $canActivate() {
    console.log('Home Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    console.log('Home Controller $onInit');
    ctrl.onInit = 'Success';
  };
})();
