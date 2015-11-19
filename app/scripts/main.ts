/**
 * This is SampleApp module.
 *
 * @module SampleApp
 */
 module main {
   'use strict';

  export class AppController {
    constructor () {

    }

    static $inject = [];

    static $routeConfig = [
      {path: '/',       redirectTo: '/home'},
      {path: '/home',    component: 'home'},
      {path: '/about',   component: 'about'},
      {path: '/contact', component: 'contact'}
    ];
  }

  angular
    .module('SampleApp', [
      'ngNewRouter',
      'SampleApp.config',
      'SampleApp.components.home',
      'SampleApp.components.about',
      'SampleApp.components.contact'
    ])
    .controller('AppController', AppController);
}
