/**
 * This is Sample module.
 *
 * @module Sample
 */
(function () {
  'use strict';

  angular
    .module('Sample', [
      'ngComponentRouter',
      'Sample.config',
      'Sample.components.home',
      'Sample.components.about',
      'Sample.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$inject = ['$router'];

  /**
   * AppController
   *
   * @class AppController
   * @main Sample
   * @constructor
   */
  function AppController ($router) {
    $router.config([
      {
        path: '/home',
        name:'Home',
        component: 'home',
        useAsDefault: true
      },
      {
        path: '/about',
        name:'About',
        component: 'about'
      },
      {
        path: '/contact',
        name:'Contact',
        component: 'contact'
      }
    ]);
  }
})();
