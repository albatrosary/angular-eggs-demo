/**
 * This is Sample module.
 *
 * @module Sample
 */
(function () {
  'use strict';

  angular
    .module('Sample', [
      'ngNewRouter',
      'Sample.config',
      'Sample.components.home',
      'Sample.components.about',
      'Sample.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/home'},
    {path: '/home',    component: 'home'},
    {path: '/about',   component: 'about'},
    {path: '/contact', component: 'contact'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main Sample
   * @constructor
   */
  function AppController () {}
})();
